# Design System Specification: 3D Retro-Futuristic HUD

## 1. Overview & Creative North Star: "The Kinetic Console"
This design system is built to bridge the gap between 1980s arcade nostalgia and high-end aerospace interface design. The Creative North Star is **"The Kinetic Console"**—a digital environment that feels like a pressurized, high-tech cockpit. 

To move beyond the "template" look, we reject traditional flat layouts in favor of **intentional asymmetry** and **depth through illumination**. We treat the screen not as a flat canvas, but as a glass display with physical volume. Elements should overlap, use varying levels of transparency, and appear to be projected rather than printed.

## 2. Colors & Atmospheric Lighting
Our palette is rooted in absolute darkness, using light not just for color, but as a structural material.

### Palette Highlights
*   **Deep Base:** `surface_container_lowest` (#0E0E0E) and `surface` (#131313).
*   **The Neon Core:** `primary_container` (Neon Cyan #00F2FF) and `secondary_container` (Electric Magenta #FF24E4).
*   **The "No-Line" Rule:** Standard 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined by shifts in surface tiers (e.g., a `surface_container_high` card sitting on a `surface` background) or by "Light Leaks"—subtle linear gradients that mimic the glow of a nearby neon source.
*   **Surface Hierarchy & Nesting:** Use the `surface_container` tiers to create a "nested HUD" effect. An inner module should be `surface_container_highest` to feel "closer" to the pilot, while the background remains `surface_dim`.
*   **Signature Textures:** Apply a global scanline overlay (0.05 opacity) and subtle noise. Main CTAs must use a gradient transition from `primary` to `primary_container` to simulate a glowing cathode-ray tube (CRT) effect.

## 3. Typography: Technical Authority
We pair a high-character display face with a sterile, functional sans-serif to create a "Command Center" aesthetic.

*   **Display & Headlines (Space Grotesk/Orbitron):** Used for primary navigation and hero titles. These should utilize `letter-spacing: 0.05em` to feel expansive and engineered.
*   **UI & Body (Inter):** The workhorse for data and descriptions. Inter provides the "Professional" weight needed to keep the system from feeling like a toy.
*   **The Typography Hierarchy:**
    *   **Display-LG:** 3.5rem. Use for project titles with `primary` color glow.
    *   **Label-SM:** 0.6875rem. Use for "Technical Metadata" (e.g., timestamps, file sizes) in `on_surface_variant`. All-caps for a military-spec feel.

## 4. Elevation, Depth & Glassmorphism
In a retro-futuristic HUD, depth is communicated through light refraction and atmospheric density.

*   **The Layering Principle:** Stack `surface-container` tiers. A `surface-container-low` section should house `surface-container-high` cards. This creates a natural "lift" without the need for dated drop shadows.
*   **Glassmorphism (The "Aero" Effect):** Floating panels (modals, dropdowns) must use `surface_bright` at 40% opacity with a `backdrop-blur` of 20px. This allows the neon accents of the background to bleed through softly.
*   **Ambient Shadows:** Traditional black shadows are forbidden. Use "Glow Shadows"—extra-diffused (40px-60px blur) at 10% opacity, using the `primary` (Cyan) or `secondary` (Magenta) tokens to simulate light casting onto the surface below.
*   **The "Ghost Border" Fallback:** If a container needs a hard edge, use the `outline_variant` at 15% opacity. It should look like a faint laser-etched line, not a stroke.

## 5. Components: HUD Modules

### Buttons (The "Light-Switch" Pattern)
*   **Primary:** Rectangular, `0px` radius. Background: `primary_container`. Text: `on_primary`. Effect: A subtle outer glow using `surface_tint`.
*   **Secondary:** Ghost style. `outline` border at 20% opacity. On hover, the background fills with a 10% opacity `primary` tint.
*   **Tertiary:** Text-only, `label-md` styling, all-caps, with a `secondary` (Magenta) underline that expands from the center on hover.

### Inputs & Fields
*   **Text Inputs:** Forgo the four-sided box. Use a "Bracket" style—a bottom border with 4px vertical "ticks" at the ends using `primary`. 
*   **Error States:** Use `error` (#FFB4AB) text with a subtle flicker animation to mimic a hardware malfunction.

### Cards & Lists
*   **Forbid Dividers:** Do not use lines to separate list items. Use the Spacing Scale (e.g., `spacing-4`) and alternating `surface_container_low` and `surface_container_lowest` backgrounds to create a zebra-striping effect that feels like data rows.
*   **The "Targeting" Component:** Use 4px x 4px "L-shaped" corner brackets in the corners of featured project cards to draw the eye, using the `secondary` token.

### Additional Signature Components
*   **Data Scrim:** A semi-transparent overlay using the `surface_container_highest` token with a "Scanning" horizontal line animation.
*   **Status Indicators:** Small 8px squares using `primary` (Active) or `surface_variant` (Inactive) to denote system status or project categories.

## 6. Do’s and Don’ts

### Do:
*   **Embrace Hard Edges:** Use the `0px` roundedness scale for everything. The future is sharp and engineered.
*   **Use Asymmetric Grids:** Align text to the left but place "Technical Data" labels on the far right to create a wide, cinematic field of view.
*   **Layer with Intent:** Ensure that magenta (`secondary`) is used sparingly as an "Alert" or "Action" color, while cyan (`primary`) remains the "System" color.

### Don’t:
*   **Don't use Rounded Corners:** It breaks the "Advanced Machine" immersion.
*   **Don't use Pure White:** Use `on_surface` (#E5E2E1) for text to prevent eye strain against the black background.
*   **Don't Over-Glow:** If every element glows, nothing is important. Keep glows reserved for active states and primary headings.
*   **No Standard Shadows:** Never use `#000000` shadows. Use tinted blurs or nothing at all.