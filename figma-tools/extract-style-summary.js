import fs from 'fs';
import path from 'path';

const FIGMA_JSON = path.resolve('figma.json');

if (!fs.existsSync(FIGMA_JSON)) {
  console.error('❌ figma.json not found. Run figma-fetch.js first.');
  process.exit(1);
}

const file = JSON.parse(fs.readFileSync(FIGMA_JSON, 'utf8'));

const colorCounts = new Map();
const typographyCounts = new Map();

function toHex({ r, g, b }) {
  const toByte = (value) => Math.round((value ?? 0) * 255);
  return `#${[r, g, b].map((channel) => toByte(channel).toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}

function recordColor(fill) {
  if (!fill || fill.visible === false || fill.type !== 'SOLID') {
    return;
  }
  const key = toHex(fill.color);
  colorCounts.set(key, (colorCounts.get(key) ?? 0) + 1);
}

function recordTypography(style) {
  if (!style || !style.fontFamily) {
    return;
  }
  const key = `${style.fontFamily} / ${style.fontWeight ?? 'normal'} / ${style.fontSize ?? 'auto'}`;
  typographyCounts.set(key, (typographyCounts.get(key) ?? 0) + 1);
}

const queue = [file.document];
while (queue.length) {
  const node = queue.pop();
  recordTypography(node.style);
  (node.fills ?? []).forEach(recordColor);
  (node.children ?? []).forEach((child) => queue.push(child));
}

function topN(map, limit = 10) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([value, count]) => ({ value, count }));
}

const summary = {
  extractedAt: new Date().toISOString(),
  colors: topN(colorCounts),
  typography: topN(typographyCounts)
};

const outputPath = path.resolve('figma-style-summary.json');
fs.writeFileSync(outputPath, JSON.stringify(summary, null, 2));
console.log(`✅ Style summary created at ${outputPath}`);
