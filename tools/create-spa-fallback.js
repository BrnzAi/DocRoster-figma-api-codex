#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const outputDir = path.resolve(__dirname, '..', 'docs');
const indexPath = path.join(outputDir, 'index.html');
const fallbackPath = path.join(outputDir, '404.html');

if (!fs.existsSync(indexPath)) {
  console.error('Unable to create 404.html: docs/index.html not found. Run the Angular build first.');
  process.exit(1);
}

try {
  fs.copyFileSync(indexPath, fallbackPath);
  console.log('SPA fallback created at docs/404.html');
} catch (error) {
  console.error('Unable to copy docs/index.html to docs/404.html', error);
  process.exit(1);
}
