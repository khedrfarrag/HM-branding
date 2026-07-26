# Contract: Schedule–Experience Link (Admin)

**Feature**: 011-experience-schedule-fix  
**Serves**: US1, FR-001, SC-001, SC-006

---

## Admin Schedule Create Form

### MUST

1. Render experience selection as a `<select>` element bound to `experienceSlug` via React Hook Form.
2. Populate options from server-fetched `experiences` table rows (`adminGetAll()`).
3. Each option:
   - `value` = `experiences.slug`
   - visible label = localized title (`title_ar` when admin locale is `ar`, else `title_en`)
4. MUST NOT expose a free-text slug input field.
5. Validate `experienceSlug` is non-empty via existing `ScheduleManageSchema`.

### Empty experiences list

When zero experiences exist in database:

1. Render the select with a single disabled placeholder option.
2. Display localized helper message: admin must create an experience first.
3. Disable the "Create Schedule" submit button.

### Schedules table display

1. Experience column MUST show localized experience title resolved from slug lookup map.
2. MUST NOT rely on hardcoded slug alias strings.

---

## Server Action: `createScheduleAction`

No schema change. Continues to write `experience_slug: data.experienceSlug` to `experience_schedules`.

---

## Data flow

```
schedules/page.tsx (RSC)
  → adminGetAll() → ExperienceOption[]
  → ScheduleManager (client)
  → createScheduleAction → experience_schedules.experience_slug
```

---

## Acceptance

- Admin selects "السفر في جميع مدن الصين" from dropdown → schedule appears on matching public detail page after refresh.
- Zero slug mismatch errors when using dropdown (SC-006).
