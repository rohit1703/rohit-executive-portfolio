# Design System — Rohit Mallavarapu Portfolio

> Source of truth for all visual and UI decisions. Read this before changing anything visual.
> Created via /design-consultation, 2026-07-13. Direction: evolve the existing system to an A.

## Product Context
- **What this is:** Personal executive portfolio for Rohit Mallavarapu, a B2B builder-marketer. Hub + three persona views (about / partnerships / marketing), each a single-scroll page.
- **Who it's for:** Hiring managers and founders at AI-native, developer-tool, and venture-backed companies.
- **Space/industry:** Personal / founder / operator portfolio. Peers (design references): brittanychiang.com (navy + accent archetype), leerob.io, rauno.me, linear.app, vercel.com.
- **Project type:** Hybrid — landing-page hero + content sections. React 19 + Vite + Tailwind + Framer Motion on Vercel.

## The Memorable Thing (the spine every decision serves)
**"Fast, technical, modern — feels like a built product, not a résumé."**
The differentiator is *builder*, not *marketer*. The design must signal engineered, not decorated. When a choice is ambiguous, pick the one that reads more like a well-built product.

## Aesthetic Direction
- **Direction:** Industrial / technical minimal — precise, engineered, quietly confident.
- **Decoration level:** minimal. Type + a monospace metadata layer carry the design. No decorative blur-blobs, no heavy noise, no ornamental gradients.
- **Mood:** Reads like a crafted developer tool. Warm (via the orange) but disciplined.
- **The signature move:** monospace for ALL metadata — section numbers, KPI figures, tech tags, labels, code snippets, the Currly engineering bullets. This is what makes it read technical.

## Typography
- **Display / Hero:** **Outfit** (700/800/900) — used sparingly, for the name and section headings only. Kept from the prior system; it renders the hero Rohit likes.
- **Body / UI:** **Geist** (400/500/600/700) — replaces Inter. Vercel's typeface, built for technical product interfaces; strong tabular numerals; signals the AI-native/dev-tool ecosystem the audience hires for.
- **Data / Labels / Code:** **Geist Mono** (400/500/600) — KPIs, section numbers (01/02/03), tech tags, uppercase labels, and inline code (`search_path`, `p95 < 400ms`). Use `font-variant-numeric: tabular-nums` on figures.
- **Loading:** self-host via `@fontsource/outfit`, `@fontsource/geist`, `@fontsource/geist-mono` (matches the current `@fontsource` setup; preload the critical weights only).
- **Scale (px):** display 96–120 (name) / 40 (section h2) / 34 (currly h3); body 15–21; label/mono 11–14. Line-height: 1.5 body, 0.92–1.0 display.

## Color
- **Approach:** restrained — one accent, neutrals do the rest. Color is rare and meaningful.
- **Primary accent:** `#FF6B35` (warm orange) — the single accent. Links, KPI emphasis, active states, primary CTA. Deliberately NOT the teal/blue every other technical portfolio uses.
- **Dark surfaces (dark is the primary technical mood):**
  - Background `#0A192F` (navy)
  - Elevated surface (cards) `#142138` — a shade off the background; use elevation, not flat.
  - Higher surface `#1B2C49`
  - Hairline `rgba(255,255,255,0.08)`
  - Text `#E6ECF3`, muted `#8FA0B5`
- **Light surfaces:** background `#F0F4F8`, cards `#FFFFFF`, text `#0A192F`, muted `#64748B`, hairline `#E2E8F0`.
- **Semantic:** success `#22C55E`, warning `#F59E0B`, error `#EF4444`, info `#3B82F6` (define once, use rarely).
- **Dark mode rule:** surfaces get their own elevation values (above), not a lightness inversion. Keep the accent at full saturation — orange holds up on navy.

## Spacing
- **Base unit:** 8px (allow 4px half-steps).
- **Density:** comfortable, tending tight. Generous whitespace between sections, tighter within cards.
- **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(96 section gap).

## Layout
- **Approach:** hybrid — grid-disciplined content, editorial hero.
- **Grid:** strict 8px grid. Max content width ~1080px. Two-column (sticky-left / content-right) for the Currly and role sections at ≥820px; single column below.
- **Border radius (hierarchical — NOT uniform bubbly):** cards `16–20px`, buttons `10px`, tag pills `9999px`, inputs `10px`. Retire the old uniform `48px` card radius.
- **Metadata pattern:** section headers read `[mono number] [display heading]` (e.g. `01  What I build now`).

## Motion
- **Approach:** minimal-functional. Motion clarifies, never decorates.
- **Respect `prefers-reduced-motion`** (wired via framer `MotionConfig reducedMotion="user"`).
- **Easing:** enter `ease-out`, exit `ease-in`, move `ease-in-out`.
- **Duration:** micro 50–100ms, short 150–250ms, medium 250–400ms. Nothing slower. Animate only `transform` / `opacity`.
- **Retire:** the 20s rotating blur-blob and the fixed noise overlay.

## Deliberate Risks (where this gets its own face)
1. **Orange as the only accent** — warmer and more energetic than the default dev teal/blue. Trade: slightly less "cool enterprise" for distinct + memorable.
2. **Italic Outfit display kept** alongside the mono layer — unusual for technical portfolios (usually all-roman). Trade: keeps the hero's energy; the mono offsets the "brand" read.
3. **Near-zero decoration** — austere vs. the prior warm-premium feel. Trade: reads engineered.

## Implementation Notes (not yet applied to the live code as of 2026-07-13)
The site currently still uses Inter, the blur-blobs/noise, and `48px` bento radii. Applying this system means: add Geist + Geist Mono, move labels/KPIs/tags/section-numbers/Currly-bullets to Geist Mono with tabular-nums, swap body Inter→Geist, tighten the radius scale, and remove the blob/noise decoration. See the preview in the design artifacts dir for the target.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-13 | Initial design system created | /design-consultation; evolve existing navy/orange system to an A. Memorable thing: "fast, technical, modern — feels like a built product." |
| 2026-07-13 | Add Geist Mono metadata layer | Highest-leverage move to make the site read technical vs. marketing. |
| 2026-07-13 | Body Inter → Geist; keep Outfit display | Geist reads sharper + signals the dev-tool ecosystem; Outfit retained because it renders the preferred hero. |
| 2026-07-13 | Remove blur-blobs / noise, tighten radius | Decoration read "marketing brochure"; minimalism reads "built product." |
