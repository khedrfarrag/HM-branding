# Feature Specification: China Cities Expansion (10 New Cities) & Interactive Map 2.0 Overhaul

**Feature Branch**: `024-china-cities-expansion-map`  
**Created**: 2026-09-13  
**Status**: Draft  
**Input**: User description: "تمام جدا الي فات انا عاوز بقي ازود كمان 10 مدن واولهم بيكين واعم حاجه تجيب كل مكان اتذكر فيها علي كل الصفحات الصينيه واخيرا تعديل علي الجزء بتاع الخريطه ده لانه مش مظبوطه فيها مشاكل ومش كويسه لتجربة المستخدم انا عاوزها تكون تفاعليه وواقعيه حلل كلامي كويس جدا واعمل سيرش عميق علي 10 المدن ومن ضمنهم واهمهم بيكين واهم حاجه تكون المدن دي مش مكرره في الي اتنفذ قبل كده"

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - 10 New Specialized Industrial & Commercial Cities Deep Exploration (Priority: P1)

As an Arab importer, global trade buyer, or corporate sourcing agent, I want comprehensive, authentic directory profiles for 10 major Chinese industrial and commercial cities (starting with Beijing, followed by Tianjin, Wuhan, Nantong, Zhengzhou, Changzhou, Wuxi, Taizhou, Tongxiang, and Shantou), with zero duplicated cities and complete Chinese ground sourcing data (wholesale markets, manufacturing clusters, trade fairs, business hotels, and certified halal/Arab dining venues), so that I can confidently evaluate and plan sourcing trips to these vital industrial capitals.

**Why this priority**: Beijing and the specialized industrial powerhouses (toys in Shantou, e-scooters in Wuxi, home textiles in Nantong, molds in Taizhou, knitwear in Tongxiang, new energy in Changzhou, optics/lasers in Wuhan, electronics in Zhengzhou, bicycles/port in Tianjin) represent billions of dollars in Arab-China trade and are missing from the current 24-city directory.

**Independent Test**: Can be tested independently by navigating to each new city profile (e.g., `/ar/china-cities/beijing`, `/ar/china-cities/shantou`, `/ar/china-cities/nantong`, etc.) in Arabic and English, verifying all wholesale markets, districts, fairs, hotels, and halal restaurants render with rich authentic ground facts.

**Acceptance Scenarios**:
1. **Given** a user visiting `/ar/china-cities/beijing` or `/en/china-cities/beijing`, **When** the page loads, **Then** they see verified sourcing data for Beijing's tech centers (Zhongguancun), automotive bases (BAIC), major wholesale markets (Xinfadi, Panjiayuan), major international trade fairs (CIFTIS, Auto China), top business hotels, and historic Niujie Muslim Quarter halal dining with authentic Chinese characters (`zh`).
2. **Given** a user visiting any of the other 9 newly added cities (Tianjin, Wuhan, Nantong, Zhengzhou, Changzhou, Wuxi, Taizhou, Tongxiang, Shantou), **When** they inspect the profile, **Then** they find at least 3-6 dedicated wholesale markets, 3-6 specialized industrial zones, 2+ annual trade fairs, luxury business hotels, and verified halal dining options, with 0 generic placeholders.
3. **Given** the global cities registry, **When** all city slugs are indexed, **Then** exactly 34 unique, non-duplicated commercial cities are registered and accessible.

---

### User Story 2 - Realistic & Interactive China Commercial Map 2.0 (Priority: P1)

As an international trader or business traveler exploring the China Cities portal, I want a realistic, interactive, visually stunning map of China that accurately plots all 34 commercial cities without label collisions, overlapping smudges, or broken fallback coordinates, allowing me to filter by industrial belts (Pearl River Delta, Yangtze River Delta, Bohai Rim, Central/Inland, Southeast Coast) and interactively inspect city hubs, so that I can understand China's industrial geography at a glance.

**Why this priority**: The current map component fails critically: 18 out of 24 cities collapse into an unreadable white blob at default coordinates `(400, 300)`, text labels collide horizontally, and the map shape is an unrepresentative polygon blob. Fixing this is essential for user trust and premium user experience.

**Independent Test**: Can be tested independently by opening `/ar/china-cities` or `/en/china-cities`, interacting with the map, switching regional belt filters, hovering over city markers to see tooltips, and clicking pins to update the preview card seamlessly.

**Acceptance Scenarios**:
1. **Given** a visitor viewing the China Map section, **When** the map renders, **Then** an authentic, geographically accurate outline of China and its coastal waters is displayed with zero label collisions or smudges.
2. **Given** the 34 commercial cities, **When** they are rendered on the map, **Then** each city has precise, calibrated geographical coordinates reflecting its real location in China.
3. **Given** the regional filter controls (All China, Pearl River Delta, Yangtze River Delta, Bohai Rim / North China, Central & Inland, Southeast Coast), **When** a user clicks an industrial belt, **Then** the map highlights the corresponding regional cluster, updates visible markers smoothly, and avoids visual clutter.
4. **Given** a user hovering over or clicking any city marker, **When** interacted with, **Then** a smooth tooltip appears, and the adjacent details card updates instantly with city rank score, province, primary products, and a direct button to the full city guide.

---

### User Story 3 - SEO, Search, and Directory Integration (Priority: P2)

As a site visitor searching for specific industries (such as "toys", "electric scooters", "home textiles", or "molds"), I want the global search, product index, and compare tools to seamlessly index the 10 new cities alongside the existing 24, with full bilingual metadata and JSON-LD schemas.

**Why this priority**: Enables organic discovery through search engines and internal tools across all 34 cities.

**Independent Test**: Can be tested by searching for "ألعاب" or "سكوتر كهربائي" in the search/filter components and seeing Chenghai/Shantou and Wuxi returned immediately.

**Acceptance Scenarios**:
1. **Given** a search query for products located in new cities (e.g. "مفروشات", "بلاستيك", "تريكو"), **When** filtered, **Then** Nantong, Taizhou, and Tongxiang appear in results.
2. **Given** Next.js SSG build, **When** executed, **Then** all 68 static paths (34 cities × 2 locales) build cleanly with 0 TypeScript and 0 runtime errors.

---

### Edge Cases

- **High-Density City Clusters**: In the Yangtze River Delta and Pearl River Delta, adjacent cities (e.g., Guangzhou, Foshan, Dongguan, Shenzhen; or Shanghai, Suzhou, Wuxi, Changzhou) are geographically close. The map MUST use interactive tooltips, smart label clustering, or regional zoom rather than statically printing long Arabic/English text side-by-side.
- **Missing or Slow Image Assets**: All new cities MUST have high-quality hero images with reliable Unsplash CDNs and fallback styling.
- **RTL / LTR Viewport Transitions**: The map and preview card MUST adapt cleanly across Arabic (RTL) and English (LTR) layouts without clipping SVG viewboxes or text alignment glitches.
- **Mobile Touch Devices**: On touch screens, map pins MUST have adequate hit targets (minimum 28px tap area) and tap-to-inspect behavior instead of relying on mouse hover.

---

## Requirements *(mandatory)*

### Functional Requirements

#### 10 New Cities Data Requirements
- **FR-001**: System MUST include full dataset for **Beijing (بكين / 北京)** covering Zhongguancun tech corridor, BAIC automotive, Xinfadi, Panjiayuan, CIFTIS & Auto China fairs, Grand Metropark/Kempinski hotels, and historic Niujie Muslim Quarter halal cuisine.
- **FR-002**: System MUST include full dataset for **Tianjin (تيانجين / 天津)** covering Tianjin container port, Wangqingtuo bicycle/e-bike capital, Cuihuangkou carpet hub, Daqiuzhuang steel pipes, Northern China Bicycle Expo, hotels, and halal dining.
- **FR-003**: System MUST include full dataset for **Wuhan (ووهان / 武汉)** covering China Optics Valley (lasers & fiber optics), Hankou North International Trade City (30 wholesale markets), Dongfeng automotive base, hotels, and halal dining.
- **FR-004**: System MUST include full dataset for **Nantong (نانتونغ / 南通)** covering Dieshiqiao International Home Textile Market (>60% of China's bedding/linens), marine engineering/shipbuilding, hotels, and halal dining.
- **FR-005**: System MUST include full dataset for **Zhengzhou (تشنغتشو / 郑州)** covering Foxconn iPhone City, central railway/air logistics hub, Yutong Bus, auto parts wholesale, hotels, and Hui Muslim halal dining.
- **FR-006**: System MUST include full dataset for **Changzhou (تشانغتشو / 常州)** covering new energy capital (lithium batteries, solar PV), industrial robotics, Henglin SPC/vinyl flooring, hotels, and halal dining.
- **FR-007**: System MUST include full dataset for **Wuxi (ووشي / 无锡)** covering Xishan electric scooter capital (>35% global e-scooters: Yadea, Niu), semiconductors/IC packaging, stainless steel trade, hotels, and halal dining.
- **FR-008**: System MUST include full dataset for **Taizhou - Zhejiang (تايتشو - تشيجيانغ / 浙江台州)** covering Huangyan plastic homeware & precision mold capital, Wenling water pumps & shoes, Jiaojiang sewing machines, hotels, and halal dining.
- **FR-009**: System MUST include full dataset for **Tongxiang / Puyuan (تونغشيانغ / بويوان / 桐乡濮院)** covering Puyuan knitwear & cashmere sweater capital (>70% China's woolen sweaters), chemical fibers, hotels, and halal dining.
- **FR-010**: System MUST include full dataset for **Shantou / Chenghai (شانتو / تشنغهاي / 汕头澄海)** covering Chenghai world toy capital (>70% global plastic/RC toys), Chaonan/Chaoyang seamless lingerie & underwear, hotels, and halal dining.
- **FR-011**: Every new city file MUST strictly follow the `ICity` schema with authentic Chinese characters (`zh`) for city name, districts, wholesale markets, industrial zones, trade fairs, hotels, and restaurants.
- **FR-012**: System MUST register all 10 new cities in `src/features/china-cities/data/cities/index.ts`, expanding total cities from 24 to 34 without breaking backwards compatibility.

#### Interactive Map 2.0 Overhaul Requirements
- **FR-013**: System MUST replace the primitive polygon outline in `ChinaInteractiveMap.tsx` with an authentic, recognizable geographic representation of China (including mainland coastlines, Hainan, and major geographical references).
- **FR-014**: System MUST define precise, calibrated geographic SVG coordinates for **all 34 commercial cities** so that no city falls back to a centralized `(400, 300)` point.
- **FR-015**: System MUST prevent label collisions by adopting interactive pins with floating tooltips (Glassmorphism popovers) on hover/touch instead of rendering all 34 raw text labels simultaneously.
- **FR-016**: System MUST provide interactive **Industrial Belt Filter Tabs**:
  1. *All China (كل الصين)*
  2. *Pearl River Delta (GBA - حوض دلتا اللؤلؤ)*
  3. *Yangtze River Delta (دلتا نهر يانغتسي)*
  4. *Bohai Rim & North China (شمال الصين وحوض بوهاي)*
  5. *Central & Inland (الوسط والجنوب الداخلي)*
  6. *Southeast Coast (الساحل الجنوبي الشرقي)*
- **FR-017**: Selecting an industrial belt tab MUST visually focus/highlight the relevant cluster of cities and update the map markers smoothly.
- **FR-018**: Clicking any city pin MUST update the preview card in real time, displaying city name (Ar/En/Zh), province, commercial score, key products, and a direct CTA link to `/[locale]/china-cities/[slug]`.
- **FR-019**: Map component MUST be fully responsive across mobile (stacked preview card below map) and desktop (split 7-col / 5-col grid).

---

### Key Entities

- **City Profile (`ICity`)**: Core data model representing each of the 34 Chinese commercial hubs, containing trilingual names, geographic coordinates, districts, wholesale markets, manufacturing zones, logistics, business travel, and SEO.
- **Map Geo Pin (`ICityMapCoordinate`)**: Coordinates data mapping `slug` -> `{ x: number, y: number, regionKey: string, lat: number, lng: number }` for rendering on the China SVG map projection.
- **Industrial Belt (`IIndustrialBelt`)**: Grouping entity defining regional manufacturing clusters (Pearl River Delta, Yangtze River Delta, Bohai Rim, Central/Inland, Southeast Coast) with descriptive labels and city slug arrays.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Exactly 34 commercial cities are available in the directory, with 100% of cities having rich ground sourcing data and 0 generic placeholders.
- **SC-002**: 100% of the 34 cities render on the interactive map at distinct, authentic geographic positions with zero overlapping label collisions.
- **SC-003**: The interactive map preview card updates instantaneously (<50ms) upon pin click or belt tab change.
- **SC-004**: All 68 static routes (`/ar/china-cities/[slug]` and `/en/china-cities/[slug]`) compile with 0 errors via `npm run build` and `npm run type-check`.
- **SC-005**: User bounce rate on the map section decreases and engagement increases through clear visual hierarchy and intuitive regional exploration.

---

## Assumptions

- Map component will utilize SVG-based vector rendering with CSS animations for maximum performance, crispness on Retina displays, and zero external mapping library overhead.
- All 10 new cities have verifiable halal dining options and Muslim communities documented in official Chinese local records (such as Niujie in Beijing, Tianjin Grand Mosque quarter, and Hui merchant bases across Henan and Jiangsu).
- Backward compatibility with existing components (`CityCard`, `CityFilter`, `CityComparator`) is preserved since all 34 cities adhere strictly to the shared `ICity` interface.
