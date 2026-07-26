# Research: Booking System & Admin Dashboard Bounded Context

**Feature**: 007-booking-system-dashboard
**Date**: 2026-07-12

---

## 1. Database & Persistence Strategy

### Decision: Supabase (PostgreSQL)
We will introduce Supabase as the primary relational database for the platform's transactional data (bookings, experience dates, audit logs).

### Rationale
- **Relational Integrity**: Bookings and experience schedules have strong relational constraints (e.g., a booking belongs to a schedule, capacity checks require transactional consistency).
- **Serverless & Netlify Ready**: Supabase provides an HTTP-based client that operates seamlessly inside Next.js Server Components and Server Actions without persistent connection pooling issues.
- **TypeScript Alignment**: Native schema generation maps directly to our Domain Entity contracts.

### Alternatives Considered
- **Prisma + Neon (Postgres)**: Great developer experience but introduces higher build sizes and bundle footprint. Supabase client is lighter (<50KB) and conforms better to our Dependency Policy (Constitution §9).
- **Local JSON Persistence**: Unsuitable for multi-user booking concurrency, leading to race conditions and double bookings.

---

## 2. Authentication for Admin Dashboard

### Decision: Supabase Auth (Magic Link & OTP)
We will leverage Supabase Auth to protect the `/admin/*` route group.

### Rationale
- **No Password Management**: Avoids storing passwords securely on the platform. The administrator authenticates via a secure one-time login link sent to their email.
- **Next.js Middleware Guard**: Simple verification inside `src/middleware.ts` allows redirecting unauthenticated traffic before rendering layout segments.

### Alternatives Considered
- **NextAuth.js (Auth.js)**: Highly customizable but adds substantial boilerplate and configuration overhead for a single-admin dashboard requirement.

---

## 3. Input Validation & Form Security

### Decision: React Hook Form + Zod
All user inputs on booking forms and admin CRUD operations will be validated via Zod schemas.

### Rationale
- **Unified Validation**: Zod schemas serve as the single source of truth for UI validation, TypeScript types, and server-side action validation.
- **UX & Accessibility**: React Hook Form handles state transition and keyboard focus on validation failure, satisfying Accessibility standards (Constitution §34).

---

## 4. Transactional E-mail Integration

### Decision: Resend Client integration in `IEmailGateway`
We will replace `StubEmailGateway` with a concrete adapter implementing the `Resend` SDK.

### Rationale
- **Native Next.js Support**: Resend has first-class support for sending dynamic HTML templates rendered using React components.
- **High Deliverability**: Avoids spam folders by utilizing validated domain records (SPF, DKIM).

---

## 5. Capacity Checking & Race Conditions (Double Bookings)

### Decision: Database Transactions with Row-Level Locking
To satisfy **SC-004** (zero double-bookings), seat booking confirmation must run within a PostgreSQL transaction:
```sql
BEGIN;
  -- Pessimistic locking of the schedule row
  SELECT seats_remaining FROM experience_schedules 
  WHERE id = $1 FOR UPDATE;
  
  -- Check availability and update seats
  UPDATE experience_schedules 
  SET seats_remaining = seats_remaining - 1 
  WHERE id = $1 AND seats_remaining > 0;
COMMIT;
```
This is wrapped in a PostgreSQL function (RPC) or managed transaction via the Supabase client to prevent race conditions during parallel checkout requests.
