# Tasks: Booking System & Admin Dashboard

**Input**: Design documents from `/specs/007-booking-system-dashboard/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Configure Supabase and Resend environment variables in `.env.example`
- [x] T002 Verify `@supabase/supabase-js` and `resend` SDKs are declared in `package.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 Setup Supabase client instantiation file in `src/repositories/supabase/client.ts`
- [x] T004 Create database migration SQL scripts for Client, ExperienceSchedule, Booking, and AuditLog tables in `supabase/migrations/20260712000000_init_booking_schema.sql`
- [x] T005 Setup Supabase Auth validation check inside `src/middleware.ts` to protect `/admin/*` routes
- [x] T006 Define generic repository contracts in `src/domains/booking/repository.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Client Experience Booking & Inquiry (Priority: P1) 🎯 MVP

**Goal**: Enable importers to book experience programs and consultation sessions, verifying capacity limits.

**Independent Test**: Complete booking submission on an experience detail page and verify redirection to a unique booking confirmation page with email triggered.

### Implementation for User Story 1

- [x] T007 [P] [US1] Create validation schema `PublicBookingSchema` in Zod inside `src/features/booking/actions/submit-booking.ts`
- [x] T008 [US1] Implement concrete Resend SDK mailer class in `src/integrations/email/resend.ts` implementing `IEmailGateway`
- [x] T009 [US1] Implement `submitBookingAction` Server Action in `src/features/booking/actions/submit-booking.ts`
- [x] T010 [US1] Build client-side interactive component `BookingForm.tsx` in `src/features/booking/components/BookingForm.tsx`
- [x] T011 [US1] Integrate `BookingForm` into the dynamic experience checkout route `src/app/[locale]/(booking)/booking/[type]/[slug]/page.tsx`
- [x] T012 [US1] Create customer-facing confirmation screen in `src/app/[locale]/(booking)/booking/confirmation/[id]/page.tsx`

**Checkpoint**: At this point, User Story 1 is fully functional and testable independently.

---

## Phase 4: User Story 2 - Admin Dashboard Booking Management (Priority: P2)

**Goal**: Provide administrator access to view, filter, and transition booking lifecycles.

**Independent Test**: Log in as admin, browse pending bookings list, and successfully confirm a request.

### Implementation for User Story 2

- [x] T013 [US2] Implement secure administrator login route in `src/app/(admin)/login/page.tsx` using Supabase Auth Magic Link
- [x] T014 [US2] Implement layout auth guard and shell container in `src/app/(admin)/layout.tsx`
- [x] T015 [US2] Create reusable sidebar panel `DashboardShell.tsx` in `src/features/admin/components/DashboardShell.tsx`
- [x] T016 [US2] Create landing overview page in `src/app/(admin)/dashboard/page.tsx` showing basic KPIs
- [x] T017 [US2] Create bookings list layout in `src/app/(admin)/dashboard/bookings/page.tsx` with category filters
- [x] T018 [US2] Build editor screen in `src/app/(admin)/dashboard/bookings/[id]/page.tsx` to handle status transitions

**Checkpoint**: At this point, User Stories 1 and 2 work together seamlessly.

---

## Phase 5: User Story 3 - Schedule & Capacity Administration (Priority: P3)

**Goal**: Enable dynamic creation and editing of experience sessions and booking slots.

**Independent Test**: Add a new experience session date inside the admin panel and confirm it becomes immediately selectable on the public checkout form.

### Implementation for User Story 3

- [x] T019 [P] [US3] Create `ScheduleManageSchema` validator using Zod inside `src/features/admin/schemas/schedule.schema.ts`
- [x] T020 [US3] Implement dynamic slot management interface in `src/app/(admin)/dashboard/schedules/page.tsx`
- [x] T021 [US3] Modify `LocalFsExperienceRepository` to merge filesystem content with Supabase experience schedules dynamic seats data in `src/repositories/local-fs/experiences.ts`

**Checkpoint**: Full dynamic booking capacity management is operational.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T022 Setup DB connection endpoint in `src/app/api/health/route.ts`
- [x] T023 Add loading skeletons and suspense boundaries to `/admin` pages
- [x] T024 Run all E2E validation scenarios defined in `specs/007-booking-system-dashboard/quickstart.md`
- [x] T025 Execute production build `npm run build` and verify clean compiler output

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Integrates with US1
- **User Story 3 (P3)**: Can start after US2 completion

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Zod schema creations (T007, T019) can be authored in parallel
