/**
 * Settings and copy for the /konsultasi ad landing page.
 *
 * Everything that has to be filled in or confirmed before the Meta Ads
 * campaign goes live is collected here, so there is one file to edit
 * instead of a hunt through components. Search for "TODO" to find them.
 */
import { WHATSAPP_NUMBER } from './site';

/**
 * TODO: PIXEL_ID - Meta Pixel / dataset ID from Events Manager (digits only).
 * While this still reads 'PIXEL_ID' the pixel is not loaded at all, so a
 * preview build never sends junk events to a real dataset.
 */
export const PIXEL_ID = '1560519885286328';

/** True once a real (numeric) pixel ID has been filled in above. */
export const PIXEL_ENABLED = /^\d{10,20}$/.test(PIXEL_ID);

/**
 * TODO: nomor WA - digits only, international format, no "+".
 * Defaults to the studio number in site.ts. Replace it here if ad leads
 * should go to a different handset.
 */
export const LANDING_WHATSAPP_NUMBER: string = WHATSAPP_NUMBER;

/**
 * Lead endpoint of the ricksite-leads tool (one URL per workspace, shown in
 * /admin → Workspaces → the workspace → "POST URL untuk form landing page").
 *
 * Every valid form submit is POSTed here with the same event IDs the pixel
 * uses, so the tool can send Lead + AddToCart through the Conversions API and
 * Meta deduplicates them against the browser events.
 *
 * TODO: WORKSPACE_UUID - while the URL still holds the placeholder (or is
 * empty) the POST is skipped and the form works exactly as before.
 */
export const LEAD_ENDPOINT_URL =
  'https://capi.ricksitestudio.com/api/leads/d6589724-4e2f-4f84-9881-5d2160a373de';

/** True once LEAD_ENDPOINT_URL ends in a real workspace UUID. */
export const LEAD_ENDPOINT_ENABLED =
  /^https:\/\/[^/]+\/api\/leads\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    LEAD_ENDPOINT_URL
  );

/** Privacy notice linked under the form (served by the ricksite-leads tool). */
export const PRIVACY_URL = 'https://capi.ricksitestudio.com/privacy';

/** Footer links. */
export const LANDING_SOCIALS = {
  /*
   * TODO: confirm the Instagram handle. The brief says @ricksitestudio,
   * but the account listed in site.ts (the one the main site links to) is
   * @ricksitestudio_. The value below follows site.ts.
   */
  instagram: { handle: '@ricksitestudio_', href: 'https://www.instagram.com/ricksitestudio_/' },
  // TODO: confirm the TikTok account exists. It is not listed in site.ts yet.
  tiktok: { handle: '@ricksitestudio', href: 'https://www.tiktok.com/@ricksitestudio' },
};

/* -------------------------------------------------------------------------
 * Form options.
 *
 * `value` is what ends up in the WhatsApp message, the Lead event and the
 * Sheet, so the wording is written to be read by a person as it is.
 * ---------------------------------------------------------------------- */

export interface Choice {
  value: string;
  /** Optional second line under the label in the choice card. */
  hint?: string;
}

export const WEBSITE_STATUS_OPTIONS: Choice[] = [
  { value: 'Belum punya' },
  { value: 'Ada tapi kurang bagus' },
  { value: 'Ada tapi belum bisa booking online' },
];

/** The value of the "other" option. Picking it reveals a free-text field. */
export const PROBLEM_OTHER = 'Lainnya';

export const PROBLEM_OPTIONS: Choice[] = [
  { value: 'Tamu sering cancel' },
  { value: 'Chat kebanyakan nanya hal sama' },
  { value: 'Tidak muncul di Google' },
  { value: 'Mau mengurangi ketergantungan OTA' },
  { value: PROBLEM_OTHER },
];

export const BUDGET_OPTIONS: Choice[] = [
  { value: 'Rp 2 – 3 jt' },
  { value: 'Rp 3 – 6 jt' },
  { value: 'Rp 6 jt ke atas' },
];

/* -------------------------------------------------------------------------
 * FAQ.
 *
 * TODO: jawaban FAQ - confirm every answer against the current policy.
 * Timeline, revisions, maintenance and the domain/hosting answer follow
 * pricing.ts and service-pages.ts. The DP split and the guarantee wording
 * are drafts: no policy for them exists anywhere in the repo yet.
 * ---------------------------------------------------------------------- */

export interface Faq {
  q: string;
  a: string;
}

export const LANDING_FAQS: Faq[] = [
  {
    q: 'Berapa lama pengerjaannya?',
    a: 'Landing page 1 halaman biasanya 3-7 hari kerja. Website 5-7 halaman dengan katalog paket sekitar 2-3 minggu. Kalau pakai sistem booking dan pembayaran online, sekitar 3-5 minggu karena ada proses verifikasi payment gateway. Timeline pastinya kami kasih setelah materi (foto, paket, harga) lengkap.',
  },
  {
    q: 'Nanti saya bisa edit paket & harga sendiri?',
    a: 'Bisa. Kamu dapat akses admin plus panduan singkat cara ganti paket, harga, itinerary, foto, dan jadwal keberangkatan. Nggak perlu ngerti coding. Kalau masih bingung, tinggal chat.',
  },
  {
    q: 'Sudah termasuk domain dan hosting?',
    a: 'Sudah, untuk tahun pertama. Perpanjangan tahun berikutnya dibayar terpisah dan kami ingatkan jauh-jauh hari sebelum jatuh tempo, jadi website tidak tiba-tiba mati.',
  },
  {
    q: 'Bagaimana sistem pembayarannya?',
    a: 'DP 50% di awal untuk mulai pengerjaan, pelunasan 50% setelah website selesai dan kamu cek sendiri, sebelum website online di domain kamu. Pembayaran bisa transfer bank.',
  },
  {
    q: 'Ada garansi atau maintenance setelah jadi?',
    a: 'Ada. Setiap paket sudah termasuk maintenance gratis 15 hari sampai 1,5 bulan, tergantung paketnya. Kalau ada error dari sisi pengerjaan kami, kami perbaiki tanpa biaya tambahan. Setelah itu tersedia maintenance bulanan kalau kamu butuh.',
  },
];
