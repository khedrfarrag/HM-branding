# Research: User Journey Booking Flow, Media Assets and Homepage Localization Fixes

## 1. Booking Link Integration on Experience Details Page

### Decision
Use a lightweight URL query parameter approach to forward selected schedule details from the experience page to the booking page.
For example: `/booking/experience/[slug]?date=YYYY-MM-DD`.

### Rationale
- **Next.js Best Practices**: Keeps pages fully server-side-rendered or statically optimized.
- **Simplicity**: No complex global client-side state is required to share the selected date between `/experiences/...` and `/booking/...`.
- **Bookmarkable**: Visitors can share a link directly with a pre-selected date.

### Alternatives Considered
- **Client-side State (React Context/Zustand)**: Rejected because it adds unnecessary complexity for a simple redirection action and breaks if the user refreshes the booking page.

---

## 2. Image Provisioning Strategy

### Decision
Generate premium aesthetic images using AI, compress them, and store them directly in the workspace at `public/images/`.

### Rationale
- **Self-Contained**: Prevents external image dependencies or hot-linking issues.
- **Aesthetic Consistency**: Allows us to specify the style (e.g., professional dark-mode branding, warm gold/sand colors, luxury executive style) to match the Hussam Mabrouk website look.
- **Speed**: Local file delivery is optimized automatically by Next.js `<Image>` component.

### Alternatives Considered
- **Unsplash/Stock Photo Hotlinks**: Rejected because links can break, they are slower to load, and it is hard to find consistent aesthetics.

---

## 3. Localization Refactoring for Hardcoded JSX

### Decision
Migrate all hardcoded ternary strings inside `HomePage.tsx` to `ar.json` and `en.json` dictionaries under structured namespaces (e.g., `footer.quickLinks`, `global.mapTitle`).

### Rationale
- **Unified Dictionary**: Keeps translation keys in one place.
- **Encoding Issues**: Raw Arabic characters inline in TypeScript files can occasionally suffer from encoding degradation (showing as garbled characters like `╪د┘╪ص┘è╪ر`). Storing them in UTF-8 JSON dictionaries completely prevents this.

### Alternatives Considered
- **Keeping Inline Ternaries but Fixing Encoding**: Rejected because it violates our localization standard and leaves translations scattered.
