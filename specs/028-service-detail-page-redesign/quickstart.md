# Quickstart & Validation Guide: Service Detail Page Redesign

## Runnable Validation Scenarios

### Scenario 1: Visual & Layout Inspection
1. Start local dev server: `npm run dev`
2. Open browser and navigate to `http://localhost:3000/ar/services/sourcing`
3. **Verify**:
   - Ambient gold glow is visible behind the central card.
   - Title text "البحث عن المنتجات والمصادر" has a glowing amber-white gradient.
   - Badge "خدمة متميزة معتمدة" is visible with a subtle pulsing spark icon.
   - Process steps 1 & 2 are connected via a vertical dashed line with numbered badges.
   - Social proof case study card shows "شركة الإعمار للتطوير العقاري" with result "توفير 30% من الميزانية الإجمالية".
   - Bottom CTA block contains "احجز مكالمة استشارية" and "استفسار سريع عبر الواتساب".

### Scenario 2: Bi-directional i18n & Mirroring Check
1. Navigate to `http://localhost:3000/en/services/sourcing`
2. **Verify**:
   - Title displays "Product Sourcing".
   - Alignment flips to Left-to-Right (LTR).
   - Timeline connector flips to left border.
   - CTA buttons render in English ("Book Consultation", "WhatsApp Inquiry").

### Scenario 3: Build & Type Check
1. Run `npm run type-check` to confirm zero TypeScript compilation errors.
2. Run `npm run build` to verify Next.js static page generation succeeds.
