# Feature Specification: China Cities Comprehensive Encyclopedia Expansion

**Feature Branch**: `023-china-cities-expansion`

**Created**: 2026-09-13

**Status**: Draft

**Input**: User description: "اولا القسم بتاع دليل الصين فيه كذا موديول انا عاوز كل موديول يكون فيه كل ما هوا موجود في الصين حتي لو الاماكن دي مش مهمه يعني مثلا في المدن موجود حاليا 24 مدينه في مثلا في مدينه شينزن (شنجن) مذكور فيها سوق واحد و3 مناطق تجاريه دا مش مناسب لي انا محتاجه انا عاوز كل كل المناطق واكل الاسواق وكل المعارض وكل المطاعم وكل الفنادق الي موجوده في ال 24 مدينه الاول وبعد كده ممكن نزد مدن بس نحسن دول الاول عاوزك تعمل سيرش عميق علي كل المواقع الصينيه وتوصل لكل الاماكن الي موجوده في كل المدن ال 24 مدينيه الي موجودين حاليا"

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Comprehensive Sourcing Discovery per City (Priority: P1)

As an international importer, business owner, or commercial visitor planning a sourcing trip to China, I want to view a comprehensive, in-depth directory for each of the 24 commercial cities—including all specialized wholesale markets, sub-markets, industrial clusters, and trade districts—so that I don't miss any relevant supply sources, even smaller or specialized markets.

**Why this priority**: Core value proposition requested by the user. Sourcing professionals require complete market intelligence, not generic summaries.

**Independent Test**: Can be tested by opening any city page (e.g., Shenzhen) and verifying that all major wholesale buildings (e.g., SEG Plaza, Huaqiang World, Yuanwang, Mingtong, Pacific Security, Shuibei Jewelry, Nanyou Clothing) and all municipal districts are listed with actionable sourcing details.

**Acceptance Scenarios**:
1. **Given** a user navigates to `/ar/china-cities/shenzhen` or `/en/china-cities/shenzhen`, **When** the page loads, **Then** all specialized wholesale markets across electronics, jewelry, clothing, watches, and stationery are listed with their Chinese, English, and Arabic names and specialization categories.
2. **Given** a user examines the commercial districts section, **When** reviewing the coverage, **Then** all core commercial and administrative districts of that city (e.g., Futian, Luohu, Nanshan, Bao'an, Longhua, Longgang, etc.) are itemized with their trade focus and nearest transit connections.
3. **Given** a user searches or browses industrial manufacturing zones, **When** reviewing a city profile, **Then** key factory clusters, specialized industrial parks, and high-tech manufacturing bases are comprehensively listed.

---

### User Story 2 - Complete Business Travel & Trade Logistics Guide (Priority: P2)

As a trade traveler visiting Chinese commercial cities, I want a complete directory of recommended business hotels (near exhibition centers and wholesale districts), halal and business restaurants, major trade fairs, and transport hubs (airports, high-speed rail stations, sea ports, and border checkpoints), so that I can plan logistics and daily business operations without friction.

**Why this priority**: Practical on-the-ground enablement for business travelers and importers visiting China.

**Independent Test**: Can be tested by verifying that each city profile displays categorized hotels (near CBDs, markets, and exhibition venues), verified halal/Arab restaurants with address details, and major annual trade fairs with venue and occurrence cycle.

**Acceptance Scenarios**:
1. **Given** an importer planning an itinerary to a city, **When** viewing the Business Travel section, **Then** a verified list of business hotels categorized by proximity to markets and expo centers is displayed.
2. **Given** an Arab or Muslim business traveler seeking dining options, **When** viewing the culinary guide, **Then** authentic halal dining options (Arabic, Turkish, and authentic Chinese Muslim restaurants) are provided with addresses and dish recommendations.
3. **Given** an importer checking annual exhibition opportunities, **When** reviewing the Trade Fairs section, **Then** major international and specialized expos held in that city are listed with industry focus, venues, and annual schedules.

---

### User Story 3 - Modular & Scalable City Data Architecture (Priority: P3)

As a developer and system maintainer, I want the massive dataset of 24 cities with hundreds of markets, districts, hotels, and restaurants to be structured in modular, dedicated per-city data files with lazy-loading capabilities, so that application build time, type checking, and runtime performance remain fast and maintainable.

**Why this priority**: Required by system governance to prevent memory exhaustion, IDE slowdowns, and flight-payload bloat caused by packing megabytes of static data into a single file.

**Independent Test**: Can be tested by running `npm run type-check` and verifying that each city is maintained in an independent module under `src/features/china-cities/data/cities/` and imported cleanly into the application.

**Acceptance Scenarios**:
1. **Given** the codebase data layer, **When** inspecting `src/features/china-cities/data/cities/`, **Then** each city possesses an independent, strongly-typed TypeScript module.
2. **Given** a build or type-check execution, **When** running `npm run build` and `npm run type-check`, **Then** all 24 city modules compile with zero type errors.

---

### Edge Cases

- **Bilingual & Chinese Naming**: What happens when taxi drivers or local suppliers in China do not understand English or Arabic? The system MUST provide Chinese characters (`zh`) and Pinyin for every market, hotel, restaurant, and district so users can show their screens locally.
- **Market Relocation or Renaming**: What happens if an older wholesale market has relocated or re-categorized (e.g., electronics markets converting part of their space to cosmetics or live-streaming hubs)? The descriptions MUST accurately reflect current 2026 ground reality.
- **Tier-2 and Tier-3 Specialized Industrial Cities**: Smaller specialized cities (e.g., Yongkang for hardware, Cixi for appliances, Keqiao for textiles) may have fewer luxury hotels or Arab restaurants than Tier-1 metropolises. The system MUST clearly highlight the best local verified accommodations and local Lanzhou/Dongxiang Muslim beef noodle shops when international luxury chains are unavailable.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide comprehensive, exhaustive coverage for all 24 commercial cities currently in the China Cities Guide:
  1. Guangzhou (غوانغتشو / كوانزو)
  2. Shenzhen (شينزن / شنجن)
  3. Yiwu (إيوو / ييوو)
  4. Foshan (فوشان)
  5. Dongguan (دونغقوان)
  6. Ningbo (نينغبو)
  7. Hangzhou (هانغتشو)
  8. Shanghai (شنغهاي)
  9. Shunde (شوندة)
  10. Zhongshan (تشونغشان)
  11. Xiamen (شيامن)
  12. Quanzhou / Jinjiang (تشوانتشو / جينجيانغ)
  13. Wenzhou (ونتشو)
  14. Qingdao (تشينغداو)
  15. Linyi (لينيي)
  16. Chengdu (تشنغدو)
  17. Chongqing (تشونغتشينغ)
  18. Suzhou (سوتشو)
  19. Yongkang (يونغكانغ)
  20. Cixi (تسيشي)
  21. Shaoxing / Keqiao (شاوشينغ / كوتشياو)
  22. Haining (هاينينغ)
  23. Ningde (نينغده)
  24. Cangzhou (تسانغتشو)

- **FR-002**: For each city, the system MUST exhaustively catalog all specialized wholesale markets, trade buildings, and commodity centers (`wholesaleMarkets`), including:
  - Unique identifier and city association.
  - Trilingual names: Arabic, English, and Chinese characters (`zh`).
  - Specific product category and market type (Wholesale, Retail, Factory Showroom, Mixed).
  - Detailed Arabic and English descriptions detailing floor-by-floor or specialized goods.
  - Practical location details: Physical address, nearest metro line/station, and operating hours.

- **FR-003**: For each city, the system MUST catalog all core administrative and commercial districts (`districts`), noting their commercial activity type, trade focus, suitability for foreign importers, and transit links.

- **FR-004**: For each city, the system MUST catalog key industrial zones and manufacturing clusters (`industrialZones`), identifying the exact factory specializations, cluster zones, and key products produced.

- **FR-005**: For each city, the system MUST catalog annual trade fairs and major international expos (`tradeFairs`), including industry classification, exhibition venue, occurrence cycle, official website link, and buyer fit.

- **FR-006**: For each city, the system MUST provide a business travel directory (`businessTravelGuide`) containing:
  - **Hotels (`recommendedHotels`)**: Business hotels categorized by location proximity (CBD, Wholesale Markets, Exhibition Centers).
  - **Restaurants (`recommendedRestaurants`)**: Halal certified, Arab, Turkish, and authentic Chinese Muslim dining spots with addresses and recommendations.
  - **Tourist & Cultural Attractions (`touristAttractions`)**: Prominent cultural and leisure landmarks.
  - **Transit & Border Logistics (`logistics`)**: Airports, sea ports, high-speed rail hubs, and cargo route characteristics.

- **FR-007**: Data MUST be modularized into independent per-city files under `src/features/china-cities/data/cities/`, aggregated through a central registry index to ensure modularity and optimal runtime performance.

---

### Key Entities

- **ICity**: The central domain entity representing a commercial city in China, containing metadata, score, images, logistics, and child datasets.
- **IWholesaleMarket**: Represents an individual wholesale mall, building, or commodity market with localized names (Ar, En, Zh), category, address, and transit links.
- **IDistrict**: Represents an administrative or commercial zone within a city, specifying its commercial specialization and suitability for buyers.
- **IIndustrialZone**: Represents a manufacturing cluster, industrial park, or factory zone with industry specializations.
- **ITradeFair**: Represents an exhibition or trade convention, detailing venue, occurrence timing, and target industries.
- **IRecommendedHotel**: Represents an accommodation option tailored for business travelers and commercial buyers.
- **IRecommendedRestaurant**: Represents a verified halal, Arab, or business dining venue with dietary classification and address.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: **Coverage Depth**: Every one of the 24 cities contains complete, non-empty datasets across wholesale markets, commercial districts, industrial zones, trade fairs, business hotels, and halal dining venues.
- **SC-002**: **Ground Usability**: 100% of markets, districts, hotels, and restaurants include exact Chinese names (`zh`) alongside Arabic and English to ensure full usability for travelers inside China.
- **SC-003**: **Build & Type Health**: The entire expanded dataset compiles cleanly with `tsc --noEmit` and Next.js build with 0 type errors or compiler warnings.
- **SC-004**: **Fast Page Performance**: Navigating to any expanded city profile loads seamlessly without client-side lag or layout shift.

---

## Assumptions

- The initial expansion focuses on the existing **24 core commercial cities** identified in the project architecture. Additional cities can be appended sequentially in future phases.
- Verified Chinese commercial data, market directories, and exhibition schedules are curated from authoritative Chinese trade sources (Ministry of Commerce PRC, local municipal trade bureaus, trade fair organizers, and local wholesale directory portals).
- English and Arabic translations preserve local trade and business terminology understood by Gulf, Middle Eastern, and international importers.
- Physical addresses, metro connections, and operational details reflect current status.
