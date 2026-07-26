# Implementation Plan: Experience & Schedule Admin UX Fix

**Branch**: `011-experience-schedule-fix` | **Date**: 2026-07-26 | **Spec**: [spec.md](./spec.md)

---

## Summary

Feature 011 closes the gap between admin-created experiences/schedules and the public booking flow. The root cause is twofold:

1. **Repository bug**: `getExperienceBySlug` in `src/repositories/supabase/experiences.ts` never merges `experience_schedules`, so the detail page always hides the booking section.
2. **Admin UX gaps**: manual slug entry in `ScheduleManager.tsx`, no edit flow, wrong experience types in create form, no cover image on public detail page.

**Approach**: Extract shared schedule-merge logic, wire admin dropdown from DB, extend public detail UI, add `adminUpdate` + edit page mirroring 010 create patterns. **No new Supabase migrations** — tables from 007/010 are sufficient.

---

## Technical Context

| Item | Value |
|------|-------|
| **Language/Version** | TypeScript 5 / Next.js 15 App Router / React 19 |
| **Primary Dependencies** | Supabase (PostgreSQL + Storage), React Hook Form, Zod, Tailwind CSS v4 |
| **Storage** | Existing `experiences` + `experience_schedules` tables; `experiences` Storage bucket |
| **Testing** | Manual quickstart scenarios |
| **Target Platform** | Web — admin portal + bilingual public site |
| **Constraints** | Slug immutable on edit; booking flow not rebuilt |

---

## Constitution Check

| Principle | Status |
|-----------|--------|
| TypeScript strict | Pass |
| Zod validation on server actions | Pass |
| Server Components by default | Pass |
| Feature-first architecture | Pass |
| No unauthorized packages | Pass |
| YAGNI | Pass — no CMS, no schedule edit |

---

## Proposed Changes

### P1 — Repository fix + schedule dropdown (US1, US2 core)

| File | Change |
|------|--------|
| `src/repositories/supabase/experiences.ts` | Extract schedule merge; fix `getExperienceBySlug`; add price/currency to date mapping |
| `src/domains/shared/value-objects.ts` | Add `price?`, `currency?` to `ExperienceDate` |
| `src/app/[locale]/(experiences)/experiences/[type]/[slug]/page.tsx` | Per-schedule price, capacity, closed/full states |
| `src/app/admin/(protected)/dashboard/schedules/page.tsx` | Fetch experiences, pass to ScheduleManager |
| `src/features/admin/components/ScheduleManager.tsx` | Experience dropdown, title lookup in table |
| `src/dictionaries/ar.json`, `en.json` | New schedule/detail labels |

### P2 — Cover image (US3)

| File | Change |
|------|--------|
| `src/app/[locale]/(experiences)/experiences/[type]/[slug]/page.tsx` | Conditional cover hero before title |

### P2 — Admin edit + types (US4, US5)

| File | Change |
|------|--------|
| `src/repositories/supabase/experiences.ts` | `adminGetById`, `adminUpdate` |
| `src/features/admin/actions/manage-experiences.ts` | `updateExperienceAction` |
| `src/features/admin/schemas/experience.schema.ts` | `ExperienceUpdateSchema`, enum type validation |
| `src/features/admin/components/ExperienceForm.tsx` | NEW shared form |
| `src/app/admin/(protected)/dashboard/experiences/[id]/edit/page.tsx` | NEW edit page |
| `src/app/admin/(protected)/dashboard/experiences/page.tsx` | Edit link |
| `src/app/admin/(protected)/dashboard/experiences/new/page.tsx` | Use shared form + 7 types |

---

## Verification Plan

1. `npm run lint` — zero errors
2. `npm run build` — all routes compile
3. Run all scenarios in [quickstart.md](./quickstart.md)
4. Confirm SC-001 through SC-006 from spec

---

## Design Artifacts

| Artifact | Path |
|----------|------|
| Research | [research.md](./research.md) |
| Data model | [data-model.md](./data-model.md) |
| Contracts | [contracts/](./contracts/) |
| Quickstart | [quickstart.md](./quickstart.md) |
| Tasks | [tasks.md](./tasks.md) |

---

## Dependencies & Execution Order

1. Foundational: `ExperienceDate` extension + schedule merge helper
2. US1: Admin dropdown + repository fix for detail page
3. US2: Detail page polish (price, capacity, states)
4. US3: Cover image
5. US4: Edit flow
6. US5: Type alignment (can parallel with US4)
7. Polish: lint, build, quickstart

**MVP**: Repository fix + schedule dropdown — unblocks entire booking path.
