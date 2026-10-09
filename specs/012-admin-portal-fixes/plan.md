# Implementation Plan: Admin Portal UX, Error Handling, Routing & Localization Fixes

**Branch**: `012-admin-portal-fixes` | **Date**: 2026-07-27 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/012-admin-portal-fixes/spec.md)

**Input**: Feature specification from `/specs/012-admin-portal-fixes/spec.md`

## Summary

This feature resolves critical usability, localization, error handling, session management, and routing issues across the HM Admin Portal:
1. Translates schedule deletion constraints into human-readable, bilingual Toast messages (`ar`/`en`).
2. Implements a unified Toast notification system for all admin server actions.
3. Fixes Next.js client state in `ScheduleManager` to reflect newly created schedules reactively without page reload.
4. Fixes the Bookings Review action route to prevent 404 errors.
5. Fully localizes labels, placeholders, select options, and action buttons in `ExperienceForm` for AR and EN.
6. Implements clean server-side logout in `DashboardShell` clearing all cookies and redirecting to `/admin/login`.

## Technical Context

**Language/Version**: TypeScript / Next.js (App Router, Server Actions)  
**Primary Dependencies**: React, Supabase Auth & DB, TailwindCSS, Lucide/Heroicons  
**Storage**: Supabase PostgreSQL (`bookings`, `schedules`, `experiences`)  
**Testing**: Manual scenario validation & automated Next.js build checks  
**Target Platform**: Web (Admin Portal - Desktop & Mobile views)  
**Project Type**: Web Application  
**Performance Goals**: Reactive UI updates under 500ms; instant Toast feedback  
**Constraints**: Zero breaking API changes; full bilingual AR/EN support  
**Scale/Scope**: Admin portal users managing bookings, schedules, and experiences  

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- All changes adhere to established Next.js App Router patterns and Supabase repository conventions.
- No unhandled promises or raw English error leakages.
- Complete backward compatibility maintained for existing DB schemas.

## Project Structure

### Documentation (this feature)

```text
specs/012-admin-portal-fixes/
├── spec.md              # Feature specification
├── plan.md              # Implementation plan (this file)
├── research.md          # Research findings & technical decisions
├── data-model.md        # Domain schemas & state transitions
├── quickstart.md        # Manual & scenario verification guide
├── contracts/           # Server Action & component contracts
└── tasks.md             # Implementation tasks (/speckit-tasks output)
```

### Source Code

```text
src/
├── app/
│   └── admin/
│       └── (protected)/
│           └── dashboard/
│               ├── page.tsx                  # Dashboard Overview (Recent Bookings link fix)
│               ├── bookings/
│               │   ├── page.tsx              # Bookings Table (Review link fix)
│               │   └── [id]/page.tsx         # Booking Detail Page
│               ├── schedules/page.tsx        # Schedules Admin Page
│               └── experiences/
│                   ├── page.tsx              # Experiences List
│                   ├── new/page.tsx          # Create Experience Page
│                   └── [slug]/edit/page.tsx  # Edit Experience Page
├── features/
│   ├── admin/
│   │   ├── actions/
│   │   │   ├── manage-schedules.ts           # Schedule Server Actions (error codes & return data)
│   │   │   ├── manage-experiences.ts         # Experience Server Actions
│   │   │   └── auth.ts                       # Admin SignOut Server Action
│   │   └── components/
│   │       ├── ScheduleManager.tsx           # Schedules UI (Reactive state & Toast)
│   │       ├── ExperienceForm.tsx            # Experiences Form (i18n & field guidance)
│   │       ├── DashboardShell.tsx            # Sidebar Navigation, Toast Provider & Logout
│   │       └── ToastContainer.tsx            # Centralized Toast UI Component
│   └── i18n/
│       └── dictionaries/                     # ar.json & en.json dictionary entries
```

## Proposed Changes

### 1. Centralized Bilingual Toast & Admin Logout Action
#### [NEW] [admin/actions/auth.ts](file:///g:/hossam%20mabrouk/src/features/admin/actions/auth.ts)
- Create `adminSignOutAction` to clear cookies (`admin_lang`, supabase auth cookies) and revoke auth session server-side.

#### [NEW] [ToastContainer.tsx](file:///g:/hossam%20mabrouk/src/features/admin/components/ToastContainer.tsx)
- Create styled, animated Toast notification component supporting Arabic/English RTL/LTR layouts and success/error types.

#### [MODIFY] [DashboardShell.tsx](file:///g:/hossam%20mabrouk/src/features/admin/components/DashboardShell.tsx)
- Connect `handleSignOut` to `adminSignOutAction`.
- Integrate Toast notification context/state so any child admin component can trigger localized toasts.

### 2. Schedule Deletion Toast & Reactive Table Refresh
#### [MODIFY] [manage-schedules.ts](file:///g:/hossam%20mabrouk/src/features/admin/actions/manage-schedules.ts)
- Return created `schedule` object on `createScheduleAction` success.
- Return structured `errorCode: "ACTIVE_BOOKINGS_EXIST"` when deletion is blocked.

#### [MODIFY] [ScheduleManager.tsx](file:///g:/hossam%20mabrouk/src/features/admin/components/ScheduleManager.tsx)
- Reactively update `schedules` state array when a new schedule is created (`setSchedules(prev => [newSched, ...prev])`).
- Trigger localized Toast errors on deletion failure (`"لا يمكن حذف هذا الموعد لوجود حجوزات نشطة مرتبطة به"` in AR).

### 3. Bookings Review Route Fix
#### [MODIFY] [admin/dashboard/bookings/page.tsx](file:///g:/hossam%20mabrouk/src/app/admin/(protected)/dashboard/bookings/page.tsx)
- Ensure "مراجعة" (Review) links correctly point to `/admin/dashboard/bookings/${b.id}`.

#### [MODIFY] [admin/dashboard/page.tsx](file:///g:/hossam%20mabrouk/src/app/admin/(protected)/dashboard/page.tsx)
- Ensure recent bookings table code links route properly to `/admin/dashboard/bookings/${b.id}`.

### 4. Experience Form Localization & Field Guidance
#### [MODIFY] [ExperienceForm.tsx](file:///g:/hossam%20mabrouk/src/features/admin/components/ExperienceForm.tsx)
- Accept `locale` and `dict` props.
- Localize all field labels, input placeholders, select options, and submit/cancel buttons in Arabic and English.

#### [MODIFY] [dictionaries/ar.json](file:///g:/hossam%20mabrouk/src/dictionaries/ar.json) & [en.json](file:///g:/hossam%20mabrouk/src/dictionaries/en.json)
- Add complete dictionary key mappings for `experienceForm`, `schedulesErrors`, and `logout`.

## Verification Plan

### Automated Tests
- Execute `npm run build` to verify TypeScript types and Next.js route compilations.

### Manual Verification
- Execute test scenarios detailed in [quickstart.md](file:///g:/hossam%20mabrouk/specs/012-admin-portal-fixes/quickstart.md):
  1. Schedule deletion toast in Arabic & English.
  2. Schedule creation reactive table update without reload.
  3. Bookings review link navigation without 404.
  4. Experience form localization in AR & EN.
  5. Admin logout session and cookie cleanup.
