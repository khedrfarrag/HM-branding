# Research Notes: Project Scaffolding & Setup

---

## 1. React 19, Next.js 15, & Three.js/R3F Compatibility

### Context
Next.js 15 and React 19 introduce updated rendering architectures. Traditional `@react-three/fiber` and `@react-three/drei` releases might have peer dependency conflicts with React 19.

### Decision
We MUST install R3F and Drei using the latest stable or beta versions that support React 19. If npm returns peer dependency conflicts, we will use the `--legacy-peer-deps` flag to resolve the installation cleanly.

### Rationale
React 19 support is critical for Next.js 15 performance, and R3F operates correctly once peer warnings are bypassed or updated packages are targetted.

### Alternatives Considered
- *Using Next.js 14 / React 18*: Rejected because the Constitution mandates Next.js 15 and React 19.

---

## 2. Tailwind CSS v4 Configuration in Next.js 15

### Context
Tailwind CSS v4 introduces a CSS-first configuration model, deprecating `tailwind.config.js` in favor of inline `@theme` directives inside the main CSS file.

### Decision
We MUST configure the theme tokens inside `src/app/globals.css` using the `@theme` syntax:
```css
@import "tailwindcss";

@theme {
  --color-gold: #C7A15C;
  --color-gold-soft: #E8D2A0;
  --color-black: #08090B;
  --color-graphite-900: #111318;
  --color-graphite-800: #181B20;
  --color-graphite-700: #20242C;
  --color-graphite-600: #2B303A;
  --color-white: #F7F6F2;
  --color-white-dim: #EAE8E1;
  --color-blue-deep: #16223F;
  --color-blue-mid: #223257;
  --color-silver: #9BA1AC;
  --color-silver-dim: #6C7280;
  --color-cyan: #7FE3DC;
  --color-orange: #E7A67E;
}
```

### Rationale
CSS-first configuration is standard in Tailwind CSS v4, improving compilation speeds and eliminating JS config parsing.

---

## 3. Local Font Loading via `next/font/local`

### Context
To meet Core Web Vitals targets, custom typography must load without layout shifts (CLS) or third-party DNS lookups.

### Decision
We MUST store the `.woff2` font files locally in `public/fonts/` and configure them in `src/app/layout.tsx` using `next/font/local`:
```typescript
import localFont from 'next/font/local';

const bricolage = localFont({
  src: '../../public/fonts/BricolageGrotesque.woff2',
  variable: '--font-display',
});
```

### Rationale
Local serving ensures zero third-party dependencies and guarantees WOFF2 fonts load immediately, avoiding layout flashes.

---

## 4. Performant Cursor Glow & Noise Overlay

### Context
The ambient cursor glow updates on every mouse move, which can cause CPU bottlenecks if not optimized.

### Decision
The glow element position MUST be animated using CSS `transform: translate3d(x, y, 0)` rather than mutating `left`/`top` properties directly. The event listener MUST be set to `{ passive: true }`.
The noise overlay will be rendered using a static SVG data URI base64 background in CSS to eliminate paint cycle overheads.
