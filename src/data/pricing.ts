/**
 * Ricksite Studio price list.
 *
 * Website package prices and feature lists follow the existing ricksite.web.id
 * listing. Toko Online, SEO, Meta Ads and Google Ads use the newer figures.
 *
 * Custom web apps are deliberately quote-only: an ERP or billing system has no
 * fixed scope, and listing a number next to the website packages would anchor
 * that work at company-profile money.
 *
 * No package promises rankings, ROAS, leads or sales — only the work delivered.
 */

export interface Package {
  plan: string;
  /** Formatted price, or a word like "Custom". */
  price: string;
  /** Numeric value in rupiah. Omitted for quote-only packages. */
  amount?: number;
  /** e.g. "/bulan" — omitted for one-off project fees. */
  period?: string;
  /** One line on who the package suits. */
  summary: string;
  features: string[];
  /** Highlighted as the recommended tier. */
  featured?: boolean;
}

export interface PricingCategory {
  /** Used for the accordion's collapse target id. */
  id: string;
  title: string;
  /** Shown under the accordion title when expanded. */
  note?: string;
  packages: Package[];
}

export const pricing: PricingCategory[] = [
  {
    id: 'company-profile',
    title: 'Website Company Profile & Landing Page',
    packages: [
      {
        plan: 'Starter',
        price: 'Rp2.500.000',
        amount: 2500000,
        summary: 'Buat bisnis yang baru mau punya website resmi.',
        features: [
          'Domain .com gratis 1 tahun',
          'Hosting 1 tahun (10GB)',
          'Desain responsive di HP, tablet, dan laptop',
          '4 halaman utama',
          '1 email bisnis',
          '2x revisi',
          'Maintenance 15 hari',
        ],
      },
      {
        plan: 'Growth',
        price: 'Rp5.000.000',
        amount: 5000000,
        summary: 'Buat bisnis yang butuh profil lebih lengkap.',
        featured: true,
        features: [
          'Semua fitur Starter',
          '7 halaman',
          '2 email bisnis',
          'Desain premium + galeri',
          'SEO on-page dasar',
          '4x revisi',
          'Maintenance 1 bulan',
        ],
      },
      {
        plan: 'Ultimate',
        price: 'Rp8.500.000',
        amount: 8500000,
        summary: 'Buat bisnis yang butuh fitur khusus dan tampilan maksimal.',
        features: [
          'Semua fitur Growth',
          '8-10 halaman',
          'Fitur custom sesuai kebutuhan',
          'Integrasi Instagram & YouTube',
          'Optimasi kecepatan website',
          'Desain interaktif',
          '5x revisi',
          'Maintenance 1,5 bulan',
        ],
      },
    ],
  },
  {
    id: 'tour-travel',
    title: 'Website Tour & Travel',
    packages: [
      {
        plan: 'Starter',
        price: 'Rp1.500.000',
        amount: 1500000,
        summary: 'Satu halaman yang langsung arahkan calon customer ke WhatsApp.',
        features: [
          'Domain .com gratis 1 tahun',
          '1 halaman landing page',
          'Desain responsive',
          '1 email bisnis',
          'Form kontak WhatsApp',
          'Maintenance 15 hari',
        ],
      },
      {
        plan: 'Growth',
        price: 'Rp3.000.000',
        amount: 3000000,
        summary: 'Buat travel yang punya banyak paket tour.',
        featured: true,
        features: [
          '5-7 halaman',
          'Filter paket tour',
          'Tombol WhatsApp di tiap paket',
          'Section testimoni',
          'SEO on-page dasar',
          '4x revisi',
          'Maintenance 1 bulan',
        ],
      },
      {
        plan: 'Ultimate',
        price: 'Rp6.000.000',
        amount: 6000000,
        summary: 'Buat travel yang mau terima booking dan pembayaran online.',
        features: [
          'Semua fitur Growth',
          'Integrasi payment gateway (Midtrans, Tripay, Xendit, Stripe)',
          'Form booking otomatis',
          'Notifikasi email',
          'Desain interaktif',
          'Maintenance 1,5 bulan',
        ],
      },
    ],
  },
  {
    id: 'toko-online',
    title: 'Website Toko Online',
    note: 'Jumlah produk dan halaman di bawah adalah batas wajar untuk tiap paket, bukan batas keras. Kalau kebutuhanmu sedikit di atasnya, tinggal bilang.',
    packages: [
      {
        plan: 'Starter',
        price: 'Rp3.000.000',
        amount: 3000000,
        summary: 'Katalog rapi, order masuk lewat WhatsApp. Cocok buat yang baru mulai jualan online.',
        features: [
          'Domain .com gratis 1 tahun + hosting 1 tahun',
          '5 halaman: Beranda, Katalog, Detail Produk, Tentang, Kontak',
          'Katalog sampai 30 produk',
          'Tombol pesan langsung ke WhatsApp (CTWA) di tiap produk',
          'Pesan WhatsApp otomatis terisi nama produk yang diklik',
          'Kategori & pencarian produk',
          'Desain responsive + SEO on-page dasar',
          '3x revisi, maintenance 1 bulan',
        ],
      },
      {
        plan: 'Growth',
        price: 'Rp7.000.000',
        amount: 7000000,
        featured: true,
        summary: 'Customer bisa bayar langsung di website, tanpa perlu chat dulu.',
        features: [
          'Semua fitur Starter',
          '8 halaman + katalog sampai 150 produk',
          'Keranjang belanja & checkout otomatis',
          'Payment gateway: transfer, virtual account, e-wallet, QRIS',
          'Hitung ongkir otomatis sesuai kurir dan alamat',
          'Dashboard admin: kelola produk, stok, dan pesanan',
          'Notifikasi order masuk via email',
          'Kode voucher / diskon',
          '4x revisi, maintenance 1,5 bulan',
        ],
      },
      {
        plan: 'Enterprise',
        price: 'Rp12.000.000',
        amount: 12000000,
        summary: 'Buat toko yang produknya banyak, tim lebih dari satu, dan butuh laporan.',
        features: [
          'Semua fitur Growth',
          'Produk tanpa batas + varian (ukuran, warna) dengan stok per varian',
          'Multi-admin dengan hak akses berbeda (owner, admin, gudang)',
          'Laporan penjualan dan stok yang bisa diunduh',
          'Multi-kurir dengan pelacakan resi',
          'Halaman custom sesuai kebutuhan bisnis',
          'Optimasi kecepatan + integrasi Meta Pixel & Google Analytics',
          '5x revisi, maintenance 3 bulan',
          'Sesi training penggunaan untuk tim',
        ],
      },
    ],
  },
  {
    id: 'seo',
    title: 'Optimasi SEO',
    note: 'Hasil SEO dipengaruhi kompetisi keyword dan butuh waktu. Kami fokus ke proses yang benar dan laporan yang transparan, bukan janji peringkat instan.',
    packages: [
      {
        plan: 'SEO Bulanan',
        price: 'Rp1.500.000',
        amount: 1500000,
        period: '/bulan',
        summary: 'Biar website kamu ketemu pas calon customer nyari di Google.',
        features: [
          'Audit SEO awal & riset keyword sesuai target pasar',
          'Optimasi on-page: meta title, deskripsi, heading, dan alt image',
          'Technical check: kecepatan, mobile-friendly, dan indexing Google',
          'Setup & monitoring Google Search Console dan Analytics',
          '4 artikel SEO per bulan',
          'Laporan bulanan: posisi keyword, traffic, dan rekomendasi lanjutan',
        ],
      },
    ],
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram)',
    note: 'Harga belum termasuk saldo iklan.',
    packages: [
      {
        plan: 'Meta Ads Bulanan',
        price: 'Rp1.500.000',
        amount: 1500000,
        period: '/bulan',
        summary: 'Iklan yang diarahkan ke orang yang paling mungkin beli.',
        features: [
          'Konsultasi awal untuk analisis mendalam bisnis & target pasar',
          'Setup Business Manager, pixel, dan struktur campaign',
          'Eksekusi kampanye digital marketing profesional & terukur',
          'Monitoring berkala, optimasi iklan, & laporan performa transparan',
          'Support berkelanjutan langsung dari tim praktisi',
        ],
      },
    ],
  },
  {
    id: 'google-ads',
    title: 'Google Ads Full Handle',
    note: 'Harga belum termasuk saldo iklan. Pengelolaan Google Ads dengan strategi rapi agar budget lebih efisien.',
    packages: [
      {
        plan: 'Google Ads Full Handle',
        price: 'Rp2.000.000',
        amount: 2000000,
        period: '/bulan',
        summary: 'Muncul paling atas pas orang nyari produk atau jasa kamu.',
        features: [
          'Konsultasi awal untuk analisis mendalam bisnis & target pasar',
          'Eksekusi kampanye digital marketing profesional & terukur',
          'Monitoring berkala, optimasi iklan, & laporan performa transparan',
          'Support berkelanjutan langsung dari tim praktisi',
        ],
      },
    ],
  },
  {
    id: 'web-app',
    title: 'Custom Web App & Sistem Internal',
    note: 'Harga menyesuaikan kompleksitas sistem. Cerita dulu kebutuhannya, nanti kami buatkan estimasi.',
    packages: [
      {
        plan: 'Custom Project',
        price: 'Custom',
        summary: 'Dashboard, ERP, booking system, sampai sistem internal bisnis.',
        features: [
          'Konsultasi & analisis alur kerja bisnis',
          'Rancangan fitur, struktur data, dan hak akses per role',
          'Pengembangan bertahap dengan progress yang bisa dipantau',
          'Testing, deployment, dan pendampingan setelah sistem jalan',
        ],
      },
    ],
  },
];

/** Options for the inquiry form's budget dropdown. */
export const BUDGET_OPTIONS = [
  'Di bawah Rp2 juta',
  'Rp2 - 5 juta',
  'Rp5 - 10 juta',
  'Rp10 - 20 juta',
  'Di atas Rp20 juta',
  'Belum ada patokan',
];
