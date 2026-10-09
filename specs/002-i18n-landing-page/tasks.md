# Tasks: Multilingual Landing Page (i18n)

**Input**: Design documents from `/specs/002-i18n-landing-page/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/routing.md

**Tests**: Validation is performed via type checking (`npx tsc --noEmit`) and production compilation (`npm run build`).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `public/` at repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Dictionary file creation and dynamic i18n logic setup.

- [x] T001 Create Arabic dictionary file with portfolio layout copy. File: `src/dictionaries/ar.json`
- [x] T002 Create English dictionary file with portfolio layout copy. File: `src/dictionaries/en.json`
- [x] T003 [P] Implement server-side translation getter with dynamic dictionary imports. File: `src/features/i18n/get-dictionary.ts`
- [x] T004 [P] Export the dynamic dictionary public API. File: `src/features/i18n/index.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Configure path redirection middleware and routing rules before loading UI pages.

**⚠️ CRITICAL**: No user story UI work can begin until this phase is complete.

- [x] T005 Implement Edge Middleware to detect client language preference and redirect root `/` to localized path. File: `middleware.ts`

**Checkpoint**: Foundation ready - path prefixes `/ar` and `/en` are active and resolve correctly.

---

## Phase 3: User Story 1 - Multilingual Landing Page Framework (Priority: P1) 🎯 MVP

**Goal**: Verify that default visits to `/` redirect to `/ar` and render basic layout direction correctly.

**Independent Test**: Load the root address and confirm redirection to `/ar` with `dir="rtl"` in HTML inspect panel.

### Implementation for User Story 1

- [x] T006 Create localized root layout directory, write localized layout wrapper with font loaders, and delete root layout. File: `src/app/[locale]/layout.tsx`
- [x] T007 Create localized page container, resolve server dictionary, and delete root page. File: `src/app/[locale]/page.tsx`

**Checkpoint**: User Story 1 is fully functional and routing operates cleanly.

---

## Phase 4: User Story 2 - Premium Portfolio Sections Translation & Display (Priority: P1)

**Goal**: Render all structural page components in both languages with high-fidelity visual styling.

**Independent Test**: Switch language route manually and verify that all headings and paragraphs translate fully with proper fonts.

### Implementation for User Story 2

- [x] T008 [US2] Update typography classes and body resets for Cairo (Arabic) and Bricolage (English) fonts. File: `src/app/globals.css`
- [x] T009 [US2] Build translated layout structures for Hero, About, Bento grid, and Timeline page sections. File: `src/app/[locale]/page.tsx`

**Checkpoint**: Landing page portfolio sections are fully localized.

---

## Phase 5: User Story 3 - Interactive Sourcing Map & Scheduling Widget (Priority: P2)

**Goal**: Translate interactive widgets and construct a header locale switcher.

**Independent Test**: Click toggle button to shift between RTL Arabic layout and LTR English layout.

### Implementation for User Story 3

- [x] T010 [P] [US3] Create LanguageSwitcher component supporting client-side pathname routing. File: `src/components/LanguageSwitcher.tsx`
- [x] T011 [US3] Integrate LanguageSwitcher and render dynamic link titles from dictionaries. File: `src/components/Header.tsx`
- [x] T012 [P] [US3] Adapt dynamic cursor positioning transforms to handle direction changes. File: `src/components/CursorGlow.tsx`

**Checkpoint**: Interactive shared navigation layouts and visual utilities are complete.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Validate compilation and clean up warnings.

- [x] T013 Run quickstart.md validation scenarios and document results. File: `walkthrough.md`
- [x] T014 Execute final TypeScript type checks and audit build output. File: `package.json`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - starts immediately.
- **Foundational (Phase 2)**: Depends on Phase 1 dictionaries and loader logic.
- **User Stories (Phase 3+)**: All depend on Phase 2 routing configurations.
- **Polish (Phase 6)**: Depends on all user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2 - No dependencies.
- **User Story 2 (P2)**: Depends on User Story 1 page/layout structures.
- **User Story 3 (P3)**: Depends on User Story 2 styling and content.

### Parallel Opportunities

- Setup tasks T003 and T004 can run in parallel.
- Localized font configurations (T008) can run in parallel with portfolio sections translations (T009).
- LanguageSwitcher creation (T010) and CursorGlow adjustments (T012) can run in parallel.

---

## Parallel Example: User Story 3

```bash
# Start LanguageSwitcher component layout:
Task: "Create LanguageSwitcher component supporting client-side pathname routing. File: src/components/LanguageSwitcher.tsx"

# Configure visual component cursor glow:
Task: "Adapt dynamic cursor positioning transforms to handle direction changes. File: src/components/CursorGlow.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1 (Environment Validation).
4. **STOP and VALIDATE**: Verify build output and compilation.

### Incremental Delivery

1. Complete Setup + Foundational -> Project framework ready.
2. Add User Story 1 -> Validate build -> MVP verified.
3. Add User Story 2 -> Portfolio content fully translated.
4. Add User Story 3 -> Dynamic switcher active.
5. Polish.
