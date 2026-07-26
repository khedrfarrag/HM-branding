-- ============================================================
-- Feature 007: Booking System & Admin Dashboard
-- Migration: Initial Schema
-- Date: 2026-07-12
-- ============================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ─── Clients ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS clients (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT,
  country     TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_clients_email ON clients(email);

-- ─── Experience Schedules ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS experience_schedules (
  id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  experience_slug      TEXT NOT NULL,
  start_date           DATE NOT NULL,
  end_date             DATE NOT NULL,
  capacity             INTEGER NOT NULL CHECK (capacity > 0),
  seats_remaining      INTEGER NOT NULL CHECK (seats_remaining >= 0),
  enrollment_deadline  DATE NOT NULL,
  price                NUMERIC(10, 2) NOT NULL,
  currency             CHAR(3) NOT NULL DEFAULT 'USD',
  created_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT chk_dates CHECK (end_date > start_date),
  CONSTRAINT chk_deadline CHECK (enrollment_deadline < start_date),
  CONSTRAINT chk_seats CHECK (seats_remaining <= capacity)
);

CREATE INDEX IF NOT EXISTS idx_schedules_slug ON experience_schedules(experience_slug);

-- ─── Bookings ────────────────────────────────────────────────────────────────
CREATE TYPE booking_target_type AS ENUM ('consultation', 'experience', 'corporate', 'event');
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'cancelled', 'refunded');

CREATE TABLE IF NOT EXISTS bookings (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id           UUID NOT NULL REFERENCES clients(id) ON DELETE RESTRICT,
  schedule_id         UUID REFERENCES experience_schedules(id) ON DELETE SET NULL,
  target_type         booking_target_type NOT NULL,
  status              booking_status NOT NULL DEFAULT 'pending',
  notes               TEXT,
  payment_receipt_id  TEXT,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_bookings_client ON bookings(client_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_type   ON bookings(target_type);

-- ─── Audit Log ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS booking_audit_logs (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id    UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  action        TEXT NOT NULL,
  details       TEXT,
  performed_by  TEXT NOT NULL DEFAULT 'system',
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_booking ON booking_audit_logs(booking_id);

-- ─── Row Level Security ──────────────────────────────────────────────────────
ALTER TABLE clients              ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings             ENABLE ROW LEVEL SECURITY;
ALTER TABLE booking_audit_logs   ENABLE ROW LEVEL SECURITY;

-- Public read for schedules (displayed on frontend)
CREATE POLICY "Public can read schedules"
  ON experience_schedules FOR SELECT TO anon USING (true);

-- Only service role can mutate any table
-- (All writes go through admin client in Server Actions)

-- ─── Atomic Seat Reservation Function ───────────────────────────────────────
-- Prevents double bookings via row-level lock
CREATE OR REPLACE FUNCTION reserve_seat(p_schedule_id UUID)
RETURNS BOOLEAN LANGUAGE plpgsql AS $$
DECLARE
  v_remaining INTEGER;
BEGIN
  SELECT seats_remaining INTO v_remaining
  FROM experience_schedules
  WHERE id = p_schedule_id
  FOR UPDATE;

  IF v_remaining IS NULL OR v_remaining <= 0 THEN
    RETURN FALSE;
  END IF;

  UPDATE experience_schedules
  SET seats_remaining = seats_remaining - 1,
      updated_at = NOW()
  WHERE id = p_schedule_id;

  RETURN TRUE;
END;
$$;

-- Release a seat (on cancellation)
CREATE OR REPLACE FUNCTION release_seat(p_schedule_id UUID)
RETURNS VOID LANGUAGE plpgsql AS $$
BEGIN
  UPDATE experience_schedules
  SET seats_remaining = LEAST(seats_remaining + 1, capacity),
      updated_at = NOW()
  WHERE id = p_schedule_id;
END;
$$;
