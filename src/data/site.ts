/**
 * Site-wide values that were previously hardcoded across index.html.
 *
 * The WhatsApp number appeared in 7 separate links and the placeholder hrefs in
 * 36 places; both are now single sources of truth.
 */

/** Replace with the real number. Digits only, international format, no "+". */
export const WHATSAPP_NUMBER = '6281234567890';

/** Builds a wa.me link with an optional pre-filled message. */
export function whatsapp(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Human-readable form of the number, shown in the footer. */
export const WHATSAPP_DISPLAY = '+62 812-3456-7890';

/**
 * Pages that do not exist yet. Every link pointing at one of these renders as
 * href="#" with a data-rs-todo marker, so they are easy to find and swap later.
 */
export const TODO = {
  projects: 'projects.html',
  projectDetails: 'project-details.html',
  services: 'service-details.html',
  about: 'about.html',
  social: 'social',
} as const;

export type TodoKey = keyof typeof TODO;

export const NAV_LINKS = [
  { label: 'Beranda', href: 'index.html' },
  { label: 'Layanan', href: '#services' },
  { label: 'Project', href: '#projects' },
  { label: 'Tentang', href: '#about' },
  { label: 'Kontak', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { label: 'Instagram', icon: 'fab fa-instagram' },
  { label: 'TikTok', icon: 'fab fa-tiktok' },
  { label: 'LinkedIn', icon: 'fab fa-linkedin-in' },
];
