# Tasks: Hero Section — Personal Brand Repositioning

**Input**: Design documents from `/specs/018-hero-personal-brand-reposition/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Includes exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Verify environment and initial type system integrity

- [x] T001 [P] Verify type system baseline with `npx tsc --noEmit`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core localization data structure updates that block user story implementation

- [x] T002 Update Arabic localization keys for Hero badge, CTAs, and trustBar schema in `src/dictionaries/ar.json`
- [x] T003 [P] Update English localization keys for Hero badge, subtitle, phrases, CTAs, and trustBar schema in `src/dictionaries/en.json`

**Checkpoint**: Foundational dictionary schemas updated — UI component updates can now proceed.

---

## Phase 3: User Story 1 - First Impression: Immediate Brand Clarity (Priority: P1) 🎯 MVP

**Goal**: Within 3 seconds, visitors in both AR and EN immediately understand Hussam Mabrouk's positioning as a China Trade, Sourcing & Manufacturing Expert.

**Independent Test**: Load `/ar` and `/en`, verify positioning badge, headline rotator, subtitle, and primary/secondary CTAs.

- [x] T004 [US1] Update Hero CTA links and dictionary bindings in `src/features/home/components/HomePage.tsx`
- [x] T005 [P] [US1] Enrich portrait image accessibility alt text in `src/components/FloatingSocials.tsx`
- [x] T006 [US1] Update home page metadata title and description for AR and EN in `src/app/[locale]/(home)/page.tsx`

**Checkpoint**: User Story 1 (MVP) is fully functional and testable independently.

---

## Phase 4: User Story 2 - Bilingual Experience: Arabic RTL & English LTR (Priority: P2)

**Goal**: Ensure Hero section layout, text alignment, and CTA buttons flow cleanly in both RTL (Arabic) and LTR (English) without visual breakage.

**Independent Test**: Toggle locale between `/ar` and `/en` and verify reading order, alignment, and button placement.

- [x] T007 [P] [US2] Verify RTL and LTR text alignment and container direction in `src/features/home/components/HomePage.tsx`

**Checkpoint**: User Stories 1 and 2 are functional and verified in both locales.

---

## Phase 5: User Story 3 - Responsive Experience: Mobile & Desktop (Priority: P2)

**Goal**: Flawless responsive presentation across all device viewports from mobile (320px) to ultra-wide desktop.

**Independent Test**: Inspect Hero at 375px, 640px, 768px, 1280px viewports; verify CTA tap targets (min 44px) and element stacking order.

- [x] T008 [US3] Refine responsive padding, CTA button height, and vertical stacking order in `src/features/home/components/HomePage.tsx`

**Checkpoint**: User Stories 1, 2, and 3 are responsive and visually polished across devices.

---

## Phase 6: User Story 4 - Trust Bar: Expertise Indicators Below Hero (Priority: P3)

**Goal**: Present a compact qualitative expertise bar directly below the Hero section to reinforce positioning.

**Independent Test**: Scroll past the Hero fold to observe the Trust Bar presenting 5 expertise labels in the active locale without fake numerical statistics.

- [x] T009 [P] [US4] Create the TrustBar component in `src/features/home/components/TrustBar.tsx`
- [x] T010 [US4] Integrate TrustBar into `src/features/home/components/HomePage.tsx` immediately below the Hero section

**Checkpoint**: All user stories implemented.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Verification and final build checks

- [x] T011 Run quickstart validation suite (`npx tsc --noEmit` and `npm run build`)
