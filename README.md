# Rohit Mallavarapu — Portfolio

Personal editorial portfolio for Rohit Mallavarapu (builder-marketer).
Next.js (App Router) + TypeScript, statically prerendered, deployed on Vercel.
No backend, no database, no environment variables.

## Develop

Prerequisites: **Node.js 20+**.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # static prerender of every route
npm start          # serve the production build
```

`npm run build` fails on type or lint errors, so it doubles as the check.

## Structure

- `app/` — routes (`/`, `/currly`, `/work`, `/proof`, `/writing`, `/contact`), `layout.tsx`, `globals.css`
- `components/` — `Nav`, `Footer`, `ThemeToggle`, `ReferencesRail`, `EventsCoverflow`
- `lib/` — `content.ts` (copy + data), `site.ts` (contact + links), `fonts.ts` (next/font)
- `public/` — portrait, résumé, event photos (`moments/`), Currly screenshots (`currly/`)

## Design

Design system (tokens, type, colour, motion) lives in [DESIGN.md](DESIGN.md).
Read it before changing anything visual.

## Deploy

Auto-deploys on push to `main` via Vercel. `vercel.json` pins the framework to Next.js.
