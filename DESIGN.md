# Design System — Rohit Mallavarapu Portfolio

> Source of truth for all visual/UI decisions. Read before changing anything visual.
> Editorial system from the design handoff (2026). Implemented as CSS tokens in
> `app/globals.css`; fonts via `next/font`.

## The memorable thing
Warm, editorial, literary — "a well-set magazine, not a résumé." Serif display with
an italic accent word per heading; a single teal accent; disciplined light/dark.

## Colour (tokens on `:root` / `html[data-theme="dark"]`)
| Token | Light | Dark |
|---|---|---|
| `--bg` | `#f0eae0` (warm bone) | `#15181d` |
| `--ink` | `#1c1b19` | `#ece7da` |
| `--muted` | `#5f5a52` | `#9aa0a6` |
| `--faint` | `#8c8172` | `#6f767d` |
| `--line` | `#ded7d3` | `rgba(236,231,218,.14)` |
| `--card` | `#faf7f2` | `#1b1f24` |
| `--card-line` | `#e2dbcd` | `rgba(236,231,218,.12)` |
| `--band` / `--band-ink` | `#1a1917` / `#f0eae0` | `#0e1013` / `#ece7da` |
| `--accent` | `#285C70` (teal) | `#6C9BAD` |
| `--accent-soft` / `-ink` | `#dbe4e6` / `#1c4152` | `#22303a` / `#bcd4de` |
| `--pill-bg` / `-ink` | `#1a1917` / `#f0eae0` | `#6C9BAD` / `#0e1013` |

Teal is the only accent. Never a second hue. Photos get `--img-grade`
(warm in light, desaturated in dark).

## Typography (via next/font, `lib/fonts.ts`)
- `--serif` **Cormorant Garamond** (400/500/600 + italic) — display headings, stat
  numbers, references. One word per heading is italic 500.
- `--sans` **Archivo** (500–800) — nav, eyebrows, labels, meta, buttons. UPPERCASE
  labels with wide letter-spacing.
- `--body` **Lora** (400–600) — paragraphs.

## Layout
- Container max-width 1180px; `padding: 0 clamp(20px,5vw,64px)`.
- Section rhythm `clamp(40px,6vw,72px)`.
- Radii: cards 14–18px, pills 8px, hero image 22px, stat band 20px.
- Full-width dark "stat bands"; whisper-soft shadows.

## Motion
- Ease-out curves, no bounce. Theme transitions `.35s`.
- Events section is a 3D coverflow (`components/EventsCoverflow.tsx`, `.cf-*` styles);
  respects `prefers-reduced-motion` (autoplay off, manual controls stay).
- Animate `transform` / `opacity` only.

## Pages
Home · Currly · Work · Proof · Writing · Contact. Sticky nav (active-route teal) +
shared footer. Primary CTA is **Book a call** (Google Calendar) everywhere.
