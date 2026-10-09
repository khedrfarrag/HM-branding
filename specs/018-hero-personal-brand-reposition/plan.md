# Implementation Plan: Hero Section — Personal Brand Repositioning

**Branch**: `018-hero-personal-brand-reposition` | **Date**: 2026-08-12 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/018-hero-personal-brand-reposition/spec.md`

---

## Summary

Refactor the existing Hero section of the Hussam Mabrouk Personal Brand Website to shift the brand positioning from "Logistics Expert" to "China Trade, Sourcing & Manufacturing Expert". The work involves updating both localization dictionaries (AR/EN), updating the Hero badge text, the phrase rotator copy, the subtitle, the CTA labels, and adding a new compact Trust Bar section immediately below the Hero. The `FloatingSocials` component already renders the portrait correctly — no structural change is needed there. All layout, design tokens, animation system, and component architecture remain unchanged.

---

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode), Next.js 15 App Router, React 19

**Primary Dependencies**: Framer Motion (animations), Tailwind CSS v4 (styling via design tokens), next/image (portrait), Lucide React (icons)

**Storage**: N/A (no database changes)

**Testing**: Manual visual verification across locales and viewports; TypeScript type-check (`tsc --noEmit`); build pass (`next build`)

**Target Platform**: Web — desktop, tablet, mobile (320px–1440px+)

**Project Type**: Next.js 15 Personal Brand Web Application

**Performance Goals**: LCP < 2.5s; CLS < 0.1; INP < 200ms (existing budget, no regression)

**Constraints**: No new third-party libraries. No changes to files outside the Hero section and its dict keys. Tailwind CSS v4 design tokens must be used exclusively — no inline hex colors except where already established in existing code.

**Scale/Scope**: 2 dictionary files, 1 HomePage component, 1 new TrustBar component, 1 page metadata update

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Status | Notes |
|------|--------|-------|
| Tailwind CSS v4 tokens only | PASS | All new styles use existing tokens (gold, silver, graphite, glass, spacing) |
| No unauthorized libraries | PASS | Zero new dependencies |
| next/image for portrait | PASS | Already used in FloatingSocials; no change needed |
| One H1 per page | PASS | Existing Hero already has exactly one H1 |
| Localized strings in dict only | PASS | All copy changes go into ar.json / en.json |
| No hardcoded strings in components | PASS | New TrustBar reads from dict.hero.trustBar |
| prefers-reduced-motion | PASS | globals.css already disables all animations globally via @media rule |
| Accessible alt text | PASS | FloatingSocials already uses next/image with alt="Hussam Mabrouk" — will be enriched |
| RTL/LTR via root dir attr | PASS | Root layout sets dir based on locale; no manual override needed |
| Feature-first component location | PASS | New TrustBar goes in src/features/home/components/ |

---

## Project Structure

### Documentation (this feature)

```text
specs/018-hero-personal-brand-reposition/
├── plan.md              ← This file
├── research.md          ← Phase 0 output
├── data-model.md        ← Phase 1 output
├── quickstart.md        ← Phase 1 output
└── tasks.md             ← Phase 2 output (/speckit-tasks)
```

### Source Code (repository root)

```text
src/
├── dictionaries/
│   ├── ar.json          ← MODIFY: Hero badge, subtitle, phrases, CTA labels, trustBar keys
│   └── en.json          ← MODIFY: Hero badge, subtitle, phrases, CTA labels, trustBar keys
├── features/
│   └── home/
│       └── components/
│           ├── HomePage.tsx          ← MODIFY: insert <TrustBar> after Hero section
│           ├── FloatingSocials.tsx   ← MODIFY: enrich portrait alt text only
│           └── TrustBar.tsx          ← NEW: compact expertise label strip
└── app/
    └── [locale]/
        └── (home)/
            └── page.tsx              ← MODIFY: update generateMetadata title/description
```

**Structure Decision**: Feature-first single-project layout. The new TrustBar component is co-located in `src/features/home/components/` following the existing pattern (BookingSection, InteractiveGlobeMap, etc.). No new directories needed.

---

## Phase 0: Research

### R-001 — Existing Hero Copy Audit

**Current state (ar.json)**:
- `hero.badge`: "المؤسس والرئيس التنفيذي — Delta Group" ✅ (already updated by user)
- `hero.subtitle`: "أشارك خبرتي في التوريد..." ✅ (already updated by user)
- `hero.phrases`: 3 phrases updated to China trade focus ✅ (already updated by user)
- `hero.ctaPrimary`: "جدولة استشارة" ← needs update to "استكشف المعرفة"
- `hero.ctaSecondary`: "عرض مدى الوصول العالمي" ← needs update to "احجز استشارة"
- Missing: `hero.trustBar` key with expertise labels

**Current state (en.json)**:
- `hero.badge`: "Founder & CEO — Meridian & Co." ← needs update to China trade positioning
- `hero.phrases`: Still generic logistics phrases ← needs full replacement
- `hero.subtitle`: Still generic two-decades copy ← needs replacement
- `hero.ctaPrimary`: "Schedule a Consultation" ← needs update to "Explore the Knowledge"
- `hero.ctaSecondary`: "View Global Reach" ← needs update to "Book a Consultation"
- Missing: `hero.trustBar` key

### R-002 — FloatingSocials Portrait Assessment

The `FloatingSocials` component at `src/components/FloatingSocials.tsx`:
- Already uses `next/image` with `fill` and `object-cover object-top`
- Portrait is circular, 200px→300px responsive, with glow background
- Alt text is currently `alt="Hussam Mabrouk"` — acceptable, will enrich to include context
- No structural change to portrait presentation needed
- The circular frame, ambient glow, and floating social badges already provide strong visual presence

**Decision**: Enrich alt text only. Portrait visual presentation is already strong. No layout surgery required.

### R-003 — Trust Bar Design Research

**Approach**: Horizontal scrollable strip of expertise pill badges, positioned between Hero and About sections.
- Pattern: `overflow-x-auto` marquee/flex row of label pills, separated by dividers
- On desktop: centered row; on mobile: horizontally scrollable
- Styling: dark background (`bg-graphite-900` or `bg-black`), gold-tinted pills, subtle top/bottom borders
- Content: 5 qualitative labels from `dict.hero.trustBar.labels[]`
- Verified stats from existing dict (42 countries, 19 yrs, $1.8B trade volume) MAY appear as bonus items — these already exist in `hero.stats`, so they are verifiable from project content

**Decision**: TrustBar shows the 5 qualitative labels. Verified hero stats (42 countries, 19 years, $1.8B) will NOT be duplicated — the Trust Bar focuses on domain expertise labels only, keeping it clean and distinct from the stats already visible in the Hero.

### R-004 — CTA Link Targets

- Primary CTA "استكشف المعرفة" / "Explore the Knowledge": Links to `#services` (the services section shows his knowledge domains)
- Secondary CTA "احجز استشارة" / "Book a Consultation": Links to `#book` (existing booking section anchor)

**Decision**: Update `href` values in `HomePage.tsx` Hero section CTAs accordingly.

### R-005 — Page Metadata Update

Current title: "حسام مبروك | خبير الاستيراد والتجارة الدولية" / "Hussam Mabrouk | Global Trade & Supply Chain Specialist"

New positioning should be reflected in metadata too:
- AR: "حسام مبروك | خبير التجارة والتوريد والتصنيع من الصين"
- EN: "Hussam Mabrouk | China Trade, Sourcing & Manufacturing Expert"

This is a small change in `page.tsx` `generateMetadata` function.

---

## Phase 1: Design & Contracts

### Data Model

The only "data" in this feature is the dictionary schema. The following keys are added or modified:

```typescript
// hero section additions in both ar.json and en.json
interface HeroDictionary {
  badge: string;           // MODIFY
  title: string;           // unchanged
  subtitle: string;        // MODIFY (ar done, en pending)
  phrases: string[];       // MODIFY (ar done, en pending)
  ctaPrimary: string;      // MODIFY
  ctaSecondary: string;    // MODIFY
  stats: { value: string; label: string }[];  // unchanged
  trustBar: {              // NEW
    labels: { text: string; icon?: string }[];
  };
}
```

### TrustBar Component Contract

```typescript
// src/features/home/components/TrustBar.tsx
interface TrustBarProps {
  labels: { text: string }[];
  locale: string;
}
```

- **Input**: Array of label objects from `dict.hero.trustBar.labels`
- **Output**: Horizontal strip of pill badges
- **Layout**: `flex flex-wrap justify-center gap-sp-3 sm:gap-sp-4`
- **Pill style**: `rounded-full border border-glass bg-white/[0.03] px-sp-4 py-sp-2 text-fs-micro uppercase tracking-wider text-silver-dim`
- **Section wrapper**: `border-y border-glass bg-graphite-900 py-sp-5 px-sp-6`
- **No Framer Motion** in TrustBar — it's a static strip. RevealSection fade-up wraps it in HomePage.

### UI Contracts

#### Modified: Hero CTAs in HomePage.tsx

| CTA | Before | After |
|-----|--------|-------|
| Primary `href` | `#book` | `#services` |
| Primary label | `dict.hero.ctaPrimary` | `dict.hero.ctaPrimary` (label changes in dict) |
| Secondary `href` | `#global` | `#book` |
| Secondary label | `dict.hero.ctaSecondary` | `dict.hero.ctaSecondary` (label changes in dict) |

#### New: TrustBar placement in HomePage.tsx

```tsx
// After Hero section closing </section>, before About section:
<RevealSection variants={fadeUp} amount={0.2}>
  <TrustBar labels={dict.hero.trustBar.labels} locale={locale} />
</RevealSection>
```

### Quickstart Validation Guide

See [quickstart.md](./quickstart.md) for full validation steps.

---

## Complexity Tracking

No constitution violations. No complexity justification required.
