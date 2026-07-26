# Data Model: Experience & Schedule Admin UX Fix

**Feature**: 011-experience-schedule-fix  
**Date**: 2026-07-26

---

## Existing Entities (unchanged schema)

### Supabase Table: `experiences`

No migration changes. Key columns used by 011:

| Column | Type | 011 usage |
|--------|------|-----------|
| `id` | uuid PK | Edit route param, `adminGetById`, `adminUpdate` |
| `slug` | text UNIQUE | Schedule FK link; **immutable on edit** |
| `type` | text | Must be valid `ExperienceType` (7 values) |
| `title_ar`, `title_en` | text | Dropdown labels in schedule form |
| `cover_image` | text | Public detail hero |
| `cover_image_id` | text | Storage cleanup on image replace |
| `price`, `currency` | numeric/text | Experience-level fallback display |
| `status` | text | Filter published on public queries |

### Supabase Table: `experience_schedules`

| Column | Type | Public display |
|--------|------|----------------|
| `id` | uuid PK | `scheduleId` query param for booking |
| `experience_slug` | text | Links to `experiences.slug` |
| `start_date` | date | Trip start |
| `end_date` | date | Trip end |
| `enrollment_deadline` | date | Registration deadline |
| `capacity` | integer | Total seats |
| `seats_remaining` | integer | Remaining spots |
| `price` | numeric | Per-schedule price |
| `currency` | text | Per-schedule currency |

**Relationship**: `experience_schedules.experience_slug` → `experiences.slug` (one-to-many, soft link by slug string)

---

## Extended Value Object: `ExperienceDate`

**File**: `src/domains/shared/value-objects.ts`

```typescript
export interface ExperienceDate {
  id?: string;
  startDate: string;
  endDate: string;
  availableSeats: number | null;      // maps to capacity
  spotsRemaining?: number | null;
  spotsTotal?: number | null;
  enrollmentDeadline?: string | null;
  price?: number | null;              // NEW — FR-002
  currency?: string | null;           // NEW — FR-002
}
```

---

## Schedule Card UI States

State derived at render time (no DB column):

| Input condition | UI state | FR |
|-----------------|----------|-----|
| `enrollment_deadline < today` | Registration Closed, no link | FR-004 |
| `seats_remaining === 0` | Fully Booked, disabled | FR-004 |
| Both true | Prefer "Fully Booked" label | FR-004 |
| Neither | Active Book Now link | FR-003 |
| `dates.length === 0` | Hide entire schedule section | Spec edge case |

**Book Now URL**: `/{locale}/booking/experience/{slug}?scheduleId={id}`

---

## Admin Form Models

### ScheduleManageInput (existing, unchanged schema)

```typescript
{
  experienceSlug: string;  // from dropdown value (slug)
  startDate: string;
  endDate: string;
  enrollmentDeadline: string;
  capacity: number;
  price: number;
  currency: string;
}
```

### ExperienceManageInput (create — existing)

Includes `slug` field. Type validated against `EXPERIENCE_TYPES` enum.

### ExperienceUpdateInput (NEW)

Same as create **except**:
- No `slug` field
- `cover_image` file optional (retain existing if omitted)

---

## New Repository Methods (admin-only)

Added to `SupabaseExperienceRepository` — not on public `IExperienceRepository` interface:

| Method | Signature | Purpose |
|--------|-----------|---------|
| `adminGetById` | `(id: string) => Promise<SupabaseExperienceRow \| null>` | Load edit form |
| `adminUpdate` | `(id: string, input: Record<string, unknown>) => Promise<void>` | Persist edits |

---

## ExperienceOption (Schedule dropdown DTO)

Passed from server page to `ScheduleManager`:

```typescript
interface ExperienceOption {
  slug: string;
  title_ar: string;
  title_en: string;
}
```

---

## Storage Lifecycle (Edit)

```
Edit form submit
  ├─ No new file → update text fields only, keep cover_image + cover_image_id
  └─ New file uploaded
       ├─ Upload to Storage → new url + id
       ├─ adminUpdate with new cover fields
       └─ deleteFile(old cover_image_id) if present
```

On upload failure before DB update: return error, no changes.  
On DB update failure after upload: delete newly uploaded file (rollback).
