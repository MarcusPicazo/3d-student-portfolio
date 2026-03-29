# Design System Strategy: The Digital Epicurean

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Epicurean."** 

We are moving away from the "utility-first" look of standard recipe apps and toward a high-end, editorial experience that feels like a living cookbook. This system rejects the rigid, boxy constraints of traditional mobile grids in favor of **Organic Asymmetry** and **Tonal Depth**. 

By utilizing generous white space (inspired by Apple’s premium minimalism) and overlapping elements, we create a sense of movement. The goal is to make the AI feel like a professional sous-chef—intelligent, clean, and unobtrusive—where the interface disappears to let the vibrant photography of food take center stage.

---

## 2. Colors & Surface Philosophy
We utilize a sophisticated palette that balances the clinical precision of AI with the warmth of a modern kitchen.

### The Palette
- **Primary (The Freshness):** `primary (#006d36)` and `primary_container (#4ade80)`. Use these to signify life, health, and the "start" of a culinary journey.
- **Secondary (The Heat):** `secondary (#944a00)` and `secondary_container (#fd933d)`. Reserved strictly for primary Call-to-Actions (CTAs) and "Active Cooking" states to stimulate appetite and urgency.
- **Surface Neutrals:** A range from `surface_container_lowest (#ffffff)` to `surface_dim (#d8dadc)`.

### The "No-Line" Rule
**Borders are strictly prohibited for sectioning.** To separate a recipe category from a featured hero, use background shifts. For example, a `surface_container_low` card should sit on a `surface` background. If you feel the need for a line, increase your spacing scale (e.g., move from `spacing-4` to `spacing-8`) instead.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **Base Layer:** `surface` (#f7f9fb).
- **In-Page Sections:** `surface_container_low`.
- **Interactive Cards:** `surface_container_lowest` (Pure White).
By nesting a white card inside a soft gray container, we create "natural lift" without the visual clutter of heavy shadows.

### The "Glass & Gradient" Rule
For floating navigation bars or high-priority modal overlays, use **Glassmorphism**. Apply `surface_container_lowest` at 80% opacity with a `20px` backdrop-blur. 
*Director's Tip:* Apply a subtle linear gradient to the `primary` button—moving from `primary` to `primary_container` at a 135-degree angle—to give the button a tactile, "clickable" soul.

---

## 3. Typography: The Editorial Voice
We use a dual-font pairing to balance technical intelligence with approachable warmth.

- **The Voice (Manrope):** Used for `display` and `headline` tiers. Manrope’s geometric yet soft terminals feel modern and "tech-forward."
- **The Engine (Inter):** Used for `title`, `body`, and `label` tiers. Inter provides maximum legibility for ingredient lists and complex cooking instructions.

**Intentional Scale:** Use `display-lg` (3.5rem) for hero titles (e.g., "Good Morning, Chef") but immediately drop to `body-md` for descriptions. This high-contrast jump creates an editorial, "magazine" feel that guides the eye.

---

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering** rather than structural geometry.

- **The Layering Principle:** Avoid elevation levels 1-5. Instead, use "stacking." A `surface_container_highest` element serves as a "pressed" state, while `surface_container_lowest` serves as a "raised" state.
- **Ambient Shadows:** For floating elements (like a 'Start Cooking' FAB), use a custom shadow: 
  - `Y: 20px, Blur: 40px, Color: on_surface @ 4% opacity`. 
  - This mimics a soft kitchen light overhead rather than a harsh digital drop-shadow.
- **The "Ghost Border" Fallback:** If a layout requires a border (e.g., an input field), use `outline_variant` at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Cards
- **Construction:** Use `rounded-lg` (2rem) for main recipe cards and `rounded-xl` (3rem) for hero banners.
- **Rule:** Forbid divider lines. Use `spacing-4` (1.4rem) of vertical white space to separate the recipe title from the prep time.

### Buttons
- **Primary:** `secondary_container` background with `on_secondary_container` text. `rounded-full` (9999px) for a friendly, Apple-inspired feel.
- **Ghost (Tertiary):** No background. Use `primary` text for "View All" or "Edit" actions.

### Ingredient Chips
- **Styling:** Use `surface_container_high` with `rounded-sm` (0.5rem). 
- **Interaction:** On selection, transition to `primary_container` background. These should feel like tactile "tabs" in a physical filing system.

### AI Input Fields
- **Styling:** `surface_container_low` background, no border.
- **Focus State:** A subtle 2px glow of `primary_fixed_dim` at 30% opacity. Avoid heavy focus rings.

### The "Instruction" List
- **Logic:** Never use standard dividers. Each step in a recipe should be housed in its own `surface_container_lowest` card with a `spacing-3` gap, creating a clear, modular mental model for the user.

---

## 6. Do's and Don'ts

### Do
- **Do** use `rounded-xl` for containers that hold food imagery; it frames the photo as an "art piece."
- **Do** utilize `spacing-12` or `spacing-16` for top-level section margins to create a premium, unhurried atmosphere.
- **Do** use `primary_fixed_dim` for "Verified" or "Healthy" tags to provide a soft, professional endorsement.

### Don't
- **Don't** use pure black (#000000) for text. Always use `on_surface` (#191c1e) to keep the contrast "soft-tech."
- **Don't** use 1px dividers to separate ingredients. Use the `spacing-2` scale to create clear, breathable groupings.
- **Don't** use "Alert Red" for errors if avoidable. Use `error_container` with a low-opacity `error` text to keep the user calm in the kitchen.