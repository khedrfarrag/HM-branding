# Quickstart & Verification Guide: Comprehensive FAQ Knowledge Base (200 Items)

## 1. Prerequisites
- Node.js 18+ / npm installed
- Development server running (`npm run dev`) or test compilation (`npm run build`)

---

## 2. Verification Scenarios

### Scenario 1: Validate Total Count and Category Distribution
Run an automated verification script or inspect `src/data/faqs.ts`:
- Total items: exactly 200
- Items 1–50: `category === 'bio'`
- Items 51–100: `category === 'content'`
- Items 101–150: `category === 'china'`
- Items 151–200: `category === 'digital'`

### Scenario 2: Validate Word Count and Content Compliance
Every Arabic answer (`answerAr`) should be checked for word count:
- Length: Between 80 and 140 words.
- No prohibited phrases (`تم التوثيق والتدقيق الميداني` prohibited in FAQ items).
- Permitted credibility line present.

### Scenario 3: UI & Search Testing
1. Navigate to `/about/faq` (or the FAQ section in Arabic: `http://localhost:3000/ar/about/faq` or wherever rendered).
2. Verify category tabs show updated counts:
   - `الكل (200 سؤال)`
   - `👤 من هو حسام مبروك؟ (50)`
   - `📚 المعرفة والمحتوى (50)`
   - `🇨🇳 الصين والتجارة والتوريد (50)`
   - `🌐 الموقع والهوية الرقمية (50)`
3. Test search functionality:
   - Type `علي بابا` -> Displays relevant China sourcing questions.
   - Type `تكلفة` -> Displays landed cost and pricing questions.
   - Type `دلتا` -> Displays questions clarifying the difference between the personal site and Delta Group.
4. Verify pagination functions properly (20 items per page across 10 pages).
5. Click internal CTA links to ensure valid route resolution without 404s.

---

## 3. Schema & SEO Verification
1. Inspect page source / elements for `<script type="application/ld+json">`.
2. Verify that `FAQPage` schema is rendered with valid `mainEntity` array.
