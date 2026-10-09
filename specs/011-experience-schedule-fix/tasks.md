# Tasks: Experience & Schedule Admin UX Fix

**Input**: Design documents from `/specs/011-experience-schedule-fix/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md, contracts/

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Dictionary keys and shared type extensions

- [x] T001 [P] Add `price` and `currency` optional fields to `ExperienceDate` in `src/domains/shared/value-objects.ts`
- [x] T002 [P] Add schedule dropdown and booking state dictionary keys in `src/dictionaries/ar.json`
- [x] T003 [P] Add schedule dropdown and booking state dictionary keys in `src/dictionaries/en.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Repository schedule merge — MUST complete before public detail page work

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Extract schedule fetch/merge helpers and fix `getExperienceBySlug` to merge future schedules with price/currency in `src/repositories/supabase/experiences.ts`

**Checkpoint**: Foundation ready — schedules load on detail page

---

## Phase 3: User Story 1 — Admin Links Schedule to Experience (Priority: P1)

**Goal**: Replace manual slug input with experience dropdown populated from database.

**Independent Test**: Create schedule via dropdown → schedule appears on public experience detail page.

### Implementation for User Story 1

- [x] T005 [US1] Fetch experiences via `adminGetAll()` and pass options to ScheduleManager in `src/app/admin/(protected)/dashboard/schedules/page.tsx`
- [x] T006 [US1] Replace slug text input with experience `<select>`, empty-state message, and title lookup in table in `src/features/admin/components/ScheduleManager.tsx`

**Checkpoint**: User Story 1 fully functional — zero slug mismatch

---

## Phase 4: User Story 2 — Visitor Sees Dates and Books (Priority: P1)

**Goal**: Display all schedule fields with Book Now / Closed / Full states on public detail page.

**Independent Test**: Visit detail page → see dates, capacity, price, working booking link; verify closed/full cards.

### Implementation for User Story 2

- [x] T007 [US2] Add per-schedule price, total capacity, and registration closed / fully booked states in `src/app/[locale]/(experiences)/experiences/[type]/[slug]/page.tsx`

**Checkpoint**: User Stories 1 AND 2 complete — booking conversion path works

---

## Phase 5: User Story 3 — Visitor Sees Cover Image (Priority: P2)

**Goal**: Display admin-uploaded cover image prominently on public detail page.

**Independent Test**: Upload cover via admin → visible on public detail before title.

### Implementation for User Story 3

- [x] T008 [US3] Add conditional cover hero image block before title in `src/app/[locale]/(experiences)/experiences/[type]/[slug]/page.tsx`

**Checkpoint**: Cover image displays per FR-005/006

---

## Phase 6: User Story 4 — Admin Edits Experience (Priority: P2)

**Goal**: Edit action, pre-filled form, image replace with storage cleanup.

**Independent Test**: Edit title via admin → reflected on public page within one refresh.

### Implementation for User Story 4

- [x] T009 [US4] Add `ExperienceUpdateSchema` with `EXPERIENCE_TYPES` enum validation in `src/features/admin/schemas/experience.schema.ts`
- [x] T010 [US4] Add `adminGetById` and `adminUpdate` methods in `src/repositories/supabase/experiences.ts`
- [x] T011 [US4] Add `updateExperienceAction` with image replace and rollback in `src/features/admin/actions/manage-experiences.ts`
- [x] T012 [US4] Create shared `ExperienceForm` client component in `src/features/admin/components/ExperienceForm.tsx`
- [x] T013 [US4] Refactor create page to use `ExperienceForm` in `src/app/admin/(protected)/dashboard/experiences/new/page.tsx`
- [x] T014 [US4] Create edit page at `src/app/admin/(protected)/dashboard/experiences/[id]/edit/page.tsx`
- [x] T015 [US4] Add Edit link per row in `src/app/admin/(protected)/dashboard/experiences/page.tsx`

**Checkpoint**: Admin can edit experiences without delete/recreate

---

## Phase 7: User Story 5 — Correct Experience Types (Priority: P2)

**Goal**: Admin create/edit forms show exactly 7 valid experience types.

**Independent Test**: Open create form → verify 7 types; save `factory-tours` → routable publicly.

### Implementation for User Story 5

- [x] T016 [US5] Tighten create schema `type` field to `z.enum(EXPERIENCE_TYPES)` in `src/features/admin/schemas/experience.schema.ts`
- [x] T017 [US5] Use `EXPERIENCE_TYPES` from value-objects in `ExperienceForm` (covers create and edit)

**Checkpoint**: All 5 user stories complete

---

## Phase 8: Polish & Cross-Cutting Concerns

- [x] T018 [P] Run `npm run lint` and fix any errors
- [x] T019 Run `npm run build` and verify successful compilation
- [x] T020 Execute validation scenarios in `specs/011-experience-schedule-fix/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on T001 — BLOCKS US2 detail page work
- **US1 (Phase 3)**: Can start in parallel with Phase 2 (admin-only)
- **US2 (Phase 4)**: Depends on T004
- **US3 (Phase 5)**: Depends on T007 (same file — sequential)
- **US4 (Phase 6)**: Independent of US1–US3; T009 blocks T010–T015
- **US5 (Phase 7)**: Depends on T012 (ExperienceForm exists)
- **Polish (Phase 8)**: Depends on all user stories

### Parallel Opportunities

- T001, T002, T003 can run in parallel
- T005/T006 (US1) can run parallel with T004 (foundational)
- T018 can run while reviewing other work

---

## Implementation Strategy

### MVP First (User Stories 1 + 2)

1. Complete Phase 1 + Phase 2 (T001–T004)
2. Complete Phase 3 + Phase 4 (T005–T007)
3. **STOP and VALIDATE**: Quickstart Scenarios 1–2

### Incremental Delivery

1. Add US3 (cover image) → Scenario 3
2. Add US4 (edit flow) → Scenario 4
3. Add US5 (types) → Scenario 5
4. Polish → lint, build, full quickstart

---

## Notes

- No new Supabase migrations required
- Slug is immutable on edit (excluded from update schema)
- Booking flow page is not modified per spec assumptions
