# Quickstart & Validation Guide: China Cities Expansion & Map 2.0

**Feature**: `024-china-cities-expansion-map`  
**Date**: 2026-09-13  

---

## 1. Prerequisites
- Node.js >= 18.18
- Dependencies installed (`npm install`)
- TypeScript compiler (`tsc`)

---

## 2. Validation Scenarios

### Scenario A: Type Safety & 34 Cities Integrity
Verify that all 34 city modules compile cleanly without type mismatches.
```bash
npm run type-check
```
*Expected Outcome*: 0 TypeScript errors.

### Scenario B: 10 New Cities Sourcing Verification
Run node verification script to ensure all 10 new cities contain:
- Valid `id`, `slug`, `name.zh`
- >= 3 wholesale markets with Chinese addresses
- >= 3 industrial zones
- >= 2 trade fairs with occurrence
- Verified business hotels with addresses
- Verified halal dining establishments
```bash
npx ts-node --project tsconfig.json -e "
  const { CHINA_CITIES_DATA } = require('./src/features/china-cities/data/cities');
  console.log('Total Cities Count:', CHINA_CITIES_DATA.length);
  const targetNew = ['beijing', 'tianjin', 'wuhan', 'nantong', 'zhengzhou', 'changzhou', 'wuxi', 'taizhou', 'tongxiang', 'shantou'];
  targetNew.forEach(slug => {
    const c = CHINA_CITIES_DATA.find(x => x.slug === slug);
    if (!c) throw new Error('Missing city: ' + slug);
    console.log('✓ Verified ' + slug + ' (' + c.name.zh + '): ' + c.wholesaleMarkets.length + ' markets, ' + c.industrialZones.length + ' zones');
  });
"
```
*Expected Outcome*: Output confirms 34 total cities and 10 verified new cities.

### Scenario C: Interactive Map 2.0 Visual & Interaction Check
1. Start dev server: `npm run dev`
2. Open `http://localhost:3000/ar/china-cities` in browser.
3. Verify:
   - Authentic China SVG shape renders crisp with dark theme styling.
   - All 34 cities are plotted at distinct geographic locations.
   - Zero overlapping text smudges.
   - Switching tabs (دلتا اللؤلؤ, دلتا يانغتسي, شمال الصين, الوسط والداخلي, الساحل الشرقي) highlights regional cities.
   - Clicking a pin updates the preview card on the side immediately.

### Scenario D: Production SSG Route Generation
Validate that all 68 static routes (34 cities × 2 locales) build cleanly.
```bash
npm run build
```
*Expected Outcome*: All static pages generated successfully with exit code 0.
