# Interface Contracts: Admin Portal Server Actions & Client Services

**Feature Branch**: `012-admin-portal-fixes`  
**Date**: 2026-07-27  
**Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/012-admin-portal-fixes/spec.md)

## Server Action Contracts

### 1. `deleteScheduleAction(id: string)`

- **Input**: `id: string` (Schedule UUID)
- **Output**:
  ```typescript
  {
    success: boolean;
    error?: string;
    errorCode?: "ACTIVE_BOOKINGS_EXIST" | "SCHEDULE_NOT_FOUND" | "SERVER_ERROR";
  }
  ```
- **Error Mapping Rules**:
  - If error contains `"active booking"`: `errorCode = "ACTIVE_BOOKINGS_EXIST"`
  - Toast translation mapping:
    - `ar`: `"لا يمكن حذف هذا الموعد لوجود حجوزات نشطة مرتبطة به"`
    - `en`: `"Cannot delete: 1 active booking(s) are tied to this schedule."`

### 2. `createScheduleAction(data: ScheduleManageInput)`

- **Input**: `ScheduleManageInput`
- **Output**:
  ```typescript
  {
    success: boolean;
    data?: Schedule;
    error?: string;
  }
  ```
- **Client Behavior**:
  - On `success: true`: client updates `schedules` state array immediately: `setSchedules(prev => [data, ...prev])`.

### 3. `adminSignOutAction()`

- **Input**: None
- **Output**:
  ```typescript
  {
    success: boolean;
    redirectUrl: string; // "/admin/login"
  }
  ```
- **Server Behavior**:
  - Clears `sb-*-auth-token`, `admin_lang`, and session cookies.
  - Calls `supabase.auth.signOut()`.

## Component Prop Contracts

### 1. `ExperienceForm`

```typescript
interface ExperienceFormProps {
  mode: "create" | "edit";
  initialValues?: ExperienceFormValues;
  existingCoverUrl?: string | null;
  submitAction: (formData: FormData) => Promise<ExperienceActionResult>;
  cancelHref?: string;
  locale: "ar" | "en";
  dict?: ExperienceFormDictionary;
}
```
