# Quickstart & Verification Guide: Admin Portal Fixes

**Feature Branch**: `012-admin-portal-fixes`  
**Date**: 2026-07-27  
**Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/012-admin-portal-fixes/spec.md)

## Prerequisites

- Local development server running on `http://localhost:3000`.
- Admin account credentials for logging into `/admin/login`.

## Runnable Verification Scenarios

### Scenario 1: Schedule Deletion Toast Error Handling (AR / EN)
1. Open Admin Portal -> Schedules page (`/admin/dashboard/schedules`).
2. Switch language to **Arabic** via sidebar.
3. Locate a schedule tied to an existing active booking.
4. Click "حذف" (Delete).
5. **Expected Result**: A Toast notification appears in Arabic: `"لا يمكن حذف هذا الموعد لوجود حجوزات نشطة مرتبطة به"`.
6. Switch language to **English** via sidebar.
7. Click "Delete" on the same schedule.
8. **Expected Result**: A Toast notification appears in English: `"Cannot delete: active booking(s) are tied to this schedule."`.

### Scenario 2: Instant Schedule Table Refresh
1. Click "+ إضافة موعد جديد" (+ Add Schedule).
2. Fill required fields (Experience, Start Date, End Date, Deadline, Capacity, Price).
3. Click "إنشاء الموعد" (Create Schedule).
4. **Expected Result**: Modal closes, success Toast appears, and the new row appears in the table **instantly without browser reload**.

### Scenario 3: Booking Review Route Verification
1. Open Admin Portal -> Overview (`/admin/dashboard`) or Bookings (`/admin/dashboard/bookings`).
2. Click "مراجعة" (Review) on any booking record.
3. **Expected Result**: Navigates cleanly to `/admin/dashboard/bookings/[id]`. No 404 page appears.

### Scenario 4: Experiences Form i18n & Field Guidance
1. Open Admin Portal -> Experiences page (`/admin/dashboard/experiences`).
2. Open Create or Edit Experience form.
3. Toggle language between AR and EN.
4. **Expected Result**: All form input labels, placeholders, select options, and action buttons switch seamlessly between Arabic and English.

### Scenario 5: Admin Logout Verification
1. Click "تسجيل الخروج" (Logout) in the sidebar footer.
2. **Expected Result**: Cookies and auth tokens are cleared, and browser immediately redirects to `/admin/login`. Navigating back to `/admin/dashboard` blocks access and redirects to login.
