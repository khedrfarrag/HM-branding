# Implementation Plan: Booking System & Admin Dashboard

**Branch**: `007-booking-system-dashboard` | **Date**: 2026-07-12 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/007-booking-system-dashboard/spec.md`

## Summary

This feature implements a complete Booking System and backend Admin Dashboard for hossammabrouk.com. We will swap local stubs for a relational PostgreSQL database hosted on Supabase, configure secure administration routes protected by Supabase Auth, and implement React Server Actions for robust CRUD operations. Visual design will adhere to our dark-mode premium branding, and form logic will run under strict Zod validation constraints.

## Technical Context

**Language/Version**: TypeScript 5.7, Next.js 15.5.20, React 19

**Primary Dependencies**: Tailwind CSS v4, Framer Motion, Lucide React, Zod, React Hook Form, `@supabase/supabase-js`

**Storage**: Supabase (PostgreSQL)

**Testing**: npm run lint, npm run type-check

**Target Platform**: Netlify hosting, Web browser client

**Project Type**: Web Application (Frontend + Backend Database)

**Performance Goals**: Dashboard lists load <1.5s, booking submission latency <2.5s, LCP <2.5s

**Constraints**: Pure domain layer (no Supabase client imports in `src/domains`), strict Server Component boundaries (no server secrets in client files)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Design System Governance (Constitution §26)**: UI components must match current Tailwind CSS v4 design tokens and Beiruti/Bricolage font variables.
- **Server/Client Boundaries (Constitution §17, §18)**: Supabase Service Role and environment credentials must reside strictly on the server side (Server Actions & Route Handlers).
- **TypeScript Strictness (Constitution §12, §14)**: Zero `any` usage, all props typed, return values fully annotated.

## Project Structure

### Documentation (this feature)

```text
specs/007-booking-system-dashboard/
├── plan.md              # This file
├── research.md          # Technical choice evaluations
├── data-model.md        # Database schema & Zod validators
├── quickstart.md        # E2E validation scenarios
└── checklists/
    └── requirements.md  # Specification Quality Checklist
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── (admin)/
│   │   ├── layout.tsx                 # Admin layout & Auth guard
│   │   ├── login/
│   │   │   └── page.tsx               # Magic Link login screen
│   │   └── dashboard/
│   │       ├── page.tsx               # Main booking statistics
│   │       ├── bookings/
│   │       │   ├── page.tsx           # Bookings list & filter
│   │       │   └── [id]/page.tsx      # Booking details editor
│   │       └── schedules/
│   │           └── page.tsx           # Session management CRUD
│   └── api/
│       ├── health/
│       │   └── route.tsx              # DB connection health check
│       └── booking/
│           └── route.tsx              # Public API endpoint
├── features/
│   ├── booking/
│   │   ├── components/
│   │   │   └── BookingForm.tsx        # Client booking form
│   │   ├── actions/
│   │   │   └── submit-booking.ts      # Server Action to process request
│   │   └── index.ts
│   └── admin/
│       ├── components/
│       │   └── DashboardShell.tsx     # Admin sidebar navigation
│       └── index.ts
├── repositories/
│   └── supabase/
│       ├── booking.ts                 # Concrete Supabase repository
│       └── client.ts                  # Supabase Client instantiation
└── integrations/
    ├── email/
    │   └── resend.ts                  # Resend SDK Email Gateway
    └── calendar/
        └── calendar.ts                # Real Calendar integration
```

**Structure Decision**: Web application option. We separate the administrative shell inside Next.js Route Group `(admin)`, define features inside `src/features/booking/` and `src/features/admin/` per Feature-First Architecture rules (Constitution §24), and place database operations in `src/repositories/supabase/` behind repository interfaces.

## Verification Plan

### Automated Tests
- Run `npm run lint` and `npm run build` to verify Next.js static page generation compiles cleanly.
- Verify TypeScript types by running `npx tsc --noEmit`.

### Manual Verification
- Access `/admin/dashboard` in Incognito and verify authentication redirect logic blocks access.
- Fill the checkout form with valid data, click submit, and verify that the confirmation screen renders with a real UUID.
