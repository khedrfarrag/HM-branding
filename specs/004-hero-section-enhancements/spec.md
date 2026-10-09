# Feature Specification: Hero Section Enhancements

**Feature Branch**: `004-hero-section-enhancements`

**Created**: 2026-07-05

**Status**: Draft

**Input**: User description: "تحسين السيكشن بتاعة الهوم يعني مثلا عاوز الكلام الي علي الشمال يكون فيه انميشن زي الكتابه كده يفضل يغير في جمل تكون جذابه وتشد العميل وممكن تقترح عليا اكتر من جمله وانا هختار منها ثانيه الجزء بتاع الصوره والكلام الي حوليها عاوزها تكون الصوره مثلا دايره وفوقها كل ازار التواصل الاجتماعي عايمه عليها وتكون تفاعليه"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Dynamic Catchy Headline Typography (Priority: P1)

As a visitor accessing the landing page, I want to see a dynamic, typing-style text animation on the left side of the Hero section, showing attractive phrases that cycle periodically, so that I am instantly engaged and understand the high-level value proposition of Hussam Mabrouk.

**Why this priority**: It is the primary hero section improvement that directly hooks visitors and communicates the core business identity.

**Independent Test**: Can be tested by opening the landing page in either Arabic or English and verifying that the typing text transitions smoothly through a sequence of designated phrases for that language.

**Acceptance Scenarios**:

1. **Given** the user visits the home page, **When** the Hero section loads, **Then** the dynamic text portion should animate (e.g., typing effect, fade in/out, or word-by-word reveal) and start cycling through the defined catchy phrases.
2. **Given** the language is toggled between Arabic and English, **When** the text cycles, **Then** the phrases must match the active locale and maintain correct text alignment (right-aligned for Arabic, left-aligned for English).
3. **Given** the user is viewing the animation, **When** a phrase completes its typing/animation cycle, **Then** it should pause for readability before erasing or transitioning to the next phrase.

---

### User Story 2 - Premium Interactive Circular Profile with Floating Social Controls (Priority: P1)

As a visitor exploring the Hero section, I want the founder's image to be formatted as a premium circular element with interactive social media buttons (LinkedIn, Twitter, Email, WhatsApp) floating gracefully on or around it, so that I can easily connect with Hussam and experience a high-fidelity visual interaction.

**Why this priority**: It upgrades the user profile visual into a highly engaging, interactive component that encourages direct connection and establishes a premium brand feel.

**Independent Test**: Can be tested by checking the visual appearance of the circular image and hovering over the image and its floating icons to ensure they animate and route correctly when clicked.

**Acceptance Scenarios**:

1. **Given** the Hero section is rendered, **When** the page loads, **Then** the founder's photo must be displayed inside a circular frame (`rounded-full`) with a subtle premium golden/radial glow effect.
2. **Given** the circular image, **When** the page is active, **Then** several social media action badges (LinkedIn, X/Twitter, Email, WhatsApp) should float around the perimeter of the circle with a gentle, out-of-sync floating animation (micro-motion).
3. **Given** a visitor hovers over a floating social badge, **When** hovered, **Then** the badge should scale up, display a localized tooltip (e.g., "تواصل عبر واتساب" / "Connect on WhatsApp"), and highlight with a distinctive color corresponding to the platform.
4. **Given** a visitor clicks any of the floating social badges, **When** clicked, **Then** it should open the respective communication channel or external link in a new browser tab.

---

### Edge Cases

- **Slow Connections & CLS (Cumulative Layout Shift)**: If the font or image takes time to load, the dynamic typing text and circular profile card must not jump or cause layout shifts. Solid placeholder/skeleton states or layout boundaries must prevent CLS.
- **Mobile Responsiveness**: On small mobile devices, the circular image and its floating buttons might overflow the screen boundaries. The buttons must scale down or reposition gracefully to remain clickable and fully visible without horizontal page scroll.
- **Reduced Motion Preference**: If a user has `prefers-reduced-motion` enabled in their system, the typing animation should fallback to a static display of the primary phrase, and the floating social icons should remain static without drift/float animations.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST support a localized typing or text transition animation in the Hero headline that cycles through at least 3 distinct catchy phrases per locale.
- **FR-002**: The dynamic text animation speed, delays, and transitions MUST feel smooth, using Framer Motion or pure CSS animations, without causing CPU spikes.
- **FR-003**: The founder's portrait photo MUST be styled into a circular format with a golden/glass border and dynamic ambient glow matching the site's dark luxury aesthetic.
- **FR-004**: The system MUST render at least 4 floating social media contact options: LinkedIn, X (Twitter), Email, and WhatsApp.
- **FR-005**: The floating social media buttons MUST float dynamically around the circular image using a continuous, non-intrusive drift animation (using CSS custom animations or Framer Motion springs).
- **FR-006**: Hovering over the social buttons MUST trigger a magnetic or interactive hover state, showing a clean tooltip indicating the destination.
- **FR-007**: Click events on the social buttons MUST safely open the destination link in a new tab (`target="_blank" rel="noopener noreferrer"`).
- **FR-008**: The headline dynamic phrases MUST be configurable in translation dictionaries (`dictionaries/ar.json` and `dictionaries/en.json`).

### Headline Phrases Selection (User Choice: Option A)

The dynamic typing headline will cycle through the following phrases:

**Arabic Locale (`ar`):**
1. "نقل بضائع العالم، بهدوء نبني الثقة."
2. "خبرة لوجستية تمتد عبر 40 دولة."
3. "شريكك الاستراتيجي في سلاسل الإمداد العالمية."

**English Locale (`en`):**
1. "Moving the world's goods, quietly building trust."
2. "Logistics expertise spanning 40+ countries."
3. "Your strategic partner in global supply chains."

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of the dynamic phrases fit within the desktop and mobile layout boundaries without breaking layout grids or wrapping awkwardly.
- **SC-002**: Mobile usability: All floating social media icons maintain at least a `44px x 44px` target area and have zero overlap with each other or the page navigation controls.
- **SC-003**: Framer rate stability: Page animation performance maintains a steady 60 FPS on standard mobile and desktop environments during typing and floating simulations.
- **SC-004**: Cumulative Layout Shift (CLS) on loading the Hero section is less than 0.05.

## Assumptions

- **A-001**: The personal image `personal-img.png` is of high enough quality and centered profile composition to look good when cropped into a circle.
- **A-002**: The social media links will point to Hussam Mabrouk's actual business profiles (e.g., LinkedIn, X, custom WhatsApp link, business email). If links are not yet finalized, they will use placeholder redirects or contact details.
