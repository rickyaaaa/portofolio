/**
 * Blog articles, one Markdown file each in src/content/artikel/.
 *
 * Plain `import.meta.glob` over .md files rather than a content collection:
 * Markdown imports are core Astro and need no schema config, and a handful of
 * articles does not need more. The filename is the slug.
 *
 * Articles live at /artikel/<slug> while the index is /blog. They cannot share
 * a name: /blog/<slug> would emit a blog/ directory next to blog.html, and the
 * .htaccess rewrite (which skips real directories) would stop serving /blog.
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

export const articlePath = (article: Pick<Article, 'slug'>): string => `/artikel/${article.slug}`;

/** "9 November 2026", the way the site writes dates. */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
