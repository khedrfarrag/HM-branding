# Quickstart Validation Guide: FAQ 400 Corpus Expansion

**Feature Directory**: `specs/031-faq-400-corpus-expansion` | **Date**: 2026-10-06

---

## Validation Steps

### 1. Code Compilation & Type Check
Run TypeScript compiler to verify that all 400 FAQ items adhere strictly to `FAQItem` interface:
```bash
npx tsc --noEmit
```

### 2. FAQ UI Display Verification
1. Start dev server: `npm run dev`
2. Open `http://localhost:3000/ar/about/faq`
3. Verify the main header reads: **الأسئلة الشائعة وقاعدة المعرفة التجارية (400 سؤالاً)**
4. Verify the category tabs display:
   - الكل (400 سؤال)
   - 👤 من هو حسام مبروك؟ (100)
   - 📚 المعرفة والمحتوى (100)
   - 🇨🇳 الصين والتجارة والتوريد (100)
   - 🌐 الموقع والهوية الرقمية (100)

### 3. Search & Pagination Check
1. Type search query e.g. "سابر" or "ACI" in the search input.
2. Confirm sub-100ms instant filtering results.
3. Test pagination buttons (Pages 1 through 20 under "الكل").

### 4. AI Sourcing Assistant Verification
1. Open floating AI Chatbot Widget on bottom right.
2. Ask a newly added question (e.g. "كيف أتحقق من رخصة المصنع عبر GSXT؟").
3. Confirm chatbot answers accurately using the newly expanded 400-item knowledge base.
