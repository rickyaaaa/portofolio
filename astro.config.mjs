// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output. Everything in public/assets is served verbatim, so the Agenko
// CSS/JS/font/image pipeline is untouched by the build.
export default defineConfig({
  // The live origin. Needed for absolute URLs in the sitemap, and it is the
  // same host public/.htaccess canonicalises every request to.
  site: 'https://ricksitestudio.com',

  build: {
    // Emit /index.html rather than /index/index.html so the output mirrors the
    // original single-page structure. Links stay extensionless; the rewrite in
    // public/.htaccess maps /jasa-seo onto jasa-seo.html on the server.
    format: 'file',
  },

  // Keep the authored whitespace. The Agenko markup relies on the newlines
  // between sibling elements: nav items, category chips, social icons and the
  // CTA button/link pairs are all inline-block or inline-flex, so the collapsed
  // newline renders as a real space that contributes to their layout width.
  // With compression on, those elements sit a few pixels tighter than the
  // original static build.
  compressHTML: false,

  integrations: [
    // robots.txt points crawlers here. Generated from the routes, so pages
    // added later show up without anyone remembering to edit a list.
    sitemap({
      // The 404 is a server response, not a page worth crawling.
      filter: (page) => !page.endsWith('/404'),
    }),
  ],
});
