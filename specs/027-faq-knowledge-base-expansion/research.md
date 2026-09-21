# Phase 0 Research: 200 FAQ Comprehensive Knowledge Base Architecture

## 1. Objective
Design and implement an expanded, highly structured 200-item advisory FAQ knowledge base for Hossam Mabrouk's personal platform across four balanced categories (50 items each):
1. **Who is Hossam Mabrouk? (من هو حسام مبروك؟)** - `bio` (Items 1–50)
2. **Knowledge and Content (المعرفة والمحتوى)** - `content` (Items 51–100)
3. **China, Trade, and Sourcing (الصين والتجارة والتوريد)** - `china` (Items 101–150)
4. **Website and Digital Identity (الموقع والهوية الرقمية)** - `digital` (Items 151–200)

---

## 2. Research Findings & Architectural Decisions

### Decision 1: Data Storage & Chunking Strategy
- **Decision**: Centralize typed FAQ data in `src/data/faqs.ts` with modular category sub-arrays exported together in `FAQS_DATA`.
- **Rationale**: 
  - 200 FAQ items with bilingual/structured fields take ~200KB of memory, which is well within standard client-side bundling limits without requiring server-side API roundtrips.
  - Keeps instant client-side filtering, fuzzy searching, and instant pagination completely fluid without loading spinners or layout shifts.
  - Allows static schema generation (`FAQPage` JSON-LD) at build time for enhanced SEO rich snippets.
- **Alternatives Considered**:
  - *Dynamic Database/API queries*: Rejected as over-engineering (violates KISS/YAGNI); adds unnecessary database latency to a content-driven static/ISR knowledge page.
  - *Separate JSON files per category*: Evaluated; however, keeping a unified TypeScript typed contract in `src/data/faqs.ts` provides compile-time type safety, autocompletion, and effortless imports across `FAQExplorer`, `FAQSection`, and SEO metadata generators.

### Decision 2: Content Tone, Compliance & Editorial Guardrails
- **Decision**: Strict adherence to professional advisory standards:
  - Accessible Modern Standard Arabic (فصحى مبسطة ومهنية تناسب المستورد والتاجر العربي).
  - Length constraint: 80–140 words per answer to ensure practical depth without verbose fluff.
  - Disclaimers on legal, tax, and customs procedures mandating consultation with official authorities.
  - Absolute prohibition of guaranteed profit claims, fabricated credentials, or exaggerated commercial history.
  - Strict separation of Hossam Mabrouk's personal advisory identity from ElDelta Import & Export transactional services.
- **Credibility Lines Permitted**:
  - `إجابة استشارية مقدّمة من حسام مبروك — التجارة الدولية والتوريد من الصين` (Standard Default)
  - `محتوى إرشادي بإشراف المستشار التجاري حسام مبروك`
  - `رؤية عملية من خبرة حسام مبروك في التوريد والتجارة الدولية`
  - `تمت مراجعة هذه الإجابة ضمن المحتوى الاستشاري لحسام مبروك`
- **Prohibited Badge**:
  - `تم التوثيق والتدقيق الميداني بواسطة المستشار التجاري حسام مبروك` MUST NOT be used on general FAQ items (reserved strictly for verified China directory locations/factories).

### Decision 3: Search, Categorization & Performance
- **Decision**: Retain and enhance `FAQExplorer.tsx` with:
  - Active category tab counters: `الكل (200 سؤال)`, `من هو حسام مبروك؟ (50)`, `المعرفة والمحتوى (50)`, `الصين والتجارة والتوريد (50)`, `الموقع والهوية الرقمية (50)`.
  - Debounced search query matcher across both `questionAr`/`answerAr` and `questionEn`/`answerEn`.
  - Accessible pagination (20 items per page) with smooth scroll-to-top on page change.
  - Semantic accordion interactions with keyboard navigation and ARIA attributes (`aria-expanded`, `aria-controls`).

### Decision 4: SEO & Schema.org Integration
- **Decision**: Integrate JSON-LD `FAQPage` schema on the main FAQ route, dynamically mapping the top relevant questions or all 200 questions to Google-compliant `Question` / `Answer` structures.
- **Rationale**: Elevates Hossam Mabrouk's authority in Google search results for common search terms like "كيف استورد من الصين", "فحص الجودة في المصانع", "حساب تكلفة الوصول", and "من هو حسام مبروك".
