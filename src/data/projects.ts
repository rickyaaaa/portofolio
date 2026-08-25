/**
 * Ricksite Studio portfolio — the single source of truth for project data.
 *
 * Order is deliberate: websites and custom web applications alternate so the
 * three travel sites do not sit together. A visitor should see at a glance that
 * Ricksite builds both marketing websites and internal business systems.
 *
 * Homepage cards stay minimal — screenshot, at most two tags, project name and
 * the circular "+" link. Anything longer belongs on the detail page.
 */

export interface Project {
  title: string;
  /** URL segment: /projects/<slug> — also the screenshot filename. */
  slug: string;
  /** At most two, rendered as the pill tags on the card. */
  tags: [string, string];
  /**
   * Public marketing sites only. Internal business systems deliberately have
   * no external link: their live systems must not be reachable from the
   * portfolio. Detail pages for those route to the contact flow instead.
   */
  liveUrl?: string;
  /** Extra classification for the detail page, not shown on the card. */
  classification?: string;
  /** Screenshot in public/assets/images/ricksite/projects/, 620x560. */
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Abunawas Travel',
    slug: 'abunawas-travel',
    tags: ['Website Travel', 'Booking System'],
    liveUrl: 'https://abunawastravel.id/',
    image: 'abunawas-travel.webp',
  },
  {
    title: 'YokPrinting ERP',
    slug: 'yokprinting-erp',
    tags: ['ERP System', 'Laravel'],
    // Internal business system — no public link to the live system.
    image: 'yokprinting-erp.webp',
  },
  {
    title: 'Bernard Bali Tours',
    slug: 'bernard-bali-tours',
    tags: ['Website Travel', 'WordPress'],
    liveUrl: 'https://bernardbalitours.com/',
    image: 'bernard-bali-tours.webp',
  },
  {
    title: 'SIPNONA',
    slug: 'sipnona',
    tags: ['Sistem Informasi', 'Laravel'],
    classification: 'Manajemen Pegawai',
    // Internal information system — no public link, no admin URL, no records.
    image: 'sipnona.webp',
  },
  {
    title: 'Bali Rejeng Jeep Tour',
    slug: 'bali-rejeng-jeep-tour',
    tags: ['Website Travel', 'WordPress'],
    liveUrl: 'https://balirejengjeeptour.com/',
    image: 'bali-rejeng-jeep-tour.webp',
  },
  {
    title: 'SAB Swadaya',
    slug: 'sab-swadaya',
    tags: ['Sistem Keuangan & Tagihan', 'Laravel'],
    classification: 'Billing System',
    // Internal application — no public link to the login page or dashboard.
    image: 'sab-swadaya.webp',
  },
];

/** Path to a project's detail page. */
export const projectPath = (project: Project): string => `/projects/${project.slug}`;

/**
 * The /projects/* pages do not exist yet, so cards render href="#" with the
 * intended destination on data-rs-todo — the convention used elsewhere here.
 * Flip to true once the detail pages ship.
 */
export const PROJECT_PAGES_LIVE = false;
