/**
 * Topics the blog index groups articles under. Each article names one in its
 * frontmatter (`topic:`). A topic with no articles yet is not shown.
 *
 * The intro and service links give the index real text of its own (it used to
 * be cards only, which Ubersuggest flagged as low word count) and point each
 * group at the service page the articles support.
 */
export type TopicId = 'website' | 'aplikasi' | 'iklan' | 'seo';

export interface BlogTopic {
  id: TopicId;
  title: string;
  intro: string;
  services: { href: string; label: string }[];
}

export const blogTopics: BlogTopic[] = [
  {
    id: 'website',
    title: 'Biaya & Cara Memilih Jasa Website',
    intro:
      'Berapa biaya bikin website, apa saja yang biasanya termasuk di paket, biaya apa yang sering baru ketahuan belakangan, dan cara menilai jasa website sebelum membayar. Cocok dibaca sebelum minta penawaran ke vendor mana pun.',
    services: [{ href: '/jasa-pembuatan-website', label: 'Jasa Pembuatan Website' }],
  },
  {
    id: 'aplikasi',
    title: 'Aplikasi Web untuk Bisnis',
    intro:
      'Untuk bisnis yang masih rekap data di Excel dan WhatsApp: kapan perlu aplikasi sendiri, berapa biayanya, berapa lama pembuatannya, dan bedanya dengan aplikasi jadi yang berlangganan.',
    services: [{ href: '/jasa-pembuatan-aplikasi', label: 'Jasa Pembuatan Aplikasi Web' }],
  },
  {
    id: 'iklan',
    title: 'Iklan Google, Facebook & Instagram',
    intro:
      'Cara Google Ads dan Meta menghitung biaya iklan, cara menentukan budget pertama dari target chat, dan hal-hal yang membuat budget habis tanpa ada calon customer yang menghubungi.',
    services: [
      { href: '/jasa-google-ads', label: 'Jasa Google Ads' },
      { href: '/jasa-meta-ads', label: 'Jasa Iklan Facebook & Instagram' },
    ],
  },
  {
    id: 'seo',
    title: 'SEO',
    intro:
      'Cara membuat website muncul di hasil pencarian Google tanpa bayar per klik, dan apa yang bisa diharapkan dari SEO dalam beberapa bulan pertama.',
    services: [{ href: '/jasa-seo', label: 'Jasa SEO' }],
  },
];
