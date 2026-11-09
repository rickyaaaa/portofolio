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
    // 'preserve' mirrors src/pages: a flat page (jasa-seo.astro, [slug].astro)
    // becomes jasa-seo.html, exactly as 'file' did, while a folder index
    // (blog/index.astro) becomes blog/index.html. That is what lets the blog
    // index and its articles share /blog/: the server 301s /blog to /blog/ and
    // serves the folder's index.html, and /blog/<slug> is rewritten onto
    // blog/<slug>.html by public/.htaccess like every other page.
    format: 'preserve',
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
      // /konsultasi is an ad landing page, noindexed on purpose: listing a
      // noindex URL in the sitemap is a contradiction Search Console reports.
      filter: (page) => !/\/(404|konsultasi)\/?$/.test(page),
      // Unlike the homepage, /blog and /blog/ are different URLs: /blog/ is a
      // real folder and the server 301s /blog to it. List the URL that answers.
      serialize: (item) => {
        if (/\/blog$/.test(item.url)) item.url += '/';
        return item;
      },
    }),
  ],
});
