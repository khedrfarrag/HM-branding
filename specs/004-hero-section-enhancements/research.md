# Research: Hero Section Enhancements

This document captures the research, technical decisions, and best practices for the dynamic typing headline and the interactive circular profile with floating social media badges.

## 1. Dynamic Typing Headline Animation

### Research Findings & Technical Approach
A typing animation should feel fluid and not cause Cumulative Layout Shift (CLS) as text length changes.
To prevent layout shifts:
- We will enclose the typing/cycling header text in a container with a stable minimum height (`min-h-[120px]` or similar depending on viewport size).
- The transition between sentences will be managed by a typing/deleting cycle or a fade-and-reveal animation. Since the user requested "typing style", we can use a character-by-character render with a custom hook or Framer Motion variants.
- Using Framer Motion for character animation:
  - We can split the string into an array of characters.
  - Animate each character's opacity/scale sequentially using `staggerChildren`.
  - Introduce an erase sequence or simple cross-fade before transitioning to the next phrase.

### Alternatives Evaluated
- **Pure CSS Typing Animation**: Uses the CSS `ch` unit and `steps()` function. Rejected because it only works well with fixed-width (monospace) fonts and doesn't handle multiple multi-line sentences or translations dynamically.
- **Third-party Libraries (e.g., react-type-animation)**: Very good, but introduces an extra dependency which goes against our strict package selection rules (Rule 10) unless necessary. We can build a lightweight custom typing component using Framer Motion or React hooks in ~40 lines of code.

### Decision
Build a custom `<TypingHeadline>` React Client Component using Framer Motion to animate the text. Use a fixed `min-h` height block to prevent any layout shifting.

---

## 2. Interactive Circular Profile with Floating Social Badges

### Research Findings & Technical Approach
The user wants a circular image (`personal-img.png`) with interactive, floating social media badges (LinkedIn, X/Twitter, Email, WhatsApp) floating around/on it.
To achieve this:
- **Circular Image**: Wrap the Next.js `<Image>` in a `relative rounded-full overflow-hidden border border-glass` container. Add a premium radial glow underneath using an absolute div with `bg-gradient-to-br from-gold/20 to-blue-mid/20 blur-xl`.
- **Floating Motion**: Position each social button absolutely around the circle. Each button will have a different angle ($\theta$) and radius ($R$) from the center:
  - LinkedIn: Top-Right (e.g., `top-4 right-4`)
  - WhatsApp: Bottom-Right (e.g., `bottom-8 right-0`)
  - Email: Top-Left (e.g., `top-12 left-0`)
  - X/Twitter: Bottom-Left (e.g., `bottom-4 left-4`)
- **Float Animation**: Use Framer Motion's `animate` property to make them drift slightly. We can animate the `y` and `x` offsets using a `yoyo` transition (infinite cycle) with slightly staggered durations (e.g., 3s, 3.5s, 4s, 4.5s) and custom easing functions.
- **Hover Interaction**: Hovering over a badge triggers:
  1. Enlargement (`scale: 1.15`).
  2. Distinct background color matching the brand color (LinkedIn blue, WhatsApp green, X dark grey, Email gold).
  3. Displays a small tooltip with a localized title.
  4. Subtle magnetic drag effect (optional, using Framer Motion `drag` or simple spring on mouse move).

### Decision
Create a `<FloatingSocials>` Client Component that wraps the circular image and places the absolute-positioned, floating badges with staggered floating durations. Add tooltips using HTML title attributes or custom clean CSS tooltips.
