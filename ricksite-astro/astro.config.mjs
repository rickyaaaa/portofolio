// @ts-check
import { defineConfig } from 'astro/config';

// Static output. Everything in public/assets is served verbatim, so the Agenko
// CSS/JS/font/image pipeline is untouched by the build.
export default defineConfig({
  build: {
    // Emit /index.html rather than /index/index.html so the output mirrors the
    // original single-page structure.
    format: 'file',
  },

  // Keep the authored whitespace. The Agenko markup relies on the newlines
  // between sibling elements: nav items, category chips, social icons and the
  // CTA button/link pairs are all inline-block or inline-flex, so the collapsed
  // newline renders as a real space that contributes to their layout width.
  // With compression on, those elements sit a few pixels tighter than the
  // original static build.
  compressHTML: false,
});
