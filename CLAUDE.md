# rohit-executive-portfolio

Personal editorial portfolio for Rohit Mallavarapu (builder-marketer).
**Next.js (App Router) + React 19 + TypeScript (strict)**, deployed on Vercel.
No Tailwind, no environment variables, no database. All routes are statically
prerendered.

## Stack
- Next.js App Router. Pages are `app/<route>/page.tsx` (home is `app/page.tsx`).
- Plain CSS with design tokens in `app/globals.css`. No Tailwind.
- Light/dark via a `data-theme` attribute on `<html>` (persisted to `localStorage`,
  set pre-paint by a script in `app/layout.tsx`).
- Fonts via `next/font`: Cormorant Garamond (serif display), Archivo (sans labels),
  Lora (body) → CSS vars `--serif` / `--sans` / `--body`.

## Where things live
- **Content / copy:** `lib/content.ts` (references, events, coverflow) and
  `lib/site.ts` (email, phone, LinkedIn, résumé, nav). Change copy here, not in JSX.
- **Global chrome:** `app/layout.tsx` mounts `<Nav>` + `<Footer>`.
- **Styles / tokens:** `app/globals.css`.

## Design system
Read [DESIGN.md](./DESIGN.md) before any visual/UI change. Warm-paper / teal editorial
system; do not deviate without explicit approval.

## Commands
- `npm run dev` — local dev at :3000
- `npm run build` — statically prerenders every route; **use this to verify a change**
  (it fails on type/lint errors)
- `npm start` — serve the production build

## Coding behaviour (Karpathy guidelines)
- Think before coding: state assumptions, surface tradeoffs, ask when unclear.
- Simplicity first: minimum code that solves the problem, nothing speculative.
- Surgical changes: touch only what the task needs; match existing style.
- Verify: after a change, run `npm run build` and confirm all routes prerender.
