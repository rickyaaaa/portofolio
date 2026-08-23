# Ricksite Studio — Astro

Component-based rebuild of `../ricksite/index.html`. This is an **architecture
migration only**: the rendered page is pixel-identical to the static build.

## Run

```bash
npm install
npm run dev
```

Build to static HTML:

```bash
npm run build
```

Output lands in `dist/` as a single `index.html` plus the untouched `assets/`
tree. Preview the built output against the original side by side from the
parent folder:

```bash
node serve-astro.js
```

`http://localhost:5174` serves this build; `http://localhost:5173` (via
`node serve.js`) serves the original static one.

## Structure

```
src/
  pages/index.astro          page composition — section order lives here
  layouts/BaseLayout.astro   <head>, preloader, ScrollSmoother wrapper, scripts
  components/
    Header.astro             Agenko header-two
    Footer.astro             Agenko footer
    sections/                one file per homepage section
  data/
    site.ts                  WhatsApp number, nav, social, TODO links
    content.ts               projects, services, values, process, testimonials
public/assets/               Agenko CSS/JS/fonts/images, copied verbatim
```

## What the migration bought

| Before | After |
|---|---|
| 940-line single HTML file | 15 files, longest is 63 lines |
| WhatsApp number hardcoded 7× | one constant in `data/site.ts` |
| Adding a project = copying a 20-line markup block | one entry in `data/content.ts` |
| Section order buried in the file | visible at a glance in `pages/index.astro` |

## Two things to know before editing

**1. Scripts must keep `is:inline`.**
`theme.js` expects jQuery on `window` and GSAP plugins registered globally.
Without `is:inline`, Astro bundles them as ES modules and that breaks — the
carousel and scroll animations silently stop working. Every `<script>` in
`BaseLayout.astro` carries it.

**2. Whitespace between siblings is load-bearing.**
Several Agenko elements are `inline-block` or `inline-flex`: nav items, project
category chips, footer social icons, and the button/link pairs in the hero and
final CTA. The newline between them in the original HTML renders as a real space
that contributes to layout width. Two consequences:

- `compressHTML: false` in `astro.config.mjs` — with compression on, the nav
  collapsed 16px and the copyright links 7px.
- Mapped lists wrap each item in `<Fragment>…{' '}</Fragment>`, because `.map()`
  emits no whitespace between array items.

Remove either and the layout tightens by a few pixels in half a dozen places.

## Verification

Compared against the static build at 1440px, 768px and 375px:

- **DOM**: 1283 markup tokens, identical (LCS diff, zero insertions/deletions).
- **Geometry**: all 659 elements match on tag, classes, width and height at
  every breakpoint. Fingerprints — 1440px `ge7t6p`, 768px `6yyhcl`,
  375px `jsehu1` — identical on both builds.
- **Computed styles**: 30 probed components match on colour, font, line-height,
  padding, margin, border-radius and display.
- **Runtime**: GSAP, ScrollSmoother, SplitText and Slick all initialise;
  44 ScrollTriggers (same count); all anchors resolve; no console errors;
  no broken assets.
- **Output**: no `astro-island`, no `data-astro-cid`, no module scripts — the
  built page is plain static HTML.

Two differences from the original source are intentional: asset paths gained a
leading slash (`/assets/…`), and `&` in the `<title>` is emitted as `&amp;`
(renders identically).
