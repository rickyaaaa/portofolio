/**
 * Page content, lifted verbatim out of index.html.
 *
 * Adding a project is now an entry in `projects` rather than a 20-line copy of
 * the markup block.
 */

/** "Website Bagus Itu Baru Langkah Awal" check-list. */
export const ecosystemPoints = [
  'Website - Bikin Bisnismu Kelihatan Meyakinkan',
  'Iklan - Bawa Orang Yang Emang Lagi Nyari',
  'Traffic - Pengunjung Relevan, Bukan Asal Ramai',
  'Leads - Chat Masuk Dari Calon Customer Serius',
  'Growth - Pertumbuhan Yang Kelihatan Angkanya',
];

export interface ValueProp {
  icon: string;
  title: string;
  description: string;
}

export const values: ValueProp[] = [
  {
    icon: 'flaticon-idea',
    title: 'Fokus ke Bisnismu',
    description: 'Kami tanya dulu target bisnismu apa, baru desain dan fiturnya menyesuaikan.',
  },
  {
    icon: 'flaticon-implementation',
    title: 'Solusi Custom',
    description: 'Kalau template nggak cukup, fiturnya kami bangun dari nol sesuai kebutuhanmu.',
  },
  {
    icon: 'flaticon-social-media-marketing',
    title: 'Website + Marketing',
    description: 'Website dan iklan digarap bareng, jadi hasilnya saling menguatkan.',
  },
  {
    icon: 'flaticon-group',
    title: 'Support Andal',
    description: 'Habis launch kami nggak hilang. Update dan perbaikan tetap kami bantu.',
  },
];

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
  step: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: 'flaticon-search',
    title: 'Diskusi Awal',
    description: 'Ngobrol dulu: bisnismu jualan apa, targetnya siapa, maunya gimana',
    step: 'Tahap-01',
  },
  {
    icon: 'flaticon-analytics',
    title: 'Strategi & Rencana',
    description: 'Kami susun rencananya: fitur, teknologi, dan alur halamannya',
    step: 'Tahap-02',
  },
  {
    icon: 'flaticon-web-development',
    title: 'Desain & Pengerjaan',
    description: 'Desain dan pengerjaan jalan sesuai yang sudah disepakati',
    step: 'Tahap-03',
  },
  {
    icon: 'flaticon-quality-test',
    title: 'Testing & Launching',
    description: 'Dicek dulu di HP dan laptop, kalau sudah beres baru launching',
    step: 'Tahap-04',
  },
  {
    icon: 'flaticon-network',
    title: 'Support & Pengembangan',
    description: 'Setelah launching tetap didampingi: maintenance, update, sampai iklan',
    step: 'Tahap-05',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

/**
 * Placeholder copy only — deliberately not written as if it were a real client
 * quote. Replace once actual testimonials are collected and cleared for use.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      '[ Placeholder 01 - testimoni asli dari client akan tampil di sini setelah dapat izin publikasi. ]',
    name: 'Nama Client',
    company: 'Perusahaan / Project',
  },
  {
    quote:
      '[ Placeholder 02 - testimoni asli dari client akan tampil di sini setelah dapat izin publikasi. ]',
    name: 'Nama Client',
    company: 'Perusahaan / Project',
  },
  {
    quote:
      '[ Placeholder 03 - testimoni asli dari client akan tampil di sini setelah dapat izin publikasi. ]',
    name: 'Nama Client',
    company: 'Perusahaan / Project',
  },
];
