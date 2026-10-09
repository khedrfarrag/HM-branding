# Research & Technical Decisions: Consultation Booking Enhancements

## Key Decisions

### 1. Slot Capacity & Multiple Slots Per Date
- **Decision**: Add `capacity` and `seats_remaining` columns to `consultation_slots`. Unique key is `(slot_date, slot_time)`.
- **Rationale**: Allows an admin to schedule multiple consultation slots (e.g. 09:00, 11:30, 15:00) on a single day, each with its own seat limit.
- **Alternatives Considered**: Creating a nested array of times per day record — rejected because individual slot IDs are required for booking foreign keys and seat tracking.

### 2. Slot Editing in Admin
- **Decision**: Provide an inline / modal edit form in `ConsultationSlotManager.tsx` triggering `updateConsultationSlotAction`.
- **Rationale**: Deleting and re-creating a slot invalidates existing booking references if any exist. Updating maintains record identity while adjusting details.

### 3. User Portal UI & Responsiveness
- **Decision**: Horizontal date selector with pill buttons, time slot tiles with seat badges, and a backdrop-blur modal housing `BookingFormWrapper`.
- **Rationale**: Offers high visual clarity, seamless mobile touch interaction, and zero page navigation friction.
