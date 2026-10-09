# Feature Specification: Full Admin Management & Premium UX for Consultation Booking System

**Feature Branch**: `014-consultation-booking-enhancements`  
**Created**: 2026-07-27  
**Status**: Draft  
**Input**: User request: "تحديد عدد المقاعد لكل موعد، إضافة أكثر من وقت لنفس اليوم، إمكانية تعديل الموعد في لوحة التحكم وليس الحذف فقط، وتحسين تصميم وعرض المواعيد في بوابة المستخدم (User Portal UI Polish)."

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Admin Slot Capacity & Multiple Slots Management (Priority: P1)

As an administrator, I want to define the date, time, and maximum seat capacity for consultation slots, and create multiple distinct time slots on the same date, so that I can offer flexible options for consultations.

**Why this priority**: Core scheduling feature — without multi-slot per day and capacity support, consultation availability is rigid.

**Independent Test**: In Admin Dashboard under "Consultations", add two different slots for the same date (e.g. 10:00 with 1 seat, and 14:00 with 5 seats). Verify both slots save successfully and display in the grouped date table.

**Acceptance Scenarios**:
1. **Given** an admin on the Consultations page, **When** creating a slot with a specific date, time, and capacity, **Then** the slot is saved with `capacity` and `seats_remaining` set accordingly.
2. **Given** an existing slot on a date, **When** adding another slot on the same date with a different time, **Then** both slots coexist peacefully under the same date grouping.
3. **Given** an attempt to add a slot with the exact same date and time as an existing slot, **Then** a localized warning toast appears indicating the duplicate slot.

---

### User Story 2 - Admin Full Slot Editing Capabilities (Priority: P1)

As an administrator, I want to edit existing consultation slots (changing their date, time, capacity, or remaining seats) directly from the admin dashboard without having to delete and recreate them.

**Why this priority**: Administrative efficiency — admins need to update details (e.g. adjust capacity or change time) without losing existing slot history or breaking customer links.

**Independent Test**: Click "Edit" on a slot, update its time and capacity, submit the modal/inline form, and verify the changes update reactively in the UI and database.

**Acceptance Scenarios**:
1. **Given** an admin viewing the slot list, **When** clicking "Edit" on a slot, **Then** an edit dialog opens populated with the slot's current date, time, capacity, and active status.
2. **Given** modified slot details, **When** saving the edit, **Then** the record updates instantly in the list without page reload.
3. **Given** an admin attempting to lower capacity below the number of booked seats, **Then** an error toast prevents invalid reduction.

---

### User Story 3 - Premium User Portal Consultation Booking Experience (Priority: P1)

As a site visitor, I want a sleek, responsive, and intuitive interface to select consultation dates and times, see seat availability, and confirm my booking in a seamless modal flow.

**Why this priority**: Conversion & Brand value — the consultation booking section on the homepage represents the primary call-to-action for high-value leads.

**Independent Test**: Navigate to the homepage booking section in both mobile and desktop views, click through available dates, select a slot displaying remaining seats, click "Confirm Slot", fill out the modal form, and verify instant confirmation.

**Acceptance Scenarios**:
1. **Given** a user on the homepage, **When** viewing the consultation booking section, **Then** available dates are presented as horizontal scrollable date cards with localized day/month names.
2. **Given** a selected date, **When** slots are displayed, **Then** each time slot pill displays the time and a badge indicating remaining seats (e.g., "1 مقعد متاح" / "1 seat left" or "فردي").
3. **Given** a selected slot, **When** clicking "تأكيد الموعد", **Then** a styled modal opens displaying chosen date/time summary along with client contact input fields.
4. **Given** a completed booking submission, **Then** remaining seats for that slot decrease automatically, and a confirmation code is displayed.

---

## Edge Cases

- What happens if 2 users attempt to book the last remaining seat at the exact same time?
  - Atomic seat deduction (RPC / DB lock) grants the seat to the first request and alerts the second user with a localized "Session Full" toast.
- What happens if an admin edits a slot's date while bookings are pending?
  - System retains existing booking records and logs an audit record of the slot update.
- What happens if no slots are available in the next 30 days?
  - User portal displays an elegant empty state with a direct WhatsApp / Contact fallback CTA.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: `consultation_slots` database schema MUST support `capacity` (INTEGER, default 1) and `seats_remaining` (INTEGER).
- **FR-002**: Admin portal MUST support full CRUD operations on consultation slots: Create (multi-slot per day), Read, Update (date, time, capacity, active status), and Delete.
- **FR-003**: Unique constraint on `consultation_slots` MUST be scoped to `(slot_date, slot_time)` allowing multiple unique times per date.
- **FR-004**: Homepage `BookingSection` MUST display interactive date selectors, slot time pills with seat availability counters, and dynamic modal trigger.
- **FR-005**: Booking submission MUST decrement `seats_remaining` atomically and create a booking linked to `schedule_id` / consultation slot ID.
- **FR-006**: Both Admin and User interfaces MUST support bilingual RTL/LTR layout for Arabic and English locales.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of slot updates in Admin execute without full browser page reload.
- **SC-002**: 100% of valid date/time slots saved by Admin appear instantly in the user portal.
- **SC-003**: 0% chance of double-booking a single-capacity slot (guaranteed by atomic DB transaction).
- **SC-004**: Booking completion flow takes under 30 seconds for users on desktop and mobile devices.
