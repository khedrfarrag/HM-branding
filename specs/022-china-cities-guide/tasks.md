# Tasks: China Cities Guide — Phase 2 (Gap Completion)

**Input**: Design documents from `/specs/022-china-cities-guide/`

**Prerequisites**: spec.md (updated Phase 2), plan.md, data-model.md, contracts/ui-contracts.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

**Note**: Phase 1 tasks (T001–T026) and Phase 2 tasks (T100–T129) are all COMPLETE.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1–US6)
- Exact file paths included in descriptions

---

## Phase 9: Foundational Data Expansion (Blocking for US1)

**Purpose**: Expand the city dataset from 6 → 30+ cities. ALL user story tasks depend on this data being present.

- [x] T100 Expand `src/features/china-cities/data/cities.ts` — add Tier 2 batch A: Zhongshan, Shunde (Foshan District), Hangzhou, Shanghai, Xiamen, Quanzhou (each with full ICity fields)
- [x] T101 [P] Expand `src/features/china-cities/data/cities.ts` — add Tier 2 batch B: Wenzhou, Qingdao, Linyi, Chengdu, Chongqing, Suzhou (full ICity data for each)
- [x] T102 [P] Expand `src/features/china-cities/data/cities.ts` — add Tier 2 batch C: Ningde, Jinhua, Taizhou (Zhejiang), Yongkang, Cixi, Yuyao, Shaoxing/Keqiao (full ICity data)
- [x] T103 [P] Expand `src/features/china-cities/data/cities.ts` — add Tier 3 batch: Haining (leather), Jiaxing, Ruian (auto parts), Puning (apparel), Cangzhou (steel pipes)
- [x] T104 [P] Add districts data to Shenzhen entry in `src/features/china-cities/data/cities.ts` — Huaqiangbei (electronics), Futian, Longhua, Nanshan
- [x] T105 [P] Add districts data to Yiwu entry in `src/features/china-cities/data/cities.ts` — International Trade City areas (District 1-5), Futian
- [x] T106 [P] Add tradeFairs data to Shanghai, Shenzhen, Ningbo entries in `src/features/china-cities/data/cities.ts` (CIIE for Shanghai, High-Tech Fair for Shenzhen, CICGF for Ningbo)
- [x] T107 [P] Expand `src/features/china-cities/data/markets.ts` — add wholesale markets for top Tier 2 cities

---

## Phase 10: User Story 1 — Hub Enhancement for Expanded Dataset

- [x] T108 [US1] Update `src/features/china-cities/utils/citySearch.ts` — ensure product-category cross-reference works for all new industry keys
- [x] T109 [P] [US1] Update `src/features/china-cities/components/ChinaCitiesHubClient.tsx` — add "Browse by Product" category pills row and query param filtering
- [x] T110 [US1] Update `src/app/[locale]/(marketing)/china-cities/page.tsx` — verify `generateStaticParams` covers all new city slugs

---

## Phase 11: User Story 2 — Streets & Districts UI Section

- [x] T111 [US2] Add "Commercial Streets & Districts" section to `src/features/china-cities/components/CityProfileClient.tsx` — render conditionally when `city.districts` available
- [x] T112 [P] [US2] Add districts data to Foshan entry in `src/features/china-cities/data/cities.ts` — Lecong Furniture Market area, Shiwan Ceramics area
- [x] T113 [P] [US2] Add districts data to Guangzhou entry in `src/features/china-cities/data/cities.ts` — Yuexiu, Haizhu, Panyu, Baiyun

---

## Phase 12: User Story 3 — Trade Fairs UI Section

- [x] T114 [US3] Add "Trade Fairs" section to `src/features/china-cities/components/CityProfileClient.tsx` — render conditionally when `city.tradeFairs` available
- [x] T115 [P] [US3] Add tradeFairs data to Yiwu, Foshan, Ningbo, Guangzhou, Shanghai entries in `src/features/china-cities/data/cities.ts`

---

## Phase 13: User Story 4 — Product-to-City Reverse Lookup Page

- [x] T116 [US4] Create product categories page at `src/app/[locale]/(marketing)/china-cities/products/page.tsx`
- [x] T117 [P] [US4] Create `PRODUCT_CATEGORIES` constant in `src/features/china-cities/data/industries.ts`
- [x] T118 [P] [US4] Update `src/features/china-cities/components/ChinaCitiesHubClient.tsx` — support `?industry=` URL query parameter
- [x] T119 [P] [US4] Update `src/features/china-cities/components/CityProfileClient.tsx` — make industry tags clickable links to products page

---

## Phase 14: User Story 5 — All Cities Paginated Browse Page

- [x] T120 [US5] Create "All Cities" page at `src/app/[locale]/(marketing)/china-cities/all/page.tsx`
- [x] T121 [US5] Create `AllCitiesClient.tsx` in `src/features/china-cities/components/AllCitiesClient.tsx`
- [x] T122 [P] [US5] Update `src/features/china-cities/components/ChinaCitiesHubClient.tsx` — add "View All Cities" button/link

---

## Phase 15: User Story 6 — Image Gallery Section

- [x] T123 [US6] Add "Gallery" section to `src/features/china-cities/components/CityProfileClient.tsx`
- [x] T124 [P] [US6] Expand gallery arrays for top cities in `src/features/china-cities/data/cities.ts`

---

## Phase 16: Polish & Cross-Cutting Concerns

- [x] T125 Run `npx tsc --noEmit` to verify zero type errors after all data additions (COMPLETED - exit code 0)
- [x] T126 [P] Verify all 30+ city slugs are correctly handled in `generateStaticParams`
- [x] T127 [P] Audit `CityProfileClient.tsx` for section ordering
- [x] T128 [P] Add `last_updated` display to city profile footer
- [x] T129 Update `specs/022-china-cities-guide/tasks.md` to mark Phase 2 tasks as complete
