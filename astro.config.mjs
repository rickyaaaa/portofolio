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
    //
    // No lastmod: every page would carry the build timestamp, including the
    // ones that did not change, and Google states it ignores a lastmod it
    // cannot trust. An absent date is better than a misleading one.
    // The homepage is written as the bare origin, with no trailing slash,
    // while the canonical tag on that page says "/". That was checked rather
    // than assumed: serialize() is handed the URL with the slash and the
    // sitemap package strips it afterwards, so a serialize hook to put it back
    // is a no-op. It also does not matter - an empty path and "/" are the same
    // URL under RFC 3986, and Google normalises them together. Forcing the
    // issue would mean Astro's trailingSlash: 'always', which would change
    // every route on the site to fix nothing.
    sitemap({
      // The 404 is a server response, not a page worth crawling.
      filter: (page) => !page.endsWith('/404'),
    }),
  ],
});
