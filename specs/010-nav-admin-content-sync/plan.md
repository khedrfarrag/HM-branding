# Implementation Plan: Navigation Fix, Admin Experience Management & Content Sync

**Branch**: `010-nav-admin-content-sync` | **Date**: 2026-07-20 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/010-nav-admin-content-sync/spec.md)

---

## Summary

This plan is updated to support direct **file uploads** for the cover image of experiences. Instead of entering raw image text paths, the admin can upload image files directly to a Supabase Storage bucket (`experiences`). Old image assets are cleaned up from storage upon replacement or experience deletion.

Additionally, since migrations are not automatically applied to the database, a manual database SQL execution step is defined in this plan to resolve the PostgREST table cache error.

---

## Technical Context

**Language/Version**: TypeScript 5 / Next.js 15 (App Router) / React 19

**Primary Dependencies**: Next.js App Router, Supabase (PostgreSQL + Storage), React Hook Form, Zod, Tailwind CSS v4

**Storage**: Supabase (PostgreSQL) for content records, Supabase Storage (`experiences` bucket) for uploaded image assets.

---

## Proposed Changes

### Database & Storage Schema

#### [MODIFY] [20260720000000_create_experiences.sql](file:///g:/hossam%20mabrouk/supabase/migrations/20260720000000_create_experiences.sql)
Update the SQL script to:
1. Create the `experiences` table with a `cover_image_id` column (for the storage file key).
2. Create the `experiences` bucket in Supabase Storage.
3. Configure RLS policies for both the table and the storage bucket objects.

> [!IMPORTANT]
> **Manual Step Required**: Copy the contents of this file and execute them in the **SQL Editor** of your Supabase Console. This will create the table and storage bucket and resolve the PostgREST cache error.

### Storage Integration

#### [NEW] [supabase.ts](file:///g:/hossam%20mabrouk/src/integrations/storage/supabase.ts)
Implement `SupabaseStorageGateway` complying with `IStorageGateway`. It will handle file uploads and file deletions using the Supabase Admin client (`supabaseAdmin`).

### Admin Server Actions & Forms

#### [MODIFY] [manage-experiences.ts](file:///g:/hossam%20mabrouk/src/features/admin/actions/manage-experiences.ts)
1. Read file upload data (`FormData`) for `cover_image` instead of raw text path.
2. Upload the file to Supabase Storage via `SupabaseStorageGateway`.
3. Save the returned public URL and the storage file path (`cover_image_id`) to the database.
4. On deletion of an experience, fetch its `cover_image_id` and call `storageGateway.deleteFile` to delete it.

#### [MODIFY] [new/page.tsx](file:///g:/hossam%20mabrouk/src/app/admin/(protected)/dashboard/experiences/new/page.tsx)
1. Change the cover image field to a file upload input (`<input type="file" accept="image/*" />`).
2. Submit the form using standard multi-part `FormData` to the Server Action.

---

## Verification Plan

### Manual Verification
1. Execute the SQL script in Supabase Console SQL Editor.
2. Verify table `experiences` is created successfully.
3. Open Admin Panel, add a new experience, upload an image file.
4. Verify the experience appears on the public list and the uploaded image loads correctly.
5. Delete the experience, verify it is removed from the database and the image file is deleted from Supabase Storage.
