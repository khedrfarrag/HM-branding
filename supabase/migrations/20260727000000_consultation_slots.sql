-- ============================================================
-- Feature 014: Consultation Slot Capacity & Multi-Slot Enhancements
-- Migration: consultation_slots table with capacity & seats_remaining
-- Date: 2026-07-27
-- ============================================================

-- ─── Consultation Slots ──────────────────────────────────────────────────────
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

-- Ensure columns exist if table was already created in earlier iteration
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='consultation_slots' AND column_name='capacity') THEN
    ALTER TABLE public.consultation_slots ADD COLUMN capacity INTEGER NOT NULL DEFAULT 1 CHECK (capacity > 0);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='consultation_slots' AND column_name='seats_remaining') THEN
    ALTER TABLE public.consultation_slots ADD COLUMN seats_remaining INTEGER NOT NULL DEFAULT 1 CHECK (seats_remaining >= 0);
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_consultation_slots_date
  ON public.consultation_slots (slot_date, is_active);

-- ─── Row Level Security ───────────────────────────────────────────────────────
ALTER TABLE public.consultation_slots ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if any and recreate
DROP POLICY IF EXISTS "consultation_slots_public_read" ON public.consultation_slots;

CREATE POLICY "consultation_slots_public_read" ON public.consultation_slots
  FOR SELECT
  USING (is_active = true AND slot_date >= CURRENT_DATE);

-- Reload Schema Cache
NOTIFY pgrst, 'reload schema';
