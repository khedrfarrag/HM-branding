# Quickstart Validation Guide: Booking System & Admin Dashboard

**Feature**: 007-booking-system-dashboard
**Date**: 2026-07-12

This guide outlines steps to validate the database connection, form submissions, and dashboard access.

---

## Prerequisite Checks

Ensure environment variables are configured in `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
RESEND_API_KEY=re_your_api_key
```

---

## Validation Scenario 1: Database Connection & Schema Health

**Goal**: Verify that the Next.js application connects to Supabase and queries tables.

**Command**:
```bash
# Run the local development server
npm run dev
```

**Verification Steps**:
1. Open [http://localhost:3000/api/health](http://localhost:3000/api/health) in a browser.
2. Verify that it returns `{"status":"healthy","database":"connected"}` without throwing 500 errors.

---

## Validation Scenario 2: Booking Form Inputs & Frontend Validation

**Goal**: Verify form validation constraints block invalid data.

**Verification Steps**:
1. Run `npm run dev` and navigate to `http://localhost:3000/ar/experiences/canton-fair-programs/canton-fair-business-experience`.
2. Scroll to the booking form.
3. Try to submit the form with empty fields.
4. Verify that instant localized Arabic/English error messages appear below input boxes.
5. Enter an invalid email address (e.g., `test@invalid`). Verify that the Zod validation block intercepts the submission before making any network requests.

---

## Validation Scenario 3: Secure Admin Route Redirects

**Goal**: Verify Middleware intercepts unauthorized access to `/admin/*`.

**Verification Steps**:
1. Open a new Incognito browser window.
2. Navigate to `http://localhost:3000/admin/dashboard`.
3. Verify that the middleware intercepts the request and redirects you to the login challenge screen (`http://localhost:3000/admin/login`).

---

## Validation Scenario 4: Concurrent Load & Transaction Consistency

**Goal**: Verify the database transaction function prevents double booking.

**Verification Steps**:
- Run a load simulation script (e.g. using `k6` or a custom script under `g:\hossam mabrouk\src\app\api\booking\test.ts`) that submits 20 concurrent reservation requests for a session with exactly 5 remaining seats.
- Verify that only exactly 5 bookings succeed with a `Confirmed` status, while the remaining 15 requests are rejected with a capacity error.
- Verify that the database `seats_remaining` displays exactly `0`.
