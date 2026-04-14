# REEL

A video studio marketing site, built with Next.js 15 + Tailwind.
Warm, Anthropic-inspired visual system — cream + ink + coral.

## Stack

- **Next.js 15** (App Router, React 19 RC)
- **Tailwind CSS 3**
- **TypeScript**
- **Fraunces** (display serif) + **Inter** (sans) + **JetBrains Mono** (kickers)
- Zero third-party JS beyond React/Next

## Develop

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
```

## Deploy to Vercel

This repo is a zero-config Next.js project. Two options:

1. **Dashboard** — import the GitHub repo at [vercel.com/new](https://vercel.com/new), pick the `claude/ugc-agency-website-qFKN2` branch as the production branch, click Deploy.
2. **CLI**:
   ```bash
   npm i -g vercel
   vercel          # first-time: link project
   vercel --prod   # ship it
   ```

No env vars are required.

## What to swap in for real content

Placeholders are deliberately easy to find/replace:

| What                          | Where                                                   |
| ----------------------------- | ------------------------------------------------------- |
| Brand name (`REEL`)           | `components/Nav.tsx`, `components/Footer.tsx`, `app/layout.tsx` |
| Email (`hello@reel.studio`)   | `components/Contact.tsx`, `components/Footer.tsx`       |
| Client logos (marquee)        | `components/LogoMarquee.tsx` — `logos` array            |
| Stats (2M+ / 50M+ / 48h)      | `components/Hero.tsx`, `components/Stats.tsx`           |
| Portfolio pieces              | `components/Portfolio.tsx` — `pieces` array. Swap `gradient` for real thumbnails (`<Image>`) when ready. |
| Founder bio + portrait        | `components/About.tsx`                                  |

To add real portfolio thumbnails, drop images into `public/work/` and replace the gradient `div` in `Portfolio.tsx` with `next/image`.

## Design system

Tokens live in `tailwind.config.ts`:

- `cream` `#faf9f5`, `cream-alt` `#f5f3ec`
- `ink` `#141413`, `ink-soft` `#2b2926`
- `warm` `#6e6860`, `warm-light` `#a39e96`
- `line` `#e8e6dc` (hair rules)
- Accents: `coral` `#d97757`, `sky` `#6a9bcc`, `sage` `#788c5d`

Typography:

- Display: `font-display` (Fraunces, optical-size 144, tightest tracking)
- Body: Inter, size 17px, line-height 1.6
- Kicker label: `.kicker` — mono, 11px, 14% tracking, uppercase
