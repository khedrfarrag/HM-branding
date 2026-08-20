# Data Model: Services Content Pages & Contact Form Redesign

**Feature**: 017-services-content-pages-redesign
**Phase**: Phase 1 — Design & Contracts

---

## Entities

### Service (Extended)

**Location**: `src/domains/services/entities.ts`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `slug` | `string` | ✅ | URL key: `sourcing`, `quality-control`, `verification`, `customs-logistics` |
| `status` | `ContentStatus` | ✅ | `published` \| `draft` |
| `publishedAt` | `string \| null` | ✅ | ISO-8601 |
| `updatedAt` | `string \| null` | ✅ | ISO-8601 |
| `seo` | `SEOData` | ✅ | `{ title, description, canonicalPath }` |
| `title` | `string` | ✅ | Localized service title |
| `shortDescription` | `string` | ✅ | 1-2 sentences shown on hub & cards |
| `fullDescription` | `string` | ✅ | Full article body for detail page |
| `coverImage` | `string \| null` | ✅ | Path: `/images/services/{slug}-hero.png` |
| `processSteps` | `ProcessStep[]` | ✅ | Timeline workflow steps (min 3, max 6) |
| `deliverables` | `string[]` | 🆕 NEW | Key deliverables list for detail page |
| `successStorySlugs` | `string[]` | ✅ | Related success story slugs |

**`ProcessStep` (unchanged)**:
```typescript
interface ProcessStep {
  step: number;       // 1-indexed position
  title: string;      // Step label
  description: string; // Detailed explanation
}
```

---

### SuccessStory (Unchanged)

**Location**: `src/domains/services/entities.ts`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `slug` | `string` | ✅ | URL key |
| `status` | `ContentStatus` | ✅ | |
| `publishedAt` | `string \| null` | ✅ | |
| `updatedAt` | `string \| null` | ✅ | |
| `seo` | `SEOData` | ✅ | |
| `clientName` | `string` | ✅ | Client company/person name |
| `industry` | `string` | ✅ | Industry label shown as badge |
| `challenge` | `string` | ✅ | Problem description |
| `solution` | `string` | ✅ | How Hussam resolved it |
| `result` | `string` | ✅ | Quantifiable outcome (e.g., "30% cost saving") |
| `testimonialQuote` | `string` | ✅ | Client testimonial quote |
| `serviceSlug` | `string` | ✅ | Linked service for cross-navigation |

---

### ContactSubmission (New — Supabase write)

**Supabase Table**: `contact_submissions`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | `uuid` | auto | Primary key |
| `name` | `string` | ✅ | Full name, 2–100 chars |
| `email` | `string` | ✅ | Valid email format |
| `phone` | `string` | ✅ | International format with country code |
| `country` | `string` | ✅ | User's country of origin |
| `service_interest` | `string` | ✅ | Selected from: `sourcing`, `quality-control`, `verification`, `customs-logistics`, `general` |
| `message` | `string` | ✅ | Free-form message, min 20 chars |
| `locale` | `string` | ✅ | `ar` \| `en` |
| `created_at` | `timestamp` | auto | Supabase auto-inserts |

---

## State Transitions

### Contact Form States
```
IDLE → SUBMITTING → SUCCESS
               ↘ ERROR (with retry)
```

### Service Content States
```
draft → published
(all 4 services start as published in LocalFsRepository)
```

---

## Relationships

```
Service (1) ──< successStorySlugs >── SuccessStory (many)
SuccessStory ──> serviceSlug ──> Service (1)
ContactSubmission ──> service_interest ──> Service slug (reference only)
```

---

## Services Content Map

| Slug | AR Title | EN Title | Cover Image |
|------|----------|----------|-------------|
| `sourcing` | البحث عن المنتجات والمصادر | Product Sourcing | `/images/services/sourcing-hero.png` |
| `quality-control` | فحص الجودة والتحقق | Quality Control & Inspection | `/images/services/quality-control-hero.png` |
| `verification` | التحقق من الموردين والمصانع | Supplier Verification | `/images/services/verification-hero.png` |
| `customs-logistics` | الشحن والجمارك | Customs & Logistics | `/images/services/customs-hero.png` |
