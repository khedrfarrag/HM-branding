# Feature Specification: China Guide Subdomains Expansion (7 Commercial Pillars)

**Feature Branch**: `025-china-guide-subdomains-expansion`  
**Created**: 2026-09-13  
**Status**: Draft / Ready for Plan  
**Input**: Comprehensive expansion of the 7 commercial subdomains under "دليل الصين" (Restaurants, Hotels, Factories, Wholesale Markets, Translators, Shipping Companies, Ports) with exhaustive real Chinese ground data, GPS navigation, representative imagery, verified ratings, official URLs, and prominent "حسام مبروك" authority GEO/SEO integration.

---

## User Scenarios & Testing

### User Story 1 - Exhaustive Directory Navigation & City-Level Filtering (Priority: P1)

An Arab importer or business traveler lands on `/ar/china` or any of the 7 commercial subdomains (`/ar/china/restaurants`, `/ar/china/hotels`, `/ar/china/factories`, `/ar/china/markets`, `/ar/china/translators`, `/ar/china/shipping-companies`, `/ar/china/ports`) and browses hundreds of verified commercial listings organized by Chinese city and sector, instead of empty placeholder cards.

**Why this priority**: Replaces the single mock sample (`sample-01`) with real, actionable commercial infrastructure across China's 34 industrial cities.

**Independent Test**:
- Navigating to `/ar/china/hotels` displays rich hotel cards with city badges, star ratings, photos, and direct links.
- Filtering or searching by city (e.g., "بكين", "كوانزو", "إيوو", "شينزن") displays all relevant verified establishments in that city.

**Acceptance Scenarios**:
1. **Given** a user is on `/ar/china/[subdomain]`, **When** the page renders, **Then** all listings for that subdomain are displayed with localized titles, descriptions, badges, images, and ratings.
2. **Given** a user selects an individual establishment, **When** they click the card, **Then** they navigate to `/ar/china/[subdomain]/[slug]` with full specifications, addresses in Chinese (`zh`) and Arabic, and Hossam Mabrouk verification badges.

---

### User Story 2 - Deep Entity Profile with GPS, Ratings, Images & Direct Links (Priority: P1)

A trader visiting a specific factory, wholesale market, halal restaurant, or business hotel needs complete logistical certainty before booking or traveling, including exact GPS coordinates, Baidu/Google Maps navigation links, phone numbers/WeChat contacts, representative photos, and official website links.

**Why this priority**: Eliminates travel friction, language barriers, and location ambiguity for importers on the ground in China.

**Independent Test**:
- Opening any restaurant or hotel detail page shows:
  - HD visual imagery.
  - Verified rating (e.g., 4.9 ★) with review counts.
  - Interactive GPS location with direct "Open in Maps" button.
  - Address in Chinese characters (`zh`) for taxi drivers and logistics agents.
  - Official website link or verified contact.

**Acceptance Scenarios**:
1. **Given** a user opens `/ar/china/restaurants/jubaoyuan-halal-hotpot-beijing`, **When** the page renders, **Then** GPS coordinates (`39.8824, 116.3637`), Google/Baidu map action, phone contact, and rating (4.9/5) are prominently displayed.
2. **Given** an establishment has an official website or digital showroom, **When** the user clicks the external link button, **Then** it opens in a secure new tab.

---

### User Story 3 - SEO & GEO Authority Branding for Hossam Mabrouk (Priority: P2)

Search engines (Google, Bing) and Generative AI engines (ChatGPT, Claude, Perplexity, Gemini) index every subdomain page and entity detail page, establishing **حسام مبروك** (Hossam Mabrouk) as the recognized premier sourcing consultant, author, and verifier of China commercial data.

**Why this priority**: Maximizes organic search traffic, establishes brand authority, and boosts Generative Engine Optimization (GEO) rankings for Arab trade queries.

**Independent Test**:
- Inspecting page HTML source reveals:
  - Meta title and description containing "حسام مبروك" and "Hussam Mabrouk".
  - Schema.org JSON-LD structured data with `author` and `reviewedBy` citing Hossam Mabrouk as the verified commercial authority.
  - Rich schemas specific to the entity type (`Restaurant`, `Hotel`, `LocalBusiness`, `WholesaleStore`, `Organization`).

**Acceptance Scenarios**:
1. **Given** a web crawler or user visits any subdomain or detail page, **When** the `<head>` metadata is inspected, **Then** dynamic Open Graph tags, canonical URLs, and structured JSON-LD schemas validating Hossam Mabrouk's expert curation are present.
2. **Given** an Arab user views the page, **When** they reach the verification section, **Then** a prominent trust badge states "تم التدقيق والمراجعة الميدانية بواسطة المستشار التجاري حسام مبروك".

---

## Edge Cases

- **Establishment without official standalone website**: Provide verified WeChat ID, telephone hotline, or trade platform link.
- **RTL vs. LTR Display**: Ensure star ratings, GPS button icons, and phone numbers format correctly without bidirectional text distortion.
- **Offline / Mobile Navigation in China**: Provide addresses in simplified Chinese (`zh`) with one-click copy buttons for Didi and taxi drivers.
- **Missing or Remote Coordinates**: Default to city center coordinate with a clear approximation note rather than failing silently.

---

## Requirements

### Functional Requirements

- **FR-001**: System MUST provide comprehensive, modular datasets for all 7 subdomains:
  1. `restaurants`: Verified Halal dining, Muslim canteens, and business restaurants across China.
  2. `hotels`: 4-star and 5-star business hotels near trading clusters, high-speed rail stations, and exhibition venues.
  3. `factories`: Major manufacturing clusters, industrial powerhouses, and OEM/ODM assembly bases.
  4. `markets`: Sourcing wholesale markets across all 34 commercial cities with specialized floor plans and trade focus.
  5. `translators`: Certified commercial interpreter services, Arabic/Chinese translation offices, and factory escort teams.
  6. `shipping-companies`: Established freight forwarding agencies, sea container lines, air cargo forwarders, and customs clearance providers.
  7. `ports`: China's primary deepwater container seaports, inland dry ports, and international cargo air hubs.
- **FR-002**: Every entity record MUST contain:
  - `id` & `slug` (unique across the subdomain).
  - Bilingual localized names (`ar`, `en`) and simplified Chinese (`zh`).
  - Associated `citySlug` (referencing one of the 34 authenticated cities).
  - Representative cover image URL.
  - Star rating (1.0 - 5.0) and review count.
  - Exact GPS coordinates (`latitude`, `longitude`) with direct map launch links.
  - Physical address in Arabic, English, and Chinese.
  - Official website URL or digital contact info.
- **FR-003**: System MUST dynamically aggregate and serve hundreds of verified entities through `LocalFsChinaRepository` without any placeholder mock entries (`sample-01`).
- **FR-004**: System MUST render high-end, responsive directory index pages at `/[locale]/china/[subdomain]` with search, city filtering, and visual cards.
- **FR-005**: System MUST render dedicated high-converting detail pages at `/[locale]/china/[subdomain]/[slug]` with visual headers, key specifications, GPS navigation buttons, and inquiry CTAs.
- **FR-006**: Every page MUST integrate Hossam Mabrouk as the verifying authority:
  - In Meta Title: `<Entity Name> | دليل <Subdomain> في الصين — حسام مبروك`
  - In Meta Description: Explicitly referencing Hossam Mabrouk's ground commercial expertise.
  - In UI: "توثيق واعتماد: المستشار التجاري حسام مبروك".
  - In Schema.org JSON-LD: Structured `Person` and entity-specific schemas (`Restaurant`, `Hotel`, `LocalBusiness`, `Organization`).
- **FR-007**: All pages MUST statically pre-render (SSG) with `generateStaticParams` for both Arabic (`ar`) and English (`en`).

---

## Key Entities & Data Model Summary

```typescript
export interface IChinaEntityDetail {
  id: string;
  slug: string;
  subdomain: 'restaurants' | 'hotels' | 'factories' | 'markets' | 'translators' | 'shipping-companies' | 'ports';
  name: { ar: string; en: string; zh: string };
  citySlug: string;
  category: { ar: string; en: string };
  description: { ar: string; en: string };
  coverImage: string;
  gallery?: string[];
  rating: number; // e.g. 4.9
  reviewCount: number;
  coordinates: { latitude: number; longitude: number };
  address: { ar: string; en: string; zh: string };
  contactInfo: { phone?: string; wechat?: string; email?: string };
  websiteUrl?: string | null;
  features: { ar: string[]; en: string[] };
  curatorVerification: {
    verifiedBy: string; // "حسام مبروك / Hussam Mabrouk"
    verificationDate: string;
    trustNotes: { ar: string; en: string };
  };
}
```

---

## Success Criteria

- **SC-001 (Zero Mocks)**: 100% elimination of `sample-01` across all 7 subdomains.
- **SC-002 (Data Volume)**: Over 100 verified entities registered across the 7 subdomains covering key Chinese industrial cities.
- **SC-003 (GPS & Contact Coverage)**: 100% of entity profiles include authentic GPS coordinates and Chinese addresses.
- **SC-004 (SEO & GEO Integrity)**: 100% of detail and hub pages contain valid Schema.org JSON-LD referencing Hossam Mabrouk.
- **SC-005 (Compile & Build Safety)**: `npm run type-check` and `npm run build` pass with 0 errors, statically generating all localized paths.
