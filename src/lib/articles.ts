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
import { authors, DEFAULT_AUTHOR, type Author, type AuthorId } from '../data/authors';
import type { TopicId } from '../data/blog-topics';

export interface ArticleFrontmatter {
  /** H1 and card title. */
  title: string;
  /** <title>, under 60 characters. */
  seoTitle: string;
  /** Meta description, under ~155 characters; also the card excerpt. */
  description: string;
  /** Group on the blog index; see data/blog-topics.ts. */
  topic: TopicId;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  /** ISO date of the last real content change, when there has been one. */
  updated?: string;
  /** Key into data/authors.ts; defaults to the founder. */
  author?: AuthorId;
  /** Alt text for the cover image, when the article has one. */
  coverAlt?: string;
}

export interface Article extends Omit<ArticleFrontmatter, 'author'> {
  slug: string;
  author: Author;
  Content: MarkdownInstance<ArticleFrontmatter>['Content'];
  /** src/assets/blog/<slug>-cover.webp, optimised by astro:assets. */
  cover?: ImageMetadata;
  /** Site path of the 1200x630 link-preview crop of the cover. */
  ogImage?: string;
}

const modules = import.meta.glob<MarkdownInstance<ArticleFrontmatter>>('../content/artikel/*.md', {
  eager: true,
});

// Covers follow a naming rule rather than a frontmatter path, because plain
// Markdown frontmatter is not run through the image pipeline. The matching
// link-preview crop lives in public/assets/images/ricksite/blog/<slug>-og.jpg.
const covers = import.meta.glob<{ default: ImageMetadata }>('../assets/blog/*-cover.webp', { eager: true });
const coverFor = (slug: string) => covers[`../assets/blog/${slug}-cover.webp`]?.default;

/** Newest first. */
export const articles: Article[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    const cover = coverFor(slug);
    return {
      ...mod.frontmatter,
      slug,
      author: authors[mod.frontmatter.author ?? DEFAULT_AUTHOR],
      Content: mod.Content,
      cover,
      ogImage: cover ? `/assets/images/ricksite/blog/${slug}-og.jpg` : undefined,
    };
  })
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
