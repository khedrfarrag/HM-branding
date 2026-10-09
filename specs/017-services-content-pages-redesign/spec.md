# Feature Specification: Services Content Pages & Contact Form UI/UX Redesign

**Feature Branch**: `017-services-content-pages-redesign`

**Created**: 2026-07-27

**Status**: Draft

**Input**: User description: "تطوير وإعادة تصميم صفحات الخدمات المخصصة (البحث عن المنتجات والمصادر، فحص الجودة ومراقبة التصنيع، والتحقق من الموردين والمصانع، والحلول الجمركية) وقصص النجاح وسطح التفاعل لنموذج اتصل بنا مع إضافة صور تعبيرية وتنسيق فاخر متوافق مع الهوية البصرية ومناسب لكل أجهزة العرض."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Luxury Services Hub & Article Detail Pages (Priority: P1)

As a potential importer or business owner, I want to browse comprehensive service pages (`/services` and `/services/[slug]`) with detailed articles, interactive process timelines, and value propositions so that I can understand how Hussam Mabrouk secures supply chains in China.

**Why this priority**: Core business offering that directly converts leads into consultation bookings.

**Independent Test**: Can be tested by navigating to `/services` and visiting each service slug (`/services/sourcing`, `/services/quality-control`, `/services/verification`), ensuring full content rendering, expressive imagery, process steps, and booking CTAs.

**Acceptance Scenarios**:
1. **Given** a visitor lands on `/services`, **When** viewing the services grid, **Then** all 4 key services (Sourcing, Quality Control, Supplier Verification, Shipping/Customs) are displayed with expressive cover imagery and dark luxury glassmorphic styling.
2. **Given** a visitor clicks on any service card (e.g. Sourcing), **When** reading `/services/sourcing`, **Then** the page displays a high-resolution hero banner, executive summary, step-by-step workflow timeline, key deliverables, and a direct "Book Consultation" trigger.

---

### User Story 2 - Success Stories & Case Studies Showcase (Priority: P2)

As a business decision maker, I want to read verified success stories (`/success-stories` and `/success-stories/[slug]`) detailing real challenges, applied solutions, and financial ROI so that I feel confident in the partnership.

**Why this priority**: Provides social proof and validates capabilities for high-value clients.

**Independent Test**: Navigate to `/success-stories`, view case study cards with client metrics (e.g., 30% savings, 100% compliant shipments), and inspect full case study details.

**Acceptance Scenarios**:
1. **Given** a visitor is on `/success-stories`, **When** reviewing case studies, **Then** cards display key outcome metrics, industry tags, and client quotes.
2. **Given** a visitor views a specific case study, **When** examining details, **Then** the breakdown shows Challenge, Applied Strategy, Quantifiable Results, and related service links.

---

### User Story 3 - Brand-Aligned Contact Form & Booking UI/UX (Priority: P1)

As a visitor wishing to contact or book a consultation, I want the contact form (`/contact` and modal booking form) to feature a visually stunning layout with brand-aligned expressive graphics, luxury dark input controls, and clear feedback so that submission feels effortless and trustworthy.

**Why this priority**: Directly drives conversion and lead collection with 0 friction.

**Independent Test**: Open `/contact` or click "Book Call", inspect the form layout with expressive brand media on desktop and mobile, fill out fields, and submit to verify clean response handling.

**Acceptance Scenarios**:
1. **Given** a user opens `/contact`, **When** viewing the page layout, **Then** the form is framed by a luxury dark card with a branded expressive side image/visual asset and metallic gold focus accents.
2. **Given** a user fills out contact/booking details, **When** submitting the form, **Then** real-time feedback displays submission progress and instant confirmation status.

---

### Edge Cases

- What happens if a service slug does not exist? The system returns a localized 404 page with navigation fallbacks.
- How does the contact form behave when offline or network drops? The client captures state and displays a user-friendly retry notice.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide dedicated, content-rich pages for Services (`/services/[slug]`): Sourcing, Quality Control, Supplier Verification, Customs/Logistics.
- **FR-002**: System MUST render a multi-step process timeline component on each service detail page.
- **FR-003**: System MUST provide a Success Stories hub (`/success-stories`) showcasing real client metrics and case studies.
- **FR-004**: System MUST redesign the Contact Form (`/contact`) with an expressive brand visual side panel, luxury dark glass inputs, and gold focus rings.
- **FR-005**: System MUST ensure 100% responsive layout compliance across mobile, tablet, and desktop viewports.
- **FR-006**: System MUST maintain full Arabic (`ar`) and English (`en`) i18n support for all new content routes.

### Key Entities

- **Service Detail Entity**: Contains slug, title, shortDescription, fullDescription, coverImage, processSteps, deliverables, and SEO metadata.
- **Success Story Entity**: Contains slug, clientName, industry, challenge, solution, result, testimonialQuote, and serviceSlug.
- **Contact Submission Entity**: Contains name, email, phone, country, serviceType, notes, and locale.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of service detail pages (`/services/[slug]`) load in under 300ms with complete structured Schema.org markup.
- **SC-002**: Contact form submission achieves a 100% successful feedback loop with zero UI blocking.
- **SC-003**: 100% of subpages pass responsive inspection on mobile (375px+) with 0 horizontal scroll leaks.

## Assumptions

- Services content repository provides structured static data fallback for serverless execution.
- Images are optimized as WebP/PNG assets in `/public/images/services/` and `/public/images/contact/`.
