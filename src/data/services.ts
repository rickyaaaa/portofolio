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
  /**
   * Slug of the main service this page narrows down (sub-pages only). Used
   * for the breadcrumb and to keep sub-pages out of nav, cards and footer.
   */
  parent?: string;
  /** Deliverable boxes that link to their own sub-page, keyed by solution label. */
  solutionLinks?: Record<string, string>;
  /** Short label for the breadcrumb, where the full title would wrap on a phone. */
  shortTitle?: string;
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
    solutionLinks: {
      'Company Profile': '/jasa-pembuatan-website-company-profile',
      'Toko Online / E-Commerce': '/jasa-pembuatan-website-toko-online',
      'Landing Page': '/jasa-pembuatan-landing-page',
      'Tour & Travel Website': '/jasa-pembuatan-website-travel',
    },
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
      'Aplikasi Kasir (POS)',
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
      'Facebook dan Instagram Ads yang diarahkan ke orang yang paling mungkin beli, dengan hasil yang diukur dari chat dan order.',
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
  {
    number: '06',
    title: 'Jasa Maintenance Website',
    slug: 'jasa-maintenance-website',
    shortDescription:
      'Website tetap aman, update, dan jalan normal. Website lama yang error juga kami perbaiki, termasuk buatan orang lain.',
    category: 'development',
    pricingCategories: ['maintenance'],
    solutions: [
      'Update Sistem & Plugin',
      'Backup Rutin',
      'Cek Keamanan & Malware',
      'Perbaikan Error & Bug',
      'Update Konten',
      'Optimasi Kecepatan',
    ],
    icon: 'flaticon-quality-test',
  },
];

/**
 * Narrower pages under a main service, each aimed at a phrase the main page
 * cannot also lead with. Website sub-pages (Ubersuggest, Indonesia, Nov 2026):
 * "website company profile" ~1,000/mo SD 15, "jasa pembuatan landing page"
 * ~390/mo SD 26, "jasa pembuatan website toko online" ~320/mo SD 27.
 *
 * Kept out of `services` so they do not appear in the nav, the homepage
 * cards, the footer or the inquiry form's service list. Slugs are flat
 * because a /jasa-pembuatan-website/ directory would stop .htaccess from
 * serving jasa-pembuatan-website.html at /jasa-pembuatan-website.
 */
export const subServices: Service[] = [
  {
    number: '01',
    title: 'Jasa Pembuatan Website Company Profile',
    slug: 'jasa-pembuatan-website-company-profile',
    shortTitle: 'Company Profile',
    shortDescription:
      'Website resmi perusahaan yang rapi, cepat, dan enak dibuka dari HP, supaya calon klien percaya sebelum menghubungimu.',
    category: 'development',
    pricingCategories: ['company-profile'],
    solutions: [
      'Desain Sesuai Identitas Brand',
      'Responsive di HP & Laptop',
      'Domain & Hosting Tahun Pertama',
      'Email Bisnis',
      'Tombol WhatsApp',
      'SEO On-Page Dasar (Paket Growth ke Atas)',
    ],
    icon: 'flaticon-web-development',
    parent: 'jasa-pembuatan-website',
  },
  {
    number: '01',
    title: 'Jasa Pembuatan Landing Page',
    slug: 'jasa-pembuatan-landing-page',
    shortTitle: 'Landing Page',
    shortDescription:
      'Satu halaman yang fokus ke satu penawaran dan langsung mengarahkan pengunjung iklan ke WhatsApp.',
    category: 'development',
    pricingCategories: ['landing-page'],
    solutions: [
      'Satu Halaman Fokus Penawaran',
      'Desain Responsive',
      'Tombol & Form WhatsApp',
      'Loading Cepat di HP',
      'Siap Dipasang Pixel & Tracking',
      'Domain Tahun Pertama',
    ],
    icon: 'flaticon-ux-design',
    parent: 'jasa-pembuatan-website',
  },
  {
    number: '01',
    title: 'Jasa Pembuatan Website Toko Online',
    slug: 'jasa-pembuatan-website-toko-online',
    shortTitle: 'Toko Online',
    shortDescription:
      'Toko online milik sendiri, dari katalog yang order-nya langsung ke WhatsApp sampai checkout dan pembayaran otomatis.',
    category: 'development',
    pricingCategories: ['toko-online'],
    solutions: [
      'Katalog Produk & Kategori',
      'Order Langsung ke WhatsApp',
      'Keranjang & Checkout',
      'Payment Gateway & QRIS',
      'Ongkir Otomatis',
      'Dashboard Admin',
    ],
    icon: 'flaticon-portfolio',
    parent: 'jasa-pembuatan-website',
  },
  {
    number: '01',
    title: 'Jasa Pembuatan Website Travel',
    slug: 'jasa-pembuatan-website-travel',
    shortTitle: 'Website Travel',
    shortDescription:
      'Website untuk travel dan tour operator, dari katalog paket dengan tombol WhatsApp sampai booking dan pembayaran online.',
    category: 'development',
    pricingCategories: ['tour-travel'],
    solutions: [
      'Halaman Paket Tour',
      'Filter Paket Tour',
      'Tombol WhatsApp per Paket',
      'Form Booking Otomatis',
      'Payment Gateway',
      'Section Testimoni',
    ],
    icon: 'flaticon-web-development',
    parent: 'jasa-pembuatan-website',
  },

  // ---- Local pages (Tangerang) ----
  // The studio is in Tangerang Selatan and meets Tangerang clients in person
  // (owner-confirmed Nov 2026). "jasa pembuatan website tangerang" ~390/mo
  // SD 8, "jasa seo tangerang" ~210/mo SD 10, "jasa seo tangerang selatan"
  // ~30/mo SD 7 (Ubersuggest, Indonesia). The national pages no longer put
  // "Tangerang" in their titles, so the two do not compete.
  {
    number: '01',
    title: 'Jasa Pembuatan Website Tangerang',
    slug: 'jasa-pembuatan-website-tangerang',
    shortTitle: 'Tangerang',
    shortDescription:
      'Website untuk bisnis di Tangerang, dikerjakan dari Tangerang Selatan, dengan opsi ketemu langsung untuk diskusi dan serah terima.',
    category: 'development',
    pricingCategories: ['company-profile', 'landing-page', 'toko-online'],
    solutions: [
      'Company Profile',
      'Toko Online',
      'Landing Page untuk Iklan',
      'Website UMKM',
      'Ketemu Langsung di Tangerang',
      'Training Kelola Website',
    ],
    icon: 'flaticon-web-development',
    parent: 'jasa-pembuatan-website',
    solutionLinks: {
      'Company Profile': '/jasa-pembuatan-website-company-profile',
      'Toko Online': '/jasa-pembuatan-website-toko-online',
      'Landing Page untuk Iklan': '/jasa-pembuatan-landing-page',
    },
  },
  {
    number: '03',
    title: 'Jasa SEO Tangerang',
    slug: 'jasa-seo-tangerang',
    shortTitle: 'Tangerang',
    shortDescription:
      'SEO untuk bisnis di Tangerang dan Tangerang Selatan yang ingin muncul saat orang di sekitarnya mencari di Google.',
    category: 'marketing',
    pricingCategories: ['seo'],
    solutions: [
      'Riset Keyword Lokal',
      'Optimasi Halaman Layanan',
      'On-Page SEO',
      'Technical SEO',
      'Artikel SEO',
      'Laporan Bulanan',
    ],
    icon: 'flaticon-search',
    parent: 'jasa-seo',
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
 * Service landing pages are live at /<slug>. Kept as a flag so the links can be
 * switched off in one place if a page ever needs to be pulled.
 */
export const SERVICE_PAGES_LIVE = true;
