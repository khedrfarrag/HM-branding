# Feature Specification: Expand Industry Sectors to 30

**Feature Branch**: `021-expand-industry-sectors`

**Created**: 2026-08-25

**Status**: Draft

**Input**: User description: "زيادة عدد القطاعات في قسم Industries بالصفحة الرئيسية من 5 إلى 30 قطاع مدروس وواقعي مبني على تحليل السوق والبحث العميق"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse All 30 Trade Sectors (Priority: P1)

A prospective client (importer/exporter) visits the homepage and scrolls to the Industries section. They see a comprehensive grid of 30 trade sectors, each with a clear category label, title, and brief description. The visitor can identify their own industry among the 30 sectors, which builds confidence that Hussam Mabrouk has domain expertise in their field.

**Why this priority**: The entire feature centers on displaying these 30 sectors. Without this, the section remains limited to 5 sectors, which fails to convey the breadth of the business's expertise.

**Independent Test**: Can be fully tested by loading the homepage and verifying that exactly 30 sector cards render in the Industries section with correct bilingual content (AR/EN).

**Acceptance Scenarios**:

1. **Given** a visitor loads the homepage in English, **When** they scroll to the Industries section, **Then** they see exactly 30 sector cards displayed in a responsive grid layout.
2. **Given** a visitor loads the homepage in Arabic, **When** they scroll to the Industries section, **Then** they see the same 30 sector cards with fully translated Arabic content (idx, title, desc).
3. **Given** any sector card is hovered, **When** the hover state activates, **Then** the card reveals its description text with the existing hover animation.

---

### User Story 2 - Each Sector Has a Unique Visual Identity (Priority: P2)

Each of the 30 sectors has a unique, representative background image that visually communicates what the sector is about. No two sectors share the same image. The images are high-quality and consistent in style.

**Why this priority**: Visual identity distinguishes each sector and prevents the grid from looking repetitive. The current implementation cycles through only 5 images, which would create obvious repetition at 30 cards.

**Independent Test**: Can be fully tested by scrolling the Industries section and visually confirming that each card has a distinct background image that matches its sector.

**Acceptance Scenarios**:

1. **Given** 30 sector cards are rendered, **When** the visitor scans the grid, **Then** each card displays a unique background image that visually represents its sector.
2. **Given** the page loads, **When** images are loaded, **Then** all 30 sector images load without broken links or fallback placeholders.

---

### User Story 3 - Responsive Grid Layout Scales Cleanly (Priority: P2)

The grid layout gracefully adapts from mobile (1 column) to tablet (2 columns) to desktop (3 columns), maintaining visual harmony and readable card sizes at all breakpoints with 30 cards.

**Why this priority**: With 30 cards (vs. the original 5), the section becomes significantly longer. The layout must remain usable and visually balanced across devices without overwhelming the user.

**Independent Test**: Can be tested by resizing the browser viewport and verifying the grid transitions cleanly at breakpoints.

**Acceptance Scenarios**:

1. **Given** a mobile viewport (< 640px), **When** the Industries section is displayed, **Then** cards stack in a single column with consistent spacing.
2. **Given** a tablet viewport (640px–1023px), **When** the Industries section is displayed, **Then** cards display in 2 columns.
3. **Given** a desktop viewport (≥ 1024px), **When** the Industries section is displayed, **Then** cards display in 3 columns.

---

### User Story 4 - Sector Filtering or Categorization (Priority: P3)

With 30 sectors visible, the visitor can optionally filter or browse by broad category group (e.g., "Industrial & Raw Materials", "Consumer & Lifestyle", "Food & Agriculture") to quickly locate their industry. This enhances navigation when the full list is long.

**Why this priority**: While 30 cards in a grid are browsable, optional category tabs or filters improve discoverability. This is a UX enhancement, not core functionality.

**Independent Test**: Can be tested by clicking filter tabs and verifying only the matching sectors are shown.

**Acceptance Scenarios**:

1. **Given** filter tabs are displayed above the grid, **When** the visitor clicks a category tab, **Then** only sectors belonging to that category are shown.
2. **Given** the visitor has filtered sectors, **When** they click "All" or a reset option, **Then** all 30 sectors are shown again.
3. **Given** the page loads for the first time, **When** no filter is active, **Then** all 30 sectors are displayed by default.

---

### Edge Cases

- What happens when images fail to load for a sector? → A dark fallback background with the gold accent styling should maintain card legibility.
- How does the section perform with 30 animated cards? → Stagger animations should be optimized to avoid jank; cards below the fold should not animate until scrolled into view (existing `StaggerReveal` behavior).
- What happens on very slow connections? → Images should lazy-load to avoid blocking page render.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST display exactly 30 sector cards in the Industries section on the homepage.
- **FR-002**: Each sector card MUST have three text fields: a category index label (idx), a title, and a short description (desc).
- **FR-003**: All 30 sectors MUST be available in both English and Arabic, stored in the respective dictionary files (`en.json` and `ar.json`).
- **FR-004**: Each sector MUST have a unique, representative background image stored in `/images/sectors/`.
- **FR-005**: The sector grid MUST be responsive: 1 column on mobile, 2 columns on tablet, 3 columns on desktop.
- **FR-006**: The 30 sectors MUST be grounded in real-world import/export trade categories relevant to the China–MENA trade corridor.
- **FR-007**: The system MUST preserve the existing hover animation behavior (description reveal on hover, image scale, golden border glow).
- **FR-008**: Images MUST use lazy loading for sectors below the initial viewport.
- **FR-009**: The system SHOULD support optional category filtering/grouping of the 30 sectors (P3 enhancement).

### Key Entities

- **Sector**: A trade industry category consisting of an index label, title, description, and background image. Grouped into broader category clusters.
- **Category Group**: A higher-level classification (e.g., "Industrial & Manufacturing", "Consumer & Lifestyle") used to organize and optionally filter sectors.

### The 30 Researched Sectors

The following 30 sectors are based on deep market analysis of:
- Canton Fair product categories (Phases 1–3, 55 exhibition sections)
- China → MENA (Egypt, Saudi Arabia, UAE) top import categories by trade volume
- Global trade statistics (HS commodity codes, WTO/UNCTAD data)
- Common import/export business sectors for sourcing companies

#### Group A: Industrial & Manufacturing (Sectors 01–08)

| # | Sector (EN) | القطاع (AR) | Market Basis |
|---|---|---|---|
| 01 | Consumer Electronics & Components | الأجهزة الإلكترونية الاستهلاكية ومكوناتها | #1 China→MENA export category; Canton Fair Phase 1 |
| 02 | Industrial Machinery & Equipment | الآلات والمعدات الصناعية | Top 3 import to Saudi/Egypt/UAE; Canton Fair Phase 1 |
| 03 | Construction & Building Materials | مواد البناء والإنشاءات | Driven by Saudi Vision 2030 megaprojects; Canton Fair Phase 1 |
| 04 | Automotive Parts & Accessories | قطع غيار ومكونات السيارات | Fast-growing China→MENA auto sector |
| 05 | Electrical Equipment & Wiring | المعدات الكهربائية والتوصيلات | Essential infrastructure; Canton Fair Phase 1 |
| 06 | Hardware, Tools & Fasteners | الأدوات والعدد والمثبتات | Canton Fair Phase 1 dedicated section |
| 07 | Iron, Steel & Metal Products | الحديد والصلب والمنتجات المعدنية | Egypt's #3 import from China; infrastructure driver |
| 08 | Plastics & Rubber Products | المنتجات البلاستيكية والمطاطية | High-volume manufactured commodity; Canton Fair Phase 1 |

#### Group B: Energy & Chemicals (Sectors 09–12)

| # | Sector (EN) | القطاع (AR) | Market Basis |
|---|---|---|---|
| 09 | Solar Energy & Renewables | الطاقة الشمسية والطاقة المتجددة | China's "New Export Trio"; Saudi/UAE green transition |
| 10 | EV Batteries & New Energy Vehicles | بطاريات السيارات الكهربائية ومركبات الطاقة الجديدة | Explosive growth in China→GCC EV exports |
| 11 | Chemicals & Petrochemicals | الكيماويات والبتروكيماويات | Major China→MENA trade; Canton Fair Phase 1 |
| 12 | Lighting & LED Solutions | الإضاءة وحلول LED | Canton Fair Phase 1 dedicated pavilion; high demand in MENA |

#### Group C: Food & Agriculture (Sectors 13–16)

| # | Sector (EN) | القطاع (AR) | Market Basis |
|---|---|---|---|
| 13 | Agricultural Commodities & Grains | السلع الزراعية والحبوب | Global top-10 traded commodity; food security |
| 14 | Processed Food & Beverages | الأغذية المصنعة والمشروبات | Canton Fair Phase 3; MENA import staple |
| 15 | Cold-Chain & Perishable Goods | سلاسل التبريد والسلع القابلة للتلف | Critical logistics niche for fresh produce trade |
| 16 | Spices, Tea & Specialty Products | التوابل والشاي والمنتجات المتخصصة | High-margin niche; traditional MENA imports |

#### Group D: Textiles & Fashion (Sectors 17–20)

| # | Sector (EN) | القطاع (AR) | Market Basis |
|---|---|---|---|
| 17 | Textiles & Raw Fabrics | المنسوجات والأقمشة الخام | Canton Fair Phase 3; global top-5 trade category |
| 18 | Apparel & Ready-Made Garments | الملابس الجاهزة | Canton Fair Phase 3; one of world's largest trade sectors |
| 19 | Footwear & Leather Goods | الأحذية والمصنوعات الجلدية | Canton Fair Phase 3 dedicated section |
| 20 | Home Textiles & Furnishings | المفروشات والمنسوجات المنزلية | Canton Fair Phase 3; high MENA demand |

#### Group E: Consumer & Lifestyle (Sectors 21–25)

| # | Sector (EN) | القطاع (AR) | Market Basis |
|---|---|---|---|
| 21 | Furniture & Interior Design | الأثاث والتصميم الداخلي | Canton Fair Phase 2; major GCC import segment |
| 22 | Household Appliances | الأجهزة المنزلية | Canton Fair Phase 1; top consumer import |
| 23 | Gifts, Décor & Premiums | الهدايا والديكور والمنتجات الترويجية | Canton Fair Phase 2 dedicated pavilion |
| 24 | Kitchenware, Tableware & Ceramics | أدوات المطبخ والسيراميك وأدوات المائدة | Canton Fair Phase 2; daily consumer staple |
| 25 | Beauty, Cosmetics & Personal Care | التجميل ومستحضرات العناية الشخصية | Fast-growing MENA consumer market |

#### Group F: Health, Tech & Professional (Sectors 26–30)

| # | Sector (EN) | القطاع (AR) | Market Basis |
|---|---|---|---|
| 26 | Medical Devices & Health Products | الأجهزة الطبية والمنتجات الصحية | Canton Fair Phase 3; post-pandemic growth sector |
| 27 | Packaging & Printing Materials | التعبئة والتغليف ومواد الطباعة | Critical B2B sector; every product needs packaging |
| 28 | Sports, Recreation & Outdoor Equipment | المعدات الرياضية والترفيهية | Canton Fair Phase 3; growing MENA lifestyle trend |
| 29 | Office Supplies & Stationery | المستلزمات المكتبية والقرطاسية | Canton Fair Phase 3; steady B2B demand |
| 30 | Pet Products & Supplies | منتجات ومستلزمات الحيوانات الأليفة | Emerging fast-growth category; Canton Fair Phase 3 |

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All 30 sector cards are visible and correctly rendered on the homepage in both Arabic and English without layout issues.
- **SC-002**: Each of the 30 sectors has a unique background image — no duplicated or recycled images across cards.
- **SC-003**: The Industries section renders smoothly (no layout shift, no broken images) within 2 seconds on a standard broadband connection.
- **SC-004**: The grid layout transitions cleanly across 3 breakpoints (mobile/tablet/desktop) with zero overflow or alignment bugs.
- **SC-005**: A prospective client from any of the 30 listed sectors can identify their industry within the grid.
- **SC-006**: Page performance (LCP, CLS) is not degraded compared to the current 5-sector version due to proper lazy loading and image optimization.

## Assumptions

- The existing `StaggerReveal` / `StaggerItem` animation components will continue to work with 30 items (they already support arbitrary list lengths).
- New sector images will be generated using AI image generation (consistent style with existing 5 images) and optimized to under 500KB each.
- The sector list is curated based on Hussam Mabrouk's actual business scope in import/export between China and the MENA region — all 30 sectors represent real, active trade categories.
- The dictionary files (`en.json`, `ar.json`) will be updated with the expanded sector data; no new data source or API is needed.
- The optional filtering feature (P3) will use client-side state and does not require backend support.
- The existing responsive grid classes (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) will be preserved.
