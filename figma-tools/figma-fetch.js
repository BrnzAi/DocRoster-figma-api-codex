// figma-fetch.js
import 'dotenv/config';
import fetch from 'node-fetch';
import fs from 'fs';

const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID ?? 'dk2aDwh3bHflbD25VsMSXr';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const OUTPUT_PATH = 'figma.json';
const API_BASE = 'https://api.figma.com/v1';

if (!FIGMA_TOKEN) {
  console.error('❌ FIGMA_TOKEN is missing. Add it to figma-tools/.env');
  process.exit(1);
}

async function figmaRequest(endpoint, params = {}) {
  const url = new URL(`${API_BASE}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value);
    }
  });

  const response = await fetch(url.toString(), {
    headers: {
      'X-Figma-Token': FIGMA_TOKEN
    }
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Request failed (${response.status} ${response.statusText}): ${detail}`);
  }

  return response.json();
}

function chunk(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

function normalisePaint(paint) {
  if (!paint) {
    return null;
  }

  if (paint.type === 'SOLID') {
    return {
      type: paint.type,
      color: paint.color,
      opacity: paint.opacity ?? 1
    };
  }

  return {
    type: paint.type,
    gradientHandlePositions: paint.gradientHandlePositions,
    gradientStops: paint.gradientStops,
    opacity: paint.opacity ?? 1
  };
}

async function fetchStyleTokens(styleMeta) {
  const styles = styleMeta.styles ?? [];
  if (!styles.length) {
    return [];
  }

  const nodeIds = styles.map((style) => style.node_id).filter(Boolean);
  const nodes = {};

  for (const batch of chunk(nodeIds, 50)) {
    const { nodes: batchNodes } = await figmaRequest(`/files/${FIGMA_FILE_ID}/nodes`, { ids: batch.join(',') });
    Object.assign(nodes, batchNodes ?? {});
  }

  return styles.map((style) => {
    const node = nodes[style.node_id]?.document ?? null;

    const token = {
      id: style.style_id,
      name: style.name,
      type: style.style_type,
      description: style.description ?? '',
      nodeId: style.node_id
    };

    if (!node) {
      return token;
    }

    switch (style.style_type) {
      case 'FILL': {
        const fills = (node.fills ?? []).map(normalisePaint).filter(Boolean);
        if (fills.length) {
          token.fills = fills;
        }
        break;
      }
      case 'TEXT': {
        if (node.style) {
          token.textStyle = {
            fontFamily: node.style.fontFamily,
            fontPostScriptName: node.style.fontPostScriptName,
            fontWeight: node.style.fontWeight,
            fontSize: node.style.fontSize,
            lineHeightPx: node.style.lineHeightPx,
            lineHeightPercent: node.style.lineHeightPercent,
            letterSpacing: node.style.letterSpacing,
            paragraphSpacing: node.style.paragraphSpacing,
            textCase: node.style.textCase,
            textDecoration: node.style.textDecoration
          };
        }
        break;
      }
      case 'EFFECT': {
        if (node.effects?.length) {
          token.effects = node.effects;
        }
        break;
      }
      case 'GRID': {
        if (node.layoutGrids?.length) {
          token.layoutGrids = node.layoutGrids;
        }
        break;
      }
      default:
        break;
    }

    return token;
  });
}

async function fetchFigmaData() {
  console.log('⏳ Fetching Figma file…');
  const file = await figmaRequest(`/files/${FIGMA_FILE_ID}`, { geometry: 'paths' });

  console.log('⏳ Fetching style metadata…');
  const styleMeta = await figmaRequest(`/files/${FIGMA_FILE_ID}/styles`);

  console.log('⏳ Resolving style tokens…');
  const styleTokens = await fetchStyleTokens(styleMeta.meta ?? {});

  const output = {
    fetchedAt: new Date().toISOString(),
    fileKey: FIGMA_FILE_ID,
    document: file.document,
    components: file.components,
    componentSets: file.componentSets,
    styles: file.styles,
    styleTokens,
    raw: {
      styleMeta: styleMeta.meta
    }
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
  console.log(`✅ Design data saved to ${OUTPUT_PATH}`);
  console.log(`   Styles exported: ${styleTokens.length}`);
}

fetchFigmaData().catch((error) => {
  console.error('❌ Unable to fetch Figma data');
  console.error(error.message);
  process.exit(1);
});
