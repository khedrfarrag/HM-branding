# Phase 0 Research: Service Detail Page Redesign

## Research Findings & Architectural Decisions

### 1. Glassmorphism & Ambient Glow Strategy
- **Decision**: Combine backdrop-blur utilities (`backdrop-blur-xl bg-zinc-950/70 border border-amber-500/20`) with absolute-positioned blurred ambient color circles (`bg-amber-500/10 blur-[120px]`).
- **Rationale**: Creates a high-end luxury dark aesthetic matching the HM branding without requiring heavyweight canvas or 3D background webgl scripts.
- **Alternatives Considered**: Pure black flat container (rejected due to lack of visual depth), full 3D canvas background (rejected due to mobile performance impact).

### 2. Connected Timeline Stepper Component Pattern
- **Decision**: Use a vertical dashed border line (`border-r-2 border-dashed border-amber-500/30` for RTL or `border-l-2` for LTR) with relative step number nodes positioned over the line (`absolute -right-[17px]`).
- **Rationale**: Connects process steps visually into a continuous journey while keeping HTML lightweight and responsive.
- **Alternatives Considered**: Horizontal stepper (rejected due to narrow column width on mobile devices).

### 3. Case Study & Social Proof Integration
- **Decision**: Filter `successStories` from `LocalFsServiceRepository` by `serviceSlug === service.slug` and render a dedicated social proof card.
- **Rationale**: Leverages pre-existing repository data and builds trust with potential clients by showcasing quantitative results (e.g. 30% savings).

### 4. Conversion CTA Component
- **Decision**: Render a prominent conversion card at the bottom of the service page featuring dual CTAs: "Book Consultation" (`/[locale]/contact`) and "WhatsApp Inquiry" (`https://wa.me/...`).
- **Rationale**: Directly solves the critical missing conversion path on the existing page.
