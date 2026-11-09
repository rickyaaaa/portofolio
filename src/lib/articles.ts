/**
 * Blog articles, one Markdown file each in src/content/artikel/.
 *
 * Plain `import.meta.glob` over .md files rather than a content collection:
 * Markdown imports are core Astro and need no schema config, and a handful of
 * articles does not need more. The filename is the slug.
 *
 * The index is /blog/ (src/pages/blog/index.astro → blog/index.html under the
 * 'preserve' build format) and articles are /blog/<slug>. The index URL keeps
 * its trailing slash because it is a real folder: the server redirects /blog
 * to /blog/ before anything else can answer.
 */
import type { MarkdownInstance } from 'astro';

export interface ArticleFrontmatter {
  /** H1 and card title. */
  title: string;
  /** <title>, under 60 characters. */
  seoTitle: string;
  /** Meta description, under ~155 characters; also the card excerpt. */
  description: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  /** ISO date of the last real content change, when there has been one. */
  updated?: string;
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  Content: MarkdownInstance<ArticleFrontmatter>['Content'];
}

const modules = import.meta.glob<MarkdownInstance<ArticleFrontmatter>>('../content/artikel/*.md', {
  eager: true,
});

/** Newest first. */
export const articles: Article[] = Object.entries(modules)
  .map(([path, mod]) => ({
    ...mod.frontmatter,
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    Content: mod.Content,
  }))
  .sort((a, b) => b.date.localeCompare(a.date));

export const articlePath = (article: Pick<Article, 'slug'>): string => `/blog/${article.slug}`;

/** The blog index, with the slash its folder URL needs. */
export const BLOG_PATH = '/blog/';

/** "9 November 2026", the way the site writes dates. */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
