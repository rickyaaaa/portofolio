/**
 * Page content, lifted verbatim out of index.html.
 *
 * Adding a project is now an entry in `projects` rather than a 20-line copy of
 * the markup block.
 */


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
