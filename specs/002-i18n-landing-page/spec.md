# Feature Specification: Multilingual Landing Page (i18n)

**Feature Branch**: `002-i18n-landing-page`

**Created**: 2026-07-04

**Status**: Draft

**Input**: User description: "انا عاوز اشتغل اولا علي اللغه طبعا الاساس هيبقي بالعربي واللغه التانيه هي الانجليزيه طبعا انا عاوز البيست براكتيس واللاندينج بيج عاوزها زي الموقع الديمو الي كنت مدهولك"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Multilingual Landing Page Framework (Priority: P1)

As a visitor accessing the personal branding website, I want the website to load in Arabic by default (with right-to-left layout direction) and be able to easily switch to English (with left-to-right layout direction) so that I can consume the content in my preferred language.

**Why this priority**: Arabic is the primary audience language. Sourcing and export partners require English. Establishing the correct layout direction and path structures from the start prevents styling regressions later.

**Independent Test**:
- Open the root URL (`/`). Verify it redirects to `/ar` and renders text in Arabic (RTL).
- Click the language switcher in the header. Verify the URL changes to `/en` and layout adjusts to LTR.

**Acceptance Scenarios**:

1. **Given** a user visits `/`, **When** the page loads, **Then** the browser automatically redirects to the default Arabic locale `/ar`, sets `dir="rtl"` on the html element, and serves Arabic translations.
2. **Given** a user is on `/ar`, **When** they click the language toggle button, **Then** the page transitions smoothly, the URL updates to `/en`, `dir="ltr"` is set, and English translations are displayed.
3. **Given** a user accesses `/en/about`, **When** they click a link to another section, **Then** the destination page maintains the English locale context.

---

### User Story 2 - Premium Portfolio Sections Translation & Display (Priority: P1)

As a premium business client, I want to read all landing page sections (Hero, About, Bento Grid Industries, Services Track, Timeline, Achievements, Testimonials, Contact) translated with professional-grade vocabulary in both Arabic and English.

**Why this priority**: The website serves as a high-value personal brand portal. The messaging must look native and premium in both languages.

**Independent Test**:
- Toggle languages on the page and verify all headings, paragraphs, buttons, timelines, and form labels adapt to the selected language with no layout overflows or broken grids.

**Acceptance Scenarios**:

1. **Given** a user switches between languages, **When** reviewing text, **Then** all copy must be fully translated with zero fallback placeholder text.
2. **Given** the page renders in Arabic, **When** using Bricolage Grotesque and custom typography, **Then** the Arabic fonts adjust to maintain proper line heights and readability (avoiding squished glyphs common in Arabic web typesetting).

---

### User Story 3 - Interactive Sourcing Map & Scheduling Widget (Priority: P2)

As a prospective business partner, I want the interactive components (the global shipping route map and the consultation booking form/slots) to fully adapt their text, labels, and formats to my selected locale.

**Why this priority**: Improves conversion rates and global credibility by delivering localized data visualization and scheduling tools.

**Independent Test**:
- Verify the map tooltips and sidebar metrics display in the active language.
- Verify the calendar slot selector adjusts day names and timezone notations based on the selected language.

**Acceptance Scenarios**:

1. **Given** the locale is Arabic, **When** viewing the active trade routes map, **Then** tooltips (e.g., Rotterdam, Dubai) and metric legends (e.g., "$940M", "128 lanes") are rendered in Arabic digits/text.
2. **Given** the booking form is open in English, **When** selecting calendar days, **Then** dates are presented in English formatting, and form inputs validate using standard English error messages.

---

### Edge Cases

- **Locale Mismatch**: If a user enters an unsupported locale in the URL (e.g., `/fr`), the system must gracefully redirect them to the default `/ar` locale.
- **Directional UI Elements**: Arrows and navigation icons must flip orientation between LTR and RTL to avoid confusing layout indicators.
- **Search Engine Indexing**: Search crawlers must be able to index both the Arabic (`/ar`) and English (`/en`) versions independently.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST support localized subpaths for all pages using standard `/[locale]` structures.
- **FR-002**: System MUST default to the Arabic (`ar`) locale if no language is specified in the request.
- **FR-003**: System MUST set the correct HTML `dir` attribute (`rtl` for Arabic, `ltr` for English) and `lang` attribute dynamically.
- **FR-004**: System MUST store translation dictionary files separated from the layout logic (e.g., JSON files) for easy editing.
- **FR-005**: System MUST serve search-engine-friendly metadata with alternative language links (`rel="alternate" hreflang="..."`) to prevent SEO duplicate content penalties.
- **FR-006**: System MUST persist the selected locale across client-side navigation.
- **FR-007**: Language switcher MUST be accessible and prominently featured in the main header.

### Key Entities

- **LocaleDictionary**:
  - `locale`: Active language code (ar | en)
  - `direction`: Layout flow direction (rtl | ltr)
  - `translations`: Key-value object mapping component keys to translated text strings.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Page redirection to the default locale must complete in under 50ms.
- **SC-002**: Switching languages must require exactly one user click and complete in under 150ms.
- **SC-003**: Zero layout overflows, line-wrap collisions, or text cut-offs in both Arabic (RTL) and English (LTR) modes on mobile, tablet, and desktop screens.
- **SC-004**: Both Arabic and English homepages score 95+ on Lighthouse Accessibility audits.

## Assumptions

- We assume no third-party paid translation API is required; static translation dictionaries will be fully supplied.
- We assume Arabic is the default fallback language for all requests.
- Country names and geographical coordinates on the interactive map remain constant, but their display names adapt to the active dictionary.
