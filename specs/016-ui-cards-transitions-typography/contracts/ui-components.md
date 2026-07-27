# UI Components Contract: UI Cards Images, Mobile Transitions & Gradient Headers

## Component Specifications

### 1. `SectionHeader` Component

```typescript
interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "right" | "left";
  locale: "ar" | "en";
  className?: string;
}
```

- **Behavior**:
  - Renders `badge` in gold uppercase tracking.
  - Renders `title` with CSS class `bg-gradient-to-r from-[#C7A15C] via-[#F3E5AB] to-[#C7A15C] bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent`.
  - Supports RTL layout when `locale === "ar"`.

### 2. `HeroTypewriter` Component

```typescript
interface HeroTypewriterProps {
  phrases: string[];
  locale: "ar" | "en";
  typingSpeed?: number;   // ms per character (default 30)
  displayDuration?: number; // ms to display full text (default 3000)
}
```

- **Behavior**:
  - Animates characters sequentially for current phrase.
  - Pauses for `displayDuration` once typed.
  - Deletes or fades smoothly before starting next phrase.
  - Ensures responsive height reservation to prevent mobile CLS.

### 3. `ImageCard` Component (Sectors & Services)

```typescript
interface ImageCardProps {
  number: string;
  title: string;
  categoryOrDesc: string;
  bgImage: string;
  tags?: string[];
  locale: "ar" | "en";
}
```

- **Behavior**:
  - Displays `bgImage` as background image with `object-cover`.
  - Renders dark overlay gradient (`from-black/90 via-black/75 to-black/30`).
  - Scales image slightly on hover (`group-hover:scale-105 transition-transform duration-500`).
  - Ensures WCAG AA text legibility over any background picture.
