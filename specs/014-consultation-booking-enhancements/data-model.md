# Data Model: Consultation Booking Enhancements

## Entities & Schemas

### Entity 1: `consultation_slots`

```sql
CREATE TABLE IF NOT EXISTS public.consultation_slots (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slot_date       DATE NOT NULL,
  slot_time       TEXT NOT NULL CHECK (slot_time ~ '^\d{2}:\d{2}$'),
  capacity        INTEGER NOT NULL DEFAULT 1 CHECK (capacity > 0),
  seats_remaining INTEGER NOT NULL DEFAULT 1 CHECK (seats_remaining >= 0),
  is_active       BOOLEAN NOT NULL DEFAULT true,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT unq_slot_datetime UNIQUE (slot_date, slot_time)
);
```

#### Fields:
- `id`: UUID Primary Key
- `slot_date`: Date of the session (`YYYY-MM-DD`)
- `slot_time`: 24-hr time of the session (`HH:MM`)
- `capacity`: Maximum number of allowed bookings (default: 1)
- `seats_remaining`: Remaining available seats (starts equal to capacity)
- `is_active`: Toggle visibility on public portal

---

### Entity 2: `bookings` (Referencing Consultation Slot)

```sql
-- Existing table linking
-- schedule_id references consultation_slots(id) or experience_schedules(id)
```
