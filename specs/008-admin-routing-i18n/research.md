# Research: Admin Redirection & Language Localization

This document covers the technical research and design choices for implementing language localization and auth-routing fixes in the admin portal.

## 1. Localizing the Admin Dashboard without changing URL Routing

### Decision
Store the admin language preference in a cookie named `admin_lang` (defaulting to `"en"`). The Next.js Server Components inside `src/app/admin/*` will read this cookie and load the corresponding translation dictionary (`ar.json` or `en.json`). Client Components will receive the dictionary as props. A language switcher in the admin sidebar will set this cookie and call `router.refresh()` to update the server-rendered components.

### Rationale
- **Zero URL disruption**: The admin URLs remain static (e.g. `/admin/dashboard`, `/admin/dashboard/bookings`). This satisfies the requirement of "not breaking routes due to language".
- **Server-Side Rendering (SSR) & RTL Support**: By reading the cookie in Server Components, the initial layout and direction (`dir="rtl"` or `dir="ltr"`) are rendered correctly on the server, avoiding CLS (Cumulative Layout Shift) or hydration flashes.
- **Consistency**: It leverages the existing dictionary loading mechanism (`getDictionary` from `@/features/i18n`).

### Alternatives Considered
- **Moving Admin under `[locale]` (e.g. `/[locale]/admin/dashboard`)**:
  - *Rejected because*: It changes all admin route structures, requiring updates to login redirects, supabase client callback configurations, and link paths. It increases the risk of breaking admin paths or conflicting with dynamic segment routing (since `[locale]` captures all root segments).
- **Client-only Translation (i18next or custom client hooks)**:
  - *Rejected because*: It leads to a visual flash of the default language (English) before the client-side JS runs and changes the language, causing bad UX and layout shifts when switching to RTL direction.

---

## 2. Handling Redirects for `/admin` and Authenticated states

### Decision
Enhance the Next.js Middleware in `src/middleware.ts` to inspect the path and the session cookie `sb-*-auth-token`.
- If the user is authenticated:
  - Accessing `/admin`, `/admin/`, or `/admin/login` will redirect to `/admin/dashboard`.
- If the user is unauthenticated:
  - Accessing any route starting with `/admin` (except `/admin/login`) will redirect to `/admin/login`.

### Rationale
- **Performance**: Middleware runs at the edge before any Next.js page renders, guaranteeing that redirects happen immediately with zero render overhead.
- **Correctness**: Solves the bug where logged-in admins accessing `/admin` fall through to the user portal `src/app/[locale]/page.tsx` (due to Next.js routing matching `admin` as the `[locale]` parameter since `/admin/page.tsx` does not exist).

### Alternatives Considered
- **Page-level redirects inside `src/app/admin/page.tsx`**:
  - *Rejected because*: While we could create `src/app/admin/page.tsx` to handle redirects, it would only cover `/admin` and not `/admin/login` (which needs middleware to bypass login when already authenticated). Having all redirection rules in `src/middleware.ts` keeps routing logic centralized and performant.

---

## 3. Translation Key Structures

### Decision
Store all translation keys for the admin dashboard in `src/dictionaries/ar.json` and `src/dictionaries/en.json` under an `admin` parent key.

### Rationale
- **Single Source of Truth**: Keeps all translations centralized in the standard dictionaries directory.
- **Easy Maintenance**: Translators can work with a single JSON file for all site copy.

### Alternatives Considered
- **Separate admin dictionaries (e.g. `admin-ar.json`)**:
  - *Rejected because*: The current `getDictionary` loader imports `@/dictionaries/ar.json` dynamically. Adding more files would require modifying the loader, which is unnecessary since the overall dictionary size is very small (under 12KB).
