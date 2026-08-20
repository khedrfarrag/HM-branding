# Research: Services Content Pages & Contact Form Redesign

**Feature**: 017-services-content-pages-redesign
**Phase**: Phase 0 — Research & Unknowns Resolution

---

## 1. Existing Architecture Assessment

### Decision: Extend existing routes, do NOT create new routing groups
- **Rationale**: `/services/[slug]`, `/success-stories`, and `/contact` already exist in `src/app/[locale]/(marketing)/`. The existing `LocalFsServiceRepository` provides all 3 services (sourcing, quality-control, verification). We add a 4th service (customs/logistics) and expand entity fields.
- **Alternatives considered**: Feature-scoped routing group — rejected, adds unnecessary complexity.

### Decision: Replace `HubIndexPage` generic component with dedicated luxury feature pages
- **Rationale**: The current `HubIndexPage` is a generic card grid without brand identity. Services require expressive hero sections, process timelines, and booking CTAs per spec requirement FR-001 and FR-002. The new pages will use feature-first components in `src/features/services/`.
- **Alternatives considered**: Extend `HubIndexPage` with props — rejected, violates SOLID SRP principle.

---

## 2. Component Strategy

### Decision: Feature-first components in `src/features/services/`
- **Rationale**: Constitution §24 (Feature-First Architecture) mandates feature isolation in `src/features/[feature]/`. Services, success-stories, and contact form are distinct business features.
- **Structure**:
  ```
  src/features/services/
    components/
      ServicesHubPage.tsx        ← luxury hub with grid
      ServiceDetailPage.tsx      ← article + timeline + CTA
      ServiceProcessTimeline.tsx ← step-by-step timeline component
      ServiceCard.tsx            ← individual service card with image
  src/features/success-stories/
    components/
      SuccessStoriesHubPage.tsx
      SuccessStoryCard.tsx
      SuccessStoryDetailPage.tsx
  src/features/contact/
    components/
      ContactPageLayout.tsx      ← luxury split layout with brand visual
      ContactForm.tsx            ← client form with dark glass inputs
  ```

---

## 3. Data Enrichment Needed

### Decision: Extend Service entity with `deliverables` and `coverImage` fields
- **Rationale**: Service detail pages per FR-001 must show key deliverables and an expressive cover image. The current `Service` entity in `src/domains/services/entities.ts` lacks `deliverables[]`.
- **Action**: Add `deliverables: string[]` field to `Service` entity and populate in repository.

### Decision: Add 4th service — Customs & Logistics
- **Rationale**: Spec user story 1 mentions 4 services (Sourcing, Quality Control, Supplier Verification, Customs/Logistics). Repository currently has only 3.
- **Action**: Add `customs-logistics` slug to `LocalFsServiceRepository`.

### Decision: Add `[slug]` route to `/success-stories/[slug]/page.tsx`
- **Rationale**: Currently `/success-stories` only has a hub page. Spec requires detail pages per FR-003.
- **Action**: Create `src/app/[locale]/(marketing)/success-stories/[slug]/page.tsx`.

---

## 4. Contact Form Strategy

### Decision: Server Action for contact form (not API route)
- **Rationale**: Contact form does not require `RESEND_API_KEY` for the initial MVP submission; it records to Supabase. Using Server Actions is consistent with the booking system pattern. A graceful email fallback can be added post-MVP.
- **Alternatives considered**: REST API route — same pattern used for submit-booking; acceptable but adds complexity for a simple contact form.

### Decision: Rich split-panel contact page layout
- **Rationale**: Spec US3 mandates expressive brand visual side panel + luxury dark glass inputs. Current contact page is a simple 2-column info card. The redesign wraps a brand visual (generated image) alongside a luxury form.
- **Implementation**: Left panel = brand visual + contact info. Right panel = luxury dark glass form.

---

## 5. Image Strategy

### Decision: Generate 4 expressive service hero images + 1 contact visual
- **Rationale**: Each service detail page needs a cinematic hero banner (FR-001). Contact page needs brand-aligned visual (US3).
- **Images to generate** (via `generate_image`):
  - `sourcing-hero.png` — factory floor with products being evaluated
  - `quality-control-hero.png` — inspector with clipboard in factory
  - `verification-hero.png` — document audit with stamps and seals
  - `customs-hero.png` — cargo containers at port
  - `contact-visual.png` — Hussam-style luxury dark business visual

---

## 6. Styling & Motion

### Decision: Use existing design tokens + `text-gradient-gold-animated` from feature 016
- **Rationale**: Feature 016 established `text-gradient-gold-animated`, `SectionHeader`, and `ScrollReveal`. All new pages reuse these without introducing new CSS.
- **Motion**: Framer Motion `RevealSection`/`StaggerReveal` for scroll animations, Framer Motion `layoutId` for service card transitions.

---

## 7. i18n Strategy

### Decision: Inline bilingual strings in repository (not i18n dictionaries)
- **Rationale**: Services content is managed via `LocalFsServiceRepository` which already uses `isAr` flag for locale-aware strings. Consistent with existing pattern for services, knowledge, and media content.
- **Contact form labels**: Inline `isAr` checks in `ContactForm.tsx` for field labels and validation messages.

---

## Summary of Resolved Unknowns

| Unknown | Decision |
|---------|----------|
| New routes vs extend existing | Extend existing |
| Generic `HubIndexPage` vs feature components | Feature-first components |
| Service entity fields | Add `deliverables[]`, 4th service |
| Contact form submission mechanism | Server Action → Supabase |
| Contact page layout | Split-panel luxury layout |
| Image assets | Generate 5 images |
| Styling approach | Reuse design tokens from 016 |
