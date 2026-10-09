# Data Model: User Journey Booking Flow, Media Assets and Homepage Localization Fixes

This feature utilizes existing data entities and does not introduce new schema tables.

## 1. Experience Schedule Schema (Supabase)

Consumed from the `experience_schedules` table to display upcoming dates and register user selections:

| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | Primary Key |
| `experience_slug` | String | Matches markdown experience filename (e.g., `canton-fair-business-experience`) |
| `start_date` | Date | Beginning of the trip |
| `end_date` | Date | Completion of the trip |
| `enrollment_deadline` | Date | Last date for booking |
| `capacity` | Integer | Max seats |
| `seats_remaining` | Integer | Remaining available seats |
| `price` | Numeric | Booking price |
| `currency` | String | Currency code (e.g., `USD`) |

---

## 2. Experience Entity (Local FS matter)

Parsed from markdown files in `content/experiences/*.md` and augmented with live schedule dates:

- `title`: Translated title.
- `shortDescription`: Summary text.
- `coverImage`: Path in public folder (e.g., `/images/experiences/canton-fair.jpg`).
- `dates`: Array of date options with booking availability.

---

## 3. Knowledge Article Entity (Local FS matter)

Parsed from markdown files in `content/knowledge/**/*.md`:

- `title`: Article title.
- `excerpt`: Summary.
- `body`: Content body.
- `coverImage`: Cover path in public folder.
