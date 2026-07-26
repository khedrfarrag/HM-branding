# Validation Quickstart: User Journey Booking Flow, Media Assets and Homepage Localization Fixes

This guide provides step-by-step instructions to verify the user journey booking linkages, translation fixes, and media assets.

---

## Scenario 1: Experience Detail Booking Buttons

1. **Setup**: Make sure the local development server is running (`npm run dev`).
2. **Navigate**: Open `http://localhost:3000/ar/experiences/canton-fair-programs/canton-fair-business-experience`.
3. **Action**: Scroll to the "المواعيد المتاحة والتسجيل" (Available Dates & Registration) section.
4. **Validation**:
   - Each date slot card MUST contain a prominent button/link styled as "احجز الآن" (Book Now).
5. **Redirection Test**: Click "احجز الآن".
6. **Expected Outcome**:
   - You are redirected to `http://localhost:3000/ar/booking/experience/canton-fair-business-experience?date=YYYY-MM-DD`.
   - The booking form renders, and the corresponding date is pre-selected.

---

## Scenario 2: Knowledge Base Lead CTAs

1. **Navigate**: Open `http://localhost:3000/ar/knowledge/importing/how-to-import-from-china`.
2. **Action**: Scroll to the bottom of the article.
3. **Validation**:
   - You MUST see a premium-designed localized call-to-action card inviting you to schedule a consultation.
   - All text, headers, and buttons on this card MUST render in correct Arabic (e.g., "هل أنت جاهز لتأمين تجارتك؟ احجز استشارة مع حسام مبروك").
4. **Click Link**: Click the consultation CTA button.
5. **Expected Outcome**:
   - You are redirected to `http://localhost:3000/ar/booking/consultation/book-consultation`.

---

## Scenario 3: Image Assets Completeness

1. **Local Filesystem Verification**:
   - Verify that the following files exist under `public/images/`:
     - `public/images/experiences/canton-fair.jpg`
     - `public/images/experiences/consultation.jpg`
     - `public/images/experiences/corporate.jpg`
     - `public/images/knowledge/importing.jpg`
     - `public/images/china/guangzhou.jpg`
     - `public/images/china/yiwu.jpg`
2. **Browser Verification**:
   - Open the developer tools (Console tab).
   - Reload pages: `/`, `/ar/experiences`, `/ar/knowledge`.
   - **Expected Outcome**: Zero 404 image load console errors. All images render clearly.

---

## Scenario 4: Homepage Footer and Map Localization

1. **Navigate**: Open `http://localhost:3000/ar`.
2. **Action**: Scroll to the Footer and Logistics Map.
3. **Validation**:
   - Footer section title ("روابط سريعة", "معلومات التواصل", "الترخيص والشهادات") MUST render in proper Arabic.
   - The Logistics Map titles ("خريطة اللوجستيات الحية", "مزامنة الاتصال...") MUST render in proper Arabic.
   - Ensure there are no corrupted character strings (like `╪д┘╪ص┘è╪ر`).
4. **Switch Language**: Click the language switcher in the header to switch to `EN`.
5. **Validation**:
   - Footer labels change to English equivalents ("Quick Links", "Contact Details", "Certification").
   - Logistics Map changes to English equivalents ("Live Logistics Map", "Syncing active channels...").
