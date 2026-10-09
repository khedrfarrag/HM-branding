# Implementation Plan: China Cities Expansion (10 New Cities) & Interactive Map 2.0 Overhaul

**Branch**: `024-china-cities-expansion-map` | **Date**: 2026-09-13 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/024-china-cities-expansion-map/spec.md)

**Input**: Feature specification from `specs/024-china-cities-expansion-map/spec.md`

---

## Summary

Expand the China Commercial Cities guide with **10 high-value industrial and commercial powerhouses** (Beijing, Tianjin, Wuhan, Nantong, Zhengzhou, Changzhou, Wuxi, Taizhou, Tongxiang, Shantou) with zero duplicates, capturing exhaustive Chinese ground sourcing facts (wholesale markets, manufacturing zones, trade fairs, business hotels, and verified halal dining). Simultaneously, **rebuild the interactive map component (`ChinaInteractiveMap.tsx`)** to eliminate fallback overlapping smudges, provide an authentic SVG geographic projection of China, support collision-free interactive tooltips, and offer regional industrial belt filters.

---

## Technical Context

**Language/Version**: TypeScript 5.7+ / Node.js 18+  
**Primary Dependencies**: Next.js 15.5+ (App Router, SSG `generateStaticParams`), Lucide Icons, Tailwind CSS  
**Storage**: Modular static TypeScript data files under `src/features/china-cities/data/cities/`  
**Testing**: `npm run type-check` (tsc strict mode) and `npm run build` (Next.js static site generation)  
**Target Platform**: Modern web browsers (Desktop & Mobile, responsive RTL & LTR)  
**Project Type**: Production Next.js Web Application  
**Performance Goals**: Instantaneous map interaction (<50ms state updates), zero layout shift (CLS = 0), lightweight pure SVG vector rendering without third-party tile dependencies.  
**Constraints**: Zero breaking changes to `ICity` interface or existing pages. 100% authentic Chinese ground data.

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Principle 1 (Rich Aesthetics & Premium UX)**: Map 2.0 replaces primitive polygons with an authentic, luxury dark-themed geographic visualization with glowing pins and glassmorphic tooltips. **PASSED**
- **Principle 2 (No Generic Placeholders)**: All 10 new cities must contain authentic Chinese names (`zh`), real municipal districts, real factory clusters, and real halal dining. **PASSED**
- **Principle 3 (Full Backward Compatibility)**: Aggregator pattern in `src/features/china-cities/data/cities/index.ts` re-exports all 34 cities smoothly. **PASSED**
- **Principle 4 (Zero Compile Errors)**: Strict TypeScript validation (`npm run type-check`) and static generation for all 68 bilingual paths. **PASSED**

---

## Project Structure

### Documentation (this feature)

```text
specs/024-china-cities-expansion-map/
├── plan.md              # This file
├── research.md          # Phase 0 decisions & coordinate calibration
├── data-model.md        # Phase 1 data entities & coordinate interfaces
├── quickstart.md        # Phase 1 validation scenarios
├── contracts/           # Phase 1 map interface contracts
└── tasks.md             # Phase 2 output (/speckit-tasks)
```

### Source Code Files

```text
src/features/china-cities/
├── components/
│   ├── ChinaInteractiveMap.tsx           # Overhauled Map 2.0 component with authentic SVG & Belts
│   └── map/                              # Optional map subcomponents/constants
│       └── chinaMapCoordinates.ts        # Calibrated coordinates & regional belts definition
├── data/
│   ├── cities/
│   │   ├── beijing.ts                    # [NEW] Capital tech, auto, medical, Niujie halal
│   │   ├── tianjin.ts                    # [NEW] Container port, bikes/e-bikes, carpets
│   │   ├── wuhan.ts                      # [NEW] Optics Valley, Hankou North wholesale, auto
│   │   ├── nantong.ts                    # [NEW] Dieshiqiao home textiles & bedding capital
│   │   ├── zhengzhou.ts                  # [NEW] Foxconn iPhone city, central rail/air hub
│   │   ├── changzhou.ts                  # [NEW] New energy capital (batteries, solar), SPC floors
│   │   ├── wuxi.ts                       # [NEW] Electric scooter capital (Yadea/Niu), microelectronics
│   │   ├── taizhou.ts                    # [NEW] Huangyan mold & plastic capital, water pumps
│   │   ├── tongxiang.ts                  # [NEW] Puyuan knitwear & cashmere sweater capital
│   │   ├── shantou.ts                    # [NEW] Chenghai world toy capital, seamless lingerie
│   │   └── index.ts                      # Updated registry aggregating all 34 cities
│   └── cities.ts                         # Backward compatible re-export
└── types/
    └── index.ts                          # Shared types
```

---

## Implementation Phases

### Phase 1: Interactive Map 2.0 Architecture & Coordinate Engine
- Create calibrated coordinates dataset for all 34 cities (`chinaMapCoordinates.ts`).
- Define the authentic SVG path for the China continental outline and coastal waters.
- Implement `ChinaInteractiveMap.tsx` with:
  - Industrial belt filter pills.
  - Glowing animated markers with pulse rings.
  - Floating collision-free tooltips on hover.
  - Synchronized city details card with direct CTA links.
  - Responsive RTL/LTR support.

### Phase 2: Batch 1 New Cities (Northern & Central Megahubs)
- `beijing.ts`: Zhongguancun, BAIC automotive, Xinfadi, Panjiayuan, CIFTIS & Auto China, Niujie halal dining.
- `tianjin.ts`: Northern port, Wangqingtuo bicycle/e-bike hub, Cuihuangkou carpets, Daqiuzhuang steel pipes.
- `wuhan.ts`: China Optics Valley lasers/fiber optics, Hankou North commodity city, Dongfeng automotive.
- `zhengzhou.ts`: Foxconn iPhone City, railway/air logistics, auto parts wholesale, Hui Muslim dining.

### Phase 3: Batch 2 New Cities (Yangtze Delta Specialized Capitals)
- `nantong.ts`: Dieshiqiao home textiles & bedding capital, marine shipbuilding.
- `changzhou.ts`: New energy capital (EV batteries, solar PV), industrial robotics, Henglin SPC flooring.
- `wuxi.ts`: Xishan electric scooters capital (Yadea, Niu), semiconductors, stainless steel.
- `tongxiang.ts`: Puyuan knitwear & cashmere sweater capital, chemical fibers.
- `taizhou.ts`: Huangyan precision molds & plastic capital, Wenling pumps, Jiaojiang sewing machines.

### Phase 4: Batch 3 New Cities (South China Manufacturing & Toys)
- `shantou.ts`: Chenghai world toy capital, Chaonan/Chaoyang seamless lingerie & knitwear.

### Phase 5: Registry Aggregation & Quality Verification
- Register all 10 new cities in `src/features/china-cities/data/cities/index.ts` (34 cities total).
- Verify type safety across the entire repository with `npm run type-check`.
- Verify production static build for all 68 SSG routes with `npm run build`.
