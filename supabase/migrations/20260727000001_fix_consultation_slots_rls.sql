-- ============================================================
-- Feature 014: Fix Consultation Slots Public RLS Policy
-- Date: 2026-07-27
-- Ensure anonymous public visitors can select active consultation slots.
-- ============================================================

ALTER TABLE public.consultation_slots ENABLE ROW LEVEL SECURITY;

-- Drop existing public read policy
DROP POLICY IF EXISTS "consultation_slots_public_read" ON public.consultation_slots;

-- Allow unrestricted public read access to consultation slots so anon clients can fetch available slots
CREATE POLICY "consultation_slots_public_read" ON public.consultation_slots
  FOR SELECT
  TO public
  USING (true);

-- Reload Schema Cache
NOTIFY pgrst, 'reload schema';
