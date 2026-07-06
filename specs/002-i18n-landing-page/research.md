# Research: Multilingual Landing Page (i18n)

This document outlines key technical decisions, rationales, and alternatives considered for implementing internationalization (i18n) in Next.js 15 App Router.

---

## Decision 1: Next.js 15 Dynamic Routing & Middleware

- **Choice**: Dynamic URL locale routing using a `[locale]` segment and Next.js `middleware.ts` for automatic language detection and redirection.
- **Rationale**:
  - Decoupling content by URL (e.g. `/ar` and `/en`) is the Vercel-recommended pattern for SEO indexing and `hreflang` tag association.
  - Using a Next.js Edge Middleware allows us to read the client's `Accept-Language` header and redirect `/` to `/ar` (default) or `/en` instantly with under 20ms latency.
- **Alternatives Considered**:
  - *Client-side local storage routing*: Rejected because search engines (Google, Bing) wouldn't easily crawl separate static pages, degrading international SEO scores.

---

## Decision 2: Static JSON Dictionaries with Server-Side Loading

- **Choice**: Storing static content in JSON dictionaries under `src/dictionaries/` and loading them via server-side imports.
- **Rationale**:
  - This is a zero-dependency pattern that avoids bulky client-side translation libraries (like `react-i18next`) and keeps client JS bundles small.
  - Server Components load dictionaries on the server, meaning zero translation logic or raw dictionary data is shipped to the browser.
- **Implementation Pattern**:
  ```typescript
  const dictionaries = {
    ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
    en: () => import("@/dictionaries/en.json").then((module) => module.default),
  };
  export const getDictionary = async (locale: "ar" | "en") => dictionaries[locale]();
  ```

---

## Decision 3: Typography & Fonts per Locale

- **Choice**: Serve different Google Fonts based on the locale:
  - **Arabic (`ar`)**: Headings and body use `Cairo` (or `Tajawal`) loaded via `next/font/google`.
  - **English (`en`)**: Headings use `Bricolage Grotesque`, body uses `Inter`, and mono uses `JetBrains Mono` as configured in Phase 1.
- **Rationale**:
  - Latin fonts like `Bricolage Grotesque` do not support Arabic characters, leading to ugly fallback glyphs.
  - `Cairo` is a premium, high-readability sans-serif typeface designed specifically for Arabic, projecting the premium branding required by the Constitution.
- **Alternatives Considered**:
  - *System-ui fallback*: Rejected because generic system fonts look basic and fail to deliver the "wow" visual impact required.

---

## Decision 4: RTL/LTR Layout Flow

- **Choice**: Rely on standard HTML `dir="rtl"` or `dir="ltr"` attributes. Use Tailwind CSS v4 direction-aware utilities (like `ps-*` and `pe-*` instead of `pl-*` and `pr-*`) to handle directional margins and paddings automatically.
- **Rationale**:
  - Using Tailwind direction-aware utilities guarantees that margins, paddings, and alignment flip automatically based on the `dir` attribute without writing duplicate layouts.
  - Floating items and SVG components are mirrored where appropriate using direction conditions or CSS transforms.
