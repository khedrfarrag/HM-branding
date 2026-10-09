# Tasks: Project Scaffolding & Setup

**Input**: Design documents from `/specs/001-project-scaffolding-setup/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: Tests are OPTIONAL. In this project, validation is performed via compilation, linting, and build commands.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `public/` at repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project package configuration file with Next.js 15, React 19, and Tailwind v4. File: `package.json`
- [x] T002 Initialize compiler config with strict typing rules. File: `tsconfig.json`
- [x] T003 [P] Configure ESLint linting specifications. File: `eslint.config.mjs`
- [x] T004 Install all packages using legacy peer dependencies flag. File: `package-lock.json`
- [x] T005 [P] Setup directories for fonts and assets. File: `public/fonts/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core layout files and theme setup that MUST be completed before any user story can start.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T006 Configure Tailwind CSS v4 custom color palettes, variables, and typography rules. File: `src/app/globals.css`
- [x] T007 Create the main App Router layout root template. File: `src/app/layout.tsx`
- [x] T008 [P] Create a base page view container. File: `src/app/page.tsx`
- [x] T009 Configure Next.js compiler settings. File: `next.config.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Project Environment Scaffolding (Priority: P1) 🎯 MVP

**Goal**: Verify that the Next.js 15 App Router codebase compiles and builds cleanly without warnings.

**Independent Test**: Run typescript compiler check `npx tsc --noEmit` and build compiler `npm run build` to verify zero errors.

### Implementation for User Story 1

- [x] T010 [US1] Create a mock API route handler to verify backend execution boundaries. File: `src/app/api/health/route.ts`
- [x] T011 [US1] Set up automated verification script configurations. File: `package.json`

**Checkpoint**: At this point, User Story 1 is fully functional and the workspace compiles cleanly.

---

## Phase 4: User Story 2 - Brand Styling & Theme Configuration (Priority: P1)

**Goal**: Load the custom fonts and configure custom styling variables matching the original design tokens.

**Independent Test**: Load the root page and inspect theme variables via CSS inspector.

### Implementation for User Story 2

- [x] T012 [P] [US2] Import local font files ('Bricolage Grotesque', 'Inter', 'JetBrains Mono') and load them via next/font. File: `src/app/layout.tsx`
- [x] T013 [US2] Create theme layout utility adapters for tailwind-merge. File: `src/lib/utils.ts`

**Checkpoint**: At this point, the website layout accurately renders custom fonts and colors.

---

## Phase 5: User Story 3 - Shared Layout & Interactive Foundations (Priority: P2)

**Goal**: Implement the ambient cursor glow, noise overlay, and scroll event listeners for the header layout.

**Independent Test**: Scroll past 40px to toggle navigation header glassmorphism, and verify the cursor glow moves dynamically.

### Implementation for User Story 3

- [x] T014 [P] [US3] Create CursorGlow component using hardware-accelerated transforms. File: `src/components/CursorGlow.tsx`
- [x] T015 [US3] Create Header component with scrolled navigation state listener. File: `src/components/Header.tsx`
- [x] T016 [US3] Integrate noise overlay, CursorGlow, and Header inside root layout wrapper. File: `src/app/layout.tsx`

**Checkpoint**: Interactive shared layouts are complete.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final verification, cleanups, and audit.

- [x] T017 Run quickstart.md validation scenarios and document findings. File: `walkthrough.md`
- [x] T018 Code cleanup and removal of unused dependencies. File: `package.json`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - starts immediately.
- **Foundational (Phase 2)**: Depends on Setup completion. Blocks all user stories.
- **User Stories (Phase 3+)**: All depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2 - No dependencies.
- **User Story 2 (P2)**: Can start after Phase 2 - Independent.
- **User Story 3 (P3)**: Depends on User Story 2 font/utility configurations.

### Parallel Opportunities

- Setup tasks T003 and T005 can run in parallel.
- Foundational task T008 can run in parallel with T007.
- Once Foundation is complete, User Story 1 (T010) and User Story 2 (T012) can start in parallel.

---

## Parallel Example: User Story 2

```bash
# Start local fonts loading:
Task: "Import local font files and load them via next/font. File: src/app/layout.tsx"

# Configure visual component glow:
Task: "Create CursorGlow component using hardware-accelerated transforms. File: src/components/CursorGlow.tsx"
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
3. Add User Story 2 -> Local fonts and styling configured.
4. Add User Story 3 -> Interactive mouse effects and navigation header active.
5. Polish.
