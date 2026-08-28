/**
 * Site-wide values that were previously hardcoded across index.html.
 *
 * The WhatsApp number appeared in 7 separate links and the placeholder hrefs in
 * 36 places; both are now single sources of truth.
 */

/** Digits only, international format, no "+". This is what wa.me expects. */
export const WHATSAPP_NUMBER = '6285121395643';

/** Builds a wa.me link with an optional pre-filled message. */
export function whatsapp(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Human-readable form of the number, shown in the footer and on /kontak. */
export const WHATSAPP_DISPLAY = '+62 851-2139-5643';

/**
 * The phone line is the same handset as WhatsApp, so it is derived rather than
 * repeated - one number to change if it ever moves.
 */
export const PHONE_DISPLAY = WHATSAPP_DISPLAY;
export const PHONE_HREF = `tel:+${WHATSAPP_NUMBER}`;

export const EMAIL = 'business@ricksitestudio.com';
export const EMAIL_HREF = `mailto:${EMAIL}`;

/**
 * Pages that do not exist yet. Every link pointing at one of these renders as
 * href="#" with a data-rs-todo marker, so they are easy to find and swap later.
 */
export const TODO = {
  projects: 'projects.html',
  projectDetails: 'project-details.html',
  services: 'service-details.html',
  about: 'about.html',
} as const;

export type TodoKey = keyof typeof TODO;

export interface NavLink {
  label: string;
  href: string;
  /** Renders as an Agenko has-children dropdown when present. */
  children?: { label: string; href: string }[];
}

/**
 * "Layanan" is a dropdown straight to each service page - that is where the
 * buying decision happens, so it should be one hover away from anywhere.
 * Children are filled from the service catalogue in Header.astro.
 */
export const NAV_LINKS: NavLink[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/#services', children: [] },
  { label: 'Project', href: '/projects' },
  { label: 'Tentang', href: '/#about' },
  { label: 'Kontak', href: '/kontak' },
];

export interface SocialLink {
  label: string;
  /** Font Awesome brand class, matching the template's own convention. */
  icon: string;
  href: string;
}

/**
 * Only accounts that actually exist. An empty social row beats a row of links
 * that go nowhere, so add an entry here the moment a new account goes live and
 * both the footer and the offcanvas menu pick it up.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    icon: 'fab fa-instagram',
    href: 'https://www.instagram.com/ricksitestudio_/',
  },
  {
    // Facebook Pages have no username until they qualify for one, so this is
    // the numeric profile URL. Swap it for the vanity URL once it is claimed.
    label: 'Facebook',
    icon: 'fab fa-facebook-f',
    href: 'https://www.facebook.com/profile.php?id=61590894984696',
  },
];
