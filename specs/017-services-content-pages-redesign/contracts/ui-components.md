# UI Component Contracts: Services Content Pages & Contact Form Redesign

**Feature**: 017-services-content-pages-redesign
**Phase**: Phase 1 — Contracts

---

## Page-Level Components

### `ServicesHubPage`
**Location**: `src/features/services/components/ServicesHubPage.tsx`
**Type**: Server Component (receives plain props from page.tsx)

```typescript
interface ServicesHubPageProps {
  locale: Locale;
  services: Service[];
}
```

**Layout**:
- Full-bleed dark hero section with `SectionHeader` (animated gold gradient title)
- 4-card responsive grid (1 col mobile → 2 cols tablet → 2 cols desktop, cards tall)
- Each card: `ServiceCard` component with background image + dark overlay
- Footer CTA strip → "Book Consultation" link

---

### `ServiceDetailPage`
**Location**: `src/features/services/components/ServiceDetailPage.tsx`
**Type**: Server Component

```typescript
interface ServiceDetailPageProps {
  locale: Locale;
  service: Service;
}
```

**Layout**:
1. **Hero** — Full-width banner with `coverImage` + dark overlay + service badge + h1 title
2. **Executive Summary** — shortDescription in large font
3. **Full Description** — article body paragraph
4. **Process Timeline** — `ServiceProcessTimeline` component
5. **Deliverables** — icon-list of key deliverables
6. **Related Success Stories** — cards linking to `/success-stories/[slug]`
7. **Booking CTA** — prominent link to `/booking/consultation/book-consultation`

---

### `ServiceCard`
**Location**: `src/features/services/components/ServiceCard.tsx`
**Type**: Server Component

```typescript
interface ServiceCardProps {
  title: string;
  shortDescription: string;
  href: string;
  coverImage: string | null;
  index: number; // for animation stagger delay
}
```

**Behavior**:
- Dark glass card with expressive background image
- Hover: scale image + reveal description (smooth `max-h` transition)
- Gradient overlay ensures text legibility

---

### `ServiceProcessTimeline`
**Location**: `src/features/services/components/ServiceProcessTimeline.tsx`
**Type**: Client Component (scroll animation via Framer Motion)

```typescript
interface ServiceProcessTimelineProps {
  steps: ProcessStep[];
  locale: Locale;
}
```

**Layout**:
- Vertical numbered timeline with connecting line
- Each step: animated gold bullet node + title + description
- Scroll reveal via `StaggerReveal`/`StaggerItem` from `ScrollReveal`

---

## Success Stories Components

### `SuccessStoriesHubPage`
**Location**: `src/features/success-stories/components/SuccessStoriesHubPage.tsx`
**Type**: Server Component

```typescript
interface SuccessStoriesHubPageProps {
  locale: Locale;
  stories: SuccessStory[];
}
```

**Layout**:
- Dark luxury hero with animated gradient title
- Grid of `SuccessStoryCard` components (1 col → 2 cols → 3 cols)

---

### `SuccessStoryCard`
**Location**: `src/features/success-stories/components/SuccessStoryCard.tsx`
**Type**: Server Component

```typescript
interface SuccessStoryCardProps {
  story: SuccessStory;
  locale: Locale;
}
```

**Displays**: Industry badge, clientName, result metric (bold/gold), testimonialQuote snippet, and CTA link.

---

### `SuccessStoryDetailPage`
**Location**: `src/features/success-stories/components/SuccessStoryDetailPage.tsx`
**Type**: Server Component

```typescript
interface SuccessStoryDetailPageProps {
  locale: Locale;
  story: SuccessStory;
  relatedService: Service | null;
}
```

**Layout**: Challenge → Solution → Result (3-column metric cards) → Full Quote → Related Service link

---

## Contact Feature Components

### `ContactPageLayout`
**Location**: `src/features/contact/components/ContactPageLayout.tsx`
**Type**: Server Component (shell only)

```typescript
interface ContactPageLayoutProps {
  locale: Locale;
  children: React.ReactNode; // renders ContactForm as client child
}
```

**Layout**:
- Two-column: Left = brand visual panel (expressive image + contact details overlay) | Right = form panel
- Mobile: stacked (visual top → form bottom)
- Left panel uses `/images/contact/contact-visual.png` with dark glass overlay

---

### `ContactForm`
**Location**: `src/features/contact/components/ContactForm.tsx`
**Type**: Client Component (`"use client"`)

```typescript
// No external props — locale is read from URL via useParams()
// Form state managed via react-hook-form + Zod validation
```

**Fields** (in order):
1. Full Name — text input
2. Email — email input
3. Phone — tel input with country prefix hint
4. Country — text input
5. Service Interest — select dropdown (5 options)
6. Message — textarea, min 20 chars

**Behavior**:
- Luxury dark glass inputs with gold `focus:ring` and gold `focus:border`
- Real-time Zod validation on blur
- Submit → POST to `/api/contact` → success state shows confirmation
- Error state shows retry message in Arabic/English

---

## Shared Component Reuse

| Component | Source | Usage |
|-----------|--------|-------|
| `SectionHeader` | `src/components/SectionHeader.tsx` | Hub page titles |
| `ScrollReveal` / `RevealSection` | `src/components/ScrollReveal.tsx` | All scroll animations |
| `JsonLd` | `src/components/JsonLd.tsx` | Schema markup |
| `Breadcrumb` | `src/components/Breadcrumb.tsx` | All detail pages |

---

## API Contract

### POST `/api/contact`

**Request Body** (validated by Zod):
```typescript
{
  name: string;          // min 2, max 100
  email: string;         // valid email
  phone: string;         // min 7, max 20
  country: string;       // min 2, max 60
  service_interest: string; // enum: sourcing | quality-control | verification | customs-logistics | general
  message: string;       // min 20, max 2000
  locale: "ar" | "en";
}
```

**Success Response**: `{ success: true }`
**Error Response**: `{ error: string, field?: string }`
