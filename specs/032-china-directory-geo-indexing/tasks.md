# Tasks: China Business Directory Granular GEO Indexing & AI Authority Expansion

**Input**: Design documents from `specs/032-china-directory-geo-indexing/`

## Checklist Format: `- [x] [ID] [P?] [Story?] Description with file path`

---

## Phase 1: Setup (Shared Infrastructure)

- [x] T001 Verify active feature directory configuration in `.specify/feature.json` and `AGENTS.md`
- [x] T002 [P] Inspect China cities dataset structure in `src/features/china-cities/data/cities/` (35+ cities)

---

## Phase 2: Foundational (Blocking Prerequisites)

- [x] T003 Build Schema.org entity attribution generator for Person `حسام مبروك` in `src/lib/schema/person.ts`
- [x] T004 [P] Create directory micro-entity schema builder for `Hotel`, `Restaurant`, `WholesaleStore`, and `CivicStructure` in `src/lib/schema/china-directory.ts`

---

## Phase 3: User Story 1 - Granular Dynamic Indexing & Canonical Routing (Priority: P1) 🎯 MVP

**Goal**: Provide deterministic, canonical URL routes for all cities, wholesale markets, industrial parks, hotels, and halal restaurants across the China Business Directory.

**Independent Test**: Navigate to `http://localhost:3000/ar/china-cities/guangzhou`, `http://localhost:3000/ar/china-cities/yiwu`, or `http://localhost:3000/ar/china-cities/foshan` and verify all sub-tabs, breadcrumbs, and detail cards render correctly.

- [x] T005 [P] [US1] Build dynamic route layout for city hubs in `src/app/[locale]/(china)/china-cities/[slug]/layout.tsx`
- [x] T006 [P] [US1] Build dynamic market index view in `src/app/[locale]/(china)/china-cities/[slug]/markets/page.tsx`
- [x] T007 [P] [US1] Build dynamic hotel & hospitality index view in `src/app/[locale]/(china)/china-cities/[slug]/hotels/page.tsx`
- [x] T008 [P] [US1] Build dynamic halal dining index view in `src/app/[locale]/(china)/china-cities/[slug]/restaurants/page.tsx`

---

## Phase 4: User Story 2 - Micro-Entity Schema.org & Entity Attribution (Priority: P1)

**Goal**: Emit valid JSON-LD schemas for all directory entries attributing verification and curation to `Person: حسام مبروك`.

**Independent Test**: Inspect page source on any city or directory route and verify `<script type="application/ld+json">` includes `"reviewedBy": { "@type": "Person", "name": "حسام مبروك" }`.

- [x] T009 [P] [US2] Inject JSON-LD micro-entity schemas into city hub pages in `src/app/[locale]/(china)/china-cities/[slug]/page.tsx`
- [x] T010 [P] [US2] Inject JSON-LD micro-entity schemas into market sub-pages in `src/app/[locale]/(china)/china-cities/[slug]/markets/page.tsx`
- [x] T011 [P] [US2] Inject JSON-LD micro-entity schemas into hotel sub-pages in `src/app/[locale]/(china)/china-cities/[slug]/hotels/page.tsx`

---

## Phase 5: User Story 3 - Full LLM Knowledge Corpus Feed & AI Integration (Priority: P1)

**Goal**: Expose all 35+ cities and 3,000+ directory entries in `/llms-full.txt` and update AI chatbot knowledge systems.

**Independent Test**: Fetch `http://localhost:3000/llms-full.txt` and verify inclusion of China cities, wholesale markets, halal dining, UN/LOCODE seaports, and IATA airports.

- [x] T012 [P] [US3] Expand LLM full text endpoint to ingest China Directory data in `src/app/llms-full.txt/route.ts`
- [x] T013 [P] [US3] Update AI System Prompt generator with China Directory metadata in `src/lib/ai/prompts.ts`
- [x] T014 [P] [US3] Integrate China Directory dataset into RAG knowledge engine in `src/lib/ai/knowledge.ts`
- [x] T015 [US3] Verify AI Chatbot retrieval for China trade and city queries in `src/lib/ai/rag.ts`

---

## Phase 6: User Story 4 - XML Sitemap Expansion & Performance Polish (Priority: P2)

**Goal**: Register all dynamic directory routes in `sitemap.ts` and verify sub-100ms client search.

**Independent Test**: Inspect `http://localhost:3000/sitemap.xml` and verify inclusion of all China directory routes.

- [x] T016 [P] [US4] Register all China directory routes dynamically in `src/app/sitemap.ts`
- [x] T017 [P] [US4] Optimize client-side search performance across 35+ cities in `src/features/china-cities/components/ChinaCitiesGuide.tsx`
- [x] T018 [US4] Run TypeScript type validation `npx tsc --noEmit` across the entire project

---

## Phase 7: Polish & Verification

- [x] T019 Run full TypeScript compilation check `npx tsc --noEmit`
- [x] T020 Execute quickstart verification scenarios from `specs/032-china-directory-geo-indexing/quickstart.md`
