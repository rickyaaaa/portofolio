/**
 * Ricksite Studio service catalogue — the single source of truth.
 *
 * Names and slugs are Indonesian on purpose: "jasa pembuatan website" is what
 * people actually type into Google, and each service gets its own landing page
 * so one page can target one keyword cluster instead of the homepage trying to
 * rank for all of them at once.
 *
 * SEO and Google Ads are separate services: different keywords, different buyer
 * intent (organic long game vs. traffic now).
 *
 * `solutions` and `icon` are not rendered on the homepage — the Agenko
 * `agenko-card-item style-one` card is a fixed row with no icon slot. They are
 * held here ready for the service landing pages.
 */
import { pricing } from './pricing';

export type ServiceCategory = 'development' | 'marketing';

export interface Service {
  /** Display order, shown as the large number on the card. */
  number: string;
  title: string;
  /** URL segment: /<slug> */
  slug: string;
  shortDescription: string;
  category: ServiceCategory;
  /** Ids from data/pricing.ts, used to derive the "mulai dari" figure. */
  pricingCategories: string[];
  /** Representative deliverables, for the service landing pages. */
  solutions: string[];
  /** Agenko flaticon class, for the service landing pages. */
  icon: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Jasa Pembuatan Website',
    slug: 'jasa-pembuatan-website',
    shortDescription:
      'Website yang cepat, rapi, dan enak dibuka dari HP. Dibangun biar pengunjung percaya sama bisnismu, terus lanjut chat atau order.',
    category: 'development',
    pricingCategories: ['company-profile', 'tour-travel', 'toko-online'],
    solutions: [
      'Company Profile',
      'Tour & Travel Website',
      'Property & Villa Website',
      'Toko Online / E-Commerce',
      'Landing Page',
      'Booking Website',
    ],
    icon: 'flaticon-web-development',
  },
  {
    number: '02',
    title: 'Jasa Pembuatan Aplikasi',
    slug: 'jasa-pembuatan-aplikasi',
    shortDescription:
      'Kerjaan manual yang bikin repot kami pindahkan ke sistem. Dashboard, ERP, booking, sampai alur kerja khusus bisnismu.',
    category: 'development',
    pricingCategories: ['web-app'],
    solutions: [
      'Custom Dashboard',
      'ERP System',
      'Booking System',
      'Membership System',
      'Sistem Internal Bisnis',
      'Aplikasi Multi-Role',
      'Custom Business Workflow',
    ],
    icon: 'flaticon-cloud-computing',
  },
  {
    number: '03',
    title: 'Jasa SEO',
    slug: 'jasa-seo',
    shortDescription:
      'Biar website kamu ketemu pas calon customer nyari di Google, tanpa harus bayar per klik. Hasilnya bertahan jangka panjang.',
    category: 'marketing',
    pricingCategories: ['seo'],
    solutions: [
      'Audit SEO',
      'Riset Keyword',
      'On-Page SEO',
      'Technical SEO',
      'Artikel SEO',
      'Laporan Bulanan',
    ],
    icon: 'flaticon-search',
  },
  {
    number: '04',
    title: 'Jasa Google Ads',
    slug: 'jasa-google-ads',
    shortDescription:
      'Muncul paling atas pas orang lagi nyari produk atau jasa kamu. Cocok kalau butuh calon customer masuk dari sekarang.',
    category: 'marketing',
    pricingCategories: ['google-ads'],
    solutions: [
      'Google Search Ads',
      'Riset Keyword Iklan',
      'Struktur Campaign',
      'Optimasi Budget',
      'Conversion Tracking',
      'Laporan Performa',
    ],
    icon: 'flaticon-analytics',
  },
  {
    number: '05',
    title: 'Jasa Meta Ads',
    slug: 'jasa-meta-ads',
    shortDescription:
      'Facebook dan Instagram Ads yang diarahkan ke orang paling mungkin beli, bukan sekadar nambah view dan like.',
    category: 'marketing',
    pricingCategories: ['meta-ads'],
    solutions: [
      'Facebook Ads',
      'Instagram Ads',
      'Lead Generation',
      'Audience Testing',
      'Creative Testing',
      'Retargeting',
    ],
    icon: 'flaticon-social-media-marketing',
  },
];

/** Path to a service's landing page. */
export const servicePath = (service: Service): string => `/${service.slug}`;

/**
 * Cheapest package across the pricing categories a service covers, for the
 * "mulai dari" line on the homepage card. Returns null when every package is
 * quote-only (custom web apps), so the card can say so instead of a number.
 */
export function startingPrice(service: Service): { price: string; period: string } | null {
  const packages = pricing
    .filter((category) => service.pricingCategories.includes(category.id))
    .flatMap((category) => category.packages)
    .filter((pkg) => typeof pkg.amount === 'number');

  if (!packages.length) return null;

  const cheapest = packages.reduce((low, pkg) => (pkg.amount! < low.amount! ? pkg : low));
  return { price: cheapest.price, period: cheapest.period ?? '' };
}

/**
 * The service landing pages do not exist yet, so links render as href="#" with
 * the intended destination on data-rs-todo. Flip to true once they ship.
 */
export const SERVICE_PAGES_LIVE = false;
