# Tasks: Calculator Entry Fix & Rich Copy Summary

**Input**: Design documents from `/specs/020-calculator-entry-fix-rich-copy/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md

**Tests**: Tests are OPTIONAL. We will perform manual validation in the polish phase using quickstart.md.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Exact file paths are included in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Task initialization and shared structure updates

- [x] T001 Define and append `SummaryHandle` type contract in `src/features/tools/types.ts`
- [x] T002 Configure base exports for new contract/types in `src/features/tools/index.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core React changes in the layout hub that allow refs to be wired to the children

- [x] T003 Implement layout refs and active calculator ref access logic in `src/features/tools/components/ToolsHubLayout.tsx`
- [x] T004 Rewrite clipboard copy handler in `src/features/tools/components/ToolsHubLayout.tsx` to request summary from the active ref

---

## Phase 3: User Story 1 - Fix Duplicate React Key in Footer (Priority: P1) 🎯 MVP

**Goal**: Resolve the console duplicate-key warnings on the free tools landing page.

**Independent Test**: Scenario 1 of `quickstart.md` (no React duplicate key warnings in the browser console).

- [x] T005 [US1] Change list items React `key` from `item.href` to unique `item.label` in `src/components/Footer.tsx`

---

## Phase 4: User Story 2 - Rich Calculator Summary Copy (Priority: P2)

**Goal**: Implement `forwardRef` + `useImperativeHandle` on all calculators to return computed inputs and outputs.

**Independent Test**: Scenarios 2 to 6 of `quickstart.md`.

- [x] T006 [P] [US2] Implement summary formatting and ref exposure in `src/features/tools/components/CbmCalculator.tsx`
- [x] T007 [P] [US2] Implement summary formatting and ref exposure in `src/features/tools/components/VolumetricCalculator.tsx`
- [x] T008 [P] [US2] Implement summary formatting and ref exposure in `src/features/tools/components/LandedCostCalculator.tsx`
- [x] T009 [P] [US2] Implement summary formatting and ref exposure in `src/features/tools/components/ProfitMarginCalculator.tsx`
- [x] T010 [P] [US2] Implement summary formatting and ref exposure in `src/features/tools/components/FreightEstimator.tsx`

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Verification, build check, and lint fixes.

- [x] T011 Run TypeScript compilation check `npx tsc --noEmit` and fix type/lint errors
- [x] T012 Run full Next.js project build `npm run build` to verify there are no hydration or production build errors
- [x] T013 Manually run and verify all scenarios in `quickstart.md`
