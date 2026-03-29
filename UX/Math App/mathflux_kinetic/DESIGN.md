# Design System Specification: High-Tech Mathematical Precision

## 1. Overview & Creative North Star: "The Obsidian Laboratory"
The Creative North Star for this design system is **"The Obsidian Laboratory."** We are moving away from the "utility app" aesthetic and toward a high-end, scientific instrument that feels both powerful and ethereal. This system rejects the flat, boxy layout of traditional calculators in favor of an editorial, layered experience where mathematical formulas breathe within a deep, infinite space.

To break the "template" look, we utilize **intentional asymmetry**. Primary calculation results should feel weighted and dominant, while secondary functions are tucked into nested, glassmorphic trays. We use overlapping elements—such as a glass floating action button partially obscuring a background glow—to create a sense of three-dimensional depth and sophisticated intentionality.

---

## 2. Colors: Depth and Luminosity
Our palette is built on a foundation of deep charcoal, punctuated by high-energy accents that simulate the glow of a high-tech HUD.

### Palette Strategy
*   **Surface Foundation:** `surface` (#131313) is our void. All hierarchy is built upwards from here.
*   **Accents:** `primary` (#ADC6FF / Electric Blue) represents logic and inputs. `secondary` (#E8B3FF / Vivid Purple) represents variables and results.
*   **The "No-Line" Rule:** Explicitly prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. For example, a keypad sits on `surface-container-low`, while the individual keys utilize `surface-container-high`.
*   **Surface Hierarchy & Nesting:** Use the `surface-container` tiers to create "nested" depth.
    *   *Level 0:* `surface` (The infinite background).
    *   *Level 1:* `surface-container-low` (Secondary content areas).
    *   *Level 2:* `surface-container-high` (Active calculation cards).
*   **The "Glass & Gradient" Rule:** Floating modals and high-priority overlays must use `surface-variant` with a `backdrop-blur` of 20px-30px. 
*   **Signature Textures:** For primary CTAs (like "Solve"), use a linear gradient: `primary` (#ADC6FF) to `primary-container` (#4B8EFF) at a 135-degree angle.

---

## 3. Typography: Editorial Authority
We pair the technical precision of **Space Grotesk** for mathematical displays with the supreme readability of **Inter** for UI controls.

*   **Display (Space Grotesk):** Large-scale formula results. `display-lg` (3.5rem) should be used for the final answer, creating a "hero" moment for the math.
*   **Headline (Space Grotesk):** Used for section headers like "Graphing" or "History." These should be set with tight letter-spacing (-0.02em) to feel premium.
*   **Title (Inter):** Sub-headers and card titles. Use `title-md` (1.125rem) with medium weight.
*   **Body (Inter):** Explanatory text and step-by-step logic. `body-md` (0.875rem) is the workhorse.
*   **Label (Inter):** Used for keys and small metadata. `label-md` (0.75rem) should always be in All Caps when used on keys to evoke a scientific instrument feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too heavy for this aesthetic. We achieve lift through light, not darkness.

*   **The Layering Principle:** Stack `surface-container-lowest` cards on a `surface-container-low` section. This creates a soft, natural "recessed" or "elevated" look without a single stroke being drawn.
*   **Ambient Shadows:** For floating elements (like a graphing tooltip), use a shadow with a blur of `32px`, an opacity of `8%`, and a color tinted with `primary` (#ADC6FF). This simulates the light emitted from the screen.
*   **The "Ghost Border" Fallback:** If a container sits on a background of the same color, use a "Ghost Border": `outline-variant` at 15% opacity. Never use 100% opaque borders.
*   **Glassmorphism:** Use `surface-bright` at 40% opacity with a heavy background blur for any element that moves over the main scroll view. This ensures the "Obsidian" background bleeds through, softening the layout.

---

## 5. Components: Scientific Primitives

### Buttons
*   **Primary (Action):** Gradient fill (`primary` to `primary-container`), `md` (1.5rem) corner radius. High-contrast `on-primary` text.
*   **Secondary (Function):** `surface-container-highest` background, no border.
*   **Tertiary (Utility):** Ghost style. No background, `primary` colored text.

### The Keypad (Custom Component)
*   **Grid:** Avoid standard 1px lines. Use `8` (2rem) spacing between keys.
*   **Keys:** `surface-container-high` backgrounds with `md` (1.5rem) corner radius. On press, transition to `surface-bright`.

### Scientific Input Fields
*   **Styling:** Forbid the standard "box" look. Use a `surface-container-low` background with a `primary` (Electric Blue) accent line only at the bottom (2px). 
*   **States:** When active, the background should shift to `surface-container-high` to indicate focus.

### Cards & Lists
*   **Rule:** Forbid divider lines. Use `10` (2.5rem) of vertical white space to separate history items. 
*   **Container:** Use `surface-container-low` with an `xl` (3rem) corner radius for a soft, modern iOS-inspired look.

### Formula Chips
*   **Selection:** `secondary-container` background with `on-secondary-container` text. Use `full` (9999px) corner radius for a pill shape.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use extreme rounded corners (`xl`: 3rem) for main containers to contrast the "sharp" mathematical logic.
*   **Do** use `primary` and `secondary` colors to categorize types of math (e.g., Blue for Algebra, Purple for Calculus).
*   **Do** ensure a minimum contrast ratio of 7:1 for all mathematical symbols.

### Don’t
*   **Don’t** use 1px solid borders. It breaks the "Obsidian Laboratory" immersion.
*   **Don’t** use pure black (#000000). Use the `surface` (#131313) to allow for subtle depth layering.
*   **Don’t** use standard "drop shadows." Use ambient, tinted glows that feel like light-emissions.