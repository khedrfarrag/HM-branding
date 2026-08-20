# Research: Hero Section — Personal Brand Repositioning

**Feature**: 018-hero-personal-brand-reposition
**Date**: 2026-08-12

## R-001: Copy Audit Results

### Arabic (ar.json) — Current State After User Edits

| Key | Status | Action |
|-----|--------|--------|
| `hero.badge` | Updated by user: "المؤسس والرئيس التنفيذي — Delta Group" | Keep as-is |
| `hero.subtitle` | Updated by user: China trade focus | Keep as-is |
| `hero.phrases[0]` | Updated: سلاسل توريد ذكية | Keep as-is |
| `hero.phrases[1]` | Updated: خبير في سلاسل الإمداد | Keep as-is |
| `hero.phrases[2]` | Updated: أحوّل فرص التجارة | Keep as-is |
| `hero.ctaPrimary` | "جدولة استشارة" — still old | Update to "استكشف المعرفة" |
| `hero.ctaSecondary` | "عرض مدى الوصول العالمي" — still old | Update to "احجز استشارة" |
| `hero.trustBar` | Missing | ADD new key |

**Decision**: Badge should be updated to the positioning eyebrow, NOT the title/role. Recommended:
- `hero.badge` → "خبير التجارة والتوريد والتصنيع من الصين"
- Keep the company affiliation for the About section

### English (en.json) — Needs Full Hero Copy Replacement

| Key | Status | Action |
|-----|--------|--------|
| `hero.badge` | "Founder & CEO — Meridian & Co." — old | Update to "China Trade, Sourcing & Manufacturing Expert" |
| `hero.subtitle` | Old generic two-decades copy | Replace with new China-focused copy |
| `hero.phrases` | Old logistics phrases | Replace with 3 new China-trade positioning phrases |
| `hero.ctaPrimary` | "Schedule a Consultation" | Update to "Explore the Knowledge" |
| `hero.ctaSecondary` | "View Global Reach" | Update to "Book a Consultation" |
| `hero.trustBar` | Missing | ADD new key |

---

## R-002: Component Architecture

- **TypingHeadline** accepts `phrases: string[]` — no modification needed, just update dict values
- **FloatingSocials** already renders portrait with `next/image`, `fill`, `object-cover object-top`, circular frame
- **HeroTypewriter** has no prefers-reduced-motion handling internally — but `globals.css` globally disables all animations via `@media (prefers-reduced-motion: reduce)` — COVERED
- **RevealSection** uses Framer Motion `whileInView` — also covered by global CSS media rule

---

## R-003: Trust Bar Decision

- **Rationale**: Horizontal pill strip — minimal, clean, no fake stats
- **Labels decided** (5 per locale):
  - AR: "خبرة عملية" | "توريد وتصنيع" | "استيراد وتصدير" | "تجارة مع الصين" | "سلاسل الإمداد"
  - EN: "Practical Experience" | "Sourcing & Manufacturing" | "Import & Export" | "China Trade" | "Supply Chain"
- **Alternatives considered**: Animated marquee (rejected — adds complexity, noisy), Stats strip (rejected — hero stats already show verified numbers), Logo strip (rejected — no partner logos available)

---

## R-004: CTA Link Targets

- Primary CTA "Explore the Knowledge" → `#services` (services section is the knowledge showcase)
- Secondary CTA "Book a Consultation" → `#book` (existing booking anchor)
- This is a small change in `HomePage.tsx` lines 65-74 (the CTA block)

---

## R-005: Page Metadata

- `generateMetadata` in `src/app/[locale]/(home)/page.tsx` will be updated with new title/description
- No SEO regression — the new title is more targeted and specific

---

## All NEEDS CLARIFICATION: Resolved

No unresolved clarifications. Plan is ready for implementation.
