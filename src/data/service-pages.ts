/**
 * Long-form copy for each service landing page, keyed by slug.
 *
 * Kept out of services.ts so that file stays a compact catalogue: the homepage
 * only needs title, price and description, while these pages need problem
 * framing, FAQs and related work.
 *
 * `relatedProjects` is empty for the marketing services on purpose. There are
 * no SEO or ads case studies yet, and showing the website projects on an SEO
 * page would imply work that was not done.
 */

import type { ProcessStep } from './content';

export interface ServicePageContent {
  /**
   * <title>, kept under 60 characters so Google shows it whole. Leads with the
   * phrase this page targets — picked from Ubersuggest data (Indonesia, Nov
   * 2026) for phrases a new site can realistically rank for.
   */
  seoTitle: string;
  /** Page H1. May differ from service.title, which stays short for nav and cards. */
  h1: string;
  /** Meta description, under ~155 characters. */
  metaDescription: string;
  /** Opening paragraph in the deliverables section, carrying the target phrases. */
  intro: string;
  /**
   * The service as people search for it, used in the scope, price and form
   * headings ("Harga Jasa Iklan Facebook Ads"). Differs from service.title
   * where the searched phrase is not the short nav label.
   */
  keyword: string;
  /** H2 over the problem list. Unique per page so it can carry a phrase. */
  problemsHeading: string;
  /** H2 over the FAQ. */
  faqHeading: string;
  /** Closing CTA heading; the default talks about websites, wrong on ads pages. */
  ctaHeading: string;
  /** Optional "how we work" section, built from what the packages already promise. */
  processHeading?: string;
  process?: ProcessStep[];
  /** One line under the H1 in the page banner. */
  tagline: string;
  /** Symptoms a visitor recognises in their own business. */
  problems: string[];
  faqs: { q: string; a: string }[];
  /** Project slugs from data/projects.ts. */
  relatedProjects: string[];
}

export const servicePages: Record<string, ServicePageContent> = {
  'jasa-pembuatan-website': {
    keyword: 'Jasa Pembuatan Website',
    problemsHeading: 'Tanda Bisnismu Butuh Website Profesional.',
    faqHeading: 'Pertanyaan Seputar Jasa Pembuatan Website.',
    ctaHeading: 'Siap Punya Website yang Dapat Orderan?',
    seoTitle: 'Jasa Pembuatan Website Profesional Tangerang | Ricksite',
    h1: 'Jasa Pembuatan Website Profesional',
    metaDescription:
      'Jasa pembuatan website profesional dari Tangerang Selatan: company profile, toko online, website UMKM, dan travel. Cepat, rapi, enak dibuka dari HP.',
    intro:
      'Ricksite Studio adalah jasa pembuatan website profesional yang berbasis di Tangerang Selatan dan melayani bisnis di seluruh Indonesia. Kami bikin website company profile untuk perusahaan, toko online, website UMKM, sampai website travel dan booking — cepat, rapi, dan enak dibuka dari HP.',
    tagline:
      'Website yang rapi, cepat, dan siap nerima calon customer — dibuka dari HP maupun laptop.',
    problems: [
      'Masih jualan modal Instagram doang, calon customer susah percaya',
      'Punya website tapi lemot dan berantakan pas dibuka dari HP',
      'Website cuma jadi pajangan, nggak ada yang chat dari situ',
      'Mau update konten sendiri tapi nggak ngerti caranya',
    ],
    faqs: [
      {
        q: 'Berapa lama pengerjaannya?',
        a: 'Tergantung paket. Landing page 1 halaman biasanya 3-7 hari kerja, website 5-7 halaman sekitar 2-3 minggu. Timeline pastinya kami kasih setelah kebutuhan dan materinya jelas.',
      },
      {
        q: 'Domain dan hosting sudah termasuk?',
        a: 'Sudah, untuk tahun pertama. Perpanjangan tahun berikutnya dibayar terpisah dan kami kasih tahu jauh-jauh hari sebelum jatuh tempo.',
      },
      {
        q: 'Nanti bisa update konten sendiri?',
        a: 'Bisa. Kami serahkan akses admin plus panduan singkat cara ganti teks, gambar, dan produk. Kalau masih bingung, tinggal chat.',
      },
      {
        q: 'Website saya sudah ada, bisa dibenerin aja?',
        a: 'Bisa. Cerita dulu kondisinya, nanti kami cek mana yang cukup diperbaiki dan mana yang justru lebih hemat kalau dibangun ulang.',
      },
      {
        q: 'Bisa bikin website company profile, toko online, atau website UMKM?',
        a: 'Bisa. Website company profile mulai Rp2.500.000, website toko online mulai Rp3.000.000, dan website travel mulai Rp1.500.000. Isi lengkap tiap paket ada di bagian harga di atas, jadi kamu bisa pilih yang pas dengan kebutuhan dan budget bisnismu.',
      },
    ],
    relatedProjects: ['abunawas-travel', 'bernard-bali-tours', 'bali-rejeng-jeep-tour'],
  },

  'jasa-pembuatan-aplikasi': {
    // Web apps for business only, no mobile. "kasir" is searched more than
    // "POS" (~50 vs ~20/month), so the copy says "kasir (POS)".
    keyword: 'Jasa Pembuatan Aplikasi Web',
    problemsHeading: 'Tanda Bisnismu Butuh Aplikasi Web Sendiri.',
    faqHeading: 'Pertanyaan Seputar Jasa Pembuatan Aplikasi Web.',
    ctaHeading: 'Siap Pindahkan Kerjaan Manual ke Sistem?',
    processHeading: 'Cara Kerja Jasa Pembuatan Aplikasi Web.',
    process: [
      {
        icon: 'flaticon-search',
        title: 'Analisis Alur Kerja',
        description: 'Kami pelajari dulu cara kerja bisnismu sekarang: siapa pakai apa, datanya dari mana, dan bagian mana yang paling makan waktu.',
        step: 'Tahap-01',
      },
      {
        icon: 'flaticon-ux-design',
        title: 'Rancangan Sistem',
        description: 'Fitur, struktur data, dan hak akses tiap role kami susun dan sepakati bareng sebelum mulai coding.',
        step: 'Tahap-02',
      },
      {
        icon: 'flaticon-web-development',
        title: 'Pengembangan Bertahap',
        description: 'Sistem dibangun per bagian, dan progresnya bisa kamu pantau dan coba langsung di tiap tahap.',
        step: 'Tahap-03',
      },
      {
        icon: 'flaticon-quality-test',
        title: 'Testing & Pendampingan',
        description: 'Setelah dites dan dipasang, tim kamu kami dampingi sampai sistemnya lancar dipakai sehari-hari.',
        step: 'Tahap-04',
      },
    ],
    seoTitle: 'Jasa Pembuatan Aplikasi Web, ERP & Kasir | Ricksite Studio',
    h1: 'Jasa Pembuatan Aplikasi Web untuk Bisnis',
    metaDescription:
      'Jasa pembuatan aplikasi web untuk bisnis: ERP, aplikasi kasir (POS), dashboard, booking, sampai sistem internal sesuai alur kerjamu. Konsultasi gratis.',
    intro:
      'Ricksite Studio menyediakan jasa pembuatan aplikasi berbasis web untuk bisnis di seluruh Indonesia, dikerjakan dari Tangerang Selatan. Kerjaan manual yang bikin repot kami pindahkan ke sistem: ERP, aplikasi kasir (POS), dashboard, booking, sampai alur kerja khusus bisnismu.',
    tagline:
      'Sistem yang dibangun ngikutin alur kerja bisnismu, bukan maksa bisnismu ikut template.',
    problems: [
      'Data masih tersebar di Excel dan chat WhatsApp',
      'Laporan harus direkap manual tiap akhir bulan',
      'Tiap orang pegang versi file yang beda-beda',
      'Sudah beli software jadi, tapi fiturnya nggak cocok sama cara kerja tim',
    ],
    faqs: [
      {
        q: 'Biayanya berapa?',
        a: 'Tergantung kompleksitas sistem — jumlah fitur, role pengguna, dan integrasinya. Kami buatkan estimasi setelah alur kerjanya jelas. Konsultasi awal nggak dipungut biaya.',
      },
      {
        q: 'Berapa lama pengerjaannya?',
        a: 'Sistem sederhana sekitar 1-2 bulan. ERP atau aplikasi multi-role bisa 3 bulan ke atas. Dikerjakan bertahap biar progresnya kelihatan, bukan hilang berbulan-bulan terus tiba-tiba jadi.',
      },
      {
        q: 'Datanya aman?',
        a: 'Sistem dibangun dengan hak akses per role, jadi tiap orang cuma bisa lihat yang jadi urusannya. Backup dijadwalkan berkala, dan server bisa pakai punya kamu sendiri kalau mau data sepenuhnya di tangan kamu.',
      },
      {
        q: 'Bisa lanjutin sistem yang sudah ada?',
        a: 'Bisa, tergantung kondisi kode dan datanya. Kami audit dulu, terus kasih tahu jujur mana yang lebih masuk akal: dilanjutkan atau dibangun ulang.',
      },
      {
        q: 'Apa bedanya aplikasi web dengan aplikasi yang di-install?',
        a: 'Aplikasi web dibuka lewat browser di HP, tablet, atau laptop tanpa perlu install. Update cukup sekali di server dan langsung dipakai semua pengguna, jadi cocok untuk sistem internal seperti ERP, aplikasi kasir, atau dashboard.',
      },
      {
        q: 'Bisa bikin aplikasi kasir (POS) atau ERP sesuai bisnis saya?',
        a: 'Bisa. Aplikasi kasir berbasis web maupun ERP kami bangun mengikuti alur bisnismu — produk, stok, transaksi, sampai laporan — bukan memaksa bisnismu ikut template software jadi.',
      },
    ],
    relatedProjects: ['yokprinting-erp', 'sipnona', 'sab-swadaya'],
  },

  'jasa-seo': {
    keyword: 'Jasa SEO',
    problemsHeading: 'Tanda Website Kamu Butuh Jasa SEO.',
    faqHeading: 'Pertanyaan Seputar Jasa SEO.',
    ctaHeading: 'Siap Ditemukan Calon Customer di Google?',
    processHeading: 'Cara Kerja Jasa SEO Kami.',
    process: [
      {
        icon: 'flaticon-search',
        title: 'Audit & Riset Keyword',
        description: 'Kami cek kondisi website dan cari keyword yang benar-benar dicari calon customer di target pasarmu.',
        step: 'Tahap-01',
      },
      {
        icon: 'flaticon-web-development',
        title: 'Optimasi On-Page & Teknis',
        description: 'Judul, deskripsi, heading, kecepatan, tampilan di HP, dan indexing Google kami rapikan.',
        step: 'Tahap-02',
      },
      {
        icon: 'flaticon-text',
        title: 'Konten SEO',
        description: '4 artikel per bulan yang menjawab pertanyaan calon customer dan mengarahkan mereka ke halaman layananmu.',
        step: 'Tahap-03',
      },
      {
        icon: 'flaticon-analytics',
        title: 'Laporan & Evaluasi',
        description: 'Tiap bulan kamu dapat laporan posisi keyword, traffic, dan rekomendasi langkah berikutnya.',
        step: 'Tahap-04',
      },
    ],
    seoTitle: 'Jasa SEO Profesional di Tangerang | Ricksite Studio',
    h1: 'Jasa SEO Profesional',
    metaDescription:
      'Jasa SEO profesional dari Tangerang Selatan untuk bisnis di seluruh Indonesia: riset keyword, on-page, technical SEO, dan laporan bulanan yang transparan.',
    intro:
      'Ricksite Studio adalah jasa SEO profesional yang berbasis di Tangerang Selatan dan menangani website bisnis di seluruh Indonesia. Kami bantu website kamu muncul pas calon customer nyari di Google — termasuk SEO lokal untuk bisnis yang melayani satu kota dan SEO untuk toko online — tanpa harus bayar per klik.',
    tagline:
      'Biar website kamu ketemu pas orang lagi nyari, tanpa harus bayar per klik.',
    problems: [
      'Website sudah jadi tapi nggak pernah muncul di Google',
      'Kalah sama kompetitor padahal produk kamu lebih bagus',
      'Ramai cuma pas iklan jalan, begitu distop langsung sepi',
      'Nggak tahu keyword apa yang sebenarnya dicari calon customer',
    ],
    faqs: [
      {
        q: 'Berapa lama hasilnya kelihatan?',
        a: 'SEO butuh waktu. Biasanya pergerakan mulai terlihat sekitar 2-3 bulan, tergantung kompetisi keyword dan kondisi awal website. Kami nggak menjanjikan hasil instan.',
      },
      {
        q: 'Dijamin halaman 1 Google?',
        a: 'Nggak ada yang bisa menjamin itu, termasuk kami — peringkat ditentukan algoritma Google, bukan penyedia jasa. Yang kami pastikan: prosesnya benar dan laporannya transparan tiap bulan.',
      },
      {
        q: 'Bedanya sama Google Ads apa?',
        a: 'SEO itu organik: pelan tapi hasilnya bertahan walau berhenti dibayar. Google Ads bayar per klik: cepat tapi berhenti begitu budget habis. Banyak bisnis pakai dua-duanya.',
      },
      {
        q: 'Website saya bukan buatan Ricksite, bisa?',
        a: 'Bisa, selama kami dikasih akses untuk melakukan perubahan di website dan Search Console-nya.',
      },
      {
        q: 'Berapa harga jasa SEO?',
        a: 'Rp1.500.000/bulan, sudah termasuk audit awal, riset keyword, optimasi on-page dan teknis, 4 artikel SEO per bulan, serta laporan bulanan.',
      },
      {
        q: 'Apa itu SEO lokal, dan apakah bisnis saya butuh?',
        a: 'SEO lokal mengoptimasi website supaya muncul saat orang mencari jasa di kota tertentu, misalnya "jasa seo tangerang". Cocok kalau pelangganmu kebanyakan datang dari satu kota atau wilayah.',
      },
      {
        q: 'Apa saja yang ada di laporan bulanan?',
        a: 'Posisi keyword yang ditargetkan, traffic dari Google, dan rekomendasi untuk bulan berikutnya — dengan data dari Google Search Console dan Analytics milikmu sendiri.',
      },
    ],
    relatedProjects: [],
  },

  'jasa-google-ads': {
    keyword: 'Jasa Google Ads',
    problemsHeading: 'Tanda Iklan Google Kamu Perlu Dikelola Ulang.',
    faqHeading: 'Pertanyaan Seputar Jasa Google Ads.',
    ctaHeading: 'Siap Muncul Paling Atas di Google?',
    processHeading: 'Cara Kerja Jasa Google Ads Kami.',
    process: [
      {
        icon: 'flaticon-search',
        title: 'Konsultasi & Riset Keyword',
        description: 'Kami pelajari bisnis dan target pasarmu, lalu cari keyword yang dicari orang yang siap beli.',
        step: 'Tahap-01',
      },
      {
        icon: 'flaticon-implementation',
        title: 'Struktur Campaign & Tracking',
        description: 'Campaign disusun rapi dan conversion tracking dipasang, supaya ketahuan iklan mana yang menghasilkan chat atau order.',
        step: 'Tahap-02',
      },
      {
        icon: 'flaticon-analytics',
        title: 'Optimasi Budget',
        description: 'Iklan dipantau berkala: keyword yang boros dimatikan, yang menghasilkan diperkuat.',
        step: 'Tahap-03',
      },
      {
        icon: 'flaticon-text',
        title: 'Laporan Performa',
        description: 'Kamu dapat laporan yang jelas, dan angkanya bisa kamu cek sendiri di akun Google Ads milikmu.',
        step: 'Tahap-04',
      },
    ],
    seoTitle: 'Jasa Google Ads Profesional | Ricksite Studio',
    h1: 'Jasa Google Ads Profesional',
    metaDescription:
      'Jasa Google Ads profesional: riset keyword iklan, struktur campaign, conversion tracking, dan laporan jelas. Muncul paling atas pas calon customer nyari.',
    intro:
      'Ricksite Studio menyediakan jasa Google Ads profesional untuk bisnis di seluruh Indonesia, dikelola dari Tangerang Selatan. Iklan kamu muncul paling atas pas orang lagi nyari produk atau jasa yang kamu jual, dengan budget yang dioptimasi dan laporan yang bisa kamu cek sendiri.',
    tagline:
      'Muncul paling atas pas orang lagi nyari produk atau jasa yang kamu jual.',
    problems: [
      'Iklan sudah jalan tapi budget habis tanpa ada yang chat',
      'Nggak tahu keyword mana yang benar-benar menghasilkan',
      'Iklan tampil ke orang yang jelas bukan target kamu',
      'Pengelola sebelumnya nggak pernah kasih laporan yang jelas',
    ],
    faqs: [
      {
        q: 'Saldo iklan sudah termasuk?',
        a: 'Belum. Rp2.000.000/bulan itu biaya pengelolaan. Saldo iklan dibayar langsung ke Google lewat akun kamu, jadi kamu bisa lihat sendiri berapa yang terpakai — nggak lewat kami.',
      },
      {
        q: 'Saldo iklan sebaiknya berapa?',
        a: 'Tergantung industri, tingkat persaingan keyword, dan luas area target. Kami bantu hitung angka yang masuk akal setelah tahu produk dan lokasi targetnya.',
      },
      {
        q: 'Akun Google Ads pakai punya siapa?',
        a: 'Sebaiknya punya kamu. Jadi data, history, dan performa campaign tetap kamu yang pegang kalau suatu saat ganti pengelola.',
      },
      {
        q: 'Dijamin dapat berapa leads?',
        a: 'Nggak ada yang bisa menjamin angka pasti — itu dipengaruhi harga, penawaran, dan kompetisi. Yang kami kerjakan: menyusun campaign yang rapi dan mengoptimasi berdasarkan data yang masuk.',
      },
      {
        q: 'Google Ads atau Meta Ads, mana yang lebih cocok?',
        a: 'Google Ads menjangkau orang yang sedang mencari produk atau jasamu, jadi cocok untuk calon customer yang sudah siap beli. Meta Ads (Facebook & Instagram) menjangkau orang berdasarkan minat sebelum mereka mencari. Banyak bisnis memakai keduanya; kami bantu tentukan mana yang perlu didahulukan.',
      },
      {
        q: 'Apa itu conversion tracking?',
        a: 'Pencatatan aksi penting dari iklan, misalnya klik WhatsApp, isi form, atau pembelian. Dengan ini kelihatan keyword dan iklan mana yang benar-benar menghasilkan, bukan cuma ramai klik.',
      },
    ],
    relatedProjects: [],
  },

  'jasa-meta-ads': {
    // "jasa iklan facebook ads" is searched ~2,900x/month vs ~170x for
    // "jasa meta ads", so the page leads with the words buyers actually use.
    keyword: 'Jasa Iklan Facebook Ads',
    problemsHeading: 'Tanda Iklan Facebook & Instagram Kamu Belum Efektif.',
    faqHeading: 'Pertanyaan Seputar Jasa Iklan Facebook Ads.',
    ctaHeading: 'Siap Pasang Iklan yang Mendatangkan Pembeli?',
    processHeading: 'Cara Kerja Jasa Iklan Facebook Ads Kami.',
    process: [
      {
        icon: 'flaticon-search-user',
        title: 'Analisis Bisnis & Target Pasar',
        description: 'Kami pelajari produk, calon pembeli, dan penawaranmu sebelum menyusun iklan.',
        step: 'Tahap-01',
      },
      {
        icon: 'flaticon-implementation',
        title: 'Setup Akun & Pixel',
        description: 'Business Manager, pixel, dan struktur campaign dipasang rapi supaya hasil iklan bisa diukur.',
        step: 'Tahap-02',
      },
      {
        icon: 'flaticon-idea',
        title: 'Testing Audience & Creative',
        description: 'Beberapa audience dan materi iklan diuji untuk mencari kombinasi yang paling banyak menghasilkan chat atau order.',
        step: 'Tahap-03',
      },
      {
        icon: 'flaticon-analytics',
        title: 'Optimasi & Retargeting',
        description: 'Yang jalan diperkuat, yang boros dimatikan, dan orang yang sudah tertarik diingatkan lagi lewat retargeting.',
        step: 'Tahap-04',
      },
    ],
    seoTitle: 'Jasa Iklan Facebook Ads & Instagram | Ricksite Studio',
    h1: 'Jasa Iklan Facebook Ads & Instagram',
    metaDescription:
      'Jasa iklan Facebook Ads dan Instagram (Meta Ads) yang tertarget ke orang paling mungkin beli. Riset audience, creative testing, retargeting, laporan jelas.',
    intro:
      'Ricksite Studio adalah jasa iklan Facebook Ads dan Instagram Ads (Meta Ads) untuk bisnis di seluruh Indonesia, dikelola dari Tangerang Selatan. Iklannya diarahkan tertarget ke orang yang paling mungkin beli, bukan sekadar nambah view dan like.',
    tagline:
      'Facebook dan Instagram Ads yang diarahkan ke orang paling mungkin beli.',
    problems: [
      'Sudah boost post berkali-kali tapi cuma dapat like',
      'Iklan tampil ke orang yang nggak relevan sama produk kamu',
      'Nggak tahu iklan mana yang sebenarnya menghasilkan',
      'Budget habis buat coba-coba yang nggak terarah',
    ],
    faqs: [
      {
        q: 'Saldo iklan sudah termasuk?',
        a: 'Belum. Rp1.500.000/bulan itu biaya pengelolaan. Saldo iklan dibayar langsung ke Meta lewat akun kamu sendiri.',
      },
      {
        q: 'Bedanya sama boost post?',
        a: 'Boost post cuma naikin jangkauan satu postingan. Campaign lewat Ads Manager bisa diatur tujuannya, audience-nya dipilih detail, dan hasilnya keukur per iklan — jadi ketahuan mana yang jalan.',
      },
      {
        q: 'Materi iklannya siapa yang bikin?',
        a: 'Copywriting dan struktur campaign dari kami. Untuk foto atau video produk: kalau sudah ada, kami pakai; kalau belum, kami arahkan apa saja yang perlu disiapkan.',
      },
      {
        q: 'Bisa sekalian sama websitenya?',
        a: 'Bisa, dan biasanya hasilnya lebih baik. Iklan yang bawa orang datang, website yang bikin mereka percaya dan akhirnya chat.',
      },
      {
        q: 'Iklannya tampil di Facebook atau Instagram?',
        a: 'Bisa dua-duanya. Facebook Ads dan Instagram Ads diatur dari Meta Ads Manager yang sama, dan penempatannya kami sesuaikan dengan di mana calon pembelimu paling aktif.',
      },
      {
        q: 'Apa itu pixel, dan kenapa perlu dipasang?',
        a: 'Pixel adalah kode kecil di website yang mencatat apa yang dilakukan pengunjung dari iklan, misalnya melihat produk atau klik WhatsApp. Data ini yang membuat iklan bisa diarahkan ke orang yang paling mungkin beli, dan dipakai untuk retargeting.',
      },
    ],
    relatedProjects: [],
  },

  'jasa-maintenance-website': {
    // Gap found in Resolusiweb's traffic: "jasa maintenance website" (~390/mo,
    // SD 12) earns their page ~250 visits/month on only 9 referring domains.
    keyword: 'Jasa Maintenance Website',
    problemsHeading: 'Tanda Website Kamu Butuh Maintenance atau Perbaikan.',
    faqHeading: 'Pertanyaan Seputar Biaya Maintenance & Perbaikan Website.',
    ctaHeading: 'Siap Website Tetap Aman Tanpa Repot?',
    seoTitle: 'Jasa Maintenance & Perbaikan Website | Ricksite Studio',
    h1: 'Jasa Maintenance & Perbaikan Website',
    metaDescription:
      'Jasa maintenance website bulanan: update, backup, cek keamanan, dan perbaikan error. Terima juga website buatan pihak lain. Harga jelas di depan.',
    intro:
      'Ricksite Studio menyediakan jasa maintenance website bulanan untuk bisnis di seluruh Indonesia, dikerjakan dari Tangerang Selatan. Kami jaga website kamu tetap update, ter-backup, dan jalan normal. Website yang error atau berantakan juga bisa kami perbaiki, termasuk website buatan pihak lain.',
    tagline:
      'Website tetap aman, update, dan jalan normal — kamu tinggal fokus ngurus bisnis.',
    problems: [
      'Website tiba-tiba error atau nggak bisa dibuka, dan nggak tahu harus hubungi siapa',
      'Developer lama sudah nggak bisa dihubungi',
      'Sistem dan plugin nggak pernah di-update, takut kena hack',
      'Mau ganti teks, harga, atau foto tapi nggak sempat atau nggak ngerti caranya',
    ],
    faqs: [
      {
        q: 'Berapa biaya maintenance website?',
        a: 'Maintenance bulanan mulai Rp350.000/bulan. Perbaikan sekali jalan mulai Rp500.000, tergantung masalahnya — kami cek dulu, lalu kasih harga pasti sebelum mulai kerja.',
      },
      {
        q: 'Website saya bukan buatan Ricksite, bisa?',
        a: 'Bisa. Kami cek dulu kondisinya: sistem yang dipakai, akses hosting dan admin, serta masalah yang ada. Setelah itu kami kasih tahu jujur mana yang cukup diperbaiki dan berapa biayanya.',
      },
      {
        q: 'Bedanya maintenance bulanan dan perbaikan sekali jalan?',
        a: 'Maintenance bulanan itu perawatan rutin biar website tetap aman dan update. Perbaikan sekali jalan untuk masalah yang sudah terjadi, misalnya error, tampilan rusak, atau website yang lambat. Banyak yang mulai dari perbaikan, lalu lanjut maintenance.',
      },
      {
        q: 'Bisa berhenti kapan saja?',
        a: 'Bisa. Maintenance dibayar per bulan tanpa kontrak panjang. Kalau berhenti, semua akses dan backup tetap milik kamu.',
      },
    ],
    relatedProjects: [],
  },
};
