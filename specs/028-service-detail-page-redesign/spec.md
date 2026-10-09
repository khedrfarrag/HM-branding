# Feature Specification: Redesign Service Detail Page UI & UX

**Feature Branch**: `028-service-detail-page-redesign`

**Created**: 2026-09-30

**Status**: Draft

**Input**: User description: "Redesigning and elevating the service detail pages (/[locale]/services/[slug]) with luxury glassmorphism, glowing visual highlights, an interactive connected process timeline, social proof / success story integrations, and high-converting consultation and WhatsApp CTAs."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Luxury Visual Header & Glassmorphic Hero Container (Priority: P1)

As a potential importer or business client visiting a service detail page (e.g. Product Sourcing), I want to see a premium, visually engaging header with glowing accents, subtle badge indicators, and clear typography so that I instantly recognize the high-value expertise of Hussam Mabrouk.

**Why this priority**: First impressions dictate trust and user engagement on high-ticket B2B service offerings.

**Independent Test**: Can be tested by navigating to `/[locale]/services/sourcing` and verifying glassmorphism, ambient glow backdrops, gradient title text, and verified badge indicators.

**Acceptance Scenarios**:

1. **Given** a user opens `/[locale]/services/sourcing`, **When** the page renders, **Then** an ambient gold glow backdrop, a gradient title ("البحث عن المنتجات والمصادر"), and a verified premium service badge are clearly visible.
2. **Given** a user switches locale between `ar` and `en`, **When** language toggles, **Then** text alignment, badges, and layout mirror correctly with RTL/LTR design integrity.

---

### User Story 2 - Interactive Connected Process Timeline (Priority: P1)

As a user exploring how the service is delivered, I want to see the service execution steps organized in a connected vertical timeline with numbered step markers and hover state highlights so that I easily understand the step-by-step workflow.

**Why this priority**: Clear process breakdown reduces buyer friction and builds confidence in execution transparency.

**Independent Test**: Can be tested by inspecting the process section on the service page to confirm connected timeline lines, step indicators, and hover animations.

**Acceptance Scenarios**:

1. **Given** a service with process steps, **When** scrolling to "مراحل تنفيذ الخدمة", **Then** steps are rendered along a vertical connected line with numbered glowing badges (1, 2, ...).
2. **Given** a user hovers over any process step card, **When** hovered, **Then** the border highlights with amber glow and subtly shifts to provide micro-interaction feedback.

---

### User Story 3 - Social Proof & High-Converting Action CTAs (Priority: P1)

As a ready-to-buy client, I want to see relevant success metrics/case studies and prominent action buttons to book a consultation or contact Hussam via WhatsApp directly from the service detail page.

**Why this priority**: Direct conversion mechanisms are essential for lead generation and business bookings.

**Independent Test**: Can be tested by verifying the presence of case study highlight cards and clicking "Book Consultation" / "WhatsApp Inquiry" CTAs.

**Acceptance Scenarios**:

1. **Given** a service page, **When** scrolling to the bottom, **Then** a dedicated CTA conversion block is presented with buttons for booking a consultation (`/[locale]/contact`) and quick WhatsApp inquiry.
2. **Given** a service with an associated success story in the repository, **When** rendered, **Then** a verified case study snippet with quantitative results (e.g. 30% savings) is displayed as social proof.

---

### Edge Cases

- What happens when a service has no process steps or no linked success story?
  - System MUST gracefully hide the timeline or success story card without leaving empty DOM nodes or broken layout spaces.
- How does the system handle responsive viewports on mobile devices?
  - Connected vertical timeline lines and CTA buttons MUST adapt gracefully on small screens (full-width stacked buttons, scaled padding).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST render service detail pages (`/[locale]/services/[slug]`) using a glassmorphic container with ambient glowing background accents.
- **FR-002**: System MUST display a verified badge indicator, gradient title text, and clean short/full descriptions for each service.
- **FR-003**: System MUST format service process steps into a connected vertical timeline UI with step numbers and hover state animations.
- **FR-004**: System MUST include a primary Conversion CTA Card at the bottom of every service detail page containing direct links to book a consultation call and initiate a WhatsApp inquiry.
- **FR-005**: System MUST query and display relevant success story highlights (social proof) whenever a service slug maps to an existing case study.
- **FR-006**: System MUST maintain full i18n support for Arabic (`ar`) and English (`en`) with proper RTL/LTR layout mirroring and icons.

### Key Entities

- **Service**: Entity containing `slug`, `title`, `shortDescription`, `fullDescription`, `processSteps`, and `seo` metadata.
- **SuccessStory**: Entity containing `slug`, `clientName`, `result`, `testimonialQuote`, and `serviceSlug` linkage.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of service detail pages render with zero layout shift or visual bugs across mobile, tablet, and desktop breakpoints.
- **SC-002**: Conversion path visibility is 100% (a prominent CTA button is visible above or within one scroll height on all screen sizes).
- **SC-003**: Page load performance maintains sub-second interactive rendering without unneeded dynamic script overhead.

## Assumptions

- Direct WhatsApp links will use the configured business phone number from site configuration.
- Consultation booking button routes to the existing `/[locale]/contact` or booking system route.
- All service data and success stories are supplied dynamically via `LocalFsServiceRepository`.
