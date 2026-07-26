-- ============================================================
-- Feature 010: Navigation Fix, Admin Experience Management & Content Sync
-- Migration: Create Experiences Table & Storage Bucket
-- Date: 2026-07-20
-- ============================================================

-- ─── 1. Create Experiences Table ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS experiences (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug                  TEXT UNIQUE NOT NULL,
  type                  TEXT NOT NULL,
  title_ar              TEXT NOT NULL,
  title_en              TEXT NOT NULL,
  short_description_ar  TEXT,
  short_description_en  TEXT,
  full_description_ar   TEXT,
  full_description_en   TEXT,
  cover_image           TEXT,
  cover_image_id        TEXT, -- Storage path (publicId) for storage cleanup
  price                 NUMERIC(10, 2),
  currency              CHAR(3) NOT NULL DEFAULT 'USD',
  itinerary             JSONB NOT NULL DEFAULT '[]'::jsonb,
  city_slug             TEXT,
  status                TEXT NOT NULL DEFAULT 'published',
  published_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexing for fast search and slug-based routing
CREATE INDEX IF NOT EXISTS idx_experiences_slug ON experiences(slug);
CREATE INDEX IF NOT EXISTS idx_experiences_type ON experiences(type);

-- Row Level Security for Table
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;

-- Drop policies if they exist to prevent duplication errors
DROP POLICY IF EXISTS "Public can read published experiences" ON experiences;

-- Public select policy (read published only)
CREATE POLICY "Public can read published experiences"
  ON experiences FOR SELECT TO anon USING (status = 'published');

-- ─── 2. Create Storage Bucket for Experiences ─────────────────────────────────
INSERT INTO storage.buckets (id, name, public)
VALUES ('experiences', 'experiences', true)
ON CONFLICT (id) DO NOTHING;

-- Drop storage policies if they exist to prevent duplication errors
DROP POLICY IF EXISTS "Public read access on experiences bucket" ON storage.objects;
DROP POLICY IF EXISTS "Service role full access on experiences bucket" ON storage.objects;

-- Allow public select/read access to the files in the experiences bucket
CREATE POLICY "Public read access on experiences bucket"
ON storage.objects FOR SELECT
TO anon
USING (bucket_id = 'experiences');

-- Allow service role to perform all actions in the experiences bucket
CREATE POLICY "Service role full access on experiences bucket"
ON storage.objects FOR ALL
TO service_role
USING (bucket_id = 'experiences')
WITH CHECK (bucket_id = 'experiences');
