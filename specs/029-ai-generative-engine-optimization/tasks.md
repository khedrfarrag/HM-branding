# Tasks: Generative Engine Optimization (AEO / GEO) & AI Knowledge Authority

**Input**: Design documents from `/specs/029-ai-generative-engine-optimization/`

## Phase 1: Setup (Shared Infrastructure)

- [x] T001 Verify feature directory structure in specs/029-ai-generative-engine-optimization/
- [x] T002 Verify robots.ts rules allowing AI crawlers in src/app/robots.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

- [x] T003 Verify Person and Organization schema definitions in src/lib/schema/person.ts and src/lib/schema/organization.ts

---

## Phase 3: User Story 1 - AI Engine Discovery & Direct Citation (Priority: P1) 🎯 MVP

**Goal**: Deliver RAG corpus endpoints (`/llms.txt`, `/llms-full.txt`) and `FAQPage` JSON-LD schema for LLM ingestion.

**Independent Test**: Fetch `http://localhost:3000/llms-full.txt` and verify HTTP 200 plain text response containing all 200 FAQs.

- [x] T004 [P] [US1] Create dynamic /llms-full.txt route handler serving 200 FAQs in src/app/llms-full.txt/route.ts
- [x] T005 [P] [US1] Link /llms-full.txt in /llms.txt header in src/app/llms.txt/route.ts
- [x] T006 [US1] Create reusable buildFAQPageSchema generator in src/lib/schema/faq.ts
- [x] T007 [US1] Inject FAQPage JSON-LD schema into FAQ hub page in src/app/[locale]/(knowledge)/knowledge/faq/page.tsx

---

## Phase 4: User Story 2 - Trade Terminology & Glossary Entity Recognition (Priority: P2)

**Goal**: Render structured DefinedTermSet schema for international trade terms.

**Independent Test**: Inspect `<script type="application/ld+json">` on trade glossary page.

- [x] T008 [P] [US2] Verify DefinedTermSet schema formatting for trade terms in src/lib/schema/
- [x] T009 [US2] Verify trade term definitions in llms-full.txt corpus in src/app/llms-full.txt/route.ts

---

## Phase 5: Polish & Validation

- [x] T010 Run TypeScript type check via npx tsc --noEmit
