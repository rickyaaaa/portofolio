/**
 * Article authors. A named person with a real role is the strongest
 * experience signal an article can carry, so the bio states only what is
 * true and checkable on this site: no titles, certificates or numbers that
 * are not shown elsewhere.
 */

export interface Author {
  name: string;
  role: string;
  bio: string;
  /** Shown in the avatar until a photo is added. */
  initials: string;
}

export const authors = {
  ricky: {
    name: 'Ricky Adryan Achmad',
    role: 'Founder Ricksite Studio',
    bio: 'Ricky Adryan Achmad adalah pendiri Ricksite Studio di Tangerang Selatan. Ia mengerjakan langsung website, aplikasi web seperti ERP dan sistem booking, serta SEO dan iklan Google & Meta untuk UMKM dari berbagai daerah di Indonesia. Lewat blog ini, ia membagikan apa yang dipelajari dari project-project tersebut.',
    initials: 'RA',
  },
} satisfies Record<string, Author>;

export type AuthorId = keyof typeof authors;

export const DEFAULT_AUTHOR: AuthorId = 'ricky';
