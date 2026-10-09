# Quickstart: Validation Guide — Hero Personal Brand Repositioning

**Feature**: 018-hero-personal-brand-reposition
**Date**: 2026-08-12

## Prerequisites

- Node.js and npm installed
- Project dependencies installed (`npm install`)
- Local dev server available

## Setup

```bash
cd "g:/hossam mabrouk"
npm run dev
```

Server runs at: http://localhost:3000

---

## Validation Scenarios

### SC-001: Arabic Hero — Brand Clarity

1. Open http://localhost:3000/ar
2. Without scrolling, verify:
   - Badge reads: "خبير التجارة والتوريد والتصنيع من الصين"
   - Phrase rotator cycles through China-trade-focused Arabic phrases
   - Subtitle describes who he helps and how (sourcing, manufacturing, supply chain)
   - Primary CTA reads: "استكشف المعرفة"
   - Secondary CTA reads: "احجز استشارة"
3. PASS if all 5 items are correct. FAIL if any old logistics copy remains.

### SC-002: English Hero — Brand Clarity

1. Open http://localhost:3000/en
2. Without scrolling, verify:
   - Badge reads: "China Trade, Sourcing & Manufacturing Expert"
   - Phrase rotator shows 3 new English China-trade phrases
   - Subtitle reads naturally for international English audience
   - Primary CTA reads: "Explore the Knowledge"
   - Secondary CTA reads: "Book a Consultation"
3. PASS if all 5 items are correct. FAIL if old generic logistics copy remains.

### SC-003: RTL/LTR Layout Check

1. Open /ar — verify text is right-aligned, layout flows RTL
2. Open /en — verify text is left-aligned, layout flows LTR
3. Check that no elements visually overflow or misalign in either locale

### SC-004: Responsive Breakpoints

Test at: 375px, 640px, 768px, 1280px, 1440px (browser DevTools)

For each width:
- Hero renders without horizontal overflow
- Headline wraps cleanly (no awkward single-word orphans on mobile)
- Both CTA buttons are fully visible and tappable (min 44px height)
- Portrait is visible

### SC-005: Trust Bar Validation

1. Scroll just below the Hero section in both /ar and /en
2. Verify the Trust Bar is visible with 5 expertise labels
3. Verify NO numerical statistics appear in the Trust Bar
4. Verify labels match the locale (Arabic for /ar, English for /en)

### SC-006: CTA Link Targets

1. Click "Explore the Knowledge" / "استكشف المعرفة" — should scroll to #services
2. Click "Book a Consultation" / "احجز استشارة" — should scroll to #book

### SC-007: Unaffected Sections

Scroll through the full page and verify:
- About, Global, Industries, Services, Journey, Testimonials, Booking, Footer are visually unchanged
- No layout regressions in any section

### SC-008: TypeScript & Build

```bash
npx tsc --noEmit
npm run build
```

Both must complete with zero errors.

### SC-009: Page Metadata

1. View page source or use browser DevTools > Elements > head
2. Verify title tag reflects new positioning:
   - AR: "حسام مبروك | خبير التجارة والتوريد والتصنيع من الصين"
   - EN: "Hussam Mabrouk | China Trade, Sourcing & Manufacturing Expert"
