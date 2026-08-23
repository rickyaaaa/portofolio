# Ricksite Studio — Homepage

Built on the **Agenko** template (`index-2.html`, Digital Agency variant), which is treated
as a locked visual design system. Only content, section order, and the accent colour were
changed. Every component on the page is a stock Agenko component.

## Run locally

From the parent folder (`D:\portofolio ricksite web`):

```bash
node serve.js
```

Then open `http://localhost:5173`. The original template is served side by side at
`http://localhost:5173/agenko/index-2.html` for visual comparison.

## Section order

| # | Section | Agenko component reused |
|---|---------|-------------------------|
| 1 | Navbar | `header-area header-two transparent-header` (index-2, unchanged) |
| 2 | Hero | `hero-wrapper-two` (index-2, unchanged) |
| 3 | Featured Projects | `agk-project` + `agenko-project-item style-one` (index-2) |
| 4 | Services | `agk-services` + `agenko-card-item style-one` (index-2) |
| 5 | Website + Advertising | `agk-who-we` + `check-list style-one` + `big-text` (index-2) |
| 6 | Why Ricksite Studio | `agenko-iconic-box style-four` (index.html) |
| 7 | Work Process | `agk-work-process` + `agenko-iconic-box style-two` (index-2) |
| 8 | Testimonials | `agk-testimonial` + slick slider (index-2) |
| 9 | About | `agk-about` (index-2) |
| 10 | Final CTA | `agenko-cta-wrappper` (index-3) |
| 11 | Footer | `agenko-footer` (index-2, unchanged) |

Removed from index-2: About-after-hero, FAQ, Team, Client logos, Blog.

## What was changed in CSS

`assets/css/ricksite.css` is the only new stylesheet, and it is deliberately small.
`assets/css/style.css` and `default.css` are the untouched originals.

1. **Accent colour.** `style.css` declares the accent once as `--primary-color`, so a
   single token override switches the whole template from Agenko lime `#9CFE4F` to
   Ricksite green `#B7F34A`. One extra rule fixes the footer blur, the only place the
   template hard-codes the old lime instead of using the token.

2. **Hero headline fit.** Agenko's hero headline is two very short lines ("Digital
   Modern" / "Agency"), which is why the template can use 140px type and float the
   paragraph absolutely into the empty space at the right. The Ricksite headline is
   28 characters per line, so:
   - the type is stepped down to the largest size that still fits the original
     container at every breakpoint (100 / 88 / 72 / 48 / 34px);
   - the paragraph returns to normal flow — which is exactly what Agenko itself does
     between 992px and 1200px, so the same declaration is simply applied at all widths.

   Composition, shapes, circles, service list, hero image, and GSAP animations are
   untouched. The template's `.pro` badge was removed because the longer headline now
   occupies the space it was positioned into.

3. **Two small spacing rules** for the secondary `read-more` link that sits next to the
   primary button in the hero and the final CTA.

Nothing else is overridden. Any rule not in that file is running on stock Agenko CSS.

`assets/js/ricksite.js` only adds in-page anchor scrolling — GSAP ScrollSmoother takes
over scrolling, so plain `#anchor` jumps do not work. It reuses the ScrollSmoother
instance `theme.js` already created; no new library was added.

## Placeholders to replace

| What | Where | Notes |
|------|-------|-------|
| WhatsApp number | `index.html` | Find & replace `6281234567890` — 6 links |
| Project screenshots | `assets/images/ricksite/projects/project-0X.svg` | Replace with real 1240×775 landscape screenshots, then change the `src` extension to `.jpg` |
| Hero / features / about / testimonial images | `assets/images/ricksite/pages/*.svg` | Neutral "IMAGE PLACEHOLDER" panels at the template's original dimensions |
| Logo | `assets/images/ricksite/logo/logo-main.svg` | 151×40, same slot as the template's placeholder logo |
| Testimonials | Testimonial slider | Copy is explicitly marked as placeholder — no invented client quotes |
| Inner-page links | `href="#" data-rs-todo="..."` | 35 links waiting on `projects.html`, `services.html`, `about.html`, `project-details.html`, and the social profiles |
| Newsletter form | Footer | Original template markup; still needs a backend endpoint |

## Notes

- Project **year** is not shown. Agenko's project card has slots for a title and two
  category chips only; those carry Industry and Service. Adding a year would have meant
  inventing a new component, so it was left out — say the word if you want it and I will
  add it as a minimal extension.
- The work process has 5 steps in `col-xl`, so they sit as 5 equal columns on desktop
  and fall back to the template's own 2-column and 1-column behaviour below 1200px.
- Verified: no visible "Agenko" text remains, no broken assets, no console errors,
  and every probed component style matches the original template exactly.
