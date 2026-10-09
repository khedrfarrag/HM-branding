# Phase 0 Research: China Cities Comprehensive Encyclopedia Expansion

**Feature**: `023-china-cities-expansion`  
**Status**: Complete  

---

## Technical Context & Decisions

### Decision 1: Per-City Modular Data Architecture

- **Decision**: Split the existing monolithic `src/features/china-cities/data/cities.ts` (218 KB) into a dedicated modular folder:
  `src/features/china-cities/data/cities/` containing 24 independent TypeScript modules:
  - `guangzhou.ts`, `shenzhen.ts`, `yiwu.ts`, `foshan.ts`, `dongguan.ts`, `ningbo.ts`, `hangzhou.ts`, `shanghai.ts`, `shunde.ts`, `zhongshan.ts`, `xiamen.ts`, `quanzhou.ts`, `wenzhou.ts`, `qingdao.ts`, `linyi.ts`, `chengdu.ts`, `chongqing.ts`, `suzhou.ts`, `yongkang.ts`, `cixi.ts`, `shaoxing.ts`, `haining.ts`, `ningde.ts`, `cangzhou.ts`.
  - An `index.ts` barrel that exports `CHINA_CITIES_DATA` as an array or lookup map.
- **Rationale**:
  - A monolithic 3.5MB+ TypeScript file degrades IDE Language Server performance, causes excessive memory consumption during `tsc --noEmit`, and causes build slowness.
  - Independent files permit clean isolation, granular code reviews, and per-city lazy loading / code splitting.
- **Alternatives Considered**:
  - *Storing in Supabase database*: Rejected for this phase because static file-based data allows 100% pre-rendered SSG (Static Site Generation), zero network latency, zero Supabase API quota consumption, and instant CDN delivery on Netlify without cold starts.
  - *Large JSON file*: Rejected because TypeScript modules provide compile-time type validation, autocompletion, and prevent malformed data schemas before build.

---

### Decision 2: Trilingual Data Schema (Arabic, English, Chinese)

- **Decision**: Every entity (Market, District, Industrial Zone, Hotel, Restaurant) must carry native Chinese characters (`zh` / Pinyin where helpful) alongside Arabic (`ar`) and English (`en`).
- **Rationale**: Importers and trade travelers physically visiting China rely heavily on showing names in Chinese to taxi drivers, hotel receptionists, Didi drivers, and factory managers, as English and Arabic are rarely understood on the ground.
- **Alternatives Considered**: Arabic/English only — rejected as it reduces the practical utility of the guide during actual China business trips.

---

### Decision 3: Static Generation (SSG) & SEO Pre-rendering

- **Decision**: Retain Next.js `generateStaticParams()` for all 24 cities across `[locale] = 'ar' | 'en'`.
- **Rationale**:
  - 48 static pages (24 cities × 2 languages) are generated at build time.
  - Delivers sub-100ms TTFB via Netlify Edge CDN.
  - Full Schema.org JSON-LD generation for search engines (Google & regional engines).
- **Alternatives Considered**: SSR / dynamic on-demand rendering — rejected because commercial city profiles are informational and change predictably, making SSG the superior choice for performance, SEO, and zero hosting costs.

---

### Decision 4: Execution Strategy (Deep Pilot then Sequential Batching)

- **Decision**: Execute the expansion in structured phases:
  - **Pilot**: Establish modular directory structure and deliver a comprehensive dataset for **Shenzhen (`shenzhen.ts`)** covering all 9 districts, 8+ specialized wholesale markets, 7+ industrial clusters, 5+ major trade fairs, categorized business hotels, and verified halal dining venues.
  - **Batch 1 (Major South Hubs)**: Guangzhou, Yiwu, Foshan, Shunde, Dongguan, Zhongshan.
  - **Batch 2 (East & Central Hubs)**: Shanghai, Hangzhou, Ningbo, Suzhou, Shaoxing, Cixi, Haining, Yongkang.
  - **Batch 3 (Coastal, North & Inland Hubs)**: Xiamen, Quanzhou/Jinjiang, Wenzhou, Qingdao, Linyi, Chengdu, Chongqing, Ningde, Cangzhou.
- **Rationale**: Prevents LLM token truncation and maintains exhaustive quality across every single city without resorting to vague summaries.
