# Feature Specification: Booking System & Admin Dashboard

**Feature Branch**: `007-booking-system-dashboard`

**Created**: 2026-07-12

**Status**: Draft

**Input**: User description: "المرحلة الي جايه ... مدونات الي الجزء بتاع الدورات التدريبيه لحد دلوقتي المفروض انها يبقي فيها حجز ولازم تكون فيها ui ux وطبعا لازم تكون ليها داش بورد ك باك اند وتكون crud operation والبريفورمانس فيها عالي وكمان الصفحات بتاعة الموقع لا يوجد فيها صور معبره متولده بي ai"

## Clarifications

### Session 2026-07-12
- Q: How should payments for paid experiences be handled? → A: Manual admin check (Offline payment verification). Client registers interest, and admin verifies payment offline and confirms the booking.
- Q: How should the initial administrator account be created? → A: Seed Script / CLI. The administrator user is provisioned directly on the database via seeds or CLI commands; no signup page is exposed.

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Client Experience Booking & Inquiry (Priority: P1)

An importer visits the platform, navigates to a specific field experience page (e.g., Canton Fair Program), reviews the upcoming schedules, pricing, and available seats, and completes a booking reservation form to secure a spot.

**Why this priority**: It is the core transactional engine of the platform, enabling direct conversion of website traffic into business leads and experience participants.

**Independent Test**:
- Navigate to `/ar/experiences/canton-fair-programs/canton-fair-business-experience`.
- Select an upcoming date with available seats.
- Fill out the booking form with valid contact information.
- Click "Submit".
- Verify that the user is redirected to a confirmation page displaying a unique booking ID and reservation summary, and that a confirmation email is triggered.

**Acceptance Scenarios**:
1. **Given** a user is on an experience detail page, **When** they view the schedules section, **Then** they see dynamic dates, total seats, remaining seats, and enrollment deadlines in their active language.
2. **Given** a user fills out the booking form, **When** they submit it with an invalid email or missing phone number, **Then** they see clear, localized validation error messages instantly.
3. **Given** a user submits a valid booking request for an experience with 0 remaining seats, **When** the request is processed, **Then** they are notified that the session is full and offered a waiting list option.

---

### User Story 2 - Admin Dashboard Booking Management (Priority: P2)

The website administrator logs into a secure backend panel, reviews all booking requests, filters them by status/type, and updates their lifecycle status (e.g., confirming a booking or marking it as paid).

**Why this priority**: Administrative control is necessary to manage operational flows, follow up on customer inquiries, and update booking records after offline verification.

**Independent Test**:
- Access the secure dashboard login route.
- Authenticate with valid administrator credentials.
- Navigate to the "Bookings" management tab.
- Click on a "Pending" booking, view its details, and change its status to "Confirmed".
- Verify that the status updates in the database and is reflected in the dashboard list.

**Acceptance Scenarios**:
1. **Given** an authenticated admin is on the Bookings list, **When** they filter by status "Pending" and type "Experience", **Then** the list dynamically updates to show only matching records.
2. **Given** an admin is viewing a specific booking detail page, **When** they modify the client's notes or status, **Then** they can save changes, updating the audit trail.
3. **Given** a non-administrator attempts to access the dashboard route directly, **When** the page loads, **Then** they are redirected to the homepage or a login challenge.

---

### User Story 3 - Schedule & Capacity Administration (Priority: P3)

The administrator manages the availability, dates, capacity, and pricing of different platform experiences and consulting slots via the admin panel.

**Why this priority**: Prevents scheduling conflicts and allows dynamic adjustment of capacity and pricing as slots are filled or cancelled.

**Independent Test**:
- Open the "Schedules" management section in the admin panel.
- Select a specific experience (e.g., Canton Fair Program).
- Add a new date range with a defined capacity (e.g., Oct 15-22, 15 seats).
- Verify that this new date immediately renders as an option on the public experience booking page.

**Acceptance Scenarios**:
1. **Given** an admin is in the experience manager, **When** they create a new schedule slot, **Then** it must require start date, end date, total seats, and enrollment deadline fields.
2. **Given** an experience date is modified or deleted by the admin, **When** public users visit the booking page, **Then** the changed options are updated in real-time.

---

### Edge Cases

- **Double Booking**: Two users submit booking requests for the last remaining seat of an experience simultaneously. The system must process requests sequentially, confirming the first and notifying the second that the slot has just filled.
- **Session Timeout**: A user opens the booking form, waits 2 hours, and then submits. The system must validate that the slot is still available at the time of submission rather than when the form was loaded.
- **Orphan Bookings**: A booking request is saved but the gateway/email confirmation fails. The system must mark the record appropriately and flag it for administrative review on the dashboard.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-B01**: System MUST support booking flows for 4 distinct target categories: Consultation, Experience, Corporate, and Event.
- **FR-B02**: System MUST validate all customer inputs (Full Name, Email, Phone, Preferred Date, Notes) on both client and server sides before processing.
- **FR-B03**: Public experience detail pages MUST display real-time availability including total seats, remaining spots, and active enrollment deadlines.
- **FR-B04**: System MUST prevent booking confirmation if the chosen experience session has reached maximum capacity or if the enrollment deadline has passed.
- **FR-B05**: Admin Dashboard MUST be protected by secure session-based authentication, restricting access solely to verified administrators.
- **FR-B06**: Admin Dashboard MUST support full CRUD operations for:
  - **Bookings**: View list, filter by status, read details, update status (Pending, Confirmed, Cancelled, Refunded) after offline payment check, edit client notes.
  - **Schedules**: Add, edit, or delete experience sessions, dates, capacities, and pricing.
- **FR-B07**: System MUST automatically trigger localized email alerts to the client upon booking submission, status update, or cancellation.
- **FR-B08**: System MUST maintain an audit trail for each booking record, logging the timestamp of status changes and administrative edits.

### Out of Scope
- **Online Payment Integration**: Direct Stripe credit card gateway processing is out of scope for Phase 1. All payments are verified manually offline.
- **Client Auth Accounts**: Client users do not create profiles or log in to manage bookings; they register via public forms and receive updates via email.
- **Admin Self-Registration Pages**: No registration screens, sign-up forms, or public auth invitation flows will exist. The admin user is created directly in the database via seeds or CLI.

---

### Key Entities

- **Client**: Represents the user requesting a booking. Key attributes: Name, Email, Phone, Country/Region.
- **Booking**: Represents a specific reservation record. Key attributes: Booking ID, Client ID, Target Type (consultation/experience/etc.), Target ID, Session Date, Status (pending/confirmed/cancelled/refunded), Total Price, Currency, Audit Log.
- **ExperienceSchedule**: Represents a specific scheduled block for a program. Key attributes: Schedule ID, Experience Slug, Start Date, End Date, Capacity (total seats), Seats Remaining, Enrollment Deadline, Pricing.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can complete the booking inquiry flow in under 90 seconds from start to confirmation.
- **SC-002**: Page load time for the Admin Dashboard remains under 1.5 seconds for typical lists (up to 1,000 records).
- **SC-003**: 100% of successful bookings generate and dispatch email confirmations within 5 seconds of database persistence.
- **SC-004**: Zero double-booking occurrences on experience sessions under simultaneous load conditions (tested up to 50 requests/sec).

---

## Assumptions

- **Target Audience**: Clients have active email accounts and WhatsApp-enabled phone numbers for verification and communication.
- **Authentication**: Admin panel access will be limited to a single admin role initially (no multi-tier RBAC required for v1).
- **Hosting Environment**: The serverless platform environment supports background action triggers for email dispatch.
- **Visual Assets**: Visual assets (Hero headers, experience illustration covers) are pre-rendered and optimized before deployment, ensuring no fallback placeholders exist in production.
