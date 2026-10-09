# Tasks: User Journey Booking Flow, Media Assets and Homepage Localization Fixes

**Input**: Design documents from `/specs/009-user-flow-media-i18n/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Verify folders `public/images/experiences/`, `public/images/china/`, and `public/images/knowledge/` exist under workspace root

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T002 Verify grey-matter content directories exist and markdown files are parsing correctly

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Live Experience Booking Linkage (Priority: P1) 🎯 MVP

**Goal**: Link experience schedules directly to the booking form via locale-aware CTA buttons.

**Independent Test**: Navigate to `/ar/experiences/canton-fair-programs/canton-fair-business-experience`, click "احجز الآن" on a slot, and verify redirection to `/ar/booking/experience/canton-fair-business-experience?date=YYYY-MM-DD` with the date parameter.

### Implementation for User Story 1

- [x] T003 [US1] Add a "Book Now" / "احجز الآن" CTA link next to each slot in `src/app/[locale]/(experiences)/experiences/[type]/[slug]/page.tsx` forwarding the slot's `startDate` via query parameter `?date=YYYY-MM-DD`.
- [x] T004 [US1] Update the public booking forms under `src/app/[locale]/(booking)/booking/[type]/[slug]/page.tsx` or its child component to read the `date` parameter from searchParams and auto-select/pre-populate the corresponding field.

**Checkpoint**: At this point, User Story 1 is fully functional and testable independently.

---

## Phase 4: User Story 2 - Knowledge Article Lead Conversion CTA (Priority: P1)

**Goal**: Convert article readers into booking leads by embedding a premium localized CTA card.

**Independent Test**: Open `/ar/knowledge/importing/how-to-import-from-china`, scroll to the bottom, and verify a localized card invites readers to book a Sourcing Consultation.

### Implementation for User Story 2

- [x] T005 [P] [US2] Create a responsive CTA component `src/components/SourcingCTA.tsx` with dynamic dictionary props supporting dark-mode glassmorphism.
- [x] T006 [US2] Embed the `<SourcingCTA />` component at the bottom of the article page layout in `src/app/[locale]/(knowledge)/knowledge/[category]/[slug]/page.tsx`.

**Checkpoint**: At this point, User Stories 1 and 2 are both functional.

---

## Phase 5: User Story 3 - Media Assets Provisioning (Priority: P1)

**Goal**: Generate and place premium placeholder images for all experiences, cities, and articles to prevent 404 image load errors.

**Independent Test**: Verify all pages load with valid image assets and zero 404 console errors.

### Implementation for User Story 3

- [x] T007 [P] [US3] Generate and save a high-quality placeholder image for the Canton Fair trip at `public/images/experiences/canton-fair.jpg` using the `generate_image` tool.
- [x] T008 [P] [US3] Generate and save a high-quality placeholder image for consultation services at `public/images/experiences/consultation.jpg` using the `generate_image` tool.
- [x] T009 [P] [US3] Generate and save a high-quality placeholder image for corporate services at `public/images/experiences/corporate.jpg` using the `generate_image` tool.
- [x] T010 [P] [US3] Generate and save a high-quality placeholder image for Guangzhou city at `public/images/china/guangzhou.jpg` using the `generate_image` tool.
- [x] T011 [P] [US3] Generate and save a high-quality placeholder image for Yiwu city at `public/images/china/yiwu.jpg` using the `generate_image` tool.
- [x] T012 [P] [US3] Generate and save a generic importing placeholder image for articles at `public/images/knowledge/importing.jpg` using the `generate_image` tool.

**Checkpoint**: At this point, all image resources are present and verified.

---

## Phase 6: User Story 4 - Homepage Localization & Encoding Refactoring (Priority: P2)

**Goal**: Move inline hardcoded Arabic strings from the homepage file into JSON dictionaries to resolve encoding problems.

**Independent Test**: Load `/ar` and verify that the footer titles render in proper Arabic without encoding characters.

### Implementation for User Story 4

- [x] T013 [US4] Add missing footer quick links title, contact details title, certification title, and map subtitles to `src/dictionaries/en.json`.
- [x] T014 [US4] Add corresponding translations to `src/dictionaries/ar.json`.
- [x] T015 [US4] Update `src/features/home/components/HomePage.tsx` to read these values from the `dict` prop instead of hardcoded inline ternaries.

**Checkpoint**: Homepage is fully translated with zero hardcoded values.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Verification, linter compliance, and final builds.

- [x] T016 [P] Run `npm run lint` and verify zero typescript/syntax/formatting issues in modified files.
- [x] T017 Run all E2E validation scenarios defined in `specs/009-user-flow-media-i18n/quickstart.md`.
- [x] T018 Execute production build `npm run build` and verify clean compiler output.

---

## Dependencies & Execution Order

- **Setup & Foundational (Phases 1-2)**: No prerequisites.
- **User Story 1 (Phase 3)**: Independent, maps to booking flow.
- **User Story 2 (Phase 4)**: Independent.
- **User Story 3 (Phase 5)**: Can run in parallel with all tasks.
- **User Story 4 (Phase 6)**: Independent.
- **Polish (Phase 7)**: Requires all previous phases to be complete.
