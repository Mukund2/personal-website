# CLAUDE.md — Mukund's personal site

Personal website for Mukund Kunapareddy. Live at **mukundkunapareddy.com**
(also `personal-website-bdg.pages.dev`). Repo: `Mukund2/personal-website`.

## Stack & deploy
- **Plain static site.** Two files that matter: `index.html` + `home.css`. No
  framework, no build step. `img/` holds three org logos. Vanilla JS lives
  inline at the bottom of `index.html` (currently just a copy-to-clipboard
  handler for Memi's install command).
- **Deploy = push to `main`.** A GitHub Action (`.github/workflows/deploy.yml`)
  runs `wrangler pages deploy .` to Cloudflare Pages. Just commit + push; no
  manual deploy. Whole dir is the site root.
- **Custom domain edge-caches HTML for ~30–60s.** Right after a deploy,
  `mukundkunapareddy.com` may still show the old version for a minute even
  though the Action succeeded. `personal-website-bdg.pages.dev` updates first.
  A hard refresh (Cmd+Shift+R) forces it. This is normal — don't chase it.

## ⚠️ Cache-bust rule (important)
`index.html` links the stylesheet as `home.css?v=YYYYMMDDnn`. **Every time you
change `home.css`, bump that version query** (both `index.html` and any
subpage that links it). A stale cached stylesheet on new HTML = totally broken
layout, and it's bitten this site before. If you only change `index.html`
(no CSS), don't bump — it just forces a needless refetch.

## Design system — the non-negotiables
Wireframe-editorial, modeled on a cargo.site reference Mukund loves. Do NOT
drift from these (a serif/warm/accented version was explicitly rejected):
- **System grotesque sans, ONE uniform size (~14.5px).** Hierarchy comes from
  weight + italic only — never font-size jumps. No serif.
- **Pure black on pure white.** No accent colors, no warm tones.
- **1px `rgba(0,0,0,.15)` hairlines** — vertical between columns, horizontal
  between sections.
- No pills, no shadows, no rounded cards, no big display type, no emoji.

## Layout
Three columns, **edge-to-edge** (no max-width), each an independent scroll
container (`body{overflow:hidden}`, `.col{overflow-y:auto}`) so only the
hovered column scrolls. Collapses to a single normally-scrolling column at
`≤900px`.
- **Left — "About Me":** name, bio, Contact (X + LinkedIn only — no email, no
  GitHub, per Mukund's privacy preference).
- **Center — "Select Work":** three plain `.cat` sections in order **Writing →
  Student Organizations → Personal Projects** (writing leads — his strongest
  signal). Orgs use small `.logo-sm` marks left of the title; projects are a
  plain stacked list.
- **Right — "Résumé":** the header is a **link to Mukund's Google Doc résumé**
  (`a.col-head`) — keep it. Sections: Education, Work, Honors. It's a pointer to
  the full doc, so keep it tight, not exhaustive.

## Content facts (get these right)
- It's **"NSIN SJSU"** — a standalone org, NOT a chapter of the national NSIN.
  Don't write "NSIN at SJSU" or imply national affiliation.
- Memi's action is a click-to-copy `clawhub install memi` command (not GitHub).
- Personal-project meta is **year only** (no "Founder"/"AI platform" tags —
  they're projects, not companies).

## Removed on purpose (don't reintroduce without asking)
Carousel, category click-to-isolate/"focus" mode + back bar, the live clock,
the `/dual-use-tech-bridge` subpage, "Peace follows deterrence." Root images
`anduril-poster.png` / `atoms-for-peace.jpg` are unused legacy — safe to delete.

## Working notes
- **Verify on the DEPLOYED URL**, not just localhost/iframes — a stale-cache
  bug is invisible locally. Load the live origin in a browser and check
  computed styles + a screenshot after deploying.
- Mukund sometimes edits this repo from a **second Claude terminal in parallel**
  (e.g., he wired up the résumé link that way). `git fetch` and check
  local-vs-remote before committing; don't clobber the other session's work.
