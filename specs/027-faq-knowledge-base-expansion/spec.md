# Feature Specification: Comprehensive FAQ Knowledge Base Expansion (200 Items)

**Feature Branch**: `027-faq-knowledge-base-expansion`

**Created**: 2026-09-21

**Status**: Draft

**Input**: User description: "Create 200 FAQ items in Arabic, distributed equally across four categories: 1. Who is Hossam Mabrouk? (50 items), 2. Knowledge and Content (50 items), 3. China, Trade, and Sourcing (50 items), 4. Website and Digital Identity (50 items). Each item requires question number, category, natural Arabic search query, 80-140 word practical advisory answer, accredited credibility/identity line, and relevant internal-link CTA suggestion. Present the website as an educational, advisory, and knowledge platform built around Hossam Mabrouk’s professional perspective, strictly separated from direct execution services."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Prospective Importers & Entrepreneurs Exploring Advisory Credibility (Priority: P1)

Aspiring importers, entrepreneurs, and business owners looking for authoritative trade guidance search for answers regarding Hossam Mabrouk's advisory background, his specific methodologies, and how his personal consulting differs from transactional trading companies. They find concise, transparent answers in natural Arabic that build trust without making unsubstantiated claims or promising guaranteed profits.

**Why this priority**: Establishing credibility and clear expectations regarding the advisory role is fundamental to converting visitors into engaged readers and advisory clients while preventing misunderstandings about services offered.

**Independent Test**: Visitors can browse the "من هو حسام مبروك؟" category, read clear answers explaining the consulting scope, verify the advisory identity line, and follow relevant internal links to view biographical details or book a consultation.

**Acceptance Scenarios**:
1. **Given** a visitor navigates to the FAQ section, **When** they select the "Who is Hossam Mabrouk?" category, **Then** they see 50 distinct questions addressing advisory scope, trade philosophy, risk management, and experience without biographical exaggeration.
2. **Given** a visitor reads any answer in this category, **When** they reach the end of the text, **Then** they see a standardized credibility line (e.g., "إجابة استشارية مقدّمة من حسام مبروك — التجارة الدولية والتوريد من الصين") and a contextual internal navigation prompt.

---

### User Story 2 - Self-Directed Learning & Trade Knowledge Exploration (Priority: P1)

Merchants and new traders looking to understand international trade concepts (e.g., landed cost calculations, common mistakes, risk assessment, supplier negotiation, and product selection) can search and filter through the "Knowledge and Content" category.

**Why this priority**: Educational value drives organic search acquisition, user retention, and positions the platform as the premier Arabic resource for international sourcing education.

**Independent Test**: Visitors can filter questions under "المعرفة والمحتوى", search for specific terms like "تسعير" or "دراسة السوق", and receive clear, actionable advisory guidance between 80 and 140 words per item.

**Acceptance Scenarios**:
1. **Given** a user searching for beginner trade challenges, **When** they filter by "Knowledge and Content", **Then** they access 50 distinct answers detailing market research, avoiding common traps, pricing strategies, and business structuring.
2. **Given** an answer touches on legal, tax, or customs topics, **When** the user reads the response, **Then** the answer explicitly includes standard disclaimers advising verification with official local authorities or licensed professionals.

---

### User Story 3 - Hands-on Sourcing and China Trade Practical Guidance (Priority: P2)

Active and prospective importers seeking practical, operational guidance on sourcing from China (e.g., navigating Alibaba safely, verifying factories vs. trading companies, drafting bilingual purchase contracts, handling quality inspections, and planning international shipping) can access 50 dedicated FAQ items.

**Why this priority**: China sourcing is the core subject of user inquiries and the primary domain of advisory expertise. Clear operational answers reduce commercial risk for users.

**Independent Test**: Users can browse the 50 items under "الصين والتجارة والتوريد", find step-by-step clarity on supplier vetting, quality control protocols, and shipping terms, and click through to related city guides and sourcing articles.

**Acceptance Scenarios**:
1. **Given** a user evaluates whether to visit China or source online, **When** they view the China sourcing category, **Then** they find objective comparisons of trade fairs, industrial cities, sample verification protocols, and payment safeguards.
2. **Given** a question regarding location-specific or field-researched manufacturing hubs, **When** the answer references industrial clusters, **Then** it links seamlessly to the corresponding China industrial directory.

---

### User Story 4 - Understanding Platform Purpose, Digital Identity & Content Boundaries (Priority: P3)

Visitors, partners, and media clarify what the platform is, how content is authored and updated, how personal advisory is kept strictly separate from commercial execution entities (such as ElDelta), and how to responsibly leverage published tools and calculators.

**Why this priority**: Clarifying platform scope prevents operational support overhead, safeguards brand integrity, and clearly guides qualified inquiries to formal consultation bookings.

**Independent Test**: Users can read the 50 items under "الموقع والهوية الرقمية" to understand editorial standards, consultation booking processes, tool usage policies, and platform transparency.

**Acceptance Scenarios**:
1. **Given** a visitor looking for turnkey purchasing services, **When** they read questions regarding platform purpose, **Then** the answers clarify that this site provides advisory, analytical, and educational frameworks rather than direct commercial product sales.
2. **Given** a user wants to submit an advisory request, **When** they read the relevant FAQ, **Then** they are guided via internal CTA to the official consultation booking channel.

---

### Edge Cases

- **Search queries with no direct match**: How does the FAQ system guide the user if their search keyword returns zero matches across all 200 items? The interface should offer category suggestions and a prompt to submit a custom inquiry or explore the trade intelligence hub.
- **Regulatory variance across Arab countries**: What happens when a question involves country-specific customs or import regulations (e.g., Egypt's ACID system vs. Saudi Saber)? The answer must state universal trade principles while explicitly noting national variations and requiring official authority verification.
- **Distinction between field-verified badges and advisory answers**: Ensuring that the FAQ section strictly avoids field-inspection badges ("تم التوثيق والتدقيق الميداني") which are reserved exclusively for China factory and city directory pages.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The knowledge base MUST contain exactly 200 distinct FAQ items distributed equally across 4 designated categories (50 items each):
  1. `bio`: Who is Hossam Mabrouk? (من هو حسام مبروك؟)
  2. `content`: Knowledge and Content (المعرفة والمحتوى)
  3. `china`: China, Trade, and Sourcing (الصين والتجارة والتوريد)
  4. `digital`: Website and Digital Identity (الموقع والهوية الرقمية)
- **FR-002**: Every FAQ item MUST include a sequential number (1 to 200), category identifier, natural Arabic question, comprehensive answer (80–140 words in accessible Modern Standard Arabic), standardized credibility line, and contextual internal CTA link.
- **FR-003**: The credibility line beneath each FAQ answer MUST adhere to approved advisory formulations, primarily using: `إجابة استشارية مقدّمة من حسام مبروك — التجارة الدولية والتوريد من الصين`, or contextual variations like `محتوى إرشادي بإشراف المستشار التجاري حسام مبروك` or `رؤية عملية من خبرة حسام مبروك في التوريد والتجارة الدولية`.
- **FR-004**: The FAQ system MUST NOT use the badge `تم التوثيق والتدقيق الميداني بواسطة المستشار التجاري حسام مبروك` on general FAQ items, reserving field-verification claims strictly for directory and location-researched pages.
- **FR-005**: All answers discussing legal, customs, taxation, or regulatory procedures MUST explicitly mandate verification with licensed specialists and official customs authorities in the importer's jurisdiction.
- **FR-006**: The FAQ items MUST NOT promise guaranteed profits, make unsubstantiated claims of business history, or present the personal website as a direct product seller or transactional broker.
- **FR-007**: The user interface MUST allow users to view all 200 items, filter by any of the 4 categories, and perform real-time search across question titles and answer content.
- **FR-008**: Every FAQ item MUST provide an appropriate internal link (CTA) pointing to a relevant page within the website (e.g., Biography, Services, China Directory, Trade Intelligence, or Free Merchant Tools).

### Key Entities *(include if feature involves data)*

- **FAQ Category**: Represents one of the four thematic knowledge pillars (`bio`, `content`, `china`, `digital`), each maintaining a count of 50 items.
- **FAQ Item**: An individual advisory record containing:
  - `id`: Unique sequential numeric identifier (1–200).
  - `category`: Thematic category key.
  - `questionAr`: Real-world search-optimized Arabic question.
  - `answerAr`: Structured advisory explanation (80–140 words).
  - `credibilityLineAr`: Verification and author attribution line.
  - `internalLink`: Target route `href` and localized button text `labelAr`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of the 200 FAQ items are authored, audited, and accessible on the platform without duplicate questions, overlapping search intent, or broken internal links.
- **SC-002**: All 200 answers fall strictly within the 80–140 word range and pass regulatory and ethics compliance checks (no guaranteed profit claims, clear disclaimers on customs/tax).
- **SC-003**: Users can search any key international trade term (e.g., "سابر", "علي بابا", "فحص الجودة", "Incoterms", "اعتماد عينة") and find relevant answers in under 1 second.
- **SC-004**: Each FAQ category cleanly displays its 50 items with smooth category tab filtering and responsive mobile pagination or accordion interaction.

## Assumptions

- Content generation will proceed in 4 batches of 50 items per the user's staged workflow (Batch 1: Bio completed; Batches 2, 3, and 4 to follow sequentially).
- The existing FAQ interface (`/src/data/faqs.ts` and `FAQSection` component) will be upgraded from the initial 50-item sample to the complete 200-item knowledge base.
- English translations for questions and answers may either be provided in parallel or mapped progressively without blocking the primary Arabic knowledge deployment.
