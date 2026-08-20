# Quickstart: Services Content Pages & Contact Form Redesign

**Feature**: 017-services-content-pages-redesign
**Phase**: Validation Guide

---

## Prerequisites

- Local dev server running: `npm run dev`
- Browser open to `http://localhost:3000`
- Both locales available: `/ar/` and `/en/`

---

## Scenario 1 — Services Hub Page

**Route**: `/ar/services` and `/en/services`

**Steps**:
1. Navigate to `http://localhost:3000/ar/services`
2. Verify the page has a luxury dark hero section with animated gold gradient title "الخدمات"
3. Confirm 4 service cards are visible: (بحث عن المنتجات / فحص الجودة / التحقق من الموردين / الشحن والجمارك)
4. Each card should show an expressive background image with dark glass overlay and readable white text
5. Hover over a card — image should scale slightly with gold border highlight
6. Switch to `/en/services` — verify 4 cards with English titles

**Expected**: All 4 services render with imagery, no layout overflow, 0 horizontal scroll.

---

## Scenario 2 — Service Detail Page (Sourcing)

**Route**: `/ar/services/sourcing`

**Steps**:
1. Navigate to `http://localhost:3000/ar/services/sourcing`
2. Verify a full-width hero banner with the sourcing cover image is displayed
3. Confirm service badge ("خدمة متميزة") and `<h1>` title are visible above the image
4. Scroll down — verify the process timeline animates in step by step
5. Confirm the "Book Consultation" CTA button is visible at the bottom
6. Switch to `/en/services/sourcing` — verify English content renders correctly

**Expected**: All sections render, Schema.org Service JSON-LD is in `<head>`, no TypeScript errors.

---

## Scenario 3 — Success Stories Hub

**Route**: `/ar/success-stories`

**Steps**:
1. Navigate to `http://localhost:3000/ar/success-stories`
2. Verify the page shows the "قصص النجاح" header with animated gold gradient
3. Confirm at least 1 success story card is visible with:
   - Industry badge (e.g., "العقارات والإنشاءات")
   - Client name
   - Result metric highlighted in gold (e.g., "توفير 30%")
   - Testimonial quote snippet

**Expected**: Cards render without horizontal overflow, links work.

---

## Scenario 4 — Success Story Detail

**Route**: `/ar/success-stories/construction-materials-import`

**Steps**:
1. Navigate to `http://localhost:3000/ar/success-stories/construction-materials-import`
2. Verify the 3-column breakdown: Challenge / Solution / Result cards
3. Confirm client quote is displayed in a highlighted blockquote
4. Verify the related service link goes to `/ar/services/sourcing`

**Expected**: Page loads, Schema.org is valid, no 404.

---

## Scenario 5 — Contact Form

**Route**: `/ar/contact`

**Steps**:
1. Navigate to `http://localhost:3000/ar/contact`
2. Verify two-column layout: Left = brand visual with contact info | Right = form
3. On mobile (resize to 375px width): verify stacked layout (visual on top, form below)
4. Fill in the form with valid data and submit
5. Verify the success confirmation message appears
6. Try submitting with empty required fields — verify field-level error messages appear in Arabic

**Expected**: Form submits cleanly, Supabase receives the row, email confirmation sent.

---

## Scenario 6 — Responsive Check

**Steps**:
1. Open Chrome DevTools → Mobile viewport (375px, iPhone SE)
2. Navigate through `/ar/services`, `/ar/services/sourcing`, `/ar/success-stories`, `/ar/contact`
3. Verify 0 horizontal scroll bars appear
4. Verify all text is readable without zoom
5. Verify all CTA buttons are tappable (min 44px height)

**Expected**: 100% responsive compliance on all 4 pages.

---

## References

- [Data Model](../data-model.md)
- [UI Component Contracts](../contracts/ui-components.md)
- [Research Decisions](../research.md)
- [Feature Spec](../spec.md)
