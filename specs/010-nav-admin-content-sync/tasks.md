# Tasks: Navigation Fix, Admin Experience Management & Content Sync

**Input**: Design documents from `/specs/010-nav-admin-content-sync/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Organization**: Tasks are grouped by phase and user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize database migration directory structure by creating the file `supabase/migrations/20260720000000_create_experiences.sql`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T002 Setup database schema and experiences table in `supabase/migrations/20260720000000_create_experiences.sql`
- [x] T003 [P] Modify `ChinaCity` domain interface to include `coverImage` property in `src/domains/china/entities.ts`
- [x] T004 Add translation dictionary keys for booking type filters and admin experiences strings in `src/dictionaries/en.json`
- [x] T005 Add translation dictionary keys for booking type filters and admin experiences strings in `src/dictionaries/ar.json`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Navigation Links Fix (Priority: P1)

**Goal**: Eliminate 404 links in header/footer by deleting dead paths and creating missing pages.

**Independent Test**: Click through all header mega-menu and footer links on `/ar` and `/en` to verify HTTP 200 responses.

### Implementation for User Story 1

- [x] T006 Remove the non-existent `/downloads` path from the navigation configuration in `src/config/navigation.ts`
- [x] T007 Add missing `quality-control` and `verification` entries to mock database fallback in `src/repositories/local-fs/services.ts`
- [x] T008 [P] [US1] Create the Trade Intelligence type-hub page `src/app/[locale]/(trade-intel)/trade-intelligence/[type]/page.tsx` to list and filter articles by category
- [x] T009 [P] [US1] Create the Success Stories static page at `src/app/[locale]/(marketing)/success-stories/page.tsx`
- [x] T010 [P] [US1] Create the Contact static page at `src/app/[locale]/(marketing)/contact/page.tsx`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Admin Experience Management (Priority: P1)

**Goal**: Allow admin to author, edit, and publish experiences dynamically via Supabase and Admin panel.

**Independent Test**: Log in to Admin portal, create an experience, and verify it dynamically renders on the public experiences page.

### Implementation for User Story 2

- [x] T011 [US2] Create Zod schema definition for experience creation and editing in `src/features/admin/schemas/experience.schema.ts`
- [x] T012 [US2] Create `SupabaseExperienceRepository` implementing the `IExperienceRepository` interface in `src/repositories/supabase/experiences.ts`
- [x] T013 [US2] Create admin server actions for experience CRUD in `src/features/admin/actions/manage-experiences.ts`
- [x] T014 [US2] Create admin experience listing page in `src/app/admin/(protected)/dashboard/experiences/page.tsx`
- [x] T015 [US2] Create admin experience creation page in `src/app/admin/(protected)/dashboard/experiences/new/page.tsx`
- [x] T016 [US2] Add "Experiences / التجارب" navigation link to the admin sidebar layout in `src/features/admin/components/DashboardShell.tsx`
- [x] T017 [US2] Swap repository implementation from `LocalFsExperienceRepository` to `SupabaseExperienceRepository` on public experience pages (`src/app/[locale]/(experiences)/experiences/page.tsx` and nested detail routes)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently.

---

## Phase 5: User Story 3 - Booking Type Filter Labels (Priority: P2)

**Goal**: Map raw booking database `target_type` values to clean translated labels in the Admin dashboard.

**Independent Test**: Load `/admin/dashboard/bookings` and verify filters show clean Arabic labels.

### Implementation for User Story 3

- [x] T018 [US3] Update the type filter buttons to use translations from the active language dictionary in `src/app/admin/(protected)/dashboard/bookings/page.tsx`
- [x] T019 [US3] Refactor the `getTypeLabel` mapping function in `src/app/admin/(protected)/dashboard/bookings/page.tsx` to handle `corporate` and `event` types, with fallback for unrecognized entries.

**Checkpoint**: At this point, User Stories 1, 2, and 3 are all functional.

---

## Phase 6: User Story 4 - Generated Images Wiring (Priority: P2)

**Goal**: Correctly reference generated image asset paths on experience, city, and knowledge pages.

**Independent Test**: Load Kanton Fair experience, Guangzhou city profile, and how-to-import article to verify all cover images display.

### Implementation for User Story 4

- [x] T020 [US4] Fix the fallback article `coverImage` path to point to `/images/knowledge/importing.jpg` in `src/repositories/local-fs/knowledge.ts`
- [x] T021 [US4] Set Guangzhou and Yiwu `coverImage` properties in `src/repositories/local-fs/china.ts` to map to `/images/china/guangzhou.jpg` and `/images/china/yiwu.jpg`
- [x] T022 [US4] Update China city and market detail page components to display `coverImage` when available

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Code cleanup, static generation validations, and type checks.

- [x] T023 [P] Execute linter audit via `npm run lint` and verify zero errors
- [x] T024 Execute complete static production build via `npm run build` and verify successful compilation of all 109+ routes
- [x] T025 Execute validation scenarios in `quickstart.md` and document results

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories.
- **User Stories (Phase 3+)**: All depend on Foundational phase completion.
  - User Story 1 (P1) is the MVP and should be completed first.
  - User Story 2 (P1) is complex and starts once foundational schema tasks are ready.
  - User Story 3 and 4 (P2) can be worked on in parallel once foundational dictionary and entity changes are done.
- **Polish (Final Phase)**: Depends on all user stories being complete.

### Parallel Opportunities

- Foundational tasks T003, T004, and T005 can be done in parallel.
- Hub and static page creations (T008, T009, T010) in Phase 3 can run in parallel.
- Image wiring tasks in Phase 6 (T020, T021) can run in parallel.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup and Foundational.
2. Complete Phase 3 (User Story 1 - Nav Fixes).
3. Validate all navigation links before proceeding.
