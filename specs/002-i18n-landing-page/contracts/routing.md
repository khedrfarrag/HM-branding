# Interface & Routing Contracts: Multilingual Paths

This document outlines the routing, locale selection, and middleware contracts.

---

## 1. URL Path Mapping

The system MUST enforce strict language prefixes in page paths:

| Incoming Path | Action | Output URL | Language Served | HTML attributes |
|:---|:---|:---|:---|:---|
| `/` | Detection & Redirection | `/ar` or `/en` | Detected language | Dependent on locale |
| `/ar` | Render Home (AR) | `/ar` | Arabic | `lang="ar" dir="rtl"` |
| `/en` | Render Home (EN) | `/en` | English | `lang="en" dir="ltr"` |
| `/fr` (unsupported) | Graceful Fallback | `/ar` | Arabic (default) | `lang="ar" dir="rtl"` |

---

## 2. Dynamic Redirection Middleware (Contract)

Next.js Middleware MUST intercept all user requests to evaluate the client language.

### Excluded Paths
Middleware MUST NOT intercept the following assets or API endpoints:
- Static assets (e.g. `/_next/`, `/static/`, `/fonts/`, `/assets/`, `/favicon.ico`, `/robots.txt`)
- Internal API routes (e.g. `/api/health`, `/api/contact`)

### Resolution Priority
1. **Locale prefix**: Path already starts with `/ar` or `/en` (No redirection).
2. **Saved Preference**: Cookie `NEXT_LOCALE` exists and matches `ar|en`. Redirection to `/[cookieValue]`.
3. **Accept-Language Header**: Browser preferences matched using negotiators.
4. **Default fallback**: Redirect to `/ar`.

---

## 3. Translation Getter Interface

The system exports a server-side method to resolve translation contents:

```typescript
export function getDictionary(locale: "ar" | "en"): Promise<LocaleDictionary>;
```

### Response Schema
Refer to [data-model.md](file:///g:/hossam%20mabrouk/specs/002-i18n-landing-page/data-model.md) for the returned dictionary structure.
If the promise fails to resolve, a default empty structure or fallback locale dictionary MUST be used to prevent application crashes.
