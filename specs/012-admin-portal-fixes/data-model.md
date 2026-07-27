# Data Model & Domain Definitions: Admin Portal UX & Fixes

**Feature Branch**: `012-admin-portal-fixes`  
**Date**: 2026-07-27  
**Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/012-admin-portal-fixes/spec.md)

## Key Entities & Schemas

### 1. Toast Notification State (Client Domain)

Represents user feedback alerts triggered by server action results.

```typescript
interface ToastState {
  id: string;
  type: "success" | "error" | "info" | "warning";
  message: string; // Localized message string
  duration?: number; // Default 4000ms
}
```

### 2. Schedule Manage Action Response

Updated action response schema supporting structured error details for Toast mapping.

```typescript
interface ScheduleActionResult {
  success: boolean;
  schedule?: Schedule;
  error?: string; // Raw error key or message
  errorCode?: "ACTIVE_BOOKINGS_EXIST" | "INVALID_DATES" | "SLOT_CONFLICT" | "SERVER_ERROR";
}
```

### 3. Experience Form i18n Dictionary Structure

Translation dictionary schema for `ExperienceForm`.

```typescript
interface ExperienceFormDictionary {
  labels: {
    slug: string;
    type: string;
    titleAr: string;
    titleEn: string;
    shortDescAr: string;
    shortDescEn: string;
    fullDescAr: string;
    fullDescEn: string;
    coverImage: string;
    coverImageOptional: string;
    price: string;
    currency: string;
    citySlug: string;
    status: string;
  };
  placeholders: {
    slug: string;
    titleAr: string;
    titleEn: string;
    shortDescAr: string;
    shortDescEn: string;
    fullDescAr: string;
    fullDescEn: string;
    price: string;
    citySlug: string;
  };
  options: {
    statusPublished: string;
    statusDraft: string;
  };
  buttons: {
    save: string;
    update: string;
    saving: string;
    cancel: string;
  };
}
```

## State Transitions & Workflows

### Schedule Creation Workflow
1. User submits valid Schedule form.
2. `createScheduleAction` inserts record into database and returns created `Schedule` object.
3. `ScheduleManager` client component prepends/appends `Schedule` to local `schedules` state.
4. Toast notification displays localized success message `"تم إنشاء الموعد بنجاح!"` / `"Schedule created successfully!"`.
5. Form closes reactively without browser reload.

### Schedule Deletion Workflow
1. User clicks delete on Schedule.
2. `deleteScheduleAction(id)` checks database constraint for active bookings.
3. If active bookings exist: returns `errorCode: "ACTIVE_BOOKINGS_EXIST"`.
4. `ScheduleManager` translates `errorCode` into active locale:
   - Arabic (`ar`): `"لا يمكن حذف هذا الموعد لوجود حجوزات نشطة مرتبطة به"`
   - English (`en`): `"Cannot delete: 1 active booking(s) are tied to this schedule."`
5. Toast presents localized error; table state remains untouched.

### Admin Logout Workflow
1. User clicks "تسجيل الخروج" (Logout).
2. `adminSignOutAction` executes server-side cookie deletion and Supabase `signOut()`.
3. Client receives confirmation, flushes local state, and redirects to `/admin/login`.
