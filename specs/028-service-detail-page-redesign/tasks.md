# Tasks: Redesign Service Detail Page UI & UX

**Input**: Design documents from `/specs/028-service-detail-page-redesign/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

- [X] T001 Verify lucide-react and framer-motion dependencies in package.json
- [X] T002 [P] Confirm service repository data structure in src/repositories/local-fs/services.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

- [X] T003 Verify type definitions for Service and SuccessStory in src/domains/services/entities.ts

---

## Phase 3: User Story 1 - Luxury Visual Header & Glassmorphic Hero Container (Priority: P1) 🎯 MVP

**Goal**: Transform the service detail page top section with luxury glassmorphic backdrop glow, badge, gradient typography, and description styling.

**Independent Test**: Navigate to `/[locale]/services/sourcing` and inspect ambient glow, verified badge, and gradient headline.

- [X] T004 [P] [US1] Create glassmorphic container and ambient background glow layout in src/app/[locale]/(marketing)/services/[slug]/page.tsx
- [X] T005 [P] [US1] Add verified service pill badge with pulsing icon in src/app/[locale]/(marketing)/services/[slug]/page.tsx
- [X] T006 [US1] Implement gradient title typography and icon-highlighted full description card in src/app/[locale]/(marketing)/services/[slug]/page.tsx

---

## Phase 4: User Story 2 - Interactive Connected Process Timeline (Priority: P1)

**Goal**: Render service process steps as an interactive vertical connected timeline with step numbers and hover animations.

**Independent Test**: Scroll to "مراحل تنفيذ الخدمة" on `/[locale]/services/sourcing` and verify step connection line and hover interactions.

- [X] T007 [P] [US2] Implement vertical connected timeline container with dashed border line in src/app/[locale]/(marketing)/services/[slug]/page.tsx
- [X] T008 [US2] Render numbered glowing step badges and hover interaction states in src/app/[locale]/(marketing)/services/[slug]/page.tsx

---

## Phase 5: User Story 3 - Social Proof & High-Converting Action CTAs (Priority: P1)

**Goal**: Display associated case study social proof cards and add prominent Consultation Booking and WhatsApp CTA buttons.

**Independent Test**: Verify case study result card and click "Book Consultation" / "WhatsApp Inquiry" CTA buttons at the bottom of `/[locale]/services/sourcing`.

- [X] T009 [P] [US3] Query and render social proof case study snippet from service repository in src/app/[locale]/(marketing)/services/[slug]/page.tsx
- [X] T010 [US3] Add Conversion CTA block with Consultation Booking and WhatsApp Inquiry buttons in src/app/[locale]/(marketing)/services/[slug]/page.tsx

---

## Phase 6: Polish & Cross-Cutting Concerns

- [X] T011 [P] Validate bi-directional i18n alignment and RTL/LTR layout flipping in src/app/[locale]/(marketing)/services/[slug]/page.tsx
- [X] T012 Run type checking and static build verification via npm run type-check

---

## Dependencies & Execution Order

1. **Phase 1 (Setup)** → Can run immediately.
2. **Phase 2 (Foundational)** → BLOCKS user stories.
3. **Phase 3 (User Story 1 - MVP)** → Unlocks hero presentation.
4. **Phase 4 (User Story 2)** → Unlocks interactive process timeline.
5. **Phase 5 (User Story 3)** → Unlocks social proof & conversion CTAs.
6. **Phase 6 (Polish)** → Type check and validation.
