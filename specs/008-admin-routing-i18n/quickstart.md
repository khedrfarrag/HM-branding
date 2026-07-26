# Quickstart & Verification Guide: Admin Redirection & Language Localization

This guide provides end-to-end scenarios to verify that the admin redirection and language localization features work correctly.

## Prerequisites

- Local development server running (`npm run dev` at `http://localhost:3000`).
- A valid Supabase admin user registered in the local Auth system.

---

## Scenario 1: Unauthenticated Admin Redirection

Prove that users cannot view admin pages without signing in.

1. Open a new private/incognito browser window.
2. Navigate directly to `http://localhost:3000/admin` or `http://localhost:3000/admin/dashboard`.
3. **Expected Outcome**:
   - The browser is immediately redirected to `http://localhost:3000/admin/login`.
   - The page renders the Sign In form.
   - The URL is exactly `http://localhost:3000/admin/login`.

---

## Scenario 2: Authenticated Admin Redirection (Shortcuts)

Prove that already-logged-in admins are redirected to the dashboard when accessing login or root admin routes.

1. Go to `http://localhost:3000/admin/login` and log in successfully.
2. Once on `http://localhost:3000/admin/dashboard`, change the URL in the address bar to `http://localhost:3000/admin` and press Enter.
3. **Expected Outcome**:
   - The browser redirects back to `http://localhost:3000/admin/dashboard` immediately.
   - The user portal (main home page) is **not** rendered.
4. Now change the URL to `http://localhost:3000/admin/login` and press Enter.
5. **Expected Outcome**:
   - The browser redirects back to `http://localhost:3000/admin/dashboard` immediately.

---

## Scenario 3: Language Switching & State Retention

Prove that the language switcher translates the admin portal and retains preferences.

1. Navigate to `http://localhost:3000/admin/dashboard`.
2. Locate the language toggle in the sidebar (contains buttons: `عربي` and `EN`).
3. Click `عربي`.
4. **Expected Outcome**:
   - The page re-renders in Arabic.
   - The document direction is RTL (the sidebar moves to the right, main content moves to the left).
   - Text elements (e.g. "نظرة عامة", "لوحة التحكم", "تسجيل الخروج") are in Arabic.
   - The URL path remains `http://localhost:3000/admin/dashboard` (no locale prefix).
5. Open the browser's developer tools, go to the Storage/Cookies tab, and find the cookie for `http://localhost:3000`.
6. **Expected Outcome**:
   - The cookie `admin_lang` is set to `ar`.
7. Refresh the page (`F5`).
8. **Expected Outcome**:
   - The page loads directly in Arabic with RTL layout.
9. Click `EN` on the language switcher.
10. **Expected Outcome**:
    - The page re-renders in English.
    - The direction is LTR.
    - The cookie `admin_lang` is updated to `en`.

---

## Scenario 4: Sign Out Cleanup

Prove that signing out redirects to login and clears access.

1. On `http://localhost:3000/admin/dashboard`, click the "Sign Out" / "تسجيل الخروج" button.
2. **Expected Outcome**:
   - The user is redirected to `http://localhost:3000/admin/login`.
   - Navigating back using the browser's back button does not grant access (redirects back to `/admin/login`).
