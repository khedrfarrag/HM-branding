# Feature Specification: Hero Section — Personal Brand Repositioning

**Feature Branch**: `018-hero-personal-brand-reposition`

**Created**: 2026-08-12

**Status**: Draft

**Input**: Refactor and improve the existing Hero section of Hussam Mabrouk's Personal Brand website to reposition him from a "Logistics Expert" to a "China Trade, Sourcing & Manufacturing Expert", with updated bilingual copy (Arabic/English), improved visual hierarchy, stronger personal portrait presence, and a compact Trust Bar below the Hero — all without rebuilding the page from scratch.

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 — First Impression: Immediate Brand Clarity (Priority: P1)

A prospective entrepreneur or business owner lands on the homepage for the first time. Within 3 seconds they understand who Hussam Mabrouk is, what he specializes in, and what he can help them achieve — without scrolling.

**Why this priority**: The Hero is the highest-impact section. If visitors do not immediately understand the brand positioning, they will leave. Every other section depends on this first impression landing correctly.

**Independent Test**: Open the homepage in both Arabic and English, observe the Hero section for 3 seconds without scrolling, and confirm: (1) the positioning label is visible, (2) the headline communicates a clear outcome, (3) the supporting text explains who is helped and how, and (4) the CTAs are immediately actionable.

**Acceptance Scenarios**:

1. **Given** a visitor opens the homepage in Arabic, **When** the Hero renders, **Then** the eyebrow reads "خبير التجارة والتوريد والتصنيع من الصين", the headline communicates a clear business outcome about China trade, and both CTAs are visible above the fold.
2. **Given** a visitor opens the homepage in English, **When** the Hero renders, **Then** the eyebrow reads "China Trade, Sourcing & Manufacturing Expert", the headline conveys a strong positioning outcome, and both CTAs are immediately actionable.
3. **Given** a visitor scans the Hero, **When** they read the positioning, **Then** they do NOT associate the brand primarily with "logistics" — they associate it with China trade, sourcing, manufacturing, and supply chain.

---

### User Story 2 — Bilingual Experience: Arabic RTL & English LTR (Priority: P2)

A visitor switches between the Arabic and English versions of the site. The Hero layout, text direction, alignment, button order, and spacing behave correctly for each language without visual breakage.

**Why this priority**: The site serves both Arabic-speaking MENA markets and English-speaking international audiences. RTL/LTR correctness is non-negotiable for brand credibility.

**Independent Test**: Toggle locale between `ar` and `en`. Verify: text direction flips, alignment is correct, CTA buttons remain properly ordered, the portrait remains in the correct visual position, and no layout elements overflow or misalign.

**Acceptance Scenarios**:

1. **Given** the locale is Arabic, **When** the Hero renders, **Then** all text is RTL-aligned, buttons are correctly positioned for RTL flow, and the layout does not break.
2. **Given** the locale is English, **When** the Hero renders, **Then** all text is LTR-aligned, buttons are correctly positioned for LTR flow, and the layout does not break.
3. **Given** either locale, **When** a screen reader navigates the Hero, **Then** the heading hierarchy is correct (one H1, followed by supporting content), and links/buttons have accessible labels.

---

### User Story 3 — Responsive Experience: Mobile & Desktop (Priority: P2)

A visitor accesses the site on a mobile phone. The Hero is readable, visually strong, and the CTAs are tappable. On desktop, the two-column layout is maintained with the portrait prominently displayed.

**Why this priority**: A significant share of traffic comes from mobile. A broken or degraded mobile Hero damages the brand perception critically.

**Independent Test**: View the Hero at 375px (mobile), 768px (tablet), and 1280px+ (desktop). Verify: mobile stacks content in the correct priority order (positioning -> headline -> supporting text -> CTAs -> portrait -> trust indicators), headline does not break awkwardly, and buttons are tappable.

**Acceptance Scenarios**:

1. **Given** a mobile viewport (<=640px), **When** the Hero renders, **Then** content stacks vertically with the correct priority order, buttons are at least 44px tall, and no text overflows.
2. **Given** a desktop viewport (>=1024px), **When** the Hero renders, **Then** the two-column layout is preserved, the portrait is prominently displayed, and the headline is the dominant visual element.
3. **Given** a tablet viewport (640px-1024px), **When** the Hero renders, **Then** the layout adapts gracefully without broken columns or overflowing elements.

---

### User Story 4 — Trust Bar: Expertise Indicators Below Hero (Priority: P3)

Directly below the Hero section, a compact Trust/Expertise Bar communicates Hussam Mabrouk's areas of expertise using concise qualitative labels. This reinforces the brand positioning without requiring the visitor to scroll deep into the page.

**Why this priority**: Trust signals reinforce the Hero positioning immediately. They do not add length to the Hero itself but provide visual confirmation of the brand's scope.

**Independent Test**: Scroll just below the Hero fold and verify the Trust Bar is visible, displays the correct expertise labels in the active locale, and does not contain invented statistics or unverifiable numerical claims.

**Acceptance Scenarios**:

1. **Given** the page loads in Arabic, **When** the Trust Bar renders, **Then** it displays qualitative expertise labels in Arabic with no fake statistics.
2. **Given** the page loads in English, **When** the Trust Bar renders, **Then** it displays the equivalent labels in English with no fake statistics.
3. **Given** verified numbers exist in the existing content (e.g., years of experience, countries served), **When** the Trust Bar renders, **Then** those verified numbers MAY be displayed alongside labels; if no verified numbers exist, only qualitative labels are shown.

---

### Edge Cases

- What happens if the `dict.hero` dictionary key structure changes? The Hero must not crash — it should fall back gracefully if optional keys are missing.
- What happens if the portrait image file is not found? The layout must remain intact and the alt text must be meaningful.
- What happens when the headline phrase rotator renders a very long phrase? The layout must not break on mobile or cause horizontal overflow.
- What happens when `prefers-reduced-motion` is active? Typewriter/phrase animation must stop or simplify; layout must remain fully functional.
- What happens when the Trust Bar labels are translated into longer Arabic strings? The Trust Bar must accommodate longer text without breaking its horizontal layout.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The Hero section MUST display an eyebrow/positioning label that reads "خبير التجارة والتوريد والتصنيع من الصين" (Arabic) or "China Trade, Sourcing & Manufacturing Expert" (English).
- **FR-002**: The Hero headline MUST be updated to communicate a clear, outcome-oriented brand message focused on China trade — replacing any previous "logistics" or "supply chain company" framing.
- **FR-003**: The Hero supporting paragraph MUST explain who Hussam Mabrouk helps and how, referencing sourcing, manufacturing, importing, shipping, and supply chains.
- **FR-004**: The Hero MUST display two CTAs: a primary CTA ("استكشف المعرفة" / "Explore the Knowledge") and a secondary CTA ("احجز استشارة" / "Book a Consultation").
- **FR-005**: All Hero copy changes MUST be made inside the existing localization dictionary files (ar.json and en.json) — not hardcoded into components.
- **FR-006**: The existing professional portrait MUST be used in the Hero with improved presentation (larger, more confident visual presence, meaningful alt text, proper object-fit/object-position).
- **FR-007**: A Trust Bar MUST be added directly below the Hero section, displaying expertise labels in the active locale. It MUST NOT contain unverified numerical statistics.
- **FR-008**: The Hero MUST render correctly in RTL (Arabic) and LTR (English) without manual alignment overrides that bypass locale direction.
- **FR-009**: The Hero MUST remain responsive across mobile (>=320px), tablet (>=640px), and desktop (>=1024px) viewports.
- **FR-010**: The Hero MUST preserve the existing design language: dark background, gold accent color, typography system, spacing tokens, animation system, and component reuse.
- **FR-011**: The heading hierarchy MUST contain exactly one H1 element in the Hero section.
- **FR-012**: Animations MUST respect the prefers-reduced-motion media query.
- **FR-013**: No new third-party libraries MUST be introduced as a result of this change.
- **FR-014**: Sections outside the Hero (About, Global, Industries, Services, Journey, Testimonials, Booking, Footer) MUST remain unchanged.

### Key Entities

- **Hero Section**: The top-of-page section containing positioning, headline, supporting text, CTAs, portrait, and stats.
- **Trust Bar**: A compact horizontal band below the Hero displaying expertise/domain qualitative labels.
- **Localization Dictionary** (ar.json / en.json): Source of truth for all visible copy. Updates MUST be made here.
- **Portrait Image**: The professional photo of Hussam Mabrouk displayed in the Hero visual column.
- **TypingHeadline Component**: The existing animated phrase rotator for the Hero headline. Updated phrases must fit this component's existing interface.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A visitor can identify Hussam Mabrouk's primary area of expertise (China Trade, Sourcing & Manufacturing) within 3 seconds of the Hero rendering without scrolling.
- **SC-002**: The word "logistics" does NOT appear as the primary positioning term in the Hero for either locale.
- **SC-003**: Both Arabic and English versions of the Hero pass an RTL/LTR visual check with no misaligned elements.
- **SC-004**: The Hero renders without layout breakage or overflow at 320px, 375px, 640px, 768px, 1280px, and 1440px viewport widths.
- **SC-005**: The Trust Bar is visible below the Hero fold on all tested viewports and displays only verified or qualitative trust signals — no invented numerical claims.
- **SC-006**: All existing page sections outside the Hero continue to render correctly and are visually unchanged after the Hero update.
- **SC-007**: The Hero and Trust Bar pass a basic accessibility check: one H1, meaningful image alt text, tappable CTAs (min 44px height), and sufficient color contrast.
- **SC-008**: No new runtime errors or TypeScript compilation errors are introduced by the Hero changes.
- **SC-009**: The project builds and passes lint checks after all changes.

---

## Assumptions

- The existing TypingHeadline component accepts a `phrases` array prop and can display updated Arabic/English phrases without modification to the component itself.
- The existing FloatingSocials component in the Hero visual column can be replaced by or composed with a portrait image without breaking unrelated functionality.
- The `personal-img.png` file at `public/images/personal-img.png` is the intended professional portrait for the Hero.
- Verified statistics currently in the project (e.g., "42 countries served", "19 years industry leadership") MAY be used in the Trust Bar if already present in the existing dictionary — they are not to be invented.
- The global design tokens (colors, spacing, typography) defined in the Tailwind configuration are sufficient to style the Trust Bar without introducing new tokens.
- The Trust Bar will be added to `HomePage.tsx` immediately after the Hero section — it is not part of the Hero's internal layout.
- The existing Next.js Image component is available and MUST be used for the portrait instead of a raw img tag, in compliance with the project constitution.
- RTL/LTR direction is handled at the root html element based on locale — the Hero does not need to set its own dir attribute.
- The English copy should NOT be a literal translation of the Arabic copy. It must be independently written for a native English-speaking international audience.
