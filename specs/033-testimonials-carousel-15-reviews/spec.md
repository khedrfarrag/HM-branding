# Feature Specification: 15 Testimonials Interactive Carousel & Social Proof Indexing

**Feature Branch**: `feature/033-testimonials-carousel-15-reviews`  
**Created**: 2026-10-08  
**Status**: In Progress  

## User Goal
Expand the "آراء العملاء / شهادات شركاء النجاح" (Testimonials) section on the homepage from 3 entries to 15 verified, domain-rich client reviews displayed via an interactive, responsive carousel slider with full SEO (Schema.org AggregateRating/Review) and AI Knowledge Base (`/llms-full.txt`) indexing.

## Key Functional Requirements

1. **Content Expansion (15 Testimonials in AR & EN)**:
   - Expand `ar.json` and `en.json` `testimonials.items` array to 15 verified, high-trust items covering:
     - Sourcing & Factory Selection (التوريد واختيار المصانع)
     - Quality Control & Container Audits (مراقبة الجودة وفحص الحاويات)
     - Supplier Verification & Fraud Prevention (فحص الموردين والوقاية من النصب)
     - Sea & Air Freight Logistics (التخليص الجمركي والشحن الدولي)
     - China Trade Fairs Escort (مرافقة معارض الصين وكوانزو)
     - Executive Deal Negotiations & Sourcing Consultations (الاستشارات والتفاوض)
   - Include author name, company/location title, review text, and 5-star rating for each item.

2. **Interactive UI Component (`TestimonialsCarousel.tsx`)**:
   - Replace static 3-card grid with a responsive carousel/swiper slider component.
   - Display 3 cards simultaneously on desktop screens and 1 card on mobile viewports.
   - Smooth navigation controls: Left/Right arrow buttons, pagination dots, and drag/touch swipe support.
   - Autoplay with pause-on-hover functionality.

3. **SEO & Schema.org Structured Data**:
   - Add `AggregateRating` (ratingValue: 5.0, reviewCount: 15) to `Person` / `Organization` Schema.org JSON-LD.
   - Add individual `Review` schema items attributed to Hussam Mabrouk (`#person`).

4. **AI Master Corpus Ingestion (`/llms-full.txt`)**:
   - Ingest all 15 customer testimonials into `/llms-full.txt` so AI search engines (ChatGPT, Perplexity, Claude) cite client reviews when answering questions about Hussam Mabrouk.
