/**
 * Ricksite Studio service catalogue — the single source of truth.
 *
 * Ricksite Studio covers two areas: building websites and web applications, and
 * digital marketing. The four services below are the homepage offering; keep
 * Website Development and Web App Development separate, since the first is the
 * business's customer-facing presence and the second is its internal systems.
 *
 * `solutions` and `icon` are not rendered on the homepage — the Agenko
 * `agenko-card-item style-one` card is a fixed three-part row (number + title,
 * description, button) with no icon slot and no room for supporting labels.
 * They are held here ready for the per-service landing pages.
 */

export type ServiceCategory = 'development' | 'marketing';

export interface Service {
  /** Display order, shown as the large number on the card. */
  number: string;
  title: string;
  /** URL segment: /services/<slug> */
  slug: string;
  shortDescription: string;
  category: ServiceCategory;
  /** Representative deliverables, for the service landing pages. */
  solutions: string[];
  /** Agenko flaticon class, for the service landing pages. */
  icon: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Website Development',
    slug: 'website-development',
    shortDescription:
      'Website profesional yang dirancang sesuai kebutuhan bisnis, responsif di berbagai perangkat, dan siap membantu meningkatkan kredibilitas serta konversi.',
    category: 'development',
    solutions: [
      'Company Profile',
      'Tour & Travel Website',
      'Property & Villa Website',
      'E-Commerce',
      'Landing Page',
      'Booking Website',
    ],
    icon: 'flaticon-web-development',
  },
  {
    number: '02',
    title: 'Web App Development',
    slug: 'web-app-development',
    shortDescription:
      'Sistem berbasis web yang dikembangkan secara custom untuk membantu digitalisasi dan menyederhanakan proses operasional bisnis.',
    category: 'development',
    solutions: [
      'Custom Dashboard',
      'ERP System',
      'Booking System',
      'Membership System',
      'Internal Business System',
      'Multi-Role Application',
      'Custom Business Workflow',
    ],
    icon: 'flaticon-cloud-computing',
  },
  {
    number: '03',
    title: 'SEO & Google Ads',
    slug: 'seo-google-ads',
    shortDescription:
      'Tingkatkan visibilitas bisnis di Google melalui strategi SEO dan Google Ads untuk menjangkau calon pelanggan yang sedang aktif mencari produk atau layanan Anda.',
    category: 'marketing',
    solutions: [
      'SEO Optimization',
      'Keyword Research',
      'On-Page SEO',
      'Google Search Ads',
      'Campaign Optimization',
      'Conversion Tracking',
    ],
    icon: 'flaticon-search',
  },
  {
    number: '04',
    title: 'Meta Ads',
    slug: 'meta-ads',
    shortDescription:
      'Jangkau lebih banyak calon pelanggan melalui Facebook dan Instagram Ads dengan strategi campaign yang berfokus pada leads dan conversion.',
    category: 'marketing',
    solutions: [
      'Facebook Ads',
      'Instagram Ads',
      'Lead Generation',
      'Campaign Strategy',
      'Audience Testing',
      'Creative Testing',
      'Retargeting',
    ],
    icon: 'flaticon-social-media-marketing',
  },
];

/** Path to a service's landing page. */
export const servicePath = (service: Service): string => `/services/${service.slug}`;

/**
 * The /services/* pages do not exist yet, so links render as href="#" with the
 * intended destination on data-rs-todo — the convention already used elsewhere
 * in this project for pages still to be built.
 *
 * Flip this to true once the landing pages ship and every service link across
 * the site starts pointing at its real page.
 */
export const SERVICE_PAGES_LIVE = false;
