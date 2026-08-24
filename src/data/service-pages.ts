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

export interface ServicePageContent {
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
    ],
    relatedProjects: ['abunawas-travel', 'bernard-bali-tours', 'bali-rejeng-jeep-tour'],
  },

  'jasa-pembuatan-aplikasi': {
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
    ],
    relatedProjects: ['yokprinting-erp', 'sipnona', 'sab-swadaya'],
  },

  'jasa-seo': {
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
    ],
    relatedProjects: [],
  },

  'jasa-google-ads': {
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
    ],
    relatedProjects: [],
  },

  'jasa-meta-ads': {
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
    ],
    relatedProjects: [],
  },
};
