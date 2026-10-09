# Implementation Plan: UI Cards Images, Mobile Transitions, Animated Gradient Headers & Arabic Typography

**Branch**: `main` | **Date**: 2026-07-27 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/016-ui-cards-transitions-typography/spec.md)

**Input**: Feature specification from `/specs/016-ui-cards-transitions-typography/spec.md`

## Summary

Enhance the user portal UI by adding 9 expressive background images to Sectors and Services cards with dark glassmorphic overlays, restoring smooth character-by-character typewriter text transitions for the Hero section on mobile, unifying all homepage section headers with a gold/metallic animated gradient style, and upgrading the Arabic font to a luxury Google font (`Cairo` / `IBM Plex Sans Arabic`).

## Technical Context

**Language/Version**: TypeScript / Next.js 15 (App Router), React 19

**Primary Dependencies**: Tailwind CSS v4, Framer Motion, Next.js Font (`next/font/google`), Lucide React

**Storage**: Public static assets in `/public/images/`

**Testing**: Manual visual inspection, responsive viewport verification, Next.js production build (`npm run build`)

**Target Platform**: Web browsers (Desktop & Mobile viewports, iOS Safari, Chrome)

**Project Type**: Next.js Fullstack Web Application

**Performance Goals**: 60 FPS CSS/Framer Motion animations, zero Cumulative Layout Shift (CLS = 0), font load under 200ms

**Constraints**: Dark luxury aesthetic (black, gold `#C7A15C`, silver/metallic accents), high contrast WCAG AA text compliance over background images

**Scale/Scope**: 5 Sector Cards, 4 Service Cards, Hero text typewriter animation, Section Header gradient styling, Arabic locale layout typography update

## Constitution Check

*GATE: Passed. No constitutional violations.*

- **Design System Consistency**: Adheres to existing luxury gold/dark theme tokens.
- **Performance**: High-efficiency WebP imagery, zero CLS via `next/font/google`.
- **Localization**: Maintains i18n support for both Arabic (`ar`) and English (`en`) without breaking existing routing or layout structure.

## Project Structure

### Documentation (this feature)

```text
specs/016-ui-cards-transitions-typography/
├── spec.md              # Feature specification
├── plan.md              # This file
├── research.md          # Phase 0 research & decisions
├── data-model.md        # Phase 1 visual data definitions
├── quickstart.md        # Phase 1 validation guide
└── contracts/
    └── ui-components.md # Phase 1 component contracts
```

### Source Code (repository root)

```text
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx                # Font optimization setup (Arabic & English)
│       └── (home)/
│           └── page.tsx              # Homepage composition
├── features/
│   └── home/
│       ├── components/
│       │   ├── HeroSection.tsx       # Smooth typewriter & dynamic phrase transition
│       │   ├── SectorsSection.tsx    # Sector cards with background images & glass overlay
│       │   ├── ServicesSection.tsx   # Service cards with background images & glass overlay
│       │   └── SectionHeader.tsx     # Reusable animated gradient section header component
│       └── data/                     # Sector & Service card datasets with visual imagery
public/
└── images/
    ├── sectors/                      # 5 Expressive sector background images
    └── services/                     # 4 Expressive service background images
```

**Structure Decision**: Standard Next.js App Router feature-based modular structure.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | Standard React components & CSS keyframe animations used |
