# Quickstart: Expand Industry Sectors to 30

**Feature**: `021-expand-industry-sectors` | **Date**: 2026-08-25

---

## Prerequisites

- Node.js 18+ and npm installed
- Project dependencies installed (`npm install`)
- Dev server running (`npm run dev`)

---

## Validation Scenarios

### Scenario 1: All 30 Sectors Render (English)

1. Open `http://localhost:3000/en` in the browser
2. Scroll to the **Industries** section (anchor `#industries`)
3. **Expected**: Exactly 30 sector cards are visible in a 3-column grid (on desktop)
4. **Expected**: Each card shows a unique category label (`01 / Electronics & Technology` through `30 / Pet Products & Supplies`)
5. **Expected**: Each card has a unique background image — no two cards share the same image

### Scenario 2: All 30 Sectors Render (Arabic)

1. Open `http://localhost:3000/ar` in the browser
2. Scroll to the **القطاعات** section
3. **Expected**: Exactly 30 sector cards with Arabic text
4. **Expected**: RTL layout — text aligned to the right
5. **Expected**: Same 30 background images as English version

### Scenario 3: Card Hover Interaction

1. On the Industries section, hover over any sector card
2. **Expected**: The card lifts slightly (`-translate-y-1.5`)
3. **Expected**: A gold border glow appears (`border-gold/50`)
4. **Expected**: The description text fades in below the title
5. **Expected**: The background image scales up (`scale-110`)
6. Repeat for at least 5 different cards across different categories

### Scenario 4: Responsive Grid Breakpoints

1. On the Industries section, resize the browser viewport:
   - **< 640px (mobile)**: Cards stack in 1 column
   - **640px–1023px (tablet)**: Cards display in 2 columns
   - **≥ 1024px (desktop)**: Cards display in 3 columns
2. **Expected**: No horizontal overflow, no broken layouts at any width

### Scenario 5: Category Filter Tabs

1. Above the sector grid, locate the filter tabs (All, Industrial, Energy, Food, etc.)
2. Click **"Industrial & Manufacturing"** (or **"الصناعة والتصنيع"** in Arabic)
3. **Expected**: Only sectors 01–08 are shown; other cards animate out
4. Click **"All Sectors"** (or **"جميع القطاعات"**)
5. **Expected**: All 30 sectors are shown again
6. Click each category tab and verify the correct sectors appear:
   - Industrial: 01–08 (8 sectors)
   - Energy: 09–12 (4 sectors)
   - Food: 13–16 (4 sectors)
   - Textiles: 17–20 (4 sectors)
   - Consumer: 21–25 (5 sectors)
   - Professional: 26–30 (5 sectors)

### Scenario 6: No Broken Images

1. Open browser DevTools → Network tab
2. Scroll through all 30 sector cards
3. **Expected**: Zero 404 errors for image requests
4. **Expected**: All images load from `/images/sectors/*.png`

### Scenario 7: Performance Check

1. Open browser DevTools → Performance tab
2. Record a scroll through the Industries section
3. **Expected**: No jank or frame drops during stagger animation
4. **Expected**: Images lazy-load (network requests only fire as cards enter viewport)

---

## Build Verification

```bash
# TypeScript compilation check
npx tsc --noEmit

# JSON validation (ensure dictionaries are valid JSON)
node -e "JSON.parse(require('fs').readFileSync('src/dictionaries/en.json','utf8')); console.log('en.json OK')"
node -e "JSON.parse(require('fs').readFileSync('src/dictionaries/ar.json','utf8')); console.log('ar.json OK')"
```

Both commands must exit with 0 errors.
