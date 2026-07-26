# Quickstart Validation Guide: Experience & Schedule Admin UX Fix

**Feature**: 011-experience-schedule-fix  
**Date**: 2026-07-26

---

## Prerequisites

- Dev server: `npm run dev` from project root
- Admin login at `/admin/login`
- Supabase tables applied from:
  - `supabase/migrations/20260712000000_init_booking_schema.sql`
  - `supabase/migrations/20260720000000_create_experiences.sql`
- At least one published experience in the `experiences` table (create via admin if empty)

---

## Scenario 1: Admin Links Schedule via Dropdown (US1)

**Goal**: Schedule created with correct slug appears on public detail page.

### Steps

1. Log in at `http://localhost:3000/admin/login`
2. Navigate to **Experiences** → create a published experience if none exists:
   - Title AR: `السفر في جميع مدن الصين`
   - Slug: `china-all-cities-trip`
   - Type: `business-trips`
   - Upload cover image
3. Go to **Schedules** (`/admin/dashboard/schedules`)
4. Click **Add Schedule Slot**
5. Verify experience field is a **dropdown** (not text input) showing the experience title
6. Select the experience, set dates (future end date), capacity 12, price 2500 USD
7. Save schedule
8. Open public page: `http://localhost:3000/ar/experiences/business-trips/china-all-cities-trip`

**Expected**:
- "المواعيد المتاحة والتسجيل" section is visible
- Schedule dates match admin entry
- HTTP 200, no slug mismatch

---

## Scenario 2: Visitor Sees Dates and Books (US2)

**Goal**: All schedule fields visible; booking states work.

### Steps

1. With schedule from Scenario 1, verify detail page shows:
   - Trip start and end dates
   - Registration deadline
   - Total capacity and remaining spots
   - Price per schedule
2. Click **احجز الآن** → lands on `/ar/booking/experience/china-all-cities-trip?scheduleId=...`
3. Create a second schedule with `enrollment_deadline` in the past → verify card shows **التسجيل مغلق** (no active button)
4. Create a schedule with `seats_remaining = 0` → verify card shows **مكتمل الحجز**

**Expected**:
- All FR-002 fields visible without extra steps
- Book Now link works for open schedules
- Closed/full states replace button (FR-004)

---

## Scenario 3: Cover Image on Detail Page (US3)

**Goal**: Admin-uploaded cover image displays publicly.

### Steps

1. Ensure experience has cover image uploaded via admin
2. Open public detail page
3. Verify cover image appears **before** the title
4. Create or find an experience with no cover image
5. Open its detail page

**Expected**:
- Image visible prominently when set (SC-003)
- No broken image or empty container when not set (FR-006)

---

## Scenario 4: Admin Edits Experience (US4)

**Goal**: Edit title → reflected on public page.

### Steps

1. Go to `/admin/dashboard/experiences`
2. Click **Edit** on an experience row
3. Verify form is pre-filled; slug field is absent
4. Change Arabic title to `برنامج محدّث`
5. Save
6. Refresh public detail page

**Expected**:
- Updated title visible on listing and detail (SC-004)
- Upload new cover image → old image removed from Storage, new image on public page
- Submit with empty required field → field-level error shown (FR-010)

---

## Scenario 5: Seven Experience Types (US5)

**Goal**: Admin create/edit forms show exactly 7 valid types.

### Steps

1. Open `/admin/dashboard/experiences/new`
2. Open Type dropdown → count options
3. Verify all 7 present:
   - `business-trips`, `factory-tours`, `vip-experiences`, `private-mentorship`, `china-business-experience`, `corporate-programs`, `canton-fair-programs`
4. Verify `corporate` and `consultation` are **not** listed
5. Create experience with type `factory-tours`, slug `factory-tour-test`
6. Visit `/ar/experiences/factory-tours/factory-tour-test`

**Expected**:
- Exactly 7 types (SC-005)
- Experience routable at correct type path

---

## Scenario 6: Empty Experiences Dropdown (US1 edge case)

### Steps

1. With zero experiences in DB, open Schedules page
2. Click Add Schedule Slot

**Expected**:
- Dropdown empty with helpful message
- Submit disabled

---

## Build Verification

```bash
npm run lint
npm run build
```

**Expected**: Zero lint errors; build succeeds with all routes compiled.
