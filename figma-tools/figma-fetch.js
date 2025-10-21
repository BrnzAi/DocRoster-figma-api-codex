// figma-fetch.js
import 'dotenv/config';
import fetch from "node-fetch";
import fs from "fs";

const FIGMA_FILE_ID = "dk2aDwh3bHflbD25VsMSXr";
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;

async function fetchFigmaData() {
  const res = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_ID}`, {
    headers: {
      "X-Figma-Token": FIGMA_TOKEN,
    },
  });
  const data = await res.json();
  fs.writeFileSync("figma.json", JSON.stringify(data, null, 2));
  console.log("✅ Figma design saved to figma.json");
}

fetchFigmaData();
