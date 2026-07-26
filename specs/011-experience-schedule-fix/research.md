# Research: Experience & Schedule Admin UX Fix

**Feature**: 011-experience-schedule-fix  
**Date**: 2026-07-26

---

## 1. Schedule Merge on Public Detail Page

### Decision: Extract shared schedule-fetch helpers in `SupabaseExperienceRepository`
**Rationale**: `getExperiences()` already merges `experience_schedules` (lines 83–118 of `src/repositories/supabase/experiences.ts`), but `getExperienceBySlug()` returns `dates: []` always. This is the primary bug blocking the booking section on detail pages.
**Alternatives considered**:
- Call `getExperiences()` and filter by slug on the page — rejected, wasteful query and wrong abstraction
- Duplicate merge logic inline in `getExperienceBySlug` — rejected, violates DRY

### Implementation pattern
```typescript
// Private helpers inside experiences.ts
async function fetchSchedulesForSlugs(slugs: string[]): Promise<ScheduleRow[]>
function mapScheduleRowToExperienceDate(row: ScheduleRow): ExperienceDate
function mergeSchedulesIntoExperience(exp: Experience, schedules: ScheduleRow[]): void
```

`getExperienceBySlug` will fetch the experience row, then call `fetchSchedulesForSlugs([slug])` and merge.

---

## 2. Per-Schedule Price on Detail Cards

### Decision: Extend `ExperienceDate` with optional `price` and `currency`
**Rationale**: FR-002 requires price per schedule card. Currently price is only set at experience level from the first matching schedule.
**Alternatives considered**:
- Read price from experience-level field only — rejected, schedules can have different prices
- Add a separate `ScheduleCard` DTO — rejected, over-engineering for one page

### Mapping
| DB column | ExperienceDate field |
|-----------|---------------------|
| `capacity` | `availableSeats` |
| `seats_remaining` | `spotsRemaining` |
| `enrollment_deadline` | `enrollmentDeadline` |
| `price` | `price` (NEW) |
| `currency` | `currency` (NEW) |

---

## 3. Admin Schedule Experience Dropdown

### Decision: Server-fetch experiences in schedules page, pass to client `ScheduleManager`
**Rationale**: FR-001 eliminates manual slug typos. `adminGetAll()` already exists on `SupabaseExperienceRepository`.
**Alternatives considered**:
- Client-side fetch via API route — rejected, unnecessary new endpoint
- Autocomplete with free text — rejected, spec requires dropdown only

### Props contract
```typescript
interface ExperienceOption {
  slug: string;
  title_ar: string;
  title_en: string;
}
```

ScheduleManager receives `experienceOptions: ExperienceOption[]` and renders `<select {...register("experienceSlug")}>`.

### Empty state
When `experienceOptions.length === 0`: disable form submit, show localized message directing admin to create an experience first.

---

## 4. Schedule Card Booking States (FR-004)

### Decision: Server-side date comparison in the detail page RSC
**Rationale**: No client interactivity needed; keeps page as Server Component per constitution.
**Alternatives considered**:
- Client component for cards — rejected, adds bundle without benefit

### State logic
```typescript
const today = new Date().toISOString().split("T")[0];
const isClosed = date.enrollmentDeadline && date.enrollmentDeadline < today;
const isFull = date.spotsRemaining === 0;
```

| Condition | Render |
|-----------|--------|
| `isClosed` | Static label "Registration Closed" / "التسجيل مغلق" |
| `isFull` | Static label "Fully Booked" / "مكتمل الحجز" |
| Otherwise | Active `<Link>` to booking flow |

---

## 5. Cover Image on Public Detail Page

### Decision: Conditional hero block using `<img>` (matching China pages pattern)
**Rationale**: FR-005/006. China detail page uses `<img>` not Next `Image` for cover — follow existing convention for consistency in this codebase.
**Alternatives considered**:
- Next.js `Image` with remote Supabase URLs — valid but requires `remotePatterns` config; Supabase public URLs may already work with `<img>` as in admin listing

Render block only when `experience.coverImage` is truthy; omit entirely when null.

---

## 6. Admin Experience Edit Flow

### Decision: Shared `ExperienceForm` client component + `updateExperienceAction`
**Rationale**: FR-007/008. Create form in `new/page.tsx` is ~150 lines; edit needs identical fields minus slug. Shared component reduces duplication.
**Alternatives considered**:
- Duplicate edit page form — rejected, maintenance burden
- Inline edit modal — rejected, not in spec

### Edit-specific rules
- Slug field omitted (immutable per spec assumption)
- Cover image optional on edit (keep existing if no new file uploaded)
- On image replace: upload new → update DB → delete old `cover_image_id`
- On upload failure after DB update: revert DB row to previous `cover_image` values

### New repository methods
- `adminGetById(id: string): Promise<SupabaseExperienceRow | null>`
- `adminUpdate(id: string, input: Record<string, unknown>): Promise<void>`

---

## 7. Experience Type Alignment (FR-009)

### Decision: Single source of truth from `EXPERIENCE_TYPES` in `value-objects.ts`
**Rationale**: Admin create form has 4 types including invalid `corporate` and `consultation`. Public site uses 7 valid types.
**Alternatives considered**:
- Hardcode 7 types in admin only — rejected, drift risk

### Zod validation
```typescript
import { EXPERIENCE_TYPES } from "@/domains/shared/value-objects";
type: z.enum(EXPERIENCE_TYPES as [ExperienceType, ...ExperienceType[]])
```

Apply to both create and update schemas.

---

## 8. Schedule Table Title Display

### Decision: Resolve experience title from passed lookup map keyed by slug
**Rationale**: Replace hardcoded slug aliases (`china-field-experience`, `sourcing-consultation`) in ScheduleManager table.
**Alternatives considered**:
- Join in SQL query — valid but schedules page already fetches experiences separately; reuse that data

---

## 9. i18n Dictionary Keys

### Decision: Add keys under `admin.dashboard.schedules` and public experience detail labels
**New keys needed**:
- `selectExperience` — dropdown label
- `noExperiencesForSchedule` — empty dropdown message
- Public: `registrationClosed`, `fullyBooked`, `totalCapacity`, `schedulePrice` (or inline in page with locale check matching existing pattern)

---

## 10. No Database Changes

### Decision: No new migrations for 011
**Rationale**: Spec assumptions confirm `experiences` and `experience_schedules` tables exist from 007/010 migrations.
**Alternatives considered**: FK constraint on `experience_slug` — deferred; orphan schedules on delete is documented edge case in spec.
