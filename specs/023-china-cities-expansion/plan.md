# Implementation Plan: China Cities Comprehensive Encyclopedia Expansion

**Branch**: `023-china-cities-expansion` | **Date**: 2026-09-13 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/023-china-cities-expansion/spec.md)

**Input**: Feature specification from `specs/023-china-cities-expansion/spec.md`

---

## Summary

Expand the China Cities Commercial Guide across all 24 commercial cities into an exhaustive, trade-grade encyclopedia. The implementation transitions the existing monolithic data structure (`cities.ts`) into a modular, per-city architecture under `src/features/china-cities/data/cities/`. Each city module is enriched with verified Chinese, English, and Arabic data covering all specialized wholesale buildings/markets, commercial districts, manufacturing clusters, trade fairs, business hotels, and halal dining venues.

---

## Technical Context

**Language/Version**: TypeScript 5.7.2, Node.js v22  
**Primary Dependencies**: Next.js 15.1 (App Router), React 19, Lucide React, Tailwind CSS v4  
**Storage**: Static TypeScript datasets compiled into SSG pages; zero runtime database round-trips for public guide pages  
**Testing**: `npm run type-check` (`tsc --noEmit`), automated Node schema validators, and Next.js build verification  
**Target Platform**: Netlify Edge / Serverless with global CDN caching  
**Project Type**: Web Application (Content & Commercial Directory)  
**Performance Goals**: Sub-100ms TTFB via Edge CDN, zero layout shifts (CLS < 0.05), instant navigation  
**Constraints**: Zero un-typed data, strict trilingual naming (Ar, En, Zh), bundle modularity without single-file bloat  
**Scale/Scope**: 24 commercial cities, 100+ wholesale markets, 80+ districts, 60+ industrial parks, 50+ trade fairs, 70+ hotels & halal restaurants  

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Strict TypeScript**: All data models adhere to strict TypeScript interfaces (`ICity`, `IWholesaleMarket`, `IDistrict`, etc.) without `any` types.
- [x] **Performance & Static Optimization**: Pages leverage `generateStaticParams()` to ensure zero network waterfalls or database bottlenecks.
- [x] **No Dead Dependencies**: No external runtime libraries required; native Next.js + React.
- [x] **Clean Architecture**: Follows feature-sliced domain structure (`src/features/china-cities/`).
- [x] **SEO & Accessibility**: Complete Schema.org JSON-LD generation and semantic HTML.

---

## Project Structure

### Documentation (this feature)

```text
specs/023-china-cities-expansion/
├── spec.md              # Feature specification
├── plan.md              # This file (Implementation Plan)
├── research.md          # Phase 0 research & architectural decisions
├── data-model.md        # Phase 1 data model & schemas
├── quickstart.md        # Phase 1 run & validation guide
├── contracts/           # Phase 1 interface contracts
│   └── city-module.contract.ts
└── checklists/
    └── requirements.md  # Quality validation checklist
```

### Source Code (repository root)

```text
src/features/china-cities/
├── components/
│   ├── CityProfileClient.tsx          # City detail page presentation
│   ├── MarketCard.tsx                 # Wholesale market display card
│   ├── ChinaCitiesHubClient.tsx       # Hub listing
│   └── ...
├── data/
│   ├── cities/                        # [NEW] Modular per-city datasets
│   │   ├── shenzhen.ts                # [NEW] Pilot exhaustive dataset
│   │   ├── guangzhou.ts               # [NEW]
│   │   ├── yiwu.ts                    # [NEW]
│   │   ├── foshan.ts                  # [NEW]
│   │   ├── ... (24 city modules)
│   │   └── index.ts                   # [NEW] Aggregator & registry
│   ├── cities.ts                      # Re-exports from cities/index.ts (backwards compatibility)
│   ├── industries.ts
│   └── markets.ts
├── types/
│   └── index.ts                       # ICity, IWholesaleMarket, IDistrict, etc.
└── utils/
    └── schemaGenerator.ts             # City JSON-LD Schema.org generator
```

---

## Implementation Phases

### Phase 1: Architectural Foundation & Pilot (Shenzhen)
1. Establish `src/features/china-cities/data/cities/` directory.
2. Construct exhaustive `shenzhen.ts` pilot module containing:
   - 8+ specialized wholesale markets (SEG, Huaqiang World, Yuanwang, Mingtong, Pacific Security, Feiyang, Shuibei Jewelry, Nanyou Fashion, Sungang Toys).
   - All 9 municipal districts with business classification.
   - 7 key industrial clusters (High-tech park, Huawei tech city, Bao'an SMT hub, Longhua Dalang fashion town, Henggang eyewear, Pingshan BYD EV park, Guangming display base).
   - 5 major trade fairs (CHTF, CIOE, Gift Fair, ITES, CMEF).
   - Business hotels across Futian CBD, Luohu, and Bao'an WECC.
   - Verified halal, Arab, and Chinese Muslim restaurants.
3. Build `src/features/china-cities/data/cities/index.ts` to combine and export `CHINA_CITIES_DATA`.
4. Validate with `npm run type-check`.

### Phase 2: South China Trade Powerhouses
Extract and expand:
- `guangzhou.ts` (Apparel, textiles, watches, leather goods, Canton Fair complexes, Yuexiu/Haizhu/Panyu/Baiyun/Liwan).
- `yiwu.ts` (International Trade City Districts 1-5, Huangyuan clothing, production zones, Arab trade quarters).
- `foshan.ts` & `shunde.ts` (Lecong furniture, Louvre, ceramics city, Beijiao Midea appliance cluster).
- `dongguan.ts` (Humen fashion, Chang'an molds/hardware, Songshan Lake tech).
- `zhongshan.ts` (Guzhen lighting, Xiaolan hardware).

### Phase 3: East & Central China Hubs
Extract and expand:
- `shanghai.ts`, `hangzhou.ts`, `ningbo.ts`, `suzhou.ts`, `shaoxing.ts` (Keqiao textiles), `cixi.ts`, `haining.ts` (leather), `yongkang.ts` (hardware & doors).

### Phase 4: Coastal, North & Inland Hubs
Extract and expand:
- `xiamen.ts`, `quanzhou.ts` (Jinjiang footwear & sportswear), `wenzhou.ts`, `qingdao.ts`, `linyi.ts`, `chengdu.ts`, `chongqing.ts`, `ningde.ts` (CATL EV batteries), `cangzhou.ts` (steel pipes & packaging).

### Phase 5: Verification, Clean Build & Edge Testing
- Run complete `npm run type-check` across all modules.
- Run `npm run build` to verify all 48 static pages build cleanly.
- Verify zero runtime regressions.
