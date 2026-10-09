# Feature Specification: UI Cards Images, Mobile Transitions, Animated Gradient Headers & Arabic Typography

**Feature Branch**: `016-ui-cards-transitions-typography`

**Created**: 2026-07-27

**Status**: Draft

**Input**: User description: "إضافة صور خلفية تعبيرية لكروت القطاعات والخدمات (9 صور)، إصلاح الترانزيشن وإتاحة أنيميشن الكتابة في الهيرو على الموبايل، توحيد الهيدرات في باقي السكاشن بجرادينت متحرك أنيق، وتحديد خيار تغيير الخط العربي ليكون خطاً فخماً ومناسباً بدلاً من الخط الحالي."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Expressive Card Background Visuals (Priority: P1)

As a site visitor exploring Sectors and Services, I want each card to feature a representative high-quality background image with adequate overlay contrast so that I can visually identify the sector or service instantly.

**Why this priority**: Enhances visual appeal and immediate comprehension of business domains.

**Independent Test**: Can be tested by navigating to the Sectors and Services sections on both desktop and mobile, ensuring 9 distinct expressive images are displayed with legible text overlays.

**Acceptance Scenarios**:
1. **Given** a visitor is on the homepage, **When** they scroll to the Sectors grid, **Then** all 5 sector cards display distinct, expressive background images matching their sector theme (Electronics, Agriculture, Textiles, Construction, Automotive) with dark luxury overlays ensuring high text contrast.
2. **Given** a visitor views the Services section, **When** examining the 4 service cards, **Then** each card features a relevant contextual background image (Sourcing, Quality Control, Verification, Logistics).

---

### User Story 2 - Smooth Mobile Hero Typing & Transition Experience (Priority: P1)

As a mobile visitor, I want the hero section headline text to animate with a smooth typing effect without layout shifts or clunky transitions so that the entrance experience feels polished and premium.

**Why this priority**: Fixes reported mobile transition roughness and restores the desired typing effect.

**Independent Test**: Can be tested on mobile viewports by observing the text animation loop in the hero section, ensuring smooth typing and sentence transitions.

**Acceptance Scenarios**:
1. **Given** a visitor opens the homepage on a mobile device, **When** observing the hero section header, **Then** the dynamic sentence animates using a smooth character-by-character typing effect.
2. **Given** a sentence finishes typing, **When** transitioning to the next phrase, **Then** the transition occurs smoothly without layout jumps or jitter.

---

### User Story 3 - Animated Gradient Headers Across Sections (Priority: P2)

As a site visitor, I want all section headers across the website to feature a unified, elegant animated gradient styled after the brand's visual identity (gold & silver palette) so that the aesthetic is cohesive and premium.

**Why this priority**: Establishes consistent visual hierarchy and visual wow-factor across all sections.

**Independent Test**: Can be tested by scrolling through all homepage sections and verifying section titles exhibit an animated gradient text effect while subheaders remain static.

**Acceptance Scenarios**:
1. **Given** a visitor scrolls down the page, **When** entering any section (Sectors, Services, Experience, Media, etc.), **Then** the main section title displays an animated metallic gold/silver gradient effect.
2. **Given** the hero section dynamic phrase vs section headers, **When** comparing header behavior, **Then** only the hero section phrase cycles through multiple text statements while all other section titles display static text with animated gradient styling.

---

### User Story 4 - Premium Arabic Typography (Priority: P2)

As an Arabic reader, I want the website to use a distinguished, highly readable, luxury Arabic font so that the site reflects a high-end personal brand.

**Why this priority**: Enhances readability and aesthetic perception for Arabic visitors.

**Independent Test**: Can be verified by changing the site language to Arabic and checking font rendering across headers and body copy.

**Acceptance Scenarios**:
1. **Given** Arabic mode is active, **When** reading text across the site, **Then** a premium Arabic font (e.g., Cairo / Outfit / Tajawal / IBM Plex Sans Arabic) is applied cleanly.
2. **Given** a developer needs to adjust or switch the Arabic font, **When** inspecting the codebase, **Then** the font definition and configuration location is clearly documented and centrally managed.

---

### Edge Cases

- What happens if a card image fails to load? A dark gradient fallback ensures text remains completely readable.
- How does the mobile typing animation handle device orientation changes? The container height is reserved to prevent layout shifts.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide 9 distinct, thematic background images for Sectors (5 cards) and Services (4 cards).
- **FR-002**: System MUST apply a dark glassmorphic/gradient overlay on card images to guarantee WCAG AA text contrast.
- **FR-003**: System MUST execute a smooth character typing animation for the dynamic sentence in the Hero section on mobile and desktop devices.
- **FR-004**: System MUST apply an animated gold-to-silver gradient text effect on main section headers across the website.
- **FR-005**: System MUST ensure section headers outside the Hero section maintain fixed copy (no multi-sentence cycling).
- **FR-006**: System MUST replace the default Arabic font with a premium Google Font (e.g., Cairo or IBM Plex Sans Arabic) for Arabic locale (`ar`).
- **FR-007**: System MUST keep English typography (`en`) unaffected.

### Key Entities

- **Card Visual Asset**: Represents a sector/service background image, including image path, alt description, and fallback overlay settings.
- **Header Style Variant**: Represents header typography rules, including gradient colors, background-clip properties, and keyframe animations.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of Sector (5) and Service (4) cards display expressive thematic imagery with compliant text contrast.
- **SC-002**: Mobile typing animation operates smoothly at 60 FPS without layout cumulative shift (CLS = 0).
- **SC-003**: Section titles maintain visual consistency with brand colors across 100% of homepage sections.
- **SC-004**: Arabic font load time remains under 200ms with smooth webfont rendering (font-display: swap).

## Assumptions

- Card images will be generated/curated as high-resolution WebP assets.
- Next.js `next/font/google` will be used for optimal font loading and zero layout shift.
- English font setup remains unchanged.
