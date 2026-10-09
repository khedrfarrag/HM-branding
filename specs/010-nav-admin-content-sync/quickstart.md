# Quickstart Validation Guide: Navigation Fix, Admin Experience Management & Content Sync

**Feature**: 010-nav-admin-content-sync  
**Date**: 2026-07-20

---

## Prerequisites

- Dev server running: `npm run dev` from project root
- Admin account available at `/admin/login`
- Supabase project accessible (for Admin Experience tests)

---

## Scenario 1: Navigation Links (No More 404s)

**Test**: All nav links resolve without 404.

### Steps
1. Open `http://localhost:3000/ar`
2. Click through the **header mega-menu** and verify each link loads:
   - `المعرفة` → `/ar/knowledge` ✅
   - `قاموس المصطلحات` → `/ar/knowledge/glossary` ✅
   - `الأسئلة الشائعة` → `/ar/knowledge/faq` ✅
   - `الخبرات` → `/ar/experiences` ✅
   - `الخدمات` → `/ar/services` ✅
   - `مصادر المنتجات` → `/ar/services/sourcing` ✅
   - `فحص الجودة` → `/ar/services/quality-control` ✅ (was 404)
   - `التحقق من الموردين` → `/ar/services/verification` ✅ (was 404)
   - `ذكاء التجارة` → `/ar/trade-intelligence` ✅
   - `أخبار الشحن` → `/ar/trade-intelligence/shipping-news` ✅ (was 404)
   - `تحديثات الجمارك` → `/ar/trade-intelligence/customs-updates` ✅ (was 404)
3. Click through the **footer** and verify:
   - `قصص النجاح` → `/ar/success-stories` ✅ (was 404)
   - `تواصل معنا` → `/ar/contact` ✅ (was 404)
   - `التحميلات` link is **removed** from nav ✅
4. Repeat in English locale `http://localhost:3000/en`

**Expected**: HTTP 200 on every link, meaningful content displayed.

---

## Scenario 2: Admin Creates a New Experience

**Test**: Admin creates experience → appears on public site.

### Steps
1. Navigate to `http://localhost:3000/admin/login` and log in
2. Click **"التجارب"** in the admin sidebar
3. Click **"إضافة تجربة جديدة"**
4. Fill in the form:
   - Title (AR): `برنامج الصين للمبتدئين`
   - Title (EN): `China Beginners Program`
   - Type: `business-trips`
   - Price: `1500` USD
   - Status: Published
5. Click **"حفظ"**
6. Open a new tab: `http://localhost:3000/ar/experiences/business-trips`
7. Verify the new experience card appears in the list

**Expected**: New experience is immediately visible on the public page without any code deployment.

---

## Scenario 3: Admin Booking Type Labels

**Test**: All booking type labels show correctly in Arabic.

### Steps
1. Navigate to `http://localhost:3000/admin/dashboard/bookings`
2. Verify the **Type filter buttons** show:
   - `كل الأنواع` (all)
   - `استشارة` (consultation)
   - `تجربة ميدانية` (experience)
   - `برنامج مؤسسي` (corporate)
   - `فعالية` (event)
3. Verify each booking row's **الفئة** column shows a clean label
4. Any booking with an unrecognized `target_type` should show `(غير معروف)`
5. Click `تجربة ميدانية` filter → only experience bookings appear

**Expected**: No raw database strings visible anywhere in the booking list.

---

## Scenario 4: Generated Images Display

**Test**: All 6 generated images appear on their assigned pages.

### Steps
1. `http://localhost:3000/ar/experiences/canton-fair-programs/canton-fair-business-experience`
   - Verify cover image loads (no broken icon) ✅
2. `http://localhost:3000/ar/china/cities/guangzhou`
   - Verify city image `/images/china/guangzhou.jpg` loads ✅
3. `http://localhost:3000/ar/china/cities/yiwu`
   - Verify city image `/images/china/yiwu.jpg` loads ✅
4. `http://localhost:3000/ar/knowledge/importing/how-to-import-from-china`
   - Verify article cover `/images/knowledge/importing.jpg` loads ✅
5. Open browser DevTools → Network tab → filter by "images" → confirm zero 404 responses for images

**Expected**: All images return HTTP 200 and render correctly.

---

## Build Validation

After completing all changes:

```bash
# Step 1: Linting
npm run lint

# Step 2: Production build
npm run build
```

**Expected**: Zero errors, zero warnings, all pages generated successfully.
