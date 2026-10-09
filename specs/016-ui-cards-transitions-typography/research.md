# Research & Technical Decisions: UI Cards Images, Mobile Transitions, Animated Gradient Headers & Arabic Typography

## 1. Card Background Images & Overlay Strategy

- **Decision**: Use thematic, high-contrast imagery stored in `/public/images/sectors/` and `/public/images/services/` with WebP compression. Apply a dual linear gradient overlay:
  `bg-gradient-to-t from-black via-black/80 to-black/40` over cards to ensure text remains crisp and 100% WCAG AA compliant.
- **Rationale**: Direct dark background images without strong radial/linear dark overlays cause text illegibility. Dual gradient overlays ensure consistent readability while preserving the luxury aesthetic.
- **Alternatives Considered**: SVG patterns (rejected as user explicitly requested real expressive images for each sector/service).

## 2. Mobile Hero Typewriter Transition Strategy

- **Decision**: Re-implement character-by-character typewriter effect using Framer Motion `motion.span` with staggered character delay (`staggerChildren: 0.03`) and smooth opacity/blur entrance.
- **Rationale**: Smooth character typing eliminates jumpy layout shifts on mobile webkit browsers and delivers the exact typewriter style requested by the user.
- **Alternatives Considered**: Pure CSS keyframe animations (harder to sync phrase cycle timing dynamically).

## 3. Animated Gradient Headers Strategy

- **Decision**: Create a unified `SectionHeader` component utilizing Tailwind animated background gradient utility (`bg-gradient-to-r from-[#C7A15C] via-[#F3E5AB] to-[#C7A15C] bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent`).
- **Rationale**: Reusing a dedicated `SectionHeader` component across all homepage sections ensures visual cohesion and brand identity alignment.
- **Alternatives Considered**: Ad-hoc gradient classes in each section file (rejected to maintain DRY principle).

## 4. Premium Arabic Typography Strategy

- **Decision**: Integrate **Cairo** (or **IBM Plex Sans Arabic**) via Next.js `next/font/google` in [`src/app/[locale]/layout.tsx`](file:///g:/hossam%20mabrouk/src/app/%5Blocale%5D/layout.tsx), setting CSS variable `--font-arabic` and applying `font-arabic` utility when `locale === "ar"`.
- **Rationale**: `Cairo` and `IBM Plex Sans Arabic` are widely recognized luxury corporate Arabic fonts with excellent weight variations (400-800) and zero FOVT/FOUT layout shift.
- **Alternatives Considered**: System default fonts (rejected due to inconsistent rendering across OS/devices).
