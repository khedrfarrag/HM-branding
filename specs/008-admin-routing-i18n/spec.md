# Feature Specification: Admin Redirection & Language Localization

**Feature Branch**: `008-admin-routing-i18n`

**Created**: 2026-07-19

**Status**: Draft

**Input**: User description: "I will describe the cases that need to be handled... First, when I enter as a visitor, I go to http://localhost:3000/ or the main URL when deployed. There is Arabic and English available on the user portal. For the admin, if they want to enter, they go to http://localhost:3000/admin. If they are not logged in, it redirects them to the login page: http://localhost:3000/admin/login. Once logged in, the admin enters http://localhost:3000/admin/dashboard. However, there are unhandled cases: if the admin goes to http://localhost:3000/admin and they are already logged in, it shows them the user portal, which is wrong; it should redirect them to http://localhost:3000/admin/dashboard. Also, the admin portal currently only has English, and I want it to support both Arabic and English. But make sure not to break/corrupt routes because of language."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Admin Dashboard Language Localization (Priority: P1)

As an administrator, I want to toggle the Admin Dashboard language between Arabic and English so that I can view and manage bookings and schedules in my preferred language.

**Why this priority**: High value for multi-lingual admin staff. The user explicitly requested both Arabic and English for the admin portal while expressing concern about breaking Next.js routing patterns. Using a non-URL-prefix approach (cookie-based translation) protects the routes while providing full localization.

**Independent Test**: Log in to the Admin Dashboard, click the language switcher in the sidebar to toggle between Arabic and English, and verify that:
1. The page layout direction adjusts (RTL for Arabic, LTR for English).
2. The sidebar navigation links, button text, page headers, KPI cards, form fields, and status badges translate immediately.
3. Refreshing the browser or returning to the dashboard later retains the chosen language.
4. The URL remains `/admin/dashboard` (no `/ar/admin` or `/en/admin` path prefix).

**Acceptance Scenarios**:

1. **Given** an authenticated admin is on `/admin/dashboard` with English selected, **When** they click "عربي" on the language switcher, **Then** the UI elements change to Arabic, the layout changes to RTL (`dir="rtl"`), and a cookie `admin_lang` is set to `"ar"`.
2. **Given** an admin has `admin_lang=ar` saved in their cookies, **When** they navigate to `/admin/dashboard/bookings`, **Then** the page renders in Arabic with RTL layout by default.
3. **Given** any admin page is loaded, **When** the page renders, **Then** the URL remains exactly `/admin/dashboard/*` without any locale path prefix.

---

### User Story 2 - Admin Authentication Routing & Redirection (Priority: P2)

As an administrator, I want the system to redirect me automatically to the dashboard when I visit `/admin` or `/admin/login` if I am already logged in, and redirect me to the login page if I am not logged in.

**Why this priority**: Essential security and UX requirement. Currently, accessing `/admin` while logged in falls back to the dynamic locale catch-all and incorrectly renders the user portal (landing page) at the admin URL path.

**Independent Test**: 
- **Scenario A (Logged In)**: Authenticate as an admin, then manually navigate to `http://localhost:3000/admin` or `http://localhost:3000/admin/login`, and verify that you are redirected to `http://localhost:3000/admin/dashboard` with no intermediate render of the landing page.
- **Scenario B (Logged Out)**: Clear session cookies (or sign out), then attempt to navigate to `http://localhost:3000/admin` or `http://localhost:3000/admin/dashboard`, and verify that you are redirected to `http://localhost:3000/admin/login`.

**Acceptance Scenarios**:

1. **Given** an unauthenticated visitor accesses `/admin` or `/admin/dashboard`, **When** the request is processed, **Then** the system redirects them to `/admin/login`.
2. **Given** an authenticated admin accesses `/admin` or `/admin/`, **When** the request is processed, **Then** the middleware intercepts it and redirects them to `/admin/dashboard`.
3. **Given** an authenticated admin accesses `/admin/login`, **When** the request is processed, **Then** the system redirects them to `/admin/dashboard`.

---

### Edge Cases

- **Session Expiry**: If the Supabase session token expires while the admin is on `/admin/dashboard`, any subsequently loaded server actions or page navigations must detect the expired token and redirect the client cleanly to `/admin/login`.
- **Missing Locale Cookie**: If the `admin_lang` cookie is missing or invalid, the admin portal should fall back to English (`en`) as the default system language.
- **Bi-directional Layout Elements**: Text inputs and tabular columns must align appropriately according to the active language direction (RTL for Arabic, LTR for English) without breaking UI layout structures.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST protect all `/admin` routes (except `/admin/login`) by checking for a valid Supabase auth session cookie.
- **FR-002**: The Next.js middleware MUST redirect authenticated users requesting `/admin`, `/admin/`, or `/admin/login` to `/admin/dashboard`.
- **FR-003**: The admin dashboard MUST provide a language switcher component in the sidebar (and mobile header) to allow toggling between Arabic and English.
- **FR-004**: The language switcher MUST store the selected locale in a cookie named `admin_lang` with an expiration of 1 year.
- **FR-005**: All text content in the Admin Login page, Dashboard Overview page, Bookings list, Booking detail editor, and Schedules management page MUST support translation using dictionary files (`ar.json` and `en.json`).
- **FR-006**: The admin dashboard layout MUST dynamically apply the correct document direction (`dir="rtl"` or `dir="ltr"`) and appropriate alignment classes based on the active language.
- **FR-007**: Admin authentication and language routing MUST NOT append language prefixes (e.g. `/ar/admin` or `/en/admin`) to admin URLs, keeping the route structure independent.

### Key Entities

- **Locale**: An enumeration of supported languages (`"ar" | "en"`), defaulted to `"en"` for the administrative panel if the `admin_lang` cookie is unset.
- **Admin Session**: The Supabase auth session token, stored as a cookie with the pattern `sb-*-auth-token`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of unauthenticated requests to `/admin` or `/admin/dashboard` are redirected to `/admin/login` in under 200ms.
- **SC-002**: 100% of authenticated requests to `/admin` or `/admin/login` are redirected to `/admin/dashboard` in under 200ms.
- **SC-003**: Swapping languages via the language switcher updates the interface and layout direction without modifying the URL path.
- **SC-004**: 100% of the labels, cards, alerts, navigation elements, status badges, and validation messages in the admin portal render in the selected language.

## Assumptions

- **Default Language**: For administration purposes, the default language when no cookie is set is English (`en`).
- **Browser Cookies**: Admins have cookies enabled, allowing the persistence of `admin_lang` and the Supabase auth session token.
- **Database Fields**: Sourcing/Client/Booking records are stored in the database as-is; we translate the UI dashboard wrappers and labels, while user-submitted names/notes remain in the language they were written.
