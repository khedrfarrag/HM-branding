# Contract: Public Experience Detail Page

**Feature**: 011-experience-schedule-fix  
**Serves**: US2, US3, FR-002 through FR-006, SC-002, SC-003

---

## Repository: `getExperienceBySlug`

### MUST

1. Fetch published experience matching `slug` + `type`.
2. Fetch future schedules from `experience_schedules` where:
   - `experience_slug = slug`
   - `end_date > today` (ISO date string)
3. Map each schedule row to `ExperienceDate` including `price` and `currency`.
4. Set `experience.dates` to mapped array (non-empty when schedules exist).

---

## Cover Image Section (FR-005, FR-006)

| Condition | Behavior |
|-----------|----------|
| `coverImage` is non-null non-empty string | Render hero image block before page title |
| `coverImage` is null or empty | Omit image block entirely — no placeholder, no broken img |

Image element MUST include descriptive `alt` text matching experience title.

---

## Schedule Section (FR-002, FR-003, FR-004)

### Visibility

- Render section only when `experience.dates.length > 0`.
- When empty: hide section completely (no empty state UI).

### Per-card content (each schedule)

MUST display:

| Field | Source |
|-------|--------|
| Trip start date | `date.startDate` |
| Trip end date | `date.endDate` |
| Registration deadline | `date.enrollmentDeadline` |
| Total capacity | `date.availableSeats` |
| Remaining spots | `date.spotsRemaining` |
| Price | `date.price` + `date.currency` |

### Booking action (FR-003, FR-004)

| State | Render |
|-------|--------|
| Default (open, seats available) | Link: `/{locale}/booking/experience/{slug}?scheduleId={date.id}` with label "Book Now" / "احجز الآن" |
| `enrollmentDeadline < today` | Static label "Registration Closed" / "التسجيل مغلق" — no link |
| `spotsRemaining === 0` | Static label "Fully Booked" / "مكتمل الحجز" — no link |

When multiple schedules exist, each renders as a separate card in a grid.

---

## Booking URL contract

```
/{locale}/booking/experience/{experienceSlug}?scheduleId={scheduleUuid}
```

Must match existing booking page in `src/app/[locale]/(booking)/booking/[type]/[slug]/page.tsx`.
