# Research: Navigation Fix, Admin Experience Management & Content Sync

**Feature**: 010-nav-admin-content-sync
**Date**: 2026-07-20

---

## 1. Navigation 404 Root Causes

### Decision: Fix navigation by a combination of (a) removing phantom links and (b) creating missing pages
**Rationale**: Some linked pages need to exist (contact, services/quality-control, success-stories, trade-intel type hubs). Others can be temporarily removed until built.
**Alternatives considered**: Removing all broken links — rejected because trade-intel hubs and service pages are genuinely useful content that should exist.

### Finding: Trade Intelligence `[type]` Hub Page Missing
- `src/app/[locale]/(trade-intel)/trade-intelligence/[type]/` — only contains `[slug]/` subfolder
- **No `page.tsx`** at the `[type]` level → any click on a type link (e.g., `/ar/trade-intelligence/shipping-news`) returns 404
- **Fix**: Add `src/app/[locale]/(trade-intel)/trade-intelligence/[type]/page.tsx` filtering articles by type using the existing trade-intel repository

### Finding: Service pages missing for `quality-control` and `verification`
- `src/repositories/local-fs/services.ts` only returns `sourcing` service
- No content for `/services/quality-control` or `/services/verification`
- **Fix**: Add `quality-control` and `verification` entries to the services repository mock data

### Finding: `success-stories` and `contact` pages don't exist
- No route at `src/app/[locale]/success-stories/` or `src/app/[locale]/contact/`
- **Fix**: Create simple static pages for both. Success stories page can list from the existing `getSuccessStories()` repository method. Contact page can be a simple form or info card.

### Finding: `downloads` link in Knowledge nav leads to non-existent page
- No `downloads` route exists anywhere in the app
- **Fix**: Remove `/downloads` from `navigation.ts` since there is no download content system

---

## 2. Admin Experience Management

### Decision: Use Supabase `experiences` table + Admin UI form
**Rationale**: The current system uses `LocalFsExperienceRepository` which reads from `content/experiences/*.md` files with a mock data fallback. Migrating to Supabase is consistent with how `experience_schedules` and `bookings` are already managed. This allows admin to create experiences without code deployments.
**Alternatives considered**: 
- Markdown file editing via admin UI — rejected, too complex for non-technical users
- Continuing with mock data — rejected, defeats the purpose of an admin panel

### Finding: `LocalFsExperienceRepository` architecture
```
getExperiences(locale, type?):
  1. Reads content/experiences/*.md files  
  2. Falls back to hardcoded mock data if empty
  3. Merges live schedules from Supabase experience_schedules table
```
The `dates` field is already pulled from Supabase. We only need to add the experience metadata (title, description, image) to Supabase.

### Decision: New Supabase table `experiences`
**Schema**:
```sql
experiences (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  type text not null,  -- ExperienceType value
  title_ar text not null,
  title_en text not null,
  short_description_ar text,
  short_description_en text,
  full_description_ar text,
  full_description_en text,
  cover_image text,
  price numeric,
  currency text default 'USD',
  itinerary jsonb default '[]',
  city_slug text,
  status text default 'published',
  published_at timestamptz default now(),
  updated_at timestamptz default now()
)
```

### Decision: SupabaseExperienceRepository replaces LocalFsExperienceRepository
**Rationale**: A new `SupabaseExperienceRepository` class reads from the `experiences` table. The `LocalFsExperienceRepository` stays as legacy but is no longer wired to the page. Schedule data merge (existing) stays in the new repository.

---

## 3. Booking Filter Type Labels

### Finding: `getTypeLabel()` in admin bookings page only handles `consultation` and `experience`
```typescript
const getTypeLabel = (val: string) => {
  if (val === "all") return locale === "ar" ? "كل الأنواع" : "All Types";
  if (val === "consultation") return dict.admin.dashboard.schedules.types.consultation;
  if (val === "experience") return dict.admin.dashboard.schedules.types.experience;
  return val;  // ← raw value shown for "corporate", "event", and any legacy strings
};
```
- **Fix**: Add labels for `corporate` and `event` to the dictionary + `getTypeLabel`

### Finding: Legacy booking with `target_type = "جولة الصين الاستكشافية"`
- This is a manually-inserted test booking in Supabase with a raw Arabic string instead of an enum value
- **Fix**: Admin UI should show a fallback label like `(غير معروف)` for unrecognized types; the bad data record can be corrected manually in Supabase

---

## 4. Image Path Corrections

### Finding: Knowledge article mock data has wrong image path
- Mock fallback in `knowledge.ts` line 80: `coverImage: "/images/covers/import-guide.jpg"` 
- Actual generated file is at: `public/images/knowledge/importing.jpg`
- **Fix**: Update mock data coverImage to `/images/knowledge/importing.jpg`

### Finding: China city entities have no `coverImage` field
- `LocalFsChinaRepository.getCities()` returns city objects with no `coverImage` property
- The `ChinaCity` entity type likely doesn't include a `coverImage` field
- **Fix**: Add `coverImage` to `ChinaCity` entity + repository mock data, pointing to `/images/china/guangzhou.jpg` and `/images/china/yiwu.jpg`

### Finding: Experience mock data already has correct image path
- `experiences.ts` line 80: `coverImage: "/images/experiences/canton-fair.jpg"` ✅ correct

---

## Summary of Changes Required

| Area | Change Type | Files |
|------|-------------|-------|
| Trade Intel hub pages | NEW FILE | `src/app/[locale]/(trade-intel)/trade-intelligence/[type]/page.tsx` |
| Service missing data | MODIFY | `src/repositories/local-fs/services.ts` |
| Success Stories page | NEW FILE | `src/app/[locale]/(marketing)/success-stories/page.tsx` |
| Contact page | NEW FILE | `src/app/[locale]/(marketing)/contact/page.tsx` |
| Remove `/downloads` nav | MODIFY | `src/config/navigation.ts` |
| Experiences Supabase table | NEW TABLE | Supabase migration SQL |
| SupabaseExperienceRepository | NEW FILE | `src/repositories/supabase/experiences.ts` |
| Admin Experience Manager UI | NEW FILES | `src/app/admin/(protected)/dashboard/experiences/` |
| Booking type labels | MODIFY | `src/app/admin/(protected)/dashboard/bookings/page.tsx` + dictionaries |
| Knowledge image path | MODIFY | `src/repositories/local-fs/knowledge.ts` |
| China city coverImage | MODIFY | `src/repositories/local-fs/china.ts` + `src/domains/china/entities.ts` |
