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

/**
 * What kind of work a project is, used to group /projects into tabs.
 *
 * A separate field rather than something derived from `tags`: the tags are
 * display copy and change freely ("Website Travel", "Sistem Keuangan &
 * Tagihan"), so grouping on them would break the page the next time one is
 * reworded.
 */
export type ProjectCategory = 'company-profile' | 'travel' | 'web-app';

export interface Project {
  title: string;
  /** URL segment: /projects/<slug> — also the screenshot filename. */
  slug: string;
  category: ProjectCategory;
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
  /** Shown in the homepage teaser. All projects appear on /projects. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Abunawas Travel',
    slug: 'abunawas-travel',
    category: 'travel',
    tags: ['Website Travel', 'Booking System'],
    liveUrl: 'https://abunawastravel.id/',
    image: 'abunawas-travel.webp',
    featured: true,
  },
  {
    title: 'YokPrinting ERP',
    slug: 'yokprinting-erp',
    category: 'web-app',
    tags: ['ERP System', 'Laravel'],
    // Internal business system — no public link to the live system.
    image: 'yokprinting-erp.webp',
    featured: true,
  },
  {
    title: 'Bernard Bali Tours',
    slug: 'bernard-bali-tours',
    category: 'travel',
    tags: ['Website Travel', 'WordPress'],
    liveUrl: 'https://bernardbalitours.com/',
    image: 'bernard-bali-tours.webp',
    featured: true,
  },
  {
    title: 'SIPNONA',
    slug: 'sipnona',
    category: 'web-app',
    tags: ['Sistem Informasi', 'Laravel'],
    classification: 'Manajemen Pegawai',
    // Internal information system — no public link, no admin URL, no records.
    image: 'sipnona.webp',
    featured: true,
  },
  {
    title: 'Bali Rejeng Jeep Tour',
    slug: 'bali-rejeng-jeep-tour',
    category: 'travel',
    tags: ['Website Travel', 'WordPress'],
    liveUrl: 'https://balirejengjeeptour.com/',
    image: 'bali-rejeng-jeep-tour.webp',
    featured: true,
  },
  {
    title: 'SAB Swadaya',
    slug: 'sab-swadaya',
    category: 'web-app',
    tags: ['Sistem Keuangan & Tagihan', 'Laravel'],
    classification: 'Billing System',
    // Internal application — no public link to the login page or dashboard.
    image: 'sab-swadaya.webp',
    featured: true,
  },
  {
    title: 'Larisse Tailor',
    slug: 'larisse-tailor',
    category: 'company-profile',
    tags: ['Company Profile', 'WordPress'],
    liveUrl: 'https://larissetailor.com/',
    image: 'larisse-tailor.webp',
  },
  {
    title: 'The Beauty Pawgeant',
    slug: 'the-beauty-pawgeant',
    category: 'company-profile',
    tags: ['Company Profile', 'WordPress'],
    liveUrl: 'https://thebeautypawgeant.id/',
    image: 'the-beauty-pawgeant.webp',
  },
  {
    title: 'Jastipku Tual',
    slug: 'jastipku-tual',
    category: 'company-profile',
    tags: ['Company Profile', 'WordPress'],
    liveUrl: 'https://jastipkutual.com/',
    image: 'jastipku-tual.webp',
  },
];

/**
 * Tabs on /projects, in display order. "Semua" is first so the page still
 * opens on the full set — a portfolio that starts by showing three of nine
 * undersells the work.
 */
export const projectCategories: { id: ProjectCategory | 'all'; title: string }[] = [
  { id: 'all', title: 'Semua' },
  { id: 'company-profile', title: 'Company Profile' },
  { id: 'travel', title: 'Travel' },
  { id: 'web-app', title: 'Web App' },
];

/** Projects in one tab. "all" keeps the authored order. */
export function projectsIn(category: ProjectCategory | 'all'): Project[] {
  return category === 'all'
    ? projects
    : projects.filter((project) => project.category === category);
}

/** The curated six for the homepage teaser. */
export const featuredProjects = projects.filter((project) => project.featured);

/** Path to a project's detail page. */
export const projectPath = (project: Project): string => `/projects/${project.slug}`;

/**
 * The /projects/* pages do not exist yet, so cards render href="#" with the
 * intended destination on data-rs-todo — the convention used elsewhere here.
 * Flip to true once the detail pages ship.
 */
export const PROJECT_PAGES_LIVE = false;
