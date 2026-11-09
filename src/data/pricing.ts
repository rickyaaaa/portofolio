/**
 * Ricksite Studio price list.
 *
 * Website package prices and feature lists follow the existing ricksite.web.id
 * listing. Toko Online, SEO, Meta Ads and Google Ads use the newer figures.
 *
 * Custom web apps show only a starting price (Rp3.000.000 for a simple system,
 * owner-confirmed Nov 2026). An ERP or multi-role system has no fixed scope, so
 * it is still quoted after analysis; the package summary says so.
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
    // Set by Claude (Nov 2026) at the same Rp1.500.000 the tour & travel
    // Starter already charges for a one-page landing page; adjust freely.
    id: 'landing-page',
    title: 'Landing Page',
    note: 'Butuh lebih dari satu halaman atau fitur khusus? Tinggal cerita, nanti kami buatkan penawaran.',
    packages: [
      {
        plan: 'Landing Page',
        price: 'Rp1.500.000',
        amount: 1500000,
        summary: 'Satu halaman untuk satu penawaran, siap jadi tujuan iklan.',
        features: [
          'Domain .com gratis 1 tahun',
          '1 halaman landing page',
          'Desain responsive di HP, tablet, dan laptop',
          '1 email bisnis',
          'Tombol dan form WhatsApp',
          'Maintenance 15 hari',
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
    // Three tiers modelled on how jasaahliseo.com splits its packages (main
    // keywords targeted, articles per month, competition level), Nov 2026.
    // Basic Rp3.500.000 is the owner's figure; Pro and Premium prices were
    // proposed by Claude for the owner to confirm. No traffic or ranking
    // guarantee, unlike the reference.
    note: 'Hasil SEO dipengaruhi kompetisi keyword dan butuh waktu, jadi kami tidak menjanjikan peringkat instan. Biaya backlink berbayar, kalau dipakai, dihitung terpisah.',
    packages: [
      {
        plan: 'Basic',
        price: 'Rp3.500.000',
        amount: 3500000,
        period: '/bulan',
        summary: 'Untuk bisnis lokal atau niche dengan persaingan rendah.',
        features: [
          'Target 5 keyword utama',
          'Audit SEO awal & riset keyword sesuai target pasar',
          'Optimasi on-page: meta title, deskripsi, heading, dan alt image',
          'Perbaikan technical SEO: kecepatan, mobile-friendly, dan indexing',
          'Setup & monitoring Google Search Console dan Analytics',
          '4 artikel SEO per bulan',
          'Laporan bulanan: posisi keyword, traffic, dan rekomendasi',
        ],
      },
      {
        plan: 'Pro',
        price: 'Rp6.000.000',
        amount: 6000000,
        period: '/bulan',
        summary: 'Untuk persaingan menengah dan bisnis yang ingin tumbuh lebih cepat.',
        featured: true,
        features: [
          'Semua fitur Basic',
          'Target 10 keyword utama',
          '8 artikel SEO per bulan',
          'Optimasi agar mudah dikutip jawaban AI (Google AI Overview & ChatGPT)',
          'Pemantauan posisi keyword mingguan',
          'Rekomendasi & pengelolaan backlink',
        ],
      },
      {
        plan: 'Premium',
        price: 'Rp10.000.000',
        amount: 10000000,
        period: '/bulan',
        summary: 'Untuk persaingan menengah-tinggi atau website dengan banyak layanan.',
        features: [
          'Semua fitur Pro',
          'Target 15 keyword utama',
          '12 artikel SEO per bulan',
          'Optimasi halaman layanan dan halaman per area',
          'Optimasi Google Business Profile untuk bisnis lokal',
          'Laporan mingguan + sesi evaluasi bulanan',
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
          'Support langsung dari praktisi yang pegang akun iklanmu',
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
          'Support langsung dari praktisi yang pegang akun iklanmu',
        ],
      },
    ],
  },
  {
    // Prices set by Claude on the owner's go-ahead (Nov 2026) as a starting
    // point under the SEO/ads retainers; adjust freely. Resolusiweb lists
    // maintenance from Rp275.000/bulan for comparison.
    id: 'maintenance',
    title: 'Maintenance & Perbaikan Website',
    note: 'Berlaku juga untuk website buatan pihak lain. Website yang belum pernah kami pegang kami cek dulu kondisinya sebelum mulai.',
    packages: [
      {
        plan: 'Maintenance Basic',
        price: 'Rp350.000',
        amount: 350000,
        period: '/bulan',
        summary: 'Perawatan rutin biar website tetap aman dan update.',
        features: [
          'Update sistem, tema, dan plugin',
          'Backup mingguan',
          'Cek rutin website tetap online dan bebas malware',
          'Perbaikan error ringan',
          'Update konten (teks, gambar, harga) sampai 5x per bulan',
          'Laporan bulanan',
        ],
      },
      {
        plan: 'Maintenance Pro',
        price: 'Rp750.000',
        amount: 750000,
        period: '/bulan',
        featured: true,
        summary: 'Buat website yang dipakai jualan tiap hari dan nggak boleh lama bermasalah.',
        features: [
          'Semua fitur Basic',
          'Backup harian',
          'Cek dan optimasi kecepatan tiap bulan',
          'Perbaikan bug dan error',
          'Update konten sampai 15x per bulan',
          'Pengingat perpanjangan domain, hosting, dan SSL',
          'Permintaan didahulukan',
        ],
      },
      {
        plan: 'Perbaikan Sekali Jalan',
        price: 'Rp500.000',
        amount: 500000,
        summary: 'Harga mulai dari angka ini. Angka pastinya kami kasih setelah cek kondisi website.',
        features: [
          'Cek kondisi website dan sumber masalahnya',
          'Perbaikan error, tampilan rusak, atau website yang lambat',
          'Bisa untuk website buatan pihak lain',
          'Harga pasti disepakati sebelum mulai kerja',
          'Bisa lanjut ke maintenance bulanan setelahnya',
        ],
      },
    ],
  },
  {
    id: 'web-app',
    title: 'Custom Web App & Sistem Internal',
    note: 'Mulai Rp3.000.000 untuk sistem sederhana, pengerjaan sekitar 14-30 hari. Harga akhir menyesuaikan fitur, role, dan integrasi.',
    packages: [
      {
        plan: 'Custom Project',
        price: 'Rp3.000.000',
        amount: 3000000,
        summary: 'Harga awal untuk sistem sederhana. ERP dan sistem multi-role dihitung sesuai kebutuhan.',
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
