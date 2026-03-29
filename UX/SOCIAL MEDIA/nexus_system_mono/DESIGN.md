# Design System Specification: The Kinetic Professional

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is built for the next generation of high-impact professionals. It moves beyond the "standard social network" template to embrace an editorial, high-end aesthetic. 

**The Creative North Star: The Digital Curator.** 
The interface should feel like a premium physical workspace—calm, organized, and expensive. We achieve this by breaking the rigid, boxed-in layouts of traditional social media. By utilizing intentional asymmetry, overlapping surfaces, and extreme typographic contrast (Display vs. Label), we create a sense of architectural depth. We don't just "show" content; we "exhibit" it.

---

## 2. Color & Surface Theory
We reject the 1px gray border. Professionalism is not defined by lines, but by the sophisticated management of light and tonal transitions.

### The Color Palette (Material Token Mapping)
*   **Primary Accent:** `primary` (#0058bc) — Use for critical actions and high-intent states.
*   **The Action Gradient:** For primary CTAs, transition from `primary` (#0058bc) to `primary_container` (#0070eb) at a 135° angle to add "soul" to interactive elements.
*   **Neutral Foundation:** `surface` (#f9f9fe) and `surface_container_lowest` (#ffffff).

### The "No-Line" Rule
Explicitly prohibit 1px solid borders for sectioning content. Boundaries must be defined solely through background color shifts.
*   **Example:** A `surface_container_low` sidebar sitting against a `surface` main feed. The shift in tone is the boundary.

### Glassmorphism & Tonal Nesting
Treat the UI as a series of physical layers. 
*   **The Glass Rule:** For floating headers and navigation bars, use semi-transparent `surface_container_highest` with a `backdrop-blur` of 20px. This allows the content to bleed through, making the UI feel integrated rather than "pasted on."
*   **Nesting:** Place a `surface_container_lowest` card inside a `surface_container_low` section to create a soft, natural lift.

---

## 3. Typography: Editorial Authority
The hierarchy is designed to feel like a high-end tech journal. We pair the structural precision of **Inter** with the expressive, wide stance of **Manrope**.

| Role | Token | Font | Size | Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Manrope | 3.5rem | Bold, oversized statements for hero sections. |
| **Headline** | `headline-md` | Manrope | 1.75rem | Section headers; high-contrast against body text. |
| **Title** | `title-md` | Inter | 1.125rem | Profile names, card titles, emphasis. |
| **Body** | `body-md` | Inter | 0.875rem | Standard reading text; high legibility. |
| **Label** | `label-sm` | Inter | 0.6875rem | Metadata, timestamps, and utility links. |

*   **Tracking:** Set `display` tokens to -0.02em for a "tighter," more premium feel.
*   **Contrast:** Use `on_surface_variant` (#414755) for secondary information to create a clear visual path for the eye.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are a fallback, not a standard. We create depth through "The Layering Principle."

*   **Ambient Shadows:** When a floating element (like a Modal or FAB) requires lift, use a diffuse shadow: `box-shadow: 0 24px 48px -12px rgba(26, 28, 31, 0.08)`. The shadow must be tinted with the `on_surface` color, never pure black.
*   **The Ghost Border:** If a boundary is strictly required for accessibility, use `outline_variant` at 15% opacity. 100% opaque borders are strictly forbidden.
*   **Physicality:** Objects higher in the stack (closer to the user) should use "lighter" surface tokens (`surface_container_lowest`) to simulate light hitting the top layer.

---

## 5. Components: The Executive Suite

### Action Elements (Buttons & Chips)
*   **Primary Button:** 12px (`DEFAULT`) radius. Background: Action Gradient. Text: `on_primary`. 
*   **Tertiary Button:** No background. Text: `primary`. On hover, apply a `surface_container_high` background.
*   **Filter Chips:** Use `secondary_fixed` background with `on_secondary_fixed` text. When selected, switch to `primary` with a subtle 4% white overlay for depth.

### The Professional Feed (Cards & Lists)
*   **The Card Rule:** Cards must not have borders. Use `surface_container_lowest` on a `surface` background. 
*   **The Divider Rule:** Forbid the use of horizontal divider lines. Use `spacing-6` (1.5rem) of vertical white space to separate content chunks.
*   **Input Fields:** Use `surface_container_high` as the base. No border. On focus, the background remains, but a 2px "Ghost Border" of `primary` appears at 40% opacity.

### Navigation (The Signature Navbar)
*   **Construction:** 72px height, `surface_container` with 80% opacity and 24px backdrop-blur. 
*   **Active State:** Use a high-contrast `primary` dot (4px) below the icon rather than changing the icon's color to keep the visual weight consistent.

---

## 6. Do’s and Don’ts

### Do
*   **DO** use whitespace as a functional tool. If a section feels crowded, double the spacing token (e.g., move from `spacing-4` to `spacing-8`).
*   **DO** use "Primary Fixed" tokens for elements that must maintain their color identity across light and dark mode transitions (e.g., brand accents).
*   **DO** ensure all icons are 24px with a 1.5pt or 2pt stroke weight to match the Inter typeface weight.

### Don't
*   **DON'T** use pure black (#000000) for text. Use `on_surface` (#1a1c1f) to avoid harsh optical vibration.
*   **DON'T** use traditional "Card Shadows" on every element. Reserve shadows for high-z-index components like menus and modals.
*   **DON'T** use 100% opaque lines to separate list items. Use tonal shifts or white space.