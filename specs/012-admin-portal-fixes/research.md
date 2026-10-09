# Technical Research: Admin Portal UX, Error Handling, Routing & Localization Fixes

**Feature Branch**: `012-admin-portal-fixes`  
**Date**: 2026-07-27  
**Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/012-admin-portal-fixes/spec.md)

## Research Summary

### 1. Bilingual Toast Error Handling & Schedule Deletion Safety

- **Problem**: When `deleteScheduleAction` fails (e.g. active bookings exist), it returns raw English error `Cannot delete: 1 active booking(s) are tied to this schedule.` displayed inside a static red div banner.
- **Decision**: Implement a client-side Toast Notification system integrated with Next.js admin dictionary/i18n.
- **Rationale**: A toast notification provides non-intrusive, clear feedback. Translating raw server errors through a client dictionary mapping ensures Arabic users receive `"لا يمكن حذف هذا الموعد لوجود حجوزات نشطة مرتبطة به"` while English users see `"Cannot delete: active booking(s) are tied to this schedule."`.
- **Alternatives Considered**: Modifying database cascading delete (Rejected: deleting active schedules with client bookings violates financial & operational integrity).

---

### 2. Admin Logout & Session Terminations

- **Problem**: `handleSignOut` in `DashboardShell.tsx` only calls `supabasePublic.auth.signOut()` client-side, leaving server-side cookies (`admin_lang`, supabase auth cookies) intact and missing forced server revalidation.
- **Decision**: Create a dedicated Server Action `adminSignOutAction` in `@/features/admin/actions/auth` that explicitly clears auth cookies, calls server-side Supabase `signOut()`, and returns redirect instructions to `/admin/login`.
- **Rationale**: Ensures complete invalidation of both client state and server cookies, preventing security loopholes and stale admin sessions.
- **Alternatives Considered**: Client-only `document.cookie` deletion (Rejected: unstable across different browsers and HttpOnly cookies).

---

### 3. Schedule Table Reactive State Refresh

- **Problem**: `ScheduleManager.tsx` maintains local component state `const [schedules, setSchedules] = useState(initialSchedules)`. When `createScheduleAction` succeeds, it calls `router.refresh()`, but Next.js client component state is not updated, requiring a hard browser reload (F5).
- **Decision**: Update `schedules` state immediately upon successful response from `createScheduleAction` (optimistic/reactive update) or sync `schedules` state with incoming props via `useEffect`.
- **Rationale**: React state update ensures sub-500ms table rendering without browser reload.
- **Alternatives Considered**: Full window `location.reload()` (Rejected: slow and bad UX).

---

### 4. Booking Review Route (404 Prevention)

- **Problem**: Clicking "مراجعة" or booking code links from overview table / dashboard resulted in Next.js 404 page due to parameter mismatch or missing route boundaries.
- **Decision**: Verify `/admin/dashboard/bookings/[id]/page.tsx` parameter resolution (`const { id } = await params;`) and add fallback error boundary rendering inside the admin shell.
- **Rationale**: Preserves admin layout context even if a booking ID is invalid or missing, preventing unexpected full-page 404s.
- **Alternatives Considered**: Redirecting invalid IDs to bookings list silently (Rejected: obscures data errors from admin).

---

### 5. Experiences Form Field Documentation & Localization

- **Problem**: `ExperienceForm.tsx` has hardcoded English labels and placeholders (`Slug (URL identifier)`, `Experience Type`, `Title (English)`, `Price`, etc.).
- **Decision**: Pass `locale` and `dict` to `ExperienceForm.tsx` and map every input label, placeholder, helper text, and dropdown option dynamically to Arabic or English translations.
- **Rationale**: Complete internationalization consistency across all admin pages.
- **Alternatives Considered**: Static bilingual labels `Label (العنوان)` (Rejected: clutters UI and breaks clean design system).
