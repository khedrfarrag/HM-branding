# Feature Specification: Experience & Schedule Admin UX Fix

**Feature Branch**: `011-experience-schedule-fix`

**Created**: 2026-07-21

**Status**: Draft

**Input**: User description: "المواعيد مش بتظهر وأنا عاوز أعرف هل في علاقة مبين المواعيد بالتجارب ولا لا، لو ليها علاقة فالمفروض لما أعمل ميعاد لازم أختار نفس اسم التجربة اللي بتظهر. الصورة التي أضفتها مفيهاش أي طريقة العميل يبدأ الحجز أو يشوف الميعاد، آخر موعد للحجز أو يوم البدء والانتهاء والسعة وحجز كام وباقي كام واحد وهكذا."

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Admin Links a Schedule to an Experience (Priority: P1)

The admin goes to the Schedules section and wants to add a new availability slot for an experience they have already created (e.g., "السفر في جميع مدن الصين"). Currently, they must type the experience slug from memory into a plain text field, which leads to mismatches and the schedule never appearing publicly. The new flow presents a dropdown of all existing experiences so the admin selects the correct one and the link is always accurate.

**Why this priority**: Without a correct slug link, no schedule data ever reaches the public-facing detail page, making the entire booking flow completely broken.

**Independent Test**: Create a schedule via the admin dropdown, navigate to the corresponding public experience detail page, and confirm the schedule appears in the "المواعيد المتاحة" section.

**Acceptance Scenarios**:

1. **Given** the admin is on the Schedules page, **When** they click "Add Schedule Slot", **Then** the experience field shows a dropdown populated with all existing experience titles (slug stored internally).
2. **Given** an experience named "السفر في جميع مدن الصين" exists, **When** the admin selects it and saves a schedule, **Then** the schedule appears on the corresponding public experience detail page.
3. **Given** no experiences exist yet, **When** the admin opens the schedule form, **Then** the dropdown is empty and shows a helpful message.

---

### User Story 2 — Visitor Sees Available Dates and Books (Priority: P1)

A visitor lands on an experience detail page and wants to know: when does the trip start, when does it end, how many seats are left, what is the price, and what is the registration deadline. They should be able to click "احجز الآن" directly from that page. Currently the booking section is invisible because no schedules are correctly linked.

**Why this priority**: This is the primary conversion action of the website — without it, users cannot book anything.

**Independent Test**: Link a schedule to an experience (Story 1), visit the public detail page, confirm all date/seat/price information is visible with a working booking link.

**Acceptance Scenarios**:

1. **Given** a schedule is linked to an experience, **When** a visitor opens that experience detail page, **Then** they see: trip start date, end date, registration deadline, total capacity, remaining spots, and price.
2. **Given** multiple schedules exist for one experience, **When** the visitor views the detail page, **Then** each schedule appears as a separate card.
3. **Given** a schedule's registration deadline has passed, **When** a visitor views it, **Then** the "Book Now" button is replaced with a "Registration Closed" label.
4. **Given** a schedule is full (0 seats remaining), **When** a visitor views it, **Then** the card shows "Fully Booked" and the button is disabled.

---

### User Story 3 — Visitor Sees the Experience Cover Image (Priority: P2)

A visitor opens an experience detail page. The admin uploaded a cover image, but the image is not displayed anywhere on the public detail page. The visitor should see a prominent cover image at the top of the article.

**Why this priority**: Visual presentation is critical for converting interest into bookings; a missing image makes the page look incomplete.

**Independent Test**: Upload a cover image via the admin form, visit the public detail page, confirm the image is visible at the top of the content.

**Acceptance Scenarios**:

1. **Given** an experience has a cover image URL, **When** a visitor opens its detail page, **Then** the cover image is displayed prominently before the title.
2. **Given** an experience has no cover image, **When** a visitor opens its detail page, **Then** no broken image or empty container is shown — the layout gracefully omits the image area.

---

### User Story 4 — Admin Views and Edits an Experience (Priority: P2)

The admin opens the Experiences listing and wants to correct a mistake (wrong title, wrong price). Currently only a "Delete" button is available — there is no "Edit" action. An Edit page should allow updating all fields including replacing the cover image (old image deleted from storage when a new one is uploaded).

**Why this priority**: Without edit capability, any mistake requires deleting and fully recreating the experience, which is destructive.

**Independent Test**: Create an experience, edit its title via the admin edit page, confirm the updated title appears on the public page.

**Acceptance Scenarios**:

1. **Given** the admin is on the Experiences listing, **When** they click "Edit" on a row, **Then** they are taken to a pre-filled edit form with all current values.
2. **Given** the admin changes the title and saves, **When** they return to the listing, **Then** the updated title is shown.
3. **Given** the admin uploads a new cover image on the edit form, **When** saved, **Then** the old image is deleted from storage and the new image is saved.
4. **Given** the admin submits with invalid data (e.g., empty title), **When** the form fails validation, **Then** clear field-level error messages are displayed and no data is changed.

---

### User Story 5 — Admin Creates an Experience with the Correct Type (Priority: P2)

The admin opens the "Add New Experience" form. The type dropdown only shows 4 options which do not match the 7 valid system types. The dropdown must reflect all 7 valid types.

**Why this priority**: Creating an experience with the wrong type means it is routed incorrectly in the public portal.

**Independent Test**: Open the create form and verify all 7 system-defined types appear in the dropdown.

**Acceptance Scenarios**:

1. **Given** the admin opens the new experience form, **When** they click the Type dropdown, **Then** exactly 7 options appear: `business-trips`, `factory-tours`, `vip-experiences`, `private-mentorship`, `china-business-experience`, `corporate-programs`, `canton-fair-programs`.
2. **Given** the admin selects "factory-tours" and saves, **When** they visit `/ar/experiences/factory-tours/[slug]`, **Then** the experience is found and displayed correctly.

---

### Edge Cases

- What happens if the admin deletes an experience that still has linked schedules? Schedules become orphaned — they no longer appear publicly (no match by slug) but are not automatically deleted.
- What if two visitors try to book the last seat simultaneously? The atomic `reserve_seat` database function prevents double-booking.
- What if a cover image upload fails mid-save on the edit form? The existing image must remain unchanged; no partial update occurs.
- What if a visitor opens a detail page for an experience with no future schedules? The booking section is hidden entirely — no empty section or broken UI is shown.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The admin MUST be able to select the target experience from a dropdown (populated from the database) when creating a schedule, instead of typing a slug manually.
- **FR-002**: The public experience detail page MUST display all linked future schedules including: start date, end date, registration deadline, total capacity, remaining seats, and price per schedule.
- **FR-003**: Each schedule card on the public detail page MUST include a "Book Now" link directing the visitor to the booking flow for that specific schedule.
- **FR-004**: If a schedule's registration deadline has passed or remaining seats are 0, its booking button MUST be visually disabled or replaced with an appropriate status label.
- **FR-005**: The public experience detail page MUST display the cover image prominently at the top of the content area.
- **FR-006**: If no cover image is set, the detail page MUST render without any broken or empty image container.
- **FR-007**: The admin experience listing MUST include an "Edit" action per row that opens a pre-filled edit form.
- **FR-008**: The admin edit form MUST support updating all experience fields, including replacing the cover image (old image deleted from storage on save with new image).
- **FR-009**: The experience type dropdown in both admin create and edit forms MUST contain exactly the 7 system-defined types: `business-trips`, `factory-tours`, `vip-experiences`, `private-mentorship`, `china-business-experience`, `corporate-programs`, `canton-fair-programs`.
- **FR-010**: All admin forms MUST display field-level validation errors when inputs are invalid.

### Key Entities

- **Experience**: A program offering (e.g., business trip to China). Has a unique slug, type, bilingual title/description, cover image, price, and status.
- **Schedule**: A dated availability slot linked to an experience by its slug. Has start date, end date, registration deadline, capacity, remaining seats, price, and currency.
- **Booking**: A reservation by a client for a specific schedule slot. Initiated via a link from the public experience detail page.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A schedule created via the admin dropdown appears on the correct public experience detail page within one page refresh — zero slug mismatch errors.
- **SC-002**: All schedule information (dates, capacity, price, deadline) is visible to visitors on the public detail page without any extra steps.
- **SC-003**: The cover image uploaded by the admin is displayed at the top of the public detail page in all tested browsers.
- **SC-004**: The admin can edit any experience field and see the change reflected on the public page within one page refresh.
- **SC-005**: The experience type dropdown in admin forms shows all 7 valid types with no missing or extra options.
- **SC-006**: The admin schedule form dropdown eliminates all slug-mismatch errors (currently 100% manual-error-prone; target 0% after fix).

---

## Assumptions

- The `experience_schedules` and `experiences` tables already exist in the database from previous migrations (007 and 010).
- The experience slug is unique and immutable after creation — the edit form does not allow slug changes to avoid breaking existing schedule links.
- The booking flow page (`/[locale]/booking/experience/[slug]?scheduleId=...`) already exists and is not rebuilt by this feature.
- Mobile responsiveness follows the existing design system (Tailwind v4, dark-mode premium aesthetic).
- The admin experience listing already uses `adminGetAll()` from the repository — the edit action adds a new `adminUpdate()` method to the same repository.
- The slug field is not exposed for editing in the admin edit form to prevent orphaned schedules.
