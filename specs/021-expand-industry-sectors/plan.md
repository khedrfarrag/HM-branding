# Implementation Plan: Expand Industry Sectors to 30

**Branch**: `021-expand-industry-sectors` | **Date**: 2026-08-25 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/021-expand-industry-sectors/spec.md`

---

## Summary

Expand the Industries section on the homepage from 5 to 30 market-researched trade sectors. Changes touch three layers:
1. **Dictionary data** — add 25 new sectors (EN + AR) to the `industries.sectors` arrays in both `en.json` and `ar.json`
2. **Sector images** — generate 25 new sector background images (consistent style with existing 5) and add them to `public/images/sectors/`
3. **Component update** — refactor the `HomePage.tsx` Industries section to map sector images from a data-driven lookup instead of a hardcoded 5-item array, and add an optional category filter UI (P3)

No new packages. No new routes. No API changes. Pure content + UI update.

---

## Technical Context

- **Language/Version**: TypeScript 5.x / Next.js 15 App Router / React 19
- **Primary Dependencies**: Framer Motion (existing `StaggerReveal`/`StaggerItem`), Lucide React — no new packages
- **Storage**: Static JSON dictionaries (`src/dictionaries/en.json`, `ar.json`) — no database
- **Testing**: Manual browser verification per quickstart.md
- **Target Platform**: Web (all modern browsers)
- **Project Type**: Next.js web application — feature-first architecture
- **Performance Goals**: No degradation to LCP/CLS when rendering 30 cards; images lazy-loaded
- **Constraints**: All images under 500KB each; Tailwind CSS v4 only; no new npm packages

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status |
|---|---|
| §1 Project Philosophy — Premium brand presence | ✅ 30 sectors demonstrates broad expertise; unique images per sector |
| §4 Design Principles — Tailwind CSS v4 tokens only | ✅ All styling uses existing Tailwind classes |
| §6 Scalability — No hardcoded values | ✅ Sector images are data-driven via slug mapping, not hardcoded by index |
| §9 Dependency Policy — No new packages | ✅ Zero new dependencies |
| §10 Package Selection — Stack compliance | ✅ Uses React, Framer Motion, Next.js only |
| §11 Folder Organization — Feature-first | ✅ All changes within `src/features/home/` and `src/dictionaries/` |
| §24 Feature-First Architecture | ✅ No cross-feature imports |
| §28 Accessibility — WCAG 2.2 AA | ✅ Each card has descriptive alt text from sector title |
| §30 Core Web Vitals — LCP < 2.5s, CLS < 0.1 | ✅ Lazy loading; fixed-dimension cards prevent layout shift |
| §31 Image Rules — Next.js Image component | ⚠️ Current implementation uses raw `<img>` tags, not `next/image`. This feature will NOT refactor this (out of scope — existing pattern) but new images will be optimized |
| §34 GEO — No hardcoded strings | ✅ All text in dictionary JSON files |

---

## Proposed Changes

### Layer 0: Dictionary Data — Add 25 New Sectors

#### [MODIFY] `src/dictionaries/en.json`
- Expand the `industries.sectors` array from 5 items to 30 items
- Each sector has `{ idx, title, desc, slug, category }` structure (two new fields added)
- Add a new `industries.categories` array for filter tabs:
  ```json
  "categories": [
    { "key": "all", "label": "All Sectors" },
    { "key": "industrial", "label": "Industrial & Manufacturing" },
    { "key": "energy", "label": "Energy & Chemicals" },
    { "key": "food", "label": "Food & Agriculture" },
    { "key": "textiles", "label": "Textiles & Fashion" },
    { "key": "consumer", "label": "Consumer & Lifestyle" },
    { "key": "professional", "label": "Health, Tech & Professional" }
  ]
  ```

#### [MODIFY] `src/dictionaries/ar.json`
- Mirror the same 30-sector expansion with Arabic translations
- Add matching `industries.categories` array in Arabic

---

### Layer 1: Sector Images — 30 Unique Background Images

#### [NEW] `public/images/sectors/` — 25 new image files

Existing (keep as-is):
- `electronics.png` → Sector 01
- `agriculture.png` → Sector 13
- `textiles.png` → Sector 17
- `construction.png` → Sector 03
- `automotive.png` → Sector 04

New images to generate (25 files), named by sector slug:
- `machinery.png`, `electrical.png`, `hardware-tools.png`, `iron-steel.png`, `plastics-rubber.png`
- `solar-renewables.png`, `ev-batteries.png`, `chemicals.png`, `lighting-led.png`
- `processed-food.png`, `cold-chain.png`, `spices-tea.png`
- `apparel.png`, `footwear-leather.png`, `home-textiles.png`
- `furniture.png`, `household-appliances.png`, `gifts-decor.png`, `kitchenware.png`, `beauty-cosmetics.png`
- `medical-devices.png`, `packaging-printing.png`, `sports-recreation.png`, `office-supplies.png`, `pet-products.png`

**Image Style**: Consistent with existing 5 images — professional, cinematic, dark-toned product/industry photography suitable for overlay with dark gradient.

---

### Layer 2: Component Update — Data-Driven Image Mapping + Category Filter

#### [MODIFY] `src/features/home/components/HomePage.tsx`

**Change 1**: Replace hardcoded `sectorImages` array with a slug-based lookup map:
```typescript
const SECTOR_IMAGE_MAP: Record<string, string> = {
  "electronics": "/images/sectors/electronics.png",
  "machinery": "/images/sectors/machinery.png",
  "construction": "/images/sectors/construction.png",
  // ... all 30 entries
};
```

Each sector in the dictionary gets a `slug` field that maps to its image. The component reads `sector.slug` to look up the image path.

**Change 2** (P3): Add category filter tabs above the grid:
- Client-side `useState` for `activeCategory`
- Filter `dict.industries.sectors` by `sector.category === activeCategory`
- "All" tab shows all 30 sectors
- Tabs use the existing `btn btn-glass` styling
- Wrap filter transition with Framer Motion `AnimatePresence` for smooth enter/exit

**Change 3**: Ensure lazy loading for images:
- Add `loading="lazy"` to `<img>` tags for below-fold sectors
- The existing grid classes (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) already support any number of items

---

## Project Structure

### Documentation (this feature)

```text
specs/021-expand-industry-sectors/
├── spec.md           ✅ Created
├── plan.md           ✅ This file
├── research.md       ✅ Created
├── data-model.md     ✅ Created
├── quickstart.md     ✅ Created
└── tasks.md          ⬜ Next (/speckit-tasks)
```

### Source Code (modified files)

```text
src/
├── dictionaries/
│   ├── en.json                              [MODIFY] +25 sectors, +categories
│   └── ar.json                              [MODIFY] +25 sectors, +categories
└── features/home/
    └── components/
        └── HomePage.tsx                     [MODIFY] image map + filter UI

public/images/sectors/                       [NEW] 25 additional image files
```

**Structure Decision**: All changes stay within existing project structure. No new feature directories needed. Dictionary files handle content; existing `HomePage.tsx` handles rendering; `public/images/sectors/` holds image assets.

---

## Verification Plan

### Automated
- `npx tsc --noEmit` — must pass with 0 errors
- JSON validation: verify both `en.json` and `ar.json` are valid JSON after edits

### Manual
Execute all scenarios in [quickstart.md](quickstart.md):
1. Load `/en` homepage — Industries section shows 30 sector cards with unique images
2. Load `/ar` homepage — Industries section shows 30 sector cards in Arabic
3. Hover each card — description reveals with animation, border glows gold
4. Resize viewport — grid transitions from 1→2→3 columns correctly
5. Category filter tabs — clicking a tab filters the grid correctly
6. No broken images — all 30 sector images load without 404s
7. Performance — no visible jank when scrolling through 30 animated cards
