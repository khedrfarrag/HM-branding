# Implementation Plan: User Journey Booking Flow, Media Assets and Homepage Localization Fixes

**Branch**: `009-user-flow-media-i18n` | **Date**: 2026-07-19 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/009-user-flow-media-i18n/spec.md)

**Input**: Feature specification from `/specs/009-user-flow-media-i18n/spec.md`

## Summary

This feature resolves critical user flow gaps, provisions missing media placeholders, and completes homepage Arabic localization. We will:
1. Add date-specific booking links on the Experience detail page, connecting user actions to the booking system.
2. Embed conversion CTAs in all Knowledge articles.
3. Write localized strings for the footer and logistics map inside the translation JSON files instead of using inline ternary scripts, which resolves garbled text formatting.
4. Generate premium WebP/JPEG images for experiences, cities, and articles using the AI model and bundle them in `public/images/`.

## Technical Context

- **Language/Version**: TypeScript, Next.js (App Router, React 19)
- **Primary Dependencies**: Tailwind CSS, Supabase, grey-matter
- **Storage**: Supabase Database (`experience_schedules`, `bookings`) + Local Markdown
- **Testing**: Manual scenario verification + Build compilation checks
- **Target Platform**: Node.js, Web Browser
- **Project Type**: Next.js Web App

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Zero `any` usage**: All new variables and props will be strictly typed.
- **RTL Support**: All new UI components (booking buttons, CTA banners) will be fully responsive and support Arabic RTL layouts seamlessly.
- **Clean Dictionary Structure**: All translations will reside in `en.json` and `ar.json` — no inline hardcoded Arabic strings will be left.

## Proposed Changes

---

### UI Components

#### [MODIFY] [page.tsx](file:///g:/hossam%20mabrouk/src/app/%5Blocale%5D/%28experiences%29/experiences/%5Btype%5D/%5Bslug%5D/page.tsx)
- Render booking links next to each date under the available dates section.
- Extract `startDate` and build redirection URL: `/[locale]/booking/experience/[slug]?date=YYYY-MM-DD`.

#### [MODIFY] [page.tsx](file:///g:/hossam%20mabrouk/src/app/%5Blocale%5D/%28knowledge%29/knowledge/%5Bcategory%5D/%5Bslug%5D/page.tsx)
- Append a premium, styled CTA banner section at the bottom of the article.
- Link it to the default consultation booking form.

#### [MODIFY] [HomePage.tsx](file:///g:/hossam%20mabrouk/src/features/home/components/HomePage.tsx)
- Extract inline ternary translations (Footer quick links, Map subtitles, and certifications labels) to the home dictionary.
- Reference the strings dynamically via `dict.footer` and `dict.global`.

---

### Dictionaries

#### [MODIFY] [en.json](file:///g:/hossam%20mabrouk/src/dictionaries/en.json)
- Add missing keys for Footer quick links title, Contact details title, Certification title, and Map subtitle.

#### [MODIFY] [ar.json](file:///g:/hossam%20mabrouk/src/dictionaries/ar.json)
- Add corresponding Arabic translations for Footer titles and Map details.

---

### Media Placeholders

#### [NEW] `public/images/experiences/canton-fair.jpg`
- Premium Canton Fair cover placeholder.

#### [NEW] `public/images/experiences/consultation.jpg`
- Premium Consultation cover placeholder.

#### [NEW] `public/images/experiences/corporate.jpg`
- Premium Corporate services cover placeholder.

#### [NEW] `public/images/china/guangzhou.jpg`
- Premium Guangzhou city placeholder image.

#### [NEW] `public/images/china/yiwu.jpg`
- Premium Yiwu city placeholder image.

---

## Verification Plan

### Automated Tests
- Run `npm run lint` to confirm zero linting errors.
- Run `npm run build` to verify Next.js compiles the production build cleanly.

### Manual Verification
- Check `/ar/experiences/canton-fair-programs/canton-fair-business-experience` and verify that clicking "احجز الآن" routes to `/ar/booking/experience/canton-fair-business-experience?date=...`.
- Verify footer titles load cleanly in Arabic with zero encoding artifacts.
