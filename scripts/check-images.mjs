import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src/features/china-cities/data/cities');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const urlRegex = /https:\/\/images\.unsplash\.com\/[^\s'\",]+/g;
const allUrls = new Set();
const urlToFile = new Map();

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf-8');
  const matches = content.match(urlRegex) || [];
  for (const u of matches) {
    allUrls.add(u);
    if (!urlToFile.has(u)) urlToFile.set(u, []);
    urlToFile.get(u).push(f);
  }
}

console.log(`Found ${allUrls.size} unique Unsplash URLs across ${files.length} city files.`);

async function run() {
  const broken = [];
  for (const u of allUrls) {
    try {
      const res = await fetch(u);
      if (res.status !== 200) {
        broken.push({ url: u, status: res.status, files: urlToFile.get(u) });
      }
    } catch (e) {
      broken.push({ url: u, status: 'ERROR', error: e.message, files: urlToFile.get(u) });
    }
  }

  console.log(`\n=== Found ${broken.length} BROKEN URLs ===`);
  for (const b of broken) {
    console.log(`${b.status} -> ${b.url} in [${b.files.join(', ')}]`);
  }
}

run();
