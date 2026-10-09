# Feature Specification: Design System & Typography Excellence

**Feature Branch**: `003-design-system-typography`

**Created**: 2026-07-04

**Status**: Draft

**Input**: User description: "عاوز اشتغل علي الديزاين سيستيم واظبط الفونت بحيث اختار نوع فونت مناسب باللغه العربيه يكون مودرن وانيق وكمان المسافات وكمان الفرق مبين الهيدر والديسكريبشن وغيره انا عاوزك تهتم بالجزء ده كويس جدا"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Premium Arabic Typography Display (Priority: P1)

As a visitor reading the Arabic version of the website, I want every heading and paragraph to render with a beautifully selected, modern Arabic typeface — with sharp contrast between headline sizes, description sizes, and body text — so that the content hierarchy is immediately clear, elegant, and conveys the prestige of the brand.

**Why this priority**: Typography is the #1 visual impact factor on a personal branding site. A wrong or generic font choice permanently damages brand credibility. The Arabic version must feel as polished as the finest international design agencies.

**Independent Test**: Load the Arabic version of the site. Without reading the content, a first-time viewer can instantly identify: which text is a hero title, which is a section heading, which is a subtitle description, and which is body copy — based solely on size, weight, and spacing contrast.

**Acceptance Scenarios**:

1. **Given** the Arabic landing page is open, **When** a viewer looks at any section heading (`h1`, `h2`, `h3`), **Then** the heading font renders using a curated modern Arabic typeface with a bold, confident weight that feels premium and contemporary — not generic or system-default.
2. **Given** a heading and a description paragraph exist in the same section, **When** viewed at desktop width, **Then** the visual size difference between heading and description must be immediately perceivable (heading text is at least 2× the size of body copy).
3. **Given** the page renders in Arabic (RTL), **When** the font renders Arabic letters, **Then** all characters render with correct Arabic ligatures, diacritics, and letter spacing — no broken or squished glyphs.

---

### User Story 2 - English Typography Consistency & Visual Hierarchy (Priority: P1)

As a visitor reading the English version, I want the same visual hierarchy principles applied using premium Latin typefaces so that the design feels cohesive and intentional regardless of language.

**Why this priority**: The English version must match the same premium feel as Arabic to serve international clients.

**Independent Test**: Toggle from Arabic to English. The layout and visual hierarchy must feel equally balanced and premium in both languages, with no jarring changes in spacing or text proportion.

**Acceptance Scenarios**:

1. **Given** the English version is active, **When** viewing any section, **Then** headings use a premium display font distinct from body text, with clear visual weight differences.
2. **Given** a section with an eyebrow label, heading, and description, **When** viewed together, **Then** three distinct typographic levels are clearly perceptible (micro/eyebrow → headline → body).

---

### User Story 3 - Consistent Spacing & Section Rhythm (Priority: P2)

As a visitor scrolling through the page, I want the spacing between sections, headings, and body copy to feel rhythmical and generous — never cramped — so the experience feels premium and effortless to read.

**Why this priority**: Spacing is as critical as typography for premium perception. Tight, inconsistent spacing signals low quality.

**Independent Test**: Scroll the entire landing page without reading. The spacing between all elements should feel consistent and intentional, with visible breathing room before and after every section transition.

**Acceptance Scenarios**:

1. **Given** two adjacent sections exist on the page, **When** scrolling past the boundary between them, **Then** there is clear vertical spacing (at minimum 80px on desktop) separating the two sections.
2. **Given** a heading and its following paragraph exist in a section, **When** viewed, **Then** the space between them is visibly smaller than the space between sections, creating a clear grouping visual relationship (proximity principle).
3. **Given** the page is viewed on mobile, **When** compared to desktop, **Then** the proportional spacing relationships are maintained — headings still clearly separate from body text, sections still visibly bounded.

---

### Edge Cases

- **Missing Glyph Fallback**: If the selected Arabic font does not support a specific character or Unicode point, the system must gracefully fall back to a secondary Arabic font — never to a generic system serif that breaks the design.
- **Mixed Language Content**: Any section containing both Arabic and Latin characters (e.g., brand names like "Meridian & Co.", city names like "Rotterdam") must render both scripts elegantly within the same font stack.
- **Very Long Arabic Words**: Certain Arabic compound words or terms may exceed container width on small screens. The typography system must handle line breaks correctly without character splitting.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The design system MUST define a clear 3-level typographic hierarchy: Display/H1 (hero), Section Heading/H2, and Body/Description — each with distinct sizes, weights, and line heights.
- **FR-002**: The Arabic typographic system MUST use a premium, modern Arabic typeface that supports full Arabic Unicode ranges and is visually compatible with the gold/dark design palette.
- **FR-003**: The English typographic system MUST use a premium display font for headings (geometric or humanist style) and a clean readable font for body copy.
- **FR-004**: The spacing system MUST be built on a consistent scale (e.g., 4px or 8px base unit) applied uniformly to: vertical section padding, space between heading and description, space between paragraphs, and component internal padding.
- **FR-005**: The eyebrow/label text style (small uppercase mono-spaced labels above headings) MUST be defined as a distinct, 4th typographic level, clearly differentiated from body text.
- **FR-006**: All font sizes MUST be defined as fluid/responsive values using viewport-relative units so they scale gracefully between mobile and desktop without fixed breakpoint jumps.
- **FR-007**: The line height for Arabic body text MUST be set generously (minimum 1.7) to ensure readability and proper character breathing room.
- **FR-008**: Font weights MUST be intentionally limited — using at most 3 distinct weights per language variant — to maintain design clarity and control bundle size.

### Key Entities

- **TypographyScale**: Defines the full hierarchy of text styles — level name, font size range (min/max), font weight, line height, letter spacing, and applicable font family per locale.
- **SpacingToken**: A named spacing value on the consistent scale system (e.g., `space-2` = 8px, `space-4` = 16px, `space-10` = 80px) used to standardize all gaps and padding across sections and components.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A non-designer first-time visitor can correctly identify 3 distinct typographic hierarchy levels (heading, description, body) in a 5-second first look test — without reading the actual content.
- **SC-002**: The visual ratio between H1 hero title and body copy size must be at least 3:1 on desktop (e.g., 80px title to 16px body).
- **SC-003**: Arabic body text must achieve a minimum Lighthouse Accessibility score of 95 for text legibility (contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text).
- **SC-004**: All section transitions must maintain uniform vertical spacing — no section gap deviates more than 20% from the defined spacing token.
- **SC-005**: The font system adds zero external network requests at runtime — all fonts are self-hosted or loaded via the Next.js font optimization layer.
- **SC-006**: The page font bundle adds no more than 150KB total weight to the initial page load.

## Assumptions

- The design system applies to the bilingual landing page already built — no new pages are in scope for this feature.
- The curated Arabic typeface must be available through Google Fonts or be self-hostable via WOFF2 format, to comply with the constitution's font loading rules.
- Spacing tokens will be implemented as CSS variables integrated into the existing Tailwind CSS v4 `@theme` block — no new styling system is introduced.
- The English typography from the reference design (Bricolage Grotesque / Inter) is already approved for English; this feature focuses on making it equally excellent for Arabic, and refining the visual hierarchy globally.
- Letter spacing for Arabic text is intentionally 0 or very slightly positive — negative letter spacing that works well for Latin fonts would break Arabic script rendering.
