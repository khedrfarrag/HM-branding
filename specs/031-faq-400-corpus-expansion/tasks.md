# Tasks: FAQ Knowledge Base Expansion to 400 Items

**Input**: Design documents from `/specs/031-faq-400-corpus-expansion/`

## Format: `[ID] [P?] [Story] Description with file path`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (`US1`, `US2`, `US3`, `US4`)

---

## Phase 1: Setup (Shared Infrastructure)

- [x] T001 Verify `FAQItem` interface schema and exports in `src/data/faqs/types.ts`
- [x] T002 [P] Verify existing FAQ data structures in `src/data/faqs/bio.ts`, `src/data/faqs/content.ts`, `src/data/faqs/china.ts`, and `src/data/faqs/digital.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

- [x] T003 Update category counts and labels in `src/data/faqs.ts` to reflect 400 total items (100 per category)
- [x] T004 Ensure `FAQExplorer.tsx` pagination and filtering support 400 items in `src/components/FAQExplorer.tsx`

---

## Phase 3: User Story 1 - Expansion of "من هو حسام مبروك؟" to 100 Questions (Priority: P1) 🎯 MVP

**Goal**: Expand `bio.ts` with 50 new bilingual questions (IDs 51 to 100) detailing Hussam Mabrouk's 15+ years of hands-on experience, deal protection strategies, GSXT factory auditing, and executive advisory scope.

**Independent Test**: Navigate to `http://localhost:3000/ar/about/faq`, select the "من هو حسام مبروك؟" tab, and verify that 100 items are listed and searchable.

- [x] T005 [P] [US1] Author items 51 to 70 for Bio category in `src/data/faqs/bio.ts` (On-site China experience, Guangzhou/Yiwu/Shenzhen hubs, advisory vs brokerage)
- [x] T006 [P] [US1] Author items 71 to 85 for Bio category in `src/data/faqs/bio.ts` (PRC NNN agreements, GSXT factory audits, deal protection frameworks)
- [x] T007 [US1] Author items 86 to 100 for Bio category in `src/data/faqs/bio.ts` (Specialized industry sectors: machinery, production lines, building materials, case studies)
- [x] T008 [US1] Run TypeScript check `npx tsc --noEmit` to validate `bio.ts` types

---

## Phase 4: User Story 2 - Expansion of "المعرفة والمحتوى" to 100 Questions (Priority: P1)

**Goal**: Expand `content.ts` with 50 new bilingual questions (IDs 151 to 200) covering Landed Cost calculations, ROI analysis, supply chain crisis management, quality standards (ISO/CE/SASO), and real-world case studies.

**Independent Test**: Filter by "المعرفة والمحتوى" tab on the FAQ page, search for "Landed Cost" or "جودة", and verify 100 detailed advisory items.

- [x] T009 [P] [US2] Author items 151 to 165 for Content category in `src/data/faqs/content.ts` (Landed Cost calculations, ROI, pricing strategies, financial risk management)
- [x] T010 [P] [US2] Author items 166 to 180 for Content category in `src/data/faqs/content.ts` (Supply chain crisis management, shipping surges, Chinese New Year holiday planning)
- [x] T011 [US2] Author items 181 to 200 for Content category in `src/data/faqs/content.ts` (ISO/CE/SASO quality standards, negotiation culture, avoiding common importer traps)
- [x] T012 [US2] Run TypeScript check `npx tsc --noEmit` to validate `content.ts` types

---

## Phase 5: User Story 3 - Expansion of "الصين والتجارة والتوريد" to 100 Questions (Priority: P1)

**Goal**: Expand `china.ts` with 50 new bilingual questions (IDs 251 to 300) covering KSA SABER, Egypt ACI, Incoterms 2020 (FOB/CIF/DDP), PRC NNN agreements, GSXT audits, Canton Fair & Yiwu Fair strategies, and China industrial cities.

**Independent Test**: Filter by "الصين والتجارة والتوريد" tab, search for "سابر" or "FOB", and verify 100 operational sourcing items.

- [x] T013 [P] [US3] Author items 251 to 265 for China category in `src/data/faqs/china.ts` (KSA SABER compliance, PCoC/SCoC, Egypt ACI ACID system, NFE window clearance)
- [x] T014 [P] [US3] Author items 266 to 280 for China category in `src/data/faqs/china.ts` (PRC NNN non-disclosure agreements, GSXT government business license audits, Incoterms 2020)
- [x] T015 [US3] Author items 281 to 300 for China category in `src/data/faqs/china.ts` (Canton Fair & Yiwu Fair preparation guides, industrial city clusters: Foshan, Ningbo, Shenzhen)
- [x] T016 [US3] Run TypeScript check `npx tsc --noEmit` to validate `china.ts` types

---

## Phase 6: User Story 4 - Expansion of "الموقع والهوية الرقمية" to 100 Questions (Priority: P2)

**Goal**: Expand `digital.ts` with 50 new bilingual questions (IDs 351 to 400) covering Landed Cost Calculator guide, Freight Estimator guide, China Directory navigation, 1-on-1 advisory booking, AI Sourcing Assistant, and data privacy policies.

**Independent Test**: Filter by "الموقع والهوية الرقمية" tab, search for "حاسبة" or "استشارة", and verify 100 platform guidance items.

- [x] T017 [P] [US4] Author items 351 to 365 for Digital category in `src/data/faqs/digital.ts` (Interactive merchant tools guide: Landed Cost Calculator & Freight Estimator usage)
- [x] T018 [P] [US4] Author items 366 to 380 for Digital category in `src/data/faqs/digital.ts` (China Industrial Directory navigation, finding vetted suppliers, factories, and markets)
- [x] T019 [US4] Author items 381 to 400 for Digital category in `src/data/faqs/digital.ts` (1-on-1 consultation booking process, package selection, AI Assistant features, commercial privacy)
- [x] T020 [US4] Run TypeScript check `npx tsc --noEmit` to validate `digital.ts` types

---

## Phase 7: AI Engine, GEO & Schema Integration

- [x] T021 [P] Ingest all FAQ items in AI System Prompt generator in `src/lib/ai/prompts.ts`
- [x] T022 [P] Include dynamic FAQ data in Knowledge Engine RAG responses in `src/lib/ai/knowledge.ts`
- [x] T023 [P] Render dynamic FAQ corpus in LLM full text discovery endpoint in `src/app/llms-full.txt/route.ts`
- [x] T024 Generate JSON-LD `FAQPage` schema dynamically for all items in `src/lib/schema/faq.ts`

---

## Phase 8: Polish & Cross-Cutting Concerns

- [x] T025 Run full TypeScript type check via `npx tsc --noEmit` across the entire codebase
- [x] T026 Execute quickstart validation guide scenarios from `specs/031-faq-400-corpus-expansion/quickstart.md`
- [x] T027 Verify responsive UI rendering and sub-100ms search performance on mobile and desktop viewports

---

## Dependencies & Execution Order

1. **Setup & Foundational (Phases 1-2)** → ✅ Complete.
2. **Bio Story (Phase 3)** → ✅ Complete (100 items).
3. **Content Story (Phase 4)** → ✅ Complete (100 items).
4. **China Story (Phase 5)** → ✅ Complete (100 items).
5. **Digital Story (Phase 6)** → ✅ Complete (100 items).
6. **Integration & Polish (Phases 7-8)** → ✅ Complete (400 items, zero TSC errors).
