# Quickstart Validation Guide: UI Cards Images, Mobile Transitions, Animated Gradient Headers & Arabic Typography

## Validation Scenarios

### Scenario 1: Sector & Service Cards Background Imagery Inspection
1. Start local dev server: `npm run dev`
2. Open browser at `http://localhost:3000/ar`
3. Scroll to **القطاعات (Sectors)** section:
   - Confirm all 5 sector cards display unique expressive background images (Electronics, Agriculture, Textiles, Construction, Automotive).
   - Confirm text contrast is sharp and readable against the dark overlay.
4. Scroll to **الخدمات (Services)** section:
   - Confirm all 4 service cards display unique thematic background images (Importing, Exporting, Sourcing, Customs Compliance).

### Scenario 2: Mobile Hero Typewriter Animation
1. Open Chrome DevTools (`F12`), toggle Device Toolbar (`Ctrl+Shift+M`) and set viewport to **iPhone 14 (390px)** or **Pixel 7**.
2. Refresh `http://localhost:3000/ar`.
3. Observe the Hero headline phrase typing out letter-by-letter.
4. Verify smooth phrase rotation without sudden layout shifts or awkward line breaks.

### Scenario 3: Section Headers Animated Gradient Check
1. Scroll down through all homepage sections (Sectors, Services, Experiences, Media, Contact).
2. Verify every section header exhibits an animated metallic gold/silver gradient shimmer effect.
3. Verify only the Hero section headline phrase changes text over time, while all other section titles remain static in content.

### Scenario 4: Arabic Typography Verification & Font Customization Guide
1. Inspect the site in Arabic (`/ar`).
2. Verify the font renders with the updated premium Arabic typeface (`Cairo` / `IBM Plex Sans Arabic`).
3. Check [`src/app/[locale]/layout.tsx`](file:///g:/hossam%20mabrouk/src/app/%5Blocale%5D/layout.tsx) for font configuration comments.

### Scenario 5: Build & Type Validity Check
1. Run `npm run build` from repository root.
2. Confirm zero TypeScript or Next.js build errors occur.
