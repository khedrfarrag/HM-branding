# Feature Specification: China Cities Commercial & Sourcing Guide — Phase 2 Completion
# (دليل مدن الصين التجاري الشامل — إكمال المتطلبات الناقصة)

**Feature Branch**: `022-china-cities-guide`

**Created**: 2026-08-25

**Updated**: 2026-08-25 (Phase 2 — Gap fill from full prompt analysis)

**Status**: Active

**Input**: Full prompt analysis from `docs/china-cities-guide-5ec71ef1.md` + gap analysis

---

## Context

The core infrastructure for the China Cities Guide was built in Phase 1:
- Dynamic city profile pages at `/[locale]/china-cities/[slug]`
- Hub directory with search, filtering, tier system, and interactive map
- City Comparison tool
- Full TypeScript data model (ICity, IWholesaleMarket, IDistrict, IIndustrialZone, ISourcingProduct, ILogisticsInfo, IBusinessTravelGuide, ITradeFair)

**What this spec covers (Phase 2)**: The gaps identified from the full prompt that were NOT implemented:
1. Dataset scope — only 6 cities exist, 50+ are required
2. Missing UI sections on city profile pages (Streets/Districts, Trade Fairs)
3. Product-to-City reverse lookup feature
4. "All Cities" paginated browse page
5. Image gallery section per city
6. "هذه المدينة مناسبة لمن؟" (Best For) visual section upgrade

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Expanded 30+ Cities Dataset (Priority: P1)

As a trader or importer, I want to browse and search a truly comprehensive database of Chinese commercial cities — including second-tier specialized cities like Zhongshan, Wenzhou, Xiamen, Linyi, Chengdu, Shunde, Shaoxing/Keqiao, Yongkang — so that I find the specific sourcing city for my niche product category.

**Why this priority**: Without sufficient city data, the entire feature is a skeleton. The hub currently has 6 cities vs the 50+ required for the guide to be useful to Arabic-speaking importers.

**Independent Test**: Navigate to `/ar/china-cities`, search for "أثاث" (Furniture), "إلكترونيات" (Electronics), or "ملابس" (Textiles), and verify that at least 15+ relevant cities appear with correct tier classification.

**Acceptance Scenarios**:

1. **Given** a user opens the China Cities hub, **When** they browse without filtering, **Then** they see at least 30 cities grouped correctly in Tier 1, Tier 2, and Tier 3 sections.
2. **Given** a user searches for "Electronics" or "Shenzhen" or "شنجن", **Then** Shenzhen and Dongguan and related cities appear with correct industry tags.
3. **Given** a user searches for "Furniture" or "أثاث", **Then** Foshan, Shunde, and Zhongshan appear in results.
4. **Given** a user searches for a Tier 3 city like "Yongkang" or "Linyi", **Then** the system returns that city with its correct specialization (Hardware Tools / Wholesale Small Commodities).

---

### User Story 2 - Streets & Districts Section on City Profile (Priority: P1)

As an importer planning a sourcing trip, I want to see a dedicated "Key Commercial Streets & Districts" section on each city profile page — showing street name, activity type (wholesale/retail), main products, nearest metro, and importer suitability — so that I can plan exactly which areas to visit.

**Why this priority**: Section §6 of the original prompt explicitly requires this. The `districts` data is already in the TypeScript model but is NOT rendered in the UI. This is the single highest-impact missing section.

**Independent Test**: Navigate to `/ar/china-cities/guangzhou` and verify a clearly labeled section titled "أهم المناطق والشوارع التجارية" appears with district cards showing metro info, trade type, and product lists.

**Acceptance Scenarios**:

1. **Given** a user is on a city profile page with defined districts, **When** they scroll down, **Then** a "Key Commercial Streets & Districts" section shows cards for each district with: name (AR/EN), activity type, nearest metro station, trade focus (Wholesale/Retail/Mixed), and importer suitability badge.
2. **Given** a city has no district data, **When** the section would render, **Then** it is cleanly hidden without breaking the layout.

---

### User Story 3 - Trade Fairs Section on City Profile (Priority: P1)

As a trade fair visitor, I want to see a dedicated "Trade Fairs" section on city profile pages — listing fairs with name, industry, venue, occurrence schedule (if verified), and official website — so that I can plan visits around major commercial events.

**Why this priority**: Section §21 of the prompt. Trade fair data (ITradeFair) is in the TypeScript model and even populated for Guangzhou (Canton Fair), but this section is entirely absent from CityProfileClient.tsx UI.

**Independent Test**: Navigate to `/ar/china-cities/guangzhou` and verify a "المعارض التجارية" section appears showing Canton Fair with verified information (name in AR/EN, venue, occurrence, link).

**Acceptance Scenarios**:

1. **Given** a user is on the Guangzhou city profile, **When** they scroll to Trade Fairs, **Then** the Canton Fair appears as a card with Arabic name, venue, schedule note, best-for tags, and clickable official website link.
2. **Given** a city has no trade fairs in its data, **When** the section renders, **Then** it is cleanly omitted.

---

### User Story 4 - Product-to-City Reverse Lookup (Priority: P2)

As an importer who knows their product category but not which Chinese city to visit, I want a dedicated "Browse by Product" feature where I select a product category (Furniture, Electronics, Textiles, Auto Parts, etc.) and see the best matching cities, markets, and industrial clusters — so that I can discover sourcing destinations from the product angle rather than the geography angle.

**Why this priority**: Section §10 of the prompt. This reverse lookup is a distinct UX flow that many importers prefer — they know what they want to buy, not where to go.

**Independent Test**: Navigate to `/ar/china-cities` and click "Furniture" from the product categories section. Verify that Foshan, Shunde, Guangzhou, and Zhongshan appear with explanations of why they match.

**Acceptance Scenarios**:

1. **Given** a user is on the hub page, **When** they click a product category badge (e.g., "Electronics"), **Then** the city grid filters to show only cities with that industry, with a banner clearly stating "Best cities for Electronics sourcing".
2. **Given** a user searches for a product name (e.g., "lighting" or "إضاءة"), **Then** Foshan, Zhongshan cities are highlighted as primary matches.
3. **Given** a user is on a city profile (e.g., Foshan), **When** they see the products/industries listed, **Then** each product tag is clickable and links back to the filtered hub view for that product.

---

### User Story 5 - All Cities Browse Page with Pagination (Priority: P2)

As a researcher or first-time user, I want a dedicated "All Cities" paginated browse page where I can see every Chinese commercial city in the database — organized alphabetically or by tier — so that I don't miss any relevant city that doesn't appear on the main hub's limited preview.

**Why this priority**: Section §27 of the prompt requires a "View All Cities" button leading to a full browse experience. The hub currently shows a filtered subset; there's no comprehensive listing page.

**Independent Test**: Navigate to `/ar/china-cities/all` and verify all 30+ cities appear in a paginated grid (10 per page) with working navigation between pages.

**Acceptance Scenarios**:

1. **Given** a user clicks "View All Cities" from the hub, **When** the all-cities page loads, **Then** they see all cities in the database organized by Tier, with 10 cities per page and working pagination controls.
2. **Given** a user is on page 2 of the all-cities browse, **When** they click a city card, **Then** they navigate to that city's profile page.
3. **Given** the database has 30+ cities, **Then** pagination shows the correct total (e.g., "Showing 11-20 of 35 cities").

---

### User Story 6 - Image Gallery Section on City Profile (Priority: P3)

As a visual learner or first-time visitor planning a sourcing trip, I want to see a gallery of multiple images (skyline, downtown, markets, industrial zones, port) on each city profile page — so that I get a visual sense of the city's character and commercial environment.

**Why this priority**: Section §5 of the prompt. The `gallery` array is already in the ICity data model and populated with multiple image URLs, but the UI only renders the single hero/skyline image.

**Independent Test**: Navigate to `/ar/china-cities/guangzhou` and verify a "Gallery" section shows 2+ additional images beyond the hero banner with proper alt text and city labels.

**Acceptance Scenarios**:

1. **Given** a user is on a city profile with 2+ gallery images, **When** they scroll to the gallery section, **Then** images render in a responsive grid layout with alt text.
2. **Given** a city has only 1 or 0 gallery images, **When** the gallery section would render, **Then** it is omitted cleanly.

---

### Edge Cases

- What happens if a newly added city has minimal data (only name + province + tier)?
  - City card renders with available data; sections with no data are cleanly hidden; no placeholder text shows for empty fields (omit the section entirely).
- What happens if a user filters by a product that no city in the database covers?
  - Display "No cities found for this product category" message with a suggestion to browse all cities.
- What happens on the all-cities page when the database is later expanded to 100+ cities?
  - Pagination automatically adapts; no code change required — page size is configurable.
- How does the Streets/Districts section render on mobile?
  - Stacked single-column cards; metro info prominently visible; no horizontal scroll.

---

## Requirements *(mandatory)*

### Functional Requirements

#### Phase 2 New Requirements

- **FR-101**: System MUST expand the city dataset to cover at least 30 Chinese commercial cities, including all Tier 1 cities: Guangzhou, Shenzhen, Yiwu, Foshan, Dongguan, Ningbo + Tier 2: Zhongshan, Shunde, Hangzhou, Shanghai, Xiamen, Quanzhou, Wenzhou, Qingdao, Linyi, Chengdu, Chongqing, Suzhou, Ningde, Jinhua, Taizhou (Zhejiang), Yongkang, Cixi, Yuyao, Shaoxing/Keqiao + Tier 3: Haining, Jiaxing, Ruian, Puning, Cangzhou (where data is verifiable).
- **FR-102**: City profile pages MUST render a "Key Commercial Streets & Districts" section when `districts` data is available, showing district name (AR/EN), trade focus, main products, nearest metro, and importer suitability.
- **FR-103**: City profile pages MUST render a "Trade Fairs" section when `tradeFairs` data is available, showing fair name (AR/EN), industry, venue, occurrence, official website link, and best-for tags.
- **FR-104**: The hub page MUST support product-category-based filtering that drives the city grid from the product angle, with a clear "Best cities for [Product]" label.
- **FR-105**: The system MUST provide a dedicated "All Cities" browse page at `/[locale]/china-cities/all` with paginated display (10 cities per page), sortable by tier.
- **FR-106**: City profile pages MUST render a multi-image gallery section when the city's `gallery` array contains 2+ images.
- **FR-107**: All new city data entries MUST follow the same ICity TypeScript interface — no new fields added without updating the type definition.
- **FR-108**: Product tags on city profile pages MUST be clickable and deep-link to the hub's filtered view for that product category.

#### Inherited from Phase 1 (unchanged)

- **FR-001 through FR-010**: All requirements from Phase 1 remain in force and are considered complete.

---

### Key Entities (Phase 2 Additions)

- **City Dataset Entry** (extended): All 30+ cities must include at minimum: `id`, `slug`, `name` (AR/EN/ZH), `province`, `region`, `tier`, `commercialImportanceScore`, `heroImage`, `description` (AR/EN), `keyIndustries`, `primaryProducts` (AR/EN), `bestFor`, `logistics` (airports, ports, rail), `businessTravelGuide` (bestVisitMonths, weatherSummary), `relatedCitySlugs`, `seo` (title, description in AR/EN).
- **District/Street** (rendered): `name` (AR/EN), `activityType` (AR/EN), `mainProducts`, `tradeFocus`, `suitableForImporter`, `nearestMetro`.
- **TradeFair** (rendered): `name` (AR/EN), `industry`, `venue` (AR/EN), `occurrence` (AR/EN), `officialWebsite`, `bestFor`.
- **ProductCategory** (filter): A standardized list of product category keys used for cross-referencing cities: `furniture`, `electronics`, `textiles`, `apparel`, `auto-parts`, `watches`, `jewelry`, `lighting`, `building-materials`, `machinery`, `plastics-rubber`, `hardware-tools`, `small-commodities`, `stationery`, `home-appliances`, `solar-renewable`, `logistics-shipping`.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-101**: At least 30 verified Chinese commercial cities are accessible via profile pages in both Arabic and English, with no empty or placeholder content for mandatory fields.
- **SC-102**: 100% of Tier 1 cities (Guangzhou, Shenzhen, Yiwu, Foshan, Dongguan, Ningbo, Hangzhou, Shanghai, Xiamen, Qingdao) have: Districts section rendered, Logistics section rendered, Business Traveler Guide rendered.
- **SC-103**: The Streets/Districts section renders on all city profile pages that have `districts` data (currently Guangzhou verified) — zero layout breakage on pages with no districts data.
- **SC-104**: The Trade Fairs section renders on all city profile pages that have `tradeFairs` data — Canton Fair visible on Guangzhou page.
- **SC-105**: Product-category filtering on the hub returns relevant cities within 300ms of user interaction.
- **SC-106**: The "All Cities" browse page loads and paginates correctly showing 10 cities per page with working navigation for 30+ cities.
- **SC-107**: Zero TypeScript compilation errors after all additions (`npx tsc --noEmit` exits with code 0).
- **SC-108**: All city data entries comply with the no-hallucination policy — any field with unverifiable data is either omitted or shows "Information coming soon" in the UI.

---

## Assumptions

- **Data Sourcing**: New city entries are generated from the model's verified knowledge of Chinese commercial geography. No live API calls are made; all data is static and hardcoded in TypeScript files. The `lastUpdated` field is set to the implementation date.
- **Image Strategy**: Unsplash images are used as representative visuals tagged to the correct city type (skyline, market, port). These are clearly non-city-specific stock images and are acceptable for Phase 2 given the no-custom-image constraint.
- **Tier Classification**: Cities are tiered by commercial importance to Arabic-speaking importers, not by Chinese government classification. Tier 1 = must-know for any importer; Tier 2 = specialized hubs; Tier 3 = niche industrial zones.
- **Product Filter UX**: Product-to-city filtering is implemented by enhancing the existing `searchCities` utility in `citySearch.ts` — no new backend or API is needed.
- **Districts/Trade Fairs rendering**: These sections are added to the existing `CityProfileClient.tsx` component — they are conditionally rendered only when data is present.
- **Pagination**: The "All Cities" page implements client-side pagination since the dataset is static — no server-side pagination needed for 50-100 cities.
