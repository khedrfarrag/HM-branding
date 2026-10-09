# Contract: Admin Experience Edit

**Feature**: 011-experience-schedule-fix  
**Serves**: US4, US5, FR-007 through FR-010, SC-004, SC-005

---

## Listing Page

### MUST

1. Each experience row includes an "Edit" link/button.
2. Edit navigates to `/admin/dashboard/experiences/{id}/edit`.
3. Delete action remains unchanged.

---

## Edit Page: `/admin/dashboard/experiences/[id]/edit`

### MUST

1. Server-load experience via `adminGetById(id)`; `notFound()` if missing.
2. Pre-fill all editable fields from database row.
3. Slug field MUST NOT appear in form (immutable).
4. Cover image file input is optional — existing image shown as preview when present.

### Editable fields

- `type` (7 valid `ExperienceType` values)
- `title_ar`, `title_en`
- `short_description_ar`, `short_description_en`
- `full_description_ar`, `full_description_en`
- `price`, `currency`
- `city_slug`
- `status`
- `cover_image` (file, optional)

---

## Server Action: `updateExperienceAction(id, FormData)`

### Validation

1. Parse with `ExperienceUpdateSchema` (Zod) — no slug field.
2. `type` MUST be one of `EXPERIENCE_TYPES` (7 values).
3. On failure: return `{ success: false, error, fieldErrors }` (FR-010).

### Image replace flow

```
IF new cover_image file provided AND size > 0:
  1. Upload new file via SupabaseStorageGateway
  2. adminUpdate with new cover_image + cover_image_id
  3. deleteFile(previous cover_image_id) if existed
ELSE:
  adminUpdate text fields only (preserve existing cover)
```

### Failure handling

| Failure point | Behavior |
|---------------|----------|
| Upload fails | Return error; no DB changes |
| DB update fails after upload | Delete newly uploaded file; return error |
| Storage delete of old file fails | Log error; do not fail the update |

### Revalidation paths

- `/admin/dashboard/experiences`
- `/ar/experiences/**`
- `/en/experiences/**`
- Specific detail path if slug/type known

---

## Create Form Type Alignment (US5, FR-009)

### MUST

1. Create form type dropdown shows exactly 7 options from `EXPERIENCE_TYPES`.
2. MUST NOT include `corporate`, `consultation`, or any invalid type.
3. Zod create schema validates type against same enum.

---

## Shared Component: `ExperienceForm`

### Props

```typescript
interface ExperienceFormProps {
  mode: "create" | "edit";
  initialValues?: Partial<ExperienceManageInput>; // edit mode
  experienceId?: string;                        // edit mode
  existingCoverUrl?: string | null;             // edit mode preview
  onSubmit: (formData: FormData) => Promise<ExperienceActionResult>;
}
```

Used by both `new/page.tsx` and `[id]/edit/page.tsx`.
