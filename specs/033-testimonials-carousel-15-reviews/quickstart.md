# Quickstart & Validation Guide: 15 Testimonials Feature

## Verification Scenarios

1. **TypeScript Type Safety**:
   ```bash
   npx tsc --noEmit
   ```
   Must complete with zero compilation errors.

2. **Homepage UI Verification**:
   - Navigate to `http://localhost:3000/ar#testimonials` or `http://localhost:3000/en#testimonials`.
   - Verify 3 testimonial cards are displayed on desktop with 5-star badges.
   - Click Left / Right navigation arrows to cycle through all 15 testimonials smoothly.
   - Test touch swipe gesture on mobile viewport.

3. **Schema.org SEO Validation**:
   - Inspect page source or Chrome DevTools for `application/ld+json`.
   - Confirm `aggregateRating` (ratingValue: 5.0, reviewCount: 15) is present.

4. **AI Master Corpus Ingestion**:
   - Fetch `http://localhost:3000/llms-full.txt`.
   - Verify `## 8. Client Testimonials & Social Proof (آراء وشهادات العملاء)` contains all 15 reviews.
