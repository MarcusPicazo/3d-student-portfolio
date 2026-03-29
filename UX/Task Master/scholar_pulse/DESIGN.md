# Design System Strategy: The Lucid Scholar

## 1. Overview & Creative North Star
This design system is built to transform the academic experience from a chaotic list of chores into a structured, high-end editorial journey. Moving beyond the "utility-first" look of traditional productivity tools, we embrace a Creative North Star defined as **"The Lucid Scholar."**

The aesthetic rejects the rigid, boxed-in nature of legacy software. Instead, it utilizes intentional asymmetry, overlapping surfaces, and a "breathable" layout. By prioritizing tonal depth over structural lines, we create an environment that feels both professional and intellectually stimulating—motivating students through visual clarity and a sophisticated "glass-and-paper" interface.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a sophisticated foundation of `surface` and `primary` tones, punctuated by vibrant academic category accents.

### The "No-Line" Rule
To achieve a premium feel, **1px solid borders are strictly prohibited** for sectioning or containment. Boundaries must be defined through:
- **Tonal Transitions:** Transitioning from `surface` to `surface-container-low`.
- **Negative Space:** Using the Spacing Scale to create clear, rhythmic separation.
- **Surface Nesting:** Placing a `surface-container-lowest` card on a `surface-container` background to create a natural, soft-edge lift.

### Surface Hierarchy & Layering
Treat the UI as a physical stack of semi-transparent materials.
- **Level 0 (Base):** `surface` (#faf8ff) — The primary canvas.
- **Level 1 (Sections):** `surface-container-low` (#f2f3ff) — Large layout blocks (e.g., a sidebar or a task category group).
- **Level 2 (Interaction):** `surface-container-highest` (#dee1f6) — Active states or nested sub-sections.

### The "Glass & Gradient" Rule
Floating elements (Modals, Navigation Bars, Quick-Add buttons) should utilize **Glassmorphism**. Apply a backdrop-blur (12px–20px) to a semi-transparent version of `surface-container-lowest`. 

To provide "soul" to the interface, use subtle linear gradients for primary actions, transitioning from `primary` (#4744e5) to `primary-container` (#6161ff) at a 135-degree angle.

---

## 3. Typography
We use a dual-font approach to balance academic authority with modern accessibility.

- **Display & Headlines (Plus Jakarta Sans):** These are the "Editorial" voice. Use `display-lg` and `headline-md` for high-level summaries and subject titles. The generous x-height of Plus Jakarta Sans provides a friendly, motivating character.
- **Body & Labels (Inter):** The "Functional" voice. Inter’s clinical precision ensures that complex task lists and deadlines remain legible at small sizes (`body-sm` and `label-md`).

**Hierarchy Principle:** 
Always maintain a high contrast between headlines and body text. A `headline-sm` title should be paired with a `body-sm` metadata tag to create an intentional, curated scale that mirrors high-end magazine layouts.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than artificial structural markers.

- **Ambient Shadows:** When an element must float (e.g., a "New Task" FAB), use an extra-diffused shadow. 
  - *Value:* `0px 12px 32px`
  - *Color:* `on-surface` at 6% opacity. This creates a natural "ambient occlusion" look rather than a dated drop shadow.
- **The Ghost Border Fallback:** If a layout requires a boundary for accessibility (e.g., a high-density table), use a "Ghost Border." Apply the `outline-variant` (#c7c4d8) at **15% opacity**. Never use 100% opaque lines.
- **Layering Principle:** Place a `surface-container-lowest` (#ffffff) card inside a `surface-container-low` (#f2f3ff) background. This creates a soft, tactile "pop" that guides the eye without visual noise.

---

## 5. Components

### Buttons
- **Primary:** `primary` background, `on-primary` text. Use `rounded-full` (9999px) for a mobile-first, friendly feel.
- **Secondary:** `secondary-container` background. Use `rounded-lg` (1rem) to distinguish from primary actions.
- **Tertiary/Ghost:** No background; `primary` text. Use for low-priority "Cancel" or "More Info" actions.

### Task Cards & Monday-style Tables
- **Table Rows:** Forbid divider lines. Instead, use a subtle background shift to `surface-container-lowest` on hover/active.
- **Subject Chips:** Use vibrant accents (`tertiary_container` for high-priority or custom category tokens) with `label-md` typography.
- **Progress Bars:** Utilize `primary` for the fill and `surface-variant` for the track. Add a subtle inner-shadow to the track for a "carved" look.

### Input Fields
- **Container:** `surface-container-low`.
- **Active State:** Change background to `surface-container-lowest` and apply a 2px `surface-tint` Ghost Border.
- **Error State:** Use `error` text and an `error-container` background; avoid red outlines to keep the interface soft.

### Subject Pill-Clouds (Custom Component)
A grouping of subject tags (e.g., "Math", "History") using the `secondary_fixed` and `tertiary_fixed` palettes. These should be `rounded-full` and use `label-md` bold, creating a "cloud" of colorful metadata at the top of the dashboard.

---

## 6. Do’s and Don’ts

### Do:
- **Use Vertical Rhythm:** Rely on the Spacing Scale (specifically `8` and `12` units) to separate major sections.
- **Embrace Asymmetry:** Align high-level headlines to the left while keeping metadata right-aligned to create a sophisticated, unbalanced-but-stable layout.
- **Prioritize Breathing Room:** If a screen feels cluttered, increase the padding using the `16` or `20` spacing tokens.

### Don't:
- **Don’t use 100% Black:** Always use `on-background` (#171b2a) for text to maintain a premium, softer contrast.
- **Don’t use Hard Corners:** Avoid `rounded-none`. Even the most "professional" elements should have at least a `sm` (0.25rem) radius.
- **Don’t use Grid Dividers:** Never use horizontal or vertical lines to separate tasks. Use the `surface-container` tiers to create "buckets" of content instead.