# Design System & Styling Primitives Rules

* **Filename**: `file:///g:/hossam%20mabrouk/.ai/design-system/styles-primitives.md`
* **Purpose**: Align styling implementation with Tailwind CSS v4 and head-free component frameworks.
* **Responsibility**: Enforcing design tokens consistency, typography scales, responsive layouts, and Radix/shadcn primitive integrations.
* **Dependencies**: [Constitution](file:///g:/hossam%20mabrouk/.specify/memory/constitution.md) (Design System Governance)
* **Update Frequency**: Low
* **AI Agents**: Frontend Developer, UI/UX Reviewer
* **Priority**: HIGH

---

## 1. Tailwind CSS v4 Theme Variables
* **Rule**: All styling values MUST utilize Tailwind CSS v4 variables.
* **Requirements**:
  * Direct hex/RGB colors, pixel-based spacing, or absolute widths are FORBIDDEN.
  * Colors must conform to the dark-mode theme slate-gold color profile.

## 2. Accessible Primitives Setup
* **Rule**: Interactive component bases MUST be initialized using Radix UI or shadcn/ui primitives.
* **Requirements**:
  * Keyboard navigation and ARIA attributes must be preserved on all interactive components.

## 3. Responsive Layout Grid Systems
* **Rule**: Layouts MUST use responsive container grids.
* **Requirements**:
  * Padding and gap tokens MUST match the global spacing scale.

## 4. Form Elements & Validation Styling
* **Rule**: Form fields MUST integrate with React Hook Form and Zod validation schemas.
* **Requirements**:
  * Focus, error, hover, and disabled states MUST be styled using custom Tailwind transitions.
