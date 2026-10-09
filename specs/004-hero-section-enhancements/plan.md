# Implementation Plan: Hero Section Enhancements

**Branch**: `004-hero-section-enhancements` | **Date**: 2026-07-05 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/004-hero-section-enhancements/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

The goal of this feature is to enhance the landing page's Hero section.
1. **Left side**: Propose and implement a typing-style localized text animation cycling through the Option A catchy headline phrases (Arabic/English). We will implement this using Framer Motion to animate letters or words, ensuring accessibility, performance, and localized alignment.
2. **Right side**: Transform the profile card into a circular frame (`rounded-full`) with a premium golden/glass border and dynamic background glow. Around this circle, we will deploy four interactive social media badges (LinkedIn, X/Twitter, Email, WhatsApp) that float continuously using custom Framer Motion springs/CSS transitions. On hover, each badge scales up, glows with its platform's color, and displays a localized tooltip. On click, it opens the respective communication channel.

## Technical Context

**Language/Version**: TypeScript 5.x / Next.js 15.5.20 / React 19

**Primary Dependencies**: Framer Motion, Lucide React (for social icons), clsx, tailwind-merge

**Storage**: N/A (Client-side presentation and animation state)

**Testing**: Manual visual testing + responsive verification using Chrome DevTools MCP

**Target Platform**: Responsive Web browsers (Chrome, Safari, Edge, Firefox)

**Project Type**: Next.js App Router Web Application

**Performance Goals**: 60 FPS animation smoothness, zero layout shifting (CLS < 0.05)

**Constraints**: Respect `prefers-reduced-motion` settings (fallback to static content)

**Scale/Scope**: Limit to the Hero section components on the home page

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Motion Principles (Rule 5)**: Framer Motion must be used. Animation loops must not spike CPU. Reduced motion preferences must be respected.
- **Design Principles (Rule 4)**: Must use Tailwind CSS v4 variables for the circular styling, borders, and shadows. Maintain the Slate/Gold luxury palette.
- **Folder Organization (Rule 11)**: Keep changes within `src/app/[locale]/page.tsx` or extract reusable parts to custom component files under `src/components/` or `src/features/` if applicable.

*All Gates Passed.*

## Project Structure

### Documentation (this feature)

```text
specs/004-hero-section-enhancements/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
└── checklists/
    └── requirements.md  # Specification quality checklist
```

### Source Code (repository root)

We will modify/create:
- `src/app/[locale]/page.tsx` (Hero Section Visuals & Animations)
- `src/dictionaries/ar.json` and `src/dictionaries/en.json` (add dynamic phrase items)
- `src/components/FloatingSocials.tsx` (New Client Component for floating circular socials)
- `src/components/TypingHeadline.tsx` (New Client Component for typing animation)

**Structure Decision**: Custom Client Components will be introduced under `src/components/` to handle the interactive Client-side states (Framer Motion loops) while keeping the main page component as a clean, performant Server Component where possible.

## Complexity Tracking

*No violations detected.*
