# Data Model: Navigation Fix, Admin Experience Management & Content Sync

**Feature**: 010-nav-admin-content-sync  
**Date**: 2026-07-20

---

## New Entity: Experience (Supabase-backed)

### Supabase Table: `experiences`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | `uuid` | PK, default `gen_random_uuid()` | Unique identifier |
| `slug` | `text` | UNIQUE, NOT NULL | URL-safe identifier (e.g., `canton-fair-business-experience`) |
| `type` | `text` | NOT NULL | Must be a valid `ExperienceType` value |
| `title_ar` | `text` | NOT NULL | Arabic title |
| `title_en` | `text` | NOT NULL | English title |
| `short_description_ar` | `text` | nullable | Arabic short description for cards |
| `short_description_en` | `text` | nullable | English short description for cards |
| `full_description_ar` | `text` | nullable | Full Arabic body content |
| `full_description_en` | `text` | nullable | Full English body content |
| `cover_image` | `text` | nullable | Path relative to `/public/`, e.g., `/images/experiences/canton-fair.jpg` |
| `price` | `numeric` | nullable | Price in the specified currency |
| `currency` | `text` | default `'USD'` | ISO 4217 currency code |
| `itinerary` | `jsonb` | default `'[]'` | Array of `{ day, title_ar, title_en, activities_ar[], activities_en[] }` |
| `city_slug` | `text` | nullable | FK reference to a China city slug |
| `status` | `text` | default `'published'` | `'published'` or `'draft'` |
| `published_at` | `timestamptz` | default `now()` | Publication timestamp |
| `updated_at` | `timestamptz` | default `now()` | Last update timestamp |

### Relationship to `experience_schedules`
- `experience_schedules.experience_slug` → references `experiences.slug`
- One experience can have many schedule slots (one-to-many)

---

## Modified Entity: ChinaCity

Add `coverImage` field to the `ChinaCity` domain entity:

### Domain Type Change (`src/domains/china/entities.ts`)

```
ChinaCity {
  slug: string
  name: string
  nameEn: string
  region: string
  coordinates: { latitude, longitude }
  description: string
  bestVisitMonths: string[]
  coverImage: string | null   ← NEW FIELD
  ...existing fields
}
```

### Repository Mock Data Update (`src/repositories/local-fs/china.ts`)

| City | `coverImage` value |
|------|--------------------|
| `guangzhou` | `/images/china/guangzhou.jpg` |
| `yiwu` | `/images/china/yiwu.jpg` |

---

## Modified Entity: Article (image path fix)

The knowledge article mock data fallback currently uses the wrong image path.

### Repository Fix (`src/repositories/local-fs/knowledge.ts`)

| Field | Before | After |
|-------|--------|-------|
| `coverImage` (mock fallback) | `/images/covers/import-guide.jpg` | `/images/knowledge/importing.jpg` |

---

## Modified Entity: Service (add missing services)

Two service entries must be added to the repository mock data.

### New Service Records (`src/repositories/local-fs/services.ts`)

**Quality Control Service**
| Field | Value |
|-------|-------|
| `slug` | `quality-control` |
| `title_ar` | `فحص الجودة والتحقق من المنتجات` |
| `title_en` | `Quality Control & Product Inspection` |
| `coverImage` | `/images/services/quality-control.jpg` |

**Supplier Verification Service**
| Field | Value |
|-------|-------|
| `slug` | `verification` |
| `title_ar` | `التحقق من الموردين وتدقيق المصانع` |
| `title_en` | `Supplier Verification & Factory Audit` |
| `coverImage` | `/images/services/verification.jpg` |

---

## Navigation Config Changes (`src/config/navigation.ts`)

### Removed Links
| Link | Reason |
|------|--------|
| `/downloads` (Knowledge sub-nav) | No downloads content system exists |

### Links Now Backed by Pages
| Link | New Page |
|------|----------|
| `/success-stories` | `src/app/[locale]/(marketing)/success-stories/page.tsx` |
| `/contact` | `src/app/[locale]/(marketing)/contact/page.tsx` |
| `/services/quality-control` | Backed by new service mock data entry |
| `/services/verification` | Backed by new service mock data entry |
| `/trade-intelligence/shipping-news` | Backed by new `[type]/page.tsx` hub |
| `/trade-intelligence/customs-updates` | Backed by new `[type]/page.tsx` hub |
| `/trade-intelligence/currency-rates` | Backed by new `[type]/page.tsx` hub |
| `/trade-intelligence/supply-chain-alerts` | Backed by new `[type]/page.tsx` hub |

---

## Admin Booking Labels Dictionary

### Keys to Add (`src/dictionaries/en.json` and `src/dictionaries/ar.json`)

Under `admin.dashboard.bookings.types`:

| Key | English | Arabic |
|-----|---------|--------|
| `consultation` | `Consultation` | `استشارة` |
| `experience` | `Field Experience` | `تجربة ميدانية` |
| `corporate` | `Corporate Program` | `برنامج مؤسسي` |
| `event` | `Event` | `فعالية` |
| `unknown` | `Unknown` | `غير معروف` |
