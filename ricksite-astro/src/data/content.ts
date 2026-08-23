/**
 * Page content, lifted verbatim out of index.html.
 *
 * Adding a project is now an entry in `projects` rather than a 20-line copy of
 * the markup block.
 */

export interface Project {
  /** File in public/assets/images/ricksite/projects/ */
  image: string;
  alt: string;
  title: string;
  /** The two chips rendered above the title. */
  categories: [string, string];
}

export const projects: Project[] = [
  {
    image: 'project-01.svg',
    alt: 'Project Image',
    title: 'Website Booking Villa',
    categories: ['Perhotelan', 'Sistem Booking'],
  },
  {
    image: 'project-02.svg',
    alt: 'Project Image',
    title: 'Boutique Nayla',
    categories: ['E-Commerce', 'Pembuatan Website'],
  },
  {
    image: 'project-03.svg',
    alt: 'Project Image',
    title: 'Vintera Property Management',
    categories: ['Manajemen Properti', 'Aplikasi Web Custom'],
  },
  {
    image: 'project-04.svg',
    alt: 'Project Image',
    title: 'YokPrinting ERP',
    categories: ['Percetakan & Manufaktur', 'Sistem ERP Custom'],
  },
  {
    image: 'project-05.svg',
    alt: 'Project Image',
    title: 'Website Travel',
    categories: ['Pariwisata', 'Website & Booking'],
  },
  {
    image: 'project-06.svg',
    alt: 'Project Image',
    title: 'Plugin WordPress Custom',
    categories: ['Travel', 'Pembuatan Plugin'],
  },
];

export interface Service {
  number: string;
  title: string;
  /** Copy with a <span> wrapping the highlighted phrase. */
  descriptionHtml: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Pembuatan Website',
    descriptionHtml:
      'Website <span>company profile</span>, landing page, travel, property, sampai hospitality. Tampil profesional, cepat dibuka, dan bikin pengunjung gampang jadi customer.',
  },
  {
    number: '02',
    title: 'Pengembangan Web Custom',
    descriptionHtml:
      'Butuh yang nggak bisa dijawab template? Dashboard, <span>booking system</span>, ERP, sampai fitur khusus. Kami bangun sesuai cara kerja bisnismu.',
  },
  {
    number: '03',
    title: 'Iklan Digital',
    descriptionHtml:
      '<span>Meta Ads</span> yang tepat sasaran, biar website kamu dikunjungi orang yang memang lagi cari produk atau jasa seperti punyamu.',
  },
];

/** Hero service pills (agenko-iconic-box style-one). */
export const heroServices = [
  { icon: 'flaticon-web-development', title: 'Pembuatan Website' },
  { icon: 'flaticon-cloud-computing', title: 'Web App Custom' },
  { icon: 'flaticon-announcement', title: 'Iklan Digital' },
];

/** "Website Bagus Itu Baru Langkah Awal" check-list. */
export const ecosystemPoints = [
  'Website - Bikin Bisnismu Terlihat Kredibel',
  'Iklan - Mendatangkan Orang Yang Tepat',
  'Traffic - Pengunjung Yang Relevan, Bukan Asal Ramai',
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
    description: 'Kami mulai dari tujuan bisnismu dulu, baru desain menyesuaikan. Bukan sebaliknya.',
  },
  {
    icon: 'flaticon-implementation',
    title: 'Solusi Custom',
    description: 'Kalau template nggak cukup, kami bangun fiturnya dari nol sesuai kebutuhanmu.',
  },
  {
    icon: 'flaticon-social-media-marketing',
    title: 'Website + Iklan',
    description: 'Website dan iklan digital digarap bareng, jadi hasilnya saling menguatkan.',
  },
  {
    icon: 'flaticon-group',
    title: 'Support Andal',
    description: 'Website launch bukan akhir cerita. Kami tetap standby buat update dan perbaikan.',
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
    description: 'Ngobrol dulu soal bisnismu: tujuan, target market, dan kebutuhannya',
    step: 'Tahap-01',
  },
  {
    icon: 'flaticon-analytics',
    title: 'Strategi & Rencana',
    description: 'Menyusun rencana: fiturnya apa saja, teknologinya apa, alurnya gimana',
    step: 'Tahap-02',
  },
  {
    icon: 'flaticon-web-development',
    title: 'Desain & Pengerjaan',
    description: 'Desain dan pengerjaan website sesuai yang sudah disepakati',
    step: 'Tahap-03',
  },
  {
    icon: 'flaticon-quality-test',
    title: 'Testing & Launching',
    description: 'Dicek menyeluruh di HP dan laptop, baru website di-launch',
    step: 'Tahap-04',
  },
  {
    icon: 'flaticon-network',
    title: 'Support & Pengembangan',
    description: 'Setelah launch tetap didampingi: maintenance, update, sampai iklan',
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
