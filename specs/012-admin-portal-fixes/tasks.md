# Tasks: Admin Portal UX, Error Handling, Routing & Localization Fixes

**Input**: Design documents from `/specs/012-admin-portal-fixes/`  
**Prerequisites**: [plan.md](file:///g:/hossam%20mabrouk/specs/012-admin-portal-fixes/plan.md), [spec.md](file:///g:/hossam%20mabrouk/specs/012-admin-portal-fixes/spec.md), [research.md](file:///g:/hossam%20mabrouk/specs/012-admin-portal-fixes/research.md), [data-model.md](file:///g:/hossam%20mabrouk/specs/012-admin-portal-fixes/data-model.md), [contracts/admin-portal-api.md](file:///g:/hossam%20mabrouk/specs/012-admin-portal-fixes/contracts/admin-portal-api.md)

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: User story label (US1, US2, US3, US4, US5)
- Every task includes exact file paths

---

## Phase 1: Setup & i18n Dictionaries

**Purpose**: Infrastructure setup and dictionary entries for admin toast and experience form translations

- [x] T001 [P] Add admin toast and error translation entries in `src/dictionaries/ar.json`
- [x] T002 [P] Add admin toast and error translation entries in `src/dictionaries/en.json`
- [x] T003 [P] Add `experienceForm` dictionary keys for labels, placeholders, and buttons in `src/dictionaries/ar.json`
- [x] T004 [P] Add `experienceForm` dictionary keys for labels, placeholders, and buttons in `src/dictionaries/en.json`

---

## Phase 2: Foundational (Toast Notification Infrastructure)

**Purpose**: Core Toast system component required for localized feedback across all admin actions

- [x] T005 Create Toast notification UI component in `src/features/admin/components/ToastContainer.tsx`
- [x] T006 Integrate Toast state and provider wrapper in `src/features/admin/components/DashboardShell.tsx`

---

## Phase 3: User Story 1 - Bilingual Toast Error Handling & Schedule Deletion Safety (Priority: P1) 🎯 MVP

**Goal**: Present clear, localized Toast notifications (AR/EN) when schedule deletion is blocked by active bookings or when server errors occur.

**Independent Test**: Attempt to delete a schedule with active bookings. Verify a localized Toast error appears in Arabic ("لا يمكن حذف هذا الموعد لوجود حجوزات نشطة مرتبطة به") or English depending on active locale.

- [x] T007 [US1] Update `deleteScheduleAction` to return structured error codes in `src/features/admin/actions/manage-schedules.ts`
- [x] T008 [US1] Connect deletion error feedback to localized Toast notifications in `src/features/admin/components/ScheduleManager.tsx`

---

## Phase 4: User Story 2 - Functional Admin Logout & Session Clean-up (Priority: P1)

**Goal**: Clear all authentication cookies, Supabase session tokens, and redirect immediately to `/admin/login` upon clicking Logout.

**Independent Test**: Click Logout in sidebar, verify cookies/local session cleared, and observe instant redirect to `/admin/login`.

- [x] T009 [US2] Implement `adminSignOutAction` server action in `src/features/admin/actions/auth.ts`
- [x] T010 [US2] Connect sidebar "تسجيل الخروج" button to `adminSignOutAction` in `src/features/admin/components/DashboardShell.tsx`

---

## Phase 5: User Story 3 - Instant Table Refresh on Schedule Creation (Priority: P1)

**Goal**: Ensure creating a new schedule updates the table reactively without requiring a manual page refresh.

**Independent Test**: Submit new schedule form, observe table update immediately with new schedule row without pressing F5.

- [x] T011 [US3] Update `createScheduleAction` to return created schedule object in `src/features/admin/actions/manage-schedules.ts`
- [x] T012 [US3] Update local `schedules` state reactively on schedule creation in `src/features/admin/components/ScheduleManager.tsx`

---

## Phase 6: User Story 4 - Fix Booking Review Navigation (Priority: P2)

**Goal**: Eliminate 404 errors when clicking "مراجعة" or booking code links from overview or bookings table.

**Independent Test**: Click "مراجعة" on any booking row in overview or bookings list, verify clean navigation to detail page without 404.

- [x] T013 [P] [US4] Verify and fix booking code links in `src/app/admin/(protected)/dashboard/page.tsx`
- [x] T014 [P] [US4] Verify and fix review navigation links in `src/app/admin/(protected)/dashboard/bookings/page.tsx`
- [x] T015 [US4] Add parameter safety check and localized fallback handling in `src/app/admin/(protected)/dashboard/bookings/[id]/page.tsx`

---

## Phase 7: User Story 5 - Experiences Form Field Documentation & Localization (Priority: P2)

**Goal**: Localize all labels, placeholders, select options, and action buttons in `ExperienceForm.tsx` dynamically for AR and EN.

**Independent Test**: Toggle admin language between AR and EN on Experience form, verify all labels and placeholders switch language accordingly.

- [x] T016 [US5] Update `ExperienceForm.tsx` to accept `locale` and `dict` props in `src/features/admin/components/ExperienceForm.tsx`
- [x] T017 [US5] Map input labels, placeholders, dropdowns, and buttons to dictionary translations in `src/features/admin/components/ExperienceForm.tsx`
- [x] T018 [P] [US5] Pass `locale` and `dict` props from `src/app/admin/(protected)/dashboard/experiences/new/page.tsx`
- [x] T019 [P] [US5] Pass `locale` and `dict` props from `src/app/admin/(protected)/dashboard/experiences/[slug]/edit/page.tsx`

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Verification and build checks

- [x] T020 Run `npm run build` to verify zero TypeScript or Next.js build errors ✅
- [ ] T021 Perform manual quickstart validation scenarios from `specs/012-admin-portal-fixes/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Phase 1 - BLOCKS Toast notifications across stories.
- **User Story 1 (Phase 3)**: Depends on Phase 2.
- **User Story 2 (Phase 4)**: Depends on Phase 2.
- **User Story 3 (Phase 5)**: Depends on Phase 2.
- **User Story 4 (Phase 6)**: Can run in parallel with US1-US3.
- **User Story 5 (Phase 7)**: Depends on Phase 1.
- **Polish (Phase 8)**: Depends on all implementation tasks being complete.

---

## Task Summary

- **Total Task Count**: 21 tasks
- **Completed**: 20/21 ✅
- **Remaining**: T021 (manual quickstart validation)
