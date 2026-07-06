# Interactive Motion & 3D Rendering Rules

* **Filename**: `file:///g:/hossam%20mabrouk/.ai/motion/interactive-3d.md`
* **Purpose**: Standardize premium animation logic, performance constraints, and WebGL elements.
* **Responsibility**: Keeping rendering performance above 60 FPS while enabling premium 3D/2D animation effects.
* **Dependencies**: [Constitution](file:///g:/hossam%20mabrouk/.specify/memory/constitution.md) (Motion & Animation Governance)
* **Update Frequency**: Medium
* **AI Agents**: Motion Specialist, Performance Auditor
* **Priority**: MEDIUM

---

## 1. Framer Motion Layout Transitions
* **Rule**: Screen transitions and UI reveals MUST use spring curves or ease-out curves (duration 200ms - 600ms).
* **Requirements**:
  * Utilize Framer Motion's `layoutId` for structural continuity across page layout updates.

## 2. React Three Fiber (R3F) Canvas Optimization
* **Rule**: 3D elements inside WebGL canvases MUST be optimized to run at 60 FPS minimum on mobile devices.
* **Requirements**:
  * Geometries and materials MUST be reused; asset loading must use Drei's `useGLTF.preload`.

## 3. Fallbacks & Capability Checks
* **Rule**: The interface MUST verify WebGL and hardware acceleration capabilities before rendering 3D scenes.
* **Requirements**:
  * A 2D optimized layout fallback MUST be served if WebGL is unavailable or performance drops.

## 4. Accessibility & Reduced Motion
* **Rule**: Layout animations MUST support `prefers-reduced-motion` settings.
* **Requirements**:
  * Scale down, fade-only, or static configurations MUST be rendered automatically for these users.
