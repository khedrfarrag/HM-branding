# Feature Specification: Admin Portal UX, Error Handling, Routing & Localization Fixes

**Feature Branch**: `012-admin-portal-fixes`  
**Created**: 2026-07-27  
**Status**: Draft  
**Input**: User description: "اصلاح مشكلة مسح المواعيد المرتبطة بالحجوزات، تحسين معالجة الأخطاء وإشعارات Toast باللغتين العربية والإنجليزية، إصلاح رابط مراجعة الحجوزات 404، توثيق وتعريب حقول صفحة التجارب بالكامل، إصلاح عدم تسجيل الخروج ومسح التوكين في لوحة التحكم، وتحديث جدول المواعيد تلقائياً فور إضافة موعد جديد بدون إعادة تحميل الصفحة."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Bilingual Toast Error Handling & Schedule Deletion Safety (Priority: P1)

As an administrator, when I attempt to delete a schedule that has existing active bookings, or when any operation fails in the admin portal, I want to see a clear, localized Toast notification (in Arabic if UI is Arabic, in English if UI is English) explaining the exact reason, so I understand why the action failed without seeing confusing raw error messages.

**Why this priority**: Preventing broken state and presenting clear localized feedback is critical for administrative usability and avoiding accidental data corruption.

**Independent Test**: Attempt to delete a schedule tied to active bookings. Verify a localized Toast error appears in Arabic (when language is set to Arabic) or English (when language is set to English) stating that deletion is blocked due to active bookings.

**Acceptance Scenarios**:
1. **Given** an admin user viewing the Schedules page in Arabic (`lang === 'ar'`), **When** clicking delete on a schedule with active bookings, **Then** a Toast notification pops up in Arabic: `"لا يمكن حذف هذا الموعد لوجود حجوزات نشطة مرتبطة به"`.
2. **Given** an admin user viewing the Schedules page in English (`lang === 'en'`), **When** clicking delete on a schedule with active bookings, **Then** a Toast notification pops up in English: `"Cannot delete: active booking(s) are tied to this schedule."`.
3. **Given** any failed server action or API call in the admin portal, **Then** a styled Toast notification appears with a human-readable translated message matching the current admin language setting.

---

### User Story 2 - Functional Admin Logout & Session Clean-up (Priority: P1)

As an administrator, when I click "تسجيل الخروج" (Logout) in the sidebar footer, I want my session tokens and cookies to be completely cleared and to be redirected to the login page immediately.

**Why this priority**: Security hazard — failing to clear authentication tokens leaves the admin portal accessible or in a broken auth state.

**Independent Test**: Click "Logout" in the sidebar, observe cookie/session storage removal in DevTools, and verify immediate redirect to `/admin/login`. Attempting to navigate back to `/admin` should redirect to login.

**Acceptance Scenarios**:
1. **Given** an authenticated admin in the admin portal, **When** clicking "تسجيل الخروج" (Logout), **Then** all authentication cookies/tokens (`admin_lang`, supabase auth cookies, session local storage) are cleared.
2. **Given** the logout action completes, **Then** the user is immediately navigated to `/admin/login`.
3. **Given** an unauthenticated browser state, **When** accessing `/admin` pages, **Then** access is denied and redirected to `/admin/login`.

---

### User Story 3 - Instant Table Refresh on Schedule Creation (Priority: P1)

As an administrator, when I create a new schedule using the "إضافة موعد جديد" form, I want the schedules table to update instantly with the newly created schedule without requiring a manual page refresh.

**Why this priority**: Core workflow efficiency — admins currently have to manually press F5/Reload to see new items.

**Independent Test**: Submit a new schedule form, observe the schedules list update automatically and display the new schedule immediately.

**Acceptance Scenarios**:
1. **Given** the "Add Schedule" modal/form open, **When** submitting valid schedule details, **Then** the modal closes, a success Toast appears, and the table updates reactively showing the new row.
2. **Given** a new schedule is created, **When** viewing the schedules table, **Then** no manual browser reload is required.

---

### User Story 4 - Fix Booking Review Navigation (Priority: P2)

As an administrator viewing the Bookings table, when I click "مراجعة" (Review) on any booking record, I want to be navigated to the correct booking details page or open a booking detail modal instead of receiving a 404 page not found error.

**Why this priority**: Core admin feature — reviewing customer booking submissions is essential for managing operations.

**Independent Test**: Navigate to Bookings list, click "مراجعة" on any booking row, verify the detail page or modal opens with full booking info and no 404 occurs.

**Acceptance Scenarios**:
1. **Given** the Bookings table page, **When** clicking "مراجعة" (Review) on a booking row with ID `[booking_id]`, **Then** the application routes correctly to `/admin/bookings/[booking_id]` (or opens the inspection modal) displaying customer details, status, and payment info.

---

### User Story 5 - Experiences Form Field Documentation & Localization (Priority: P2)

As an administrator managing Experiences (التجارب), I want all form labels, section titles, and placeholders to display in Arabic when the interface is set to Arabic, and in English when set to English. Additionally, each field must have clear documentation explaining its purpose and proper usage.

**Why this priority**: Improves user experience and prevents misconfiguration when creating or editing experiences.

**Independent Test**: Toggle admin language between AR and EN on the Experiences page, and verify every label, placeholder, and select option toggles its language accordingly.

**Acceptance Scenarios**:
1. **Given** language is Arabic (`ar`), **When** viewing the Experience edit/create form, **Then** labels and placeholders appear in Arabic (e.g., `المعرف الفريد (Slug)`, `عنوان التجربة (إنجليزية)`, `السعر`, etc.).
2. **Given** language is English (`en`), **When** viewing the Experience form, **Then** labels and placeholders appear in English (e.g., `Slug (URL Identifier)`, `Title (English)`, `Price`, etc.).
3. **Given** an admin reviewing field purposes, **Then** the documentation below specifies exact rules for each field:

#### Field Purpose & Usage Reference Guide (دليل استخدام حقول التجارب)

| Field Name (EN / AR) | Purpose & Usage (الهدف والاستخدام الصحيح) |
|---|---|
| **Slug (URL Identifier) / المعرف الفريد** | الرابط الفريد للتجربة في المتصفح (مثال: `canton-fair-2026`). ينبغي أن يكون بالأحرف الإنجليزية الصغيرة والشرطات الفاصلة بدون مساحات أو رموز خاصة. |
| **Experience Type / نوع التجربة** | التصنيف الرئيسي للتجربة (مثال: `business-trips` رحلات أعمال، `tours` جولات استكشافية). يُستخدم لتصفية التجارب وعرضها في المكان المناسب للمستخدمين. |
| **Title (English) / العنوان (بالإنجليزي)** | اسم التجربة باللغة الإنجليزية المعروض للزوار عند تصفح الموقع باللغة الإنجليزية. |
| **Title (Arabic) / العنوان (بالعربي)** | اسم التجربة باللغة العربية المعروض للزوار عند تصفح الموقع باللغة العربية. |
| **Short Description (EN) / وصف مختصر (إنجليزي)** | موجز قصير للتجربة يُعرض في البطاقات (Cards) وقوائم العرض الترويجي. |
| **Short Description (AR) / وصف مختصر (عربي)** | موجز قصير باللغة العربية يُعرض في البطاقات والقوائم المعاينة. |
| **Full Description (EN) / وصف كامل (إنجليزي)** | التفاصيل الشاملة للتجربة، برنامج الرحلة، والخدمات المشمولة باللغة الإنجليزية. |
| **Full Description (AR) / وصف كامل (عربي)** | التفاصيل الشاملة والتوضيحية بالتفصيل باللغة العربية في صفحة تفاصيل التجربة. |
| **Cover Image / صورة الغلاف** | الصورة الرئيسية المرفقة للتجربة. تُستخدم كخلفية أو صورة بارزة في البطاقات وصفحة تفاصيل التجربة. |
| **Currency / العملة** | رمز العملة المالية المسعرة بها التجربة (مثال: `USD` دولار، `SAR` ريال سعودي). |
| **Price / السعر** | القيمة الرقمية لسعر الحجز للتجربة بالعملة المحددة. |
| **City Slug (Optional) / المدينة (اختياري)** | معرف المدينة المرتبطة بالتجربة (مثل `guangzhou` أو `shenzhen`) لتجميع التجارب حسب المدن. |
| **Status / الحالة** | حالة ظهور التجربة (`Published` منشورة وتظهر للعامة، `Draft` مسودة غير مرئية للزوار، `Archived` تؤرشف التجربة). |

---

### Edge Cases

- What happens if a schedule deletion request fails due to network disconnection?
  - System shows a localized generic error toast `"تعذر الاتصال بالسيرفر، يرجى المحاولة لاحقاً"` / `"Network error, please try again later."`
- What happens if a booking review route is accessed for a non-existent booking ID?
  - Admin shows a localized 404 boundary within the admin layout rather than breaking the full portal route.
- What happens if logout is clicked while an async operation is pending?
  - Pending operations are aborted, auth session state is explicitly invalidated, and redirect executes immediately.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Admin Portal MUST integrate a centralized Toast notification system supporting both Arabic (`ar`) and English (`en`) messages.
- **FR-002**: Schedule deletion API and UI MUST catch active booking constraints and output localized error toast messages explaining that schedules with active bookings cannot be deleted.
- **FR-003**: Schedule creation form MUST trigger a client state / revalidation refresh upon successful submit, dynamically rendering the newly created schedule in the schedules table without full page reload.
- **FR-004**: Booking table row "مراجعة" (Review) button MUST link to a valid existing route (e.g. `/admin/bookings/[id]`) or open a detailed booking view dialog, eliminating 404 errors.
- **FR-005**: Admin sidebar Logout ("تسجيل الخروج") handler MUST invoke full authentication sign-out, clear local cookies/tokens, and perform a client redirect to `/admin/login`.
- **FR-006**: Experiences form MUST fully localize all field labels, placeholders, dropdown options, and helper texts dynamically according to the active admin locale (`ar` or `en`).
- **FR-007**: Admin Portal MUST persist language preference (`admin_lang`) seamlessly across session updates without breaking auth tokens or page context.

### Key Entities

- **Schedule (الموعد)**: Entity representing available tour/consultation dates, price, capacity, and active booking links.
- **Booking (الحجز)**: Entity representing client booking registrations linked to a specific schedule and experience.
- **Experience (التجربة)**: Entity representing tours/services with bilingual titles, descriptions, pricing, image, and status.
- **AdminSession (جلسة الآدمن)**: Entity managing authenticated state, tokens, and active language preference (`ar`/`en`).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of error responses in the Admin Portal trigger a localized Toast message in the active user language (AR/EN).
- **SC-002**: 0 instances of 404 errors when clicking "مراجعة" (Review) on any booking record.
- **SC-003**: Newly created schedules appear in the table within 500ms without requiring a browser refresh.
- **SC-004**: Admin logout completely terminates the session and redirects to `/admin/login` in 1 click 100% of the time.
- **SC-005**: 100% of Experience form input labels and placeholders display in the matching language when switching between Arabic and English.

## Assumptions

- Admin authentication uses Supabase auth cookies and/or custom session cookies.
- Toast system can be implemented using `react-hot-toast` or `sonner` or existing UI library components.
- Schedules and Bookings rely on Next.js Server Actions or API routes connected to Supabase backend.
