# Implementation Plan: Admin Redirection & Language Localization

**Branch**: `008-admin-routing-i18n` | **Date**: 2026-07-19 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/008-admin-routing-i18n/spec.md`

## Summary

This feature implements a robust routing and language localization framework for the admin portal. We will enhance the Next.js Middleware in `src/middleware.ts` to manage auth-state redirects for `/admin` routes, avoiding fallbacks to the user portal. We will add an `admin` translation namespace to the existing JSON dictionaries (`ar.json` and `en.json`), load them in Server Component pages using a cookie `admin_lang` to determine the active language and text direction (`rtl` / `ltr`), and provide a language toggle in the sidebar of `DashboardShell.tsx`.

## Technical Context

**Language/Version**: TypeScript 5.7, Next.js 15.5.20, React 19

**Primary Dependencies**: Tailwind CSS v4, Lucide React, `@supabase/supabase-js`

**Storage**: Cookies (`admin_lang`, `sb-*-auth-token`)

**Testing**: `npm run lint`, `npx tsc --noEmit`

**Target Platform**: Netlify hosting, Web browser client

**Project Type**: Web Application (Routing & Localization)

**Performance Goals**: Middleware redirect execution < 50ms, initial page load LCP < 1.2s

**Constraints**: Keep all admin URL structures identical (no path segment prefixes like `/ar/admin/dashboard` or `/en/admin/dashboard`).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Design System Governance (Constitution §26)**: Use the tailwind-designed layouts. Ensure text alignment, padding, and flex layouts adjust cleanly when swapping to RTL (`dir="rtl"`) for Arabic.
- **Server/Client Boundaries (Constitution §17, §18)**: Auth validation and dictionary loading must reside on the server. The cookie value is read server-side in pages and layouts, passing only the required dictionary slice to client components.
- **TypeScript Strictness (Constitution §12, §14)**: Keep dictionary and prop typings clean and strictly defined.

## Project Structure

### Documentation (this feature)

```text
specs/008-admin-routing-i18n/
├── plan.md              # This file
├── research.md          # Technical choice evaluations
├── data-model.md        # Cookie structures & dictionary keys
└── quickstart.md        # E2E validation scenarios
```

### Source Code (repository root)

We will modify the following files:

```text
src/
├── middleware.ts                                 # Update redirection logic for admin states
├── dictionaries/
│   ├── ar.json                                   # Add admin Arabic translation keys
│   └── en.json                                   # Add admin English translation keys
├── app/
│   └── admin/
│       ├── login/
│       │   └── page.tsx                          # Load translation dictionary for login screen
│       └── (protected)/
│           ├── layout.tsx                        # Load admin_lang cookie and dictionary; pass to shell
│           └── dashboard/
│               ├── page.tsx                      # Localize Overview stats page
│               ├── bookings/
│               │   ├── page.tsx                  # Localize bookings search/list
│               │   └── [id]/page.tsx             # Localize booking details/notes
│               └── schedules/
│                   └── page.tsx                  # Localize schedule slots page
├── features/
│   └── admin/
│       └── components/
│           ├── DashboardShell.tsx                # Render language switcher, apply dir="rtl"/"ltr", translate sidebar
│           ├── MagicLinkForm.tsx                 # Translate login form labels, buttons, error messages
│           └── ...                               # Translate sub-components
```

**Structure Decision**: Web application option. We keep the single project structures and modify the admin route layouts/features.

## Verification Plan

### Automated Tests
- Run `npm run lint` to ensure zero syntax and lint errors.
- Run `npx tsc --noEmit` to verify all TypeScript typings and compilation states are correct.
- Run `npm run build` to confirm the compilation bundle generates successfully.

### Manual Verification
- Execute all E2E validation scenarios described in [quickstart.md](quickstart.md) inside an incognito tab.
