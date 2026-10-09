# Tasks: Hossam AI Sourcing Assistant (Interactive Chatbot & Personal Brand SEO)

**Input**: Design documents from `/specs/030-ai-chatbot-assistant/`

## Format: `[ID] [P?] [Story] Description with file path`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (`US1`, `US2`, `US3`)

---

## Phase 1: Setup (Shared Infrastructure)

- [x] T001 Verify ai package / Vercel AI SDK installation in package.json
- [x] T002 [P] Create chat API route directory structure in src/app/api/chat/

---

## Phase 2: Foundational (Blocking Prerequisites)

- [x] T003 Create AI System Prompt builder injecting 200 FAQs & Hussam Mabrouk persona in src/lib/ai/prompts.ts

---

## Phase 3: User Story 1 - Floating AI Chatbot Widget & Conversation Engine (Priority: P1) 🎯 MVP

**Goal**: Deliver global floating AI Chatbot widget with streaming API integration, open/close animations, and Hussam Mabrouk persona.

**Independent Test**: Click floating widget on `/[locale]`, send query "كيف أستورد من الصين؟", and observe streaming AI response.

- [x] T004 [P] [US1] Create streaming API route handler with Vercel AI SDK in src/app/api/chat/route.ts
- [x] T005 [P] [US1] Build glassmorphic Floating Chat Badge button component in src/components/chat/ChatBadge.tsx
- [x] T006 [US1] Build expandable Chat Window modal component with message history in src/components/chat/ChatWindow.tsx
- [x] T007 [US1] Integrate ChatWidget component into layout in src/app/[locale]/layout.tsx

---

## Phase 4: User Story 2 - Quick Suggestion Pills & Frequently Asked Queries (Priority: P2)

**Goal**: Display interactive suggestion pills for one-click instant AI prompt submission.

**Independent Test**: Open ChatWidget, click suggestion pill "كيف أتحقق من مصنع في قوانغتشو؟", and verify instant AI prompt dispatch.

- [x] T008 [P] [US2] Create suggestion pills component with localized presets in src/components/chat/SuggestionPills.tsx
- [x] T009 [US2] Connect SuggestionPills click handlers to useChat input in src/components/chat/ChatWindow.tsx

---

## Phase 5: User Story 3 - Lead Generation & Consultation Booking Prompts (Priority: P3)

**Goal**: Render inline action buttons and lead conversion prompts within AI responses.

**Independent Test**: Ask chatbot "أريد حجز استشارة معك" and verify inline "احجز مكالمة استشارية" CTA button rendered.

- [x] T010 [P] [US3] Create inline ChatCTA action buttons component in src/components/chat/ChatCTA.tsx
- [x] T011 [US3] Add inline CTA parser to render booking links in src/components/chat/ChatWindow.tsx

---

## Phase 6: Smart Engine Upgrade & Intent Classification (Priority: P1) 🚀

- [x] T014 [P] [US1] Create Intent Classifier helper categorizing query types in src/lib/ai/intent.ts
- [x] T015 [P] [US1] Create Weighted Question-Only RAG Matcher in src/lib/ai/rag.ts
- [x] T016 [US1] Refactor chat route handler with multi-stage execution pipeline in src/app/api/chat/route.ts
- [x] T017 [US1] Verify production line query and greetings responses end-to-end

---

## Phase 7: Match Density Gate & Machinery Supplier Questionnaire (Priority: P1)

- [x] T019 [P] [US1] Add Supplier Questionnaire & Juice/Food Production Lines intent patterns in src/lib/ai/intent.ts
- [x] T020 [P] [US1] Implement Match Ratio Density Threshold (`matchRatio >= 0.50` & `minScore >= 3`) in src/lib/ai/rag.ts
- [x] T021 [US1] Add 5-Point Machinery & Juice Production Supplier Questionnaire response in src/lib/ai/rag.ts
- [x] T022 [US1] Re-order fallback execution pipeline in src/app/api/chat/route.ts to favor domain intent responses over low-density FAQ matches

---

## Phase 8: Ultimate Sourcing Knowledge Engine & Country-Specific Customs (Priority: P1) 🛡️

- [x] T024 [P] [US1] Create Comprehensive Sourcing Knowledge Engine in src/lib/ai/knowledge.ts
- [x] T025 [P] [US1] Extend Intent Classifier with SAUDI_CUSTOMS_DOCS, EGYPT_CUSTOMS_DOCS, and material patterns in src/lib/ai/intent.ts
- [x] T026 [US1] Integrate Knowledge Engine into src/lib/ai/rag.ts and src/app/api/chat/route.ts
- [x] T027 [US1] Verify Saudi customs/aluminum query, Egypt ACI query, machinery supplier inquiry, and greetings end-to-end
- [x] T028 Run TypeScript type check via npx tsc --noEmit

---

## Phase 10: Brand & Tagline SEO Optimization (Priority: P1) ✨ NEW

**Goal**: Update site footer, author repository, JSON-LD Person Schema, AI prompt, knowledge bio, and llms.txt to use the approved title and sub-headline.

**Independent Test**: Load site Footer, check `llms.txt` and Person Schema JSON-LD to confirm "حسام مبروك | مستشار التجارة الدولية والاستيراد والتوريد من الصين" is rendered.

- [ ] T029 [P] [US1] Update Footer component title and sub-headline in src/components/Footer.tsx
- [ ] T030 [P] [US1] Update Author metadata repository in src/repositories/local-fs/author.ts
- [ ] T031 [P] [US1] Update JSON-LD Person Schema data in src/lib/schema/person.ts
- [ ] T032 [P] [US1] Update AI System Prompt persona in src/lib/ai/prompts.ts and bio response in src/lib/ai/knowledge.ts
- [ ] T033 [P] [US1] Update LLM text discovery route in src/app/llms.txt/route.ts
- [ ] T034 Run TypeScript type check via npx tsc --noEmit

---

## Phase 11: Polish & Cross-Cutting Concerns

- [x] T012 [P] Validate RTL/LTR layout alignment and i18n localization in src/components/chat/ChatWindow.tsx
- [x] T013 Run TypeScript type check via npx tsc --noEmit

---

## Dependencies & Execution Order

1. **Phases 1-8** → Completed.
2. **Phase 10 (Brand & Tagline SEO Optimization)** → T029 to T033 in parallel → T034 TypeScript check.
