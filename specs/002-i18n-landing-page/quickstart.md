# Quickstart: Locales and Routing Validation

This guide outlines step-by-step verification flows to validate the implementation of the i18n landing page.

---

## 1. Local Development Setup

To run the project locally for verification:

```bash
# 1. Clean build cache and install dependencies (if new packages added)
npm install --legacy-peer-deps

# 2. Run the Next.js development server
npm run dev
```

The application will launch at `http://localhost:3000`.

---

## 2. Verification Scenarios

### Scenario 1: Default Redirection and RTL Layout

1. **Setup**: Open an incognito browser window (to clear cookies).
2. **Action**: Navigate to the root address `http://localhost:3000/`.
3. **Verification**:
   - The address bar MUST instantly update to `http://localhost:3000/ar`.
   - Inspect the HTML node via Browser DevTools: Verify `<html lang="ar" dir="rtl">` is present.
   - Verify the landing text is written in Arabic.
   - Verify the main layout flows right-to-left (e.g. Logo on the right, CTAs layout correctly).

### Scenario 2: Language Switching and LTR Transitions

1. **Setup**: Page is loaded at `http://localhost:3000/ar`.
2. **Action**: Click the language toggle button ("English" or "EN") in the header.
3. **Verification**:
   - The URL MUST update to `http://localhost:3000/en`.
   - Inspect the HTML node: Verify `<html lang="en" dir="ltr">` is set.
   - Verify all landing page headings and body sections are translated into English.
   - Verify the main layout dynamically shifts left-to-right (Logo on the left, CTAs layout correctly).

### Scenario 3: Invalid Locale Fallback Handling

1. **Action**: Navigate to `http://localhost:3000/fr`.
2. **Verification**:
   - The server MUST redirect or serve a fallback default language.
   - Verify the page successfully redirects back to `http://localhost:3000/ar` rather than raising a server error or displaying a blank screen.

### Scenario 4: Compilation and Build Audit

1. **Action**: Run the production build command:
   ```bash
   npm run build
   ```
2. **Verification**:
   - The Next.js static page compiler MUST run successfully.
   - Verify that both `/ar` and `/en` routes are generated as static HTML pages (`○` marker).
