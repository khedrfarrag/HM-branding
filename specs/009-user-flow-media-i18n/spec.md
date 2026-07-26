# Feature Specification: User Journey Booking Flow, Media Assets and Homepage Localization Fixes

**Feature Branch**: `009-user-flow-media-i18n`

**Created**: 2026-07-19

**Status**: Draft

**Input**: User description: "الكل دفعه واحده" (Implement user flow & admin flow connection, media assets generation, and homepage Arabic localization fixes all at once)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Live Experience Booking Linkage (Priority: P1)

As a visitor reading details of a field trip (e.g., China Canton Fair Tour), I want to be able to immediately click a booking button for my preferred date so I can fill in my booking information.

**Why this priority**: Without this, visitors see upcoming dates but cannot register, making the experience catalog a dead end.

**Independent Test**: Navigate to `/ar/experiences/canton-fair-programs/canton-fair-business-experience`, view the list of available dates, click "Book Now" (احجز الآن) on a specific slot, and verify it redirects to the correct locale-aware booking form `/ar/booking/experience/canton-fair-business-experience?date=YYYY-MM-DD`.

**Acceptance Scenarios**:

1. **Given** a visitor is on the experience details page, **When** they look at the "Available Dates & Registration" section, **Then** they MUST see a "Book Now" / "احجز الآن" action button next to each upcoming date slot.
2. **Given** a visitor clicks the book button for a specific date, **When** the page redirects, **Then** the booking page MUST pre-populate or lock in the selected date segment.

---

### User Story 2 - Knowledge Article Lead Conversion CTA (Priority: P1)

As a reader browsing sourcing articles (e.g., "How to Import from China"), I want to see a clear Call-to-Action (CTA) panel at the bottom inviting me to book a sourcing consultation.

**Why this priority**: Helps convert passive reader traffic into active booking leads.

**Independent Test**: Navigate to `/ar/knowledge/importing/how-to-import-from-china`, scroll to the bottom, verify a premium CTA card is displayed with a link, click it, and verify it navigates to the consultation booking page.

**Acceptance Scenarios**:

1. **Given** a visitor has scrolled to the bottom of a knowledge base article, **When** they finish the article body, **Then** a prominent, beautifully styled section MUST offer a quick consultation booking link.
2. **Given** the visitor is viewing the page in Arabic, **When** they view the CTA, **Then** all CTA copy and links MUST be fully localized in Arabic.

---

### User Story 3 - Media Assets Provisioning (Priority: P1)

As a visitor, I want to see premium cover images on experiences, articles, and home sections instead of broken image links.

**Why this priority**: Visually broken image cards degrade the premium aesthetic and hurt trust.

**Independent Test**: Visit the home page, experiences directory, and knowledge base pages, and confirm all image tags load valid media assets without any 404 console errors.

**Acceptance Scenarios**:

1. **Given** any layout displaying an experience, article, or city card, **When** the page renders, **Then** the image URL MUST resolve to a real premium placeholder image saved in the local public folder.
2. **Given** the canton fair experience page, **When** it loads, **Then** the cover image at `/images/experiences/canton-fair.jpg` MUST be loaded successfully.

---

### User Story 4 - Homepage Localization & Encoding Refactoring (Priority: P2)

As an Arabic speaking visitor, I want to read the footer and map sections of the homepage in clean, correct Arabic script without raw character/encoding errors.

**Why this priority**: Garbled text looks unprofessional and breaks the user experience for Arabic speakers.

**Independent Test**: Visit `/ar`, scroll to the footer and the logistics map, and verify that "روابط سريعة" and other sections display proper Arabic text and have no corrupted characters (like `╪د┘╪ص┘è╪ر`).

**Acceptance Scenarios**:

1. **Given** a visitor switches to the Arabic homepage, **When** they look at the Footer and Logistics Map, **Then** all labels MUST come from `ar.json` and render correctly.
2. **Given** a visitor switches to the English homepage, **When** they look at the Footer and Logistics Map, **Then** all labels MUST come from `en.json` and render in English LTR.

---

### Edge Cases

- **No upcoming dates available**: If an experience has no future schedules created by the admin, the "Available Dates & Registration" section MUST render an alternative, friendly message (e.g., "No upcoming trips scheduled. Contact us for custom bookings") instead of an empty table or broken layout.
- **Supabase offline or slow load**: If Supabase fetch fails, experiences MUST gracefully fallback to the local markdown-based static dates with local booking fallback parameters.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The experiences detail view MUST render a "Book Now" CTA link for each available schedule slot.
- **FR-002**: The booking link for an experience MUST forward the selected `start_date` as a query parameter (e.g. `?date=YYYY-MM-DD`) to pre-select it on the booking form.
- **FR-003**: The knowledge base article detail view MUST contain a localized conversion banner linking to the Sourcing Consultation booking form.
- **FR-004**: The project MUST bundle high-quality, lightweight image assets in `public/images/` for all referenced experience covers, knowledge covers, and city profiles.
- **FR-005**: All hardcoded ternary strings for localization inside `src/features/home/components/HomePage.tsx` MUST be migrated to `ar.json` and `en.json` dictionaries under clear keys.
- **FR-006**: The file encoding for `HomePage.tsx` and all modified files MUST be strictly verified to ensure Arabic characters do not suffer from encoding degradation.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All experience detail pages contain functional booking buttons that route to the booking page with zero 404 errors.
- **SC-002**: All knowledge base article pages render a localized booking call-to-action banner at the bottom.
- **SC-003**: 100% of image assets specified in the content repository (`experiences.ts`, `knowledge.ts`, `china.ts`) are physically present in the `public/images/` tree and load successfully.
- **SC-004**: Zero hardcoded UI strings remain in `HomePage.tsx`, with all translation values loaded from JSON locale dictionaries.
- **SC-005**: Arabic characters in the homepage footer and logistics map display properly in all standard browsers.

## Assumptions

- We assume that the user-facing booking route `/booking/[type]/[slug]` is already fully capable of handling pre-selected dates via URL query parameters.
- We assume that it is safe to overwrite the static `dates` listed in local markdown files if Supabase has live schedules available, or merge them.
- All generated images will be saved as WebP or highly compressed JPEG/PNG format to maintain high performance.
