# Implementation Plan: Full Admin Management & Premium UX for Consultation Booking System

**Branch**: `014-consultation-booking-enhancements` | **Date**: 2026-07-27 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/014-consultation-booking-enhancements/spec.md)

---

## Summary

This feature enhances the consultation booking subsystem to provide complete admin control and a premium user booking experience:
1. Updates `consultation_slots` schema to include `capacity` (INTEGER, default 1) and `seats_remaining` (INTEGER).
2. Enables multiple unique time slots on the same date via composite unique constraint `(slot_date, slot_time)`.
3. Expands Admin Portal capabilities: Add slot with custom capacity, edit existing slot details (date, time, capacity, seats_remaining, active status), toggle status, and delete.
4. Refines User Portal `BookingSection` UI: horizontal date pills, time slot buttons displaying remaining seats, and a sleek booking modal.

---

## Technical Context

**Language/Version**: TypeScript / Next.js (App Router, Server Actions)  
**Primary Dependencies**: React, Supabase PostgreSQL, TailwindCSS, Lucide/Heroicons  
**Storage**: Supabase PostgreSQL (`consultation_slots`, `bookings`, `clients`, `booking_audit_logs`)  
**Target Platform**: Web (Admin Portal + Desktop & Mobile User View)  
**Performance Goals**: Reactive updates under 300ms; atomic seat reservations via Postgres functions  

---

## Constitution Check

- Adheres strictly to Next.js App Router patterns and Supabase repository conventions.
- Ensures atomic seat reservation via PostgreSQL stored procedure to prevent double-booking.
- Provides 100% localized Arabic/English UI states.

---

## Proposed Changes

### 1. Database & Schema Migration
#### [MODIFY] [supabase/migrations/20260727000000_consultation_slots.sql](file:///g:/hossam%20mabrouk/supabase/migrations/20260727000000_consultation_slots.sql)
- Add `capacity INTEGER NOT NULL DEFAULT 1 CHECK (capacity > 0)` and `seats_remaining INTEGER NOT NULL DEFAULT 1 CHECK (seats_remaining >= 0)`.
- Ensure composite unique constraint `UNIQUE (slot_date, slot_time)`.

### 2. Admin Server Actions & Management Component
#### [MODIFY] [manage-consultations.ts](file:///g:/hossam%20mabrouk/src/features/admin/actions/manage-consultations.ts)
- Update `createConsultationSlotAction` to accept `capacity`.
- Create `updateConsultationSlotAction` to update date, time, capacity, seats_remaining, and is_active.
- Create `deleteConsultationSlotAction` and `toggleConsultationSlotAction`.

#### [MODIFY] [ConsultationSlotManager.tsx](file:///g:/hossam%20mabrouk/src/features/admin/components/ConsultationSlotManager.tsx)
- Integrate Edit Modal/Form to allow full editing of any slot.
- Support capacity input field on creation and edit.
- Provide smooth feedback toasts on all CRUD operations.

### 3. User Portal Consultation Booking Section
#### [MODIFY] [get-consultation-slots.ts](file:///g:/hossam%20mabrouk/src/features/booking/actions/get-consultation-slots.ts)
- Return `capacity` and `seats_remaining` for each active slot.

#### [MODIFY] [BookingSection.tsx](file:///g:/hossam%20mabrouk/src/features/home/components/BookingSection.tsx)
- Render date pills, seat badges, and time slots.
- Open dynamic booking modal with pre-selected slot context.

---

## Verification Plan

### Automated Tests
- Execute `npm run build` to verify zero TypeScript or Next.js build errors.

### Manual Verification
- Test adding multiple time slots for the same date in Admin.
- Test editing an existing slot (changing capacity from 1 to 5).
- Test user booking flow from homepage down to confirmation page.
