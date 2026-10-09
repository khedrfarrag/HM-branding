# Feature Specification: Navigation Fix, Admin Experience Management & Content Sync

**Feature Branch**: `010-nav-admin-content-sync`

**Created**: 2026-07-20

**Status**: Draft

**Input**: User description: "أول 3 صور الي فيها اسامي الصفحات مش بتفتح لما بخش عليها بتديني 404 not found — الصوره الرابعه الي فيها رحلة معرض كانتون انا مضفتهاش من الادمن انا عاوز الادمن هوا الي يكريت الاقسام دي — الصوره الخامسه دي الداش بورد في الادمن انا دخلت علي البوكنج الكلام الفلاتر مش متوافقه اعتقد مع اليوزر بورتال — كمان الصور انت انشاتها فعلا بس انت لسه مضفتهاش"

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Navigation Links No Longer Return 404 (Priority: P1)

A visitor navigates the website using the header menu or footer links. When they click on any listed page — such as "أخبار الشحن", "الخدمات", "قصص النجاح", or "تواصل معنا" — they reach a working, meaningful page instead of a 404 error. Broken links in the footer and header nav are completely eliminated.

**Why this priority**: Broken navigation is the highest-impact UX failure — it destroys trust and makes the site feel unfinished. This is the most visible issue to any visitor.

**Independent Test**: Click every link in the header mega-menu and footer from the Arabic homepage `/ar`. Every link must resolve to a live page without a 404 error.

**Acceptance Scenarios**:

1. **Given** a visitor on the homepage, **When** they click "قصص النجاح" in the Services footer column, **Then** they land on a working page (not a 404).
2. **Given** a visitor on the homepage, **When** they click "تواصل معنا" in the footer, **Then** they land on a working contact page.
3. **Given** a visitor on the homepage, **When** they click "أخبار الشحن" inside the Trade Intelligence mega-menu, **Then** they see a listing of shipping news articles.
4. **Given** a visitor on the homepage, **When** they click "التحميلات" under Knowledge, **Then** they land on a meaningful page (not a 404).
5. **Given** a visitor on the homepage, **When** they click "فحص الجودة" or "التحقق من الموردين" under Services, **Then** they land on a working service detail page.

---

### User Story 2 - Admin Creates and Manages Experiences (Priority: P1)

حسام (the site owner / admin) logs into the Admin Portal and creates a new experience from scratch — giving it a name, description, type, price, and uploading a cover image. The uploaded cover image file is automatically stored in a Supabase Storage bucket (`experiences`). That experience then automatically appears on the public-facing Experiences section of the website for visitors to browse and book, without any code changes. The admin can also edit the experience details, upload a replacement image (which automatically deletes the old file from Supabase Storage), or delete the experience entirely (which cleans up its stored cover image from storage).

**Why this priority**: Currently all experience content is hardcoded mock data that cannot be edited without a developer. This blocks the admin from managing the site independently. Enabling dynamic content creation and image management from the admin panel is a core operational requirement.

**Independent Test**: Log in as admin, create a new experience entry, upload an image file, verify it saves and uploads successfully, and verify it appears on the public `/ar/experiences` page. Edit the experience to upload a different image, verify the new image displays and the old one is removed from Supabase storage.

**Acceptance Scenarios**:

1. **Given** the admin is logged in, **When** they fill the "New Experience" form and select an image file to upload, **Then** the image is uploaded to the Supabase `experiences` bucket, the experience is saved in the database, and is immediately visible on the public experiences listing.
2. **Given** an experience exists in the database, **When** the admin edits the experience and uploads a new image, **Then** the new image is uploaded, the old image is deleted from Supabase Storage, and the experience details are updated.
3. **Given** the admin deletes an experience, **When** the action completes, **Then** the database record is deleted and its associated image file is deleted from Supabase Storage.
4. **Given** an experience exists in the admin panel, **When** a visitor opens its detail page, **Then** they see the admin-authored content and the uploaded cover image.
5. **Given** the admin creates an experience with a schedule slot, **When** a visitor clicks "احجز الآن", **Then** they are directed to the booking form pre-filled with that experience's details.

---

### User Story 3 - Admin Booking Dashboard Shows Correct Type Labels (Priority: P2)

When حسام reviews bookings in the Admin dashboard, the "Type" filter accurately reflects all booking categories in readable Arabic labels (not raw database values or mismatched strings). All existing bookings display with the correct type label, and filtering by type returns the right results.

**Why this priority**: Incorrect filter labels reduce the admin's ability to effectively manage bookings. A booking showing "جولة الصين الاستكشافية" as a raw type value instead of a clean category label causes confusion.

**Independent Test**: Open `/admin/dashboard/bookings`, inspect the Type filter buttons and each booking row's "الفئة" column — every type must display a clean, correct Arabic label (e.g., "استشارة", "تجربة ميدانية", "برنامج مؤسسي", "فعالية").

**Acceptance Scenarios**:

1. **Given** bookings exist with `target_type = "consultation"`, **When** viewing the bookings list, **Then** the type label shows "استشارة" not the raw value.
2. **Given** bookings exist with `target_type = "experience"`, **When** viewing the bookings list, **Then** the type label shows "تجربة ميدانية".
3. **Given** any booking has an unexpected or legacy `target_type` value, **When** it appears in the list, **Then** a fallback label is shown instead of a raw database string.
4. **Given** the admin clicks the "تجربة ميدانية" type filter, **When** the list refreshes, **Then** only experience-type bookings are shown.

---

### User Story 4 - Generated Images Appear on Correct Pages (Priority: P2)

The premium images that were generated (canton-fair, consultation, corporate, guangzhou, yiwu, importing) are properly linked and displayed on their corresponding pages. No broken image icons or placeholder boxes appear on Experience detail pages, China city pages, or Knowledge article pages.

**Why this priority**: Visual presentation is core to the premium brand identity. Missing images make pages look incomplete and unprofessional.

**Independent Test**: Navigate to `/ar/experiences/canton-fair-programs/canton-fair-business-experience`, `/ar/china/cities/guangzhou`, and `/ar/knowledge/importing/how-to-import-from-china` — every page must show its assigned cover image without any broken image icon.

**Acceptance Scenarios**:

1. **Given** a visitor opens the Canton Fair experience page, **When** the page loads, **Then** the experience cover image (`/images/experiences/canton-fair.jpg`) is displayed correctly.
2. **Given** a visitor opens the Guangzhou city page, **When** the page loads, **Then** the city image (`/images/china/guangzhou.jpg`) is displayed without error.
3. **Given** a visitor opens a knowledge article about importing, **When** the page loads, **Then** the article cover image (`/images/knowledge/importing.jpg`) is shown, not a broken 404 image.

---

### Edge Cases

- What happens when an admin creates an experience with no image? A default placeholder image must be shown, not a broken image icon.
- What happens if a visitor directly navigates to a removed experience's URL? A proper 404 / "not found" page is shown in the correct language.
- What happens if a navigation link is clicked on a slow connection? The page shows a loading state before content appears.
- What happens if a booking in the database has an unexpected `target_type` value not in the standard list? The label shows a readable fallback instead of a raw string.
- What happens if the image upload fails? The form displays a validation error message and retains all other user inputs.

---

## Requirements *(mandatory)*

### Functional Requirements

**Navigation Fixes:**
- **FR-001**: All header mega-menu links MUST resolve to an existing, functional page with content.
- **FR-002**: All footer column links MUST resolve to an existing page — broken links MUST be either fixed (by creating the target page) or removed from the navigation config.
- **FR-003**: "تواصل معنا" and "قصص النجاح" MUST each resolve to a dedicated, meaningful page.
- **FR-004**: Trade Intelligence sub-category links (e.g., "أخبار الشحن", "تحديثات الجمارك") MUST resolve to paginated listing pages showing articles of that type.
- **FR-005**: Service sub-pages for "فحص الجودة" and "التحقق من الموردين" MUST have content-backed detail pages.

**Admin Experience Management:**
- **FR-006**: The Admin Portal MUST include an "Experiences" management section allowing the creation, editing, and deletion of experiences.
- **FR-007**: Each experience entry MUST support: title (AR + EN), type (selected from valid experience types), description (AR + EN), price, currency, cover image, and published status.
- **FR-008**: The Admin experiences form MUST support drag-and-drop or file upload for the cover image, uploading the file directly to the Supabase `experiences` Storage bucket.
- **FR-009**: When updating an experience image, the application MUST automatically delete the previous cover image file from Supabase Storage.
- **FR-010**: When deleting an experience, the application MUST automatically delete its associated cover image file from Supabase Storage.
- **FR-011**: The public Experiences listing pages MUST dynamically read experience data from the admin-managed Supabase database.
- **FR-012**: The public Experience detail page MUST render admin-authored content (title, description, itinerary, price, cover image URL).

**Booking Filter & Label Fixes:**
- **FR-013**: The Admin Bookings page MUST display a human-readable, localized label for every `target_type` value — including "consultation", "experience", "corporate", and "event".
- **FR-014**: The Type filter buttons on the Admin Bookings page MUST show localized labels in the currently active admin language (AR/EN).
- **FR-015**: Bookings with legacy or unrecognized `target_type` values (such as "جولة الصين الاستكشافية") MUST display a fallback label instead of a raw database string.

**Image Wiring:**
- **FR-016**: The content data source (repository) for experiences MUST map each experience to its correct image path under `/images/experiences/` (for fallback mock data) or its Supabase Storage URL (for admin-created records).
- **FR-017**: The content data source for China city pages MUST map Guangzhou to `/images/china/guangzhou.jpg` and Yiwu to `/images/china/yiwu.jpg`.
- **FR-018**: The content data source for knowledge articles MUST map the importing article to `/images/knowledge/importing.jpg`.

### Key Entities *(include if feature involves data)*

- **Experience**: A structured content record representing a trip, program, or consulting engagement. Key attributes: id, slug, title (multilingual), type, description (multilingual), price, currency, cover_image (public URL), cover_image_id (storage path), itinerary steps, published status, created date.
- **Navigation Link**: A configured entry in the site navigation. Key attributes: label (multilingual), href (locale-relative path), visibility (header/footer), children links.
- **BookingRecord**: An existing entity. New attribute concern: `target_type` must always display as a human-readable localized label in admin UI.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Zero navigation links in the header or footer result in a 404 page — verified by clicking every menu item across both AR and EN locales.
- **SC-002**: Admin can create a new experience and upload a file which is successfully stored in Supabase Storage bucket and immediately visible on the public experiences page.
- **SC-003**: Replacing or deleting an experience cover image successfully cleans up the old file in Supabase Storage with zero dangling assets.
- **SC-004**: Every booking row in the Admin dashboard shows a clean Arabic or English type label — no raw `snake_case` or foreign-language database values visible.
- **SC-005**: All 6 generated images (canton-fair, consultation, corporate, guangzhou, yiwu, importing) display correctly on their assigned pages with zero broken image icons in the browser.
- **SC-006**: All public pages that previously returned 404 now return HTTP 200 with meaningful content, as verified by navigating to each URL.

---

## Assumptions

- The database migration SQL scripts must be manually executed in the Supabase Console SQL Editor by the administrator since there is no automatic migration CLI configured in the environment.
- The `experiences` bucket exists or will be created manually via Supabase Storage interface or SQL scripts, and set as Public.
- The experiences data source can be migrated from local file-based mock data to a Supabase-backed repository without changing the public-facing page components' interfaces.
- "تواصل معنا" (Contact) and "قصص النجاح" (Success Stories) pages can be implemented as simple, static pages with a contact form and testimonial display respectively — no complex backend logic required for v1.
- The Trade Intelligence sub-category hub pages (e.g., `/trade-intelligence/shipping-news`) will filter and display existing articles by type — no new article content creation is required.
- Service pages for "فحص الجودة" and "التحقق من الموردين" will reuse the existing service detail page template, requiring only content markdown files to be created.
- The six generated image files already exist in `public/images/` and only need their paths correctly referenced in content repositories.
