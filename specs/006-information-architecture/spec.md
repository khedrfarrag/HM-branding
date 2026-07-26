# Feature Specification: Expanded Platform Information Architecture

**Feature Branch**: `006-information-architecture`

**Created**: 2026-07-08

**Status**: Ratified

**Input**: Domain-Driven, Content-Driven Information Architecture design for Hussam Mabrouk's expanded personal branding platform.

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Arabic Importer Sourcing & Experiences (Priority: P1)
An Arabic-speaking business owner discovers the platform, reads dynamic sourcing articles, explores Canton Fair or factory experiences, and submits a booking/inquiry form.
**Acceptance Scenarios**:
1. **Given** a user navigates to `/ar/experiences/canton-fair/`, **When** they load the page, **Then** they see dynamic dates, itinerary detail components, and an inquiry form.
2. **Given** a user reads a knowledge base article, **When** they reach the end, **Then** related topics, tags, and experience options are dynamically suggested.

### User Story 2 — Author Credentials & Media (Priority: P2)
A decision maker evaluates Hussam's profile, including certificates, career timeline events, media gallery, videos, and podcast appearances.
**Acceptance Scenarios**:
1. **Given** a user visits `/ar/about/bio`, **When** they load the page, **Then** achievements, timeline events, and verified certificates render dynamically from the Author repository.

### User Story 3 — Trade Intelligence Alerts (Priority: P3)
A returning importer accesses real-time shipping news, supply chain alerts, and customs changes in Arabic.
**Acceptance Scenarios**:
1. **Given** a user visits `/ar/trade-intelligence/`, **When** they view alerts, **Then** critical alerts display with clear severity levels (low, medium, high, critical).

---

## Requirements *(mandatory)*

### Functional Requirements

**1. Booking Domain**
- **FR-B01**: System MUST support 4 types of bookings: Consultation Booking, Experience Booking, Corporate Booking, and future Event Booking.
- **FR-B02**: Booking validation MUST prevent booking conflict and support integration with `ICalendarGateway` and `IPaymentGateway`.

**2. Trade Intelligence Domain**
- **FR-TI01**: System MUST support 9 intelligence feeds: Shipping News, Customs Updates, Currency Monitoring, China Market Updates, Trade Regulations, Factory News, Global Trade News, China Exhibitions, and Supply Chain Alerts.

**3. Media Domain**
- **FR-M01**: System MUST render Videos, Podcasts, Interviews, Gallery, and Press entries dynamically.

**4. Author Domain Expansion**
- **FR-A01**: System MUST display Biography, Achievements, Articles, Videos, Media Appearances, Certificates, Timeline, Events, and Gallery.

**5. Experience Domain Expansion**
- **FR-E01**: System MUST support 7 sub-types of experiences: Business Trips, Factory Tours, VIP Experiences, Private Mentorship, China Business Experience, Corporate Programs, and Canton Fair Programs.

**6. China Domain Expansion**
- **FR-C01**: System MUST split China intelligence into 8 subdomains: Cities, Markets, Factories, Hotels, Restaurants, Translators, Shipping Companies, and Ports.

**7. Knowledge Domain Expansion**
- **FR-K01**: System MUST support Article categorization by Topics, Categories, Series, Tags, and Related Content matching.

**8. Repository & Integrations Layers**
- **FR-R01**: All data queries MUST pass through Repository interfaces, which must support swapping from Local MDX to headless CMS, SQL databases, or remote APIs.
- **FR-I01**: System MUST use abstract provider interfaces for CRM, Payments, Analytics, Calendar, Storage, Email, and Search.


---

# Appendix A — Complete Information Architecture

---

## Section 1 — Complete Site Hierarchy

```
hussam-mabrouk.com/
+-- [locale]/                          # ar, en
|   +-- (root)                         # Homepage
|   +-- about/
|   |   +-- [...slug]/                 # Bio, achievements, certificates, gallery, timeline
|   +-- knowledge/                     # Articles, categories, topics, series, tags
|   |   +-- glossary/
|   |   |   +-- [term]/
|   |   +-- faq/
|   |   |   +-- [category]/
|   |   +-- [category]/
|   |       +-- [slug]/
|   +-- experiences/                   # Trips, tours, VIP, mentorship, corporate, Canton Fair
|   |   +-- [type]/
|   |       +-- [slug]/
|   +-- services/
|   |   +-- [slug]/                    # Sourcing, QC, consulting, etc.
|   +-- trade-intelligence/            # News, shipping, customs, currency, supply alerts
|   |   +-- [type]/
|   |       +-- [slug]/
|   +-- media/
|   |   +-- [type]/                    # Videos, podcasts, gallery, press
|   |       +-- [slug]/
|   +-- china/
|   |   +-- cities/
|   |   |   +-- [slug]/
|   |   +-- markets/
|   |   |   +-- [slug]/
|   |   +-- factories/
|   |   |   +-- [slug]/
|   |   +-- hotels/
|   |   |   +-- [slug]/
|   |   +-- restaurants/
|   |   |   +-- [slug]/
|   |   +-- translators/
|   |   |   +-- [slug]/
|   |   +-- shipping-companies/
|   |   |   +-- [slug]/
|   |   +-- ports/
|   |       +-- [slug]/
|   +-- booking/                       # Dynamic experience / consultation bookings
|   |   +-- checkout/
|   |   +-- confirmation/
|   +-- success-stories/
|   |   +-- [slug]/
|   +-- tools/
|   |   +-- [slug]/
|   +-- downloads/
|   |   +-- [slug]/
|   +-- contact/
|   +-- legal/
|       +-- [slug]/
+-- api/
    +-- search/
    +-- booking/
    +-- contact/
```

---

## Section 2 — Route Architecture (Dynamic Catch-All Paths)

| Route Pattern | Next.js Page File Path |
|---------------|------------------------|
| `/[locale]/about/[...slug]` | `src/app/[locale]/about/[...slug]/page.tsx` |
| `/[locale]/knowledge/[category]/[slug]` | `src/app/[locale]/knowledge/[category]/[slug]/page.tsx` |
| `/[locale]/experiences/[type]/[slug]` | `src/app/[locale]/experiences/[type]/[slug]/page.tsx` |
| `/[locale]/services/[slug]` | `src/app/[locale]/services/[slug]/page.tsx` |
| `/[locale]/trade-intelligence/[type]/[slug]` | `src/app/[locale]/trade-intelligence/[type]/[slug]/page.tsx` |
| `/[locale]/media/[type]/[slug]` | `src/app/[locale]/media/[type]/[slug]/page.tsx` |
| `/[locale]/china/[subdomain]/[slug]` | `src/app/[locale]/china/[subdomain]/[slug]/page.tsx` |
| `/[locale]/booking/[type]/[slug]` | `src/app/[locale]/booking/[type]/[slug]/page.tsx` |
| `/[locale]/success-stories/[slug]` | `src/app/[locale]/success-stories/[slug]/page.tsx` |
| `/[locale]/legal/[slug]` | `src/app/[locale]/legal/[slug]/page.tsx` |

*End of Specification*
