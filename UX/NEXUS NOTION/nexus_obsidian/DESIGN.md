# The Design System: Digital Zen & Precision

## 1. Overview & Creative North Star: "The Silent Architect"
This design system is built on the philosophy of **The Silent Architect**. It is designed to recede into the background, providing a high-fidelity structure for personal organization without the visual noise of traditional productivity tools. 

Moving beyond "standard" dark mode, we reject the rigid, boxed-in layouts of the past. Instead, we embrace **Intended Asymmetry** and **Atmospheric Depth**. By utilizing high-contrast typography scales and overlapping translucent layers, we create a workspace that feels like a premium physical desk—clean, intentional, and expensive. The "template" look is replaced by an editorial experience where negative space is as functional as the data itself.

---

## 2. Colors & Tonal Depth
Our palette is rooted in `surface` (#0E0E0E) to ensure absolute focus. We avoid the "flat" look by utilizing a monochromatic range of containers that simulate physical height.

### The Palette
- **Primary Accent:** `primary` (#A5A5FF) — A soft, luminous violet used for focus and intent.
- **Surface Base:** `surface` (#0E0E0E) — The infinite canvas.
- **The Accents:** `tertiary` (#FFA1D5) — A sophisticated rose for secondary highlights or categorization.

### The "No-Line" Rule
**Standard 1px solid borders are strictly prohibited for sectioning.** 
Structural boundaries must be defined through background shifts. To separate a sidebar from a main feed, transition from `surface` to `surface-container-low`. To highlight a focused task, place it in a `surface-container-high` container.

### Surface Hierarchy & Nesting
Treat the UI as a stack of fine materials.
- **Level 0 (Base):** `surface` (#0E0E0E)
- **Level 1 (Sections):** `surface-container-low` (#131313)
- **Level 2 (Cards/Modules):** `surface-container` (#1A1919)
- **Level 3 (Popovers/Modals):** `surface-container-highest` (#262626)

### The "Glass & Gradient" Rule
For floating elements (Command Palettes, Context Menus), use **Glassmorphism**. Apply `surface-container-highest` at 70% opacity with a `20px` backdrop-blur. 
*Signature Polish:* Main CTAs should not be flat. Apply a subtle linear gradient from `primary` (#A5A5FF) to `primary-dim` (#6462EC) at a 135-degree angle to give the button "soul."

---

## 3. Typography: Editorial Authority
We use **Inter** as our typographic backbone. The system relies on extreme scale variance to create a sense of hierarchy without needing heavy lines.

- **Display (The Statement):** Use `display-lg` (3.5rem) for empty states or welcome headers. Tighten letter spacing (-0.04em) for a high-end editorial feel.
- **Headline (The Structure):** `headline-sm` (1.5rem) defines major modules.
- **Body (The Work):** `body-md` (0.875rem) is the workhorse. Use a generous line height (1.6) to ensure long-form notes feel breathable.
- **Labels (The Metadata):** `label-sm` (0.6875rem) in `on-surface-variant` (#ADAAAA) for timestamps and tags. Use `uppercase` with `0.05em` letter spacing to maintain authority at small sizes.

---

## 4. Elevation & Depth
In this system, depth is a function of light, not lines.

- **The Layering Principle:** Place a `surface-container-lowest` card atop a `surface-container-low` background. This creates a "soft pocket" effect where the content feels recessed and protected.
- **Ambient Shadows:** For "floating" objects (Modals), use a custom shadow: `0px 24px 48px rgba(0, 0, 0, 0.4)`. The shadow must feel like an atmospheric glow, not a dark smudge.
- **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline-variant` (#484847) at **15% opacity**. It should be felt, not seen.
- **Tactile Transitions:** Interaction states (Hover/Active) should move between `surface-container` tiers (e.g., a card shifts from `surface-container` to `surface-container-high` on hover).

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-dim`), `8px` roundedness, white text. No border.
- **Secondary:** `surface-container-highest` fill with `on-surface` text. Subtle and integrated.
- **Tertiary:** Ghost style. No background, `primary` text. Use for low-emphasis actions like "Cancel."

### Input Fields
- **Style:** Never use a 4-sided box. Use a `surface-container-low` background with a `2px` bottom-only border in `outline-variant` that illuminates to `primary` on focus.
- **Padding:** Use spacing scale `4` (1rem) for internal horizontal padding.

### Cards & Lists
- **The Divider Ban:** Lists must not use horizontal lines. Use spacing scale `6` (1.5rem) to separate items. 
- **The "Focus" State:** Active list items should use a subtle `surface-container-highest` background with a `2px` vertical pill of `primary` color on the far left.

### Glass Modals
- **Context Menus:** `surface-container-highest` at 80% opacity, `xl` (1.5rem) roundedness, and a `1px` Ghost Border (10% opacity).

---

## 6. Do’s and Don’ts

### Do
- **Embrace White Space:** If you think a section needs more breathing room, add more. Use spacing `12` or `16` for major section breaks.
- **Use Tonal Stepping:** Use the `surface-container` tiers to guide the eye from the background to the most important interactive element.
- **Subtle Motion:** All transitions (hover, modal entry) should use a `cubic-bezier(0.16, 1, 0.3, 1)` easing for a "snappy yet weighted" feel.

### Don’ts
- **No Pure Black:** Avoid `#000000` for backgrounds unless it is the `surface-container-lowest` for deep nesting. Use `surface` (#0E0E0E) to maintain "texture."
- **No Harsh Borders:** Never use a border with 100% opacity. It breaks the "atmospheric" illusion.
- **No Generic Icons:** Avoid thick, bubbly icons. Use 1pt stroke-weight, thin-line icons to match the precision of the Inter typeface.