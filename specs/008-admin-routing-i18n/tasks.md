# Tasks: Admin Redirection & Language Localization

**Input**: Design documents from `/specs/008-admin-routing-i18n/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 [P] Populate translations for the new admin sections under the `"admin"` key in `src/dictionaries/en.json`
- [x] T002 [P] Populate translations for the new admin sections under the `"admin"` key in `src/dictionaries/ar.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 Update `src/app/admin/(protected)/layout.tsx` to read the `admin_lang` cookie, retrieve the locale dictionary using `getDictionary`, and pass them to the layout dashboard shell
- [x] T004 Update `src/features/admin/components/DashboardShell.tsx` to accept the `locale` and `dict` props, and wrap the children in a container that dynamically sets the layout direction (`dir="rtl"` for Arabic, `dir="ltr"` for English)
- [x] T005 Translate the sidebar navigation links, logo labels, profile info, and logout button inside `src/features/admin/components/DashboardShell.tsx` using the `dict` prop

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Admin Dashboard Language Localization (Priority: P1) 🎯 MVP

**Goal**: Enable Arabic and English interface translation inside the dashboard, persisting selections via cookies.

**Independent Test**: Log in to the admin dashboard, select Arabic (`عربي`) on the language switcher, and verify that the layout switches to RTL and all text translates. Refresh the browser and verify the Arabic RTL setting persists.

### Implementation for User Story 1

- [x] T006 [P] [US1] Build the language switcher toggle button component inside the sidebar of `src/features/admin/components/DashboardShell.tsx` that sets the `admin_lang` cookie and triggers `router.refresh()`
- [x] T007 [US1] Localize the admin login view in `src/app/admin/login/page.tsx` and the form labels/error states in `src/features/admin/components/MagicLinkForm.tsx` using the cookie-based locale
- [x] T008 [US1] Localize the overview dashboard page in `src/app/admin/(protected)/dashboard/page.tsx` including KPI cards and recent bookings table columns
- [x] T009 [US1] Localize the bookings management page in `src/app/admin/(protected)/dashboard/bookings/page.tsx` including filters, search input, table columns, and view details buttons
- [x] T010 [US1] Localize the booking details editor in `src/app/admin/(protected)/dashboard/bookings/[id]/page.tsx` including labels, notes textarea, save buttons, status select, and audit log headers
- [x] T011 [US1] Localize the schedules management page in `src/app/admin/(protected)/dashboard/schedules/page.tsx` including the schedules list, filters, and slot creation form modals

**Checkpoint**: At this point, User Story 1 is fully functional and testable independently.

---

## Phase 4: User Story 2 - Admin Authentication Routing & Redirection (Priority: P2)

**Goal**: Centralize admin auth protection and prevent authenticated admins from landing on the user portal or login page when accessing root admin paths.

**Independent Test**: Log in as admin, navigate manually to `http://localhost:3000/admin`, and verify you are immediately redirected to `/admin/dashboard` instead of loading the public home page.

### Implementation for User Story 2

- [x] T012 [US2] Update `src/middleware.ts` to redirect authenticated users attempting to access `/admin`, `/admin/`, or `/admin/login` directly to `/admin/dashboard`
- [x] T013 [US2] Ensure `src/middleware.ts` redirects unauthenticated users attempting to access `/admin/*` (except `/admin/login`) directly to `/admin/login`

**Checkpoint**: At this point, User Stories 1 and 2 work together seamlessly.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Code quality, validation, and final compiler checks

- [x] T014 [P] Run `npm run lint` and verify zero typescript/syntax/formatting issues in modified files
- [ ] T015 Run all E2E validation scenarios defined in `specs/008-admin-routing-i18n/quickstart.md`
- [x] T016 Execute production build `npm run build` and verify clean compiler output

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - Or sequentially in priority order (P1 → P2)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Integrates with US1

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Language switcher button (T006) and other localization pages (T007-T011) can be developed in parallel once foundational props are defined

---

## Parallel Example: User Story 1

```bash
# Launch localized files concurrently:
Task: "Localize overview page in src/app/admin/(protected)/dashboard/page.tsx"
Task: "Localize bookings list page in src/app/admin/(protected)/dashboard/bookings/page.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Verify that admin views translate and layout adjusts to RTL.

### Incremental Delivery

1. Complete Setup + Foundational → Translation framework operational
2. Add User Story 1 → Test translation toggle → Admin localized (MVP!)
3. Add User Story 2 → Test redirects → Security and routing complete
4. Validate overall system via Polish phase
