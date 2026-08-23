# Ricksite Studio

Website Ricksite Studio: jasa pembuatan website, pengembangan web custom, dan iklan
digital. Dibangun dengan Astro di atas design system Agenko (template HTML) yang
direbrand dan diisi ulang kontennya dalam Bahasa Indonesia.

## Jalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:4321`.

Build ke HTML statis:

```bash
npm run build
```

Hasilnya ada di `dist/` — satu `index.html` plus folder `assets/`. Untuk mengecek
hasil build:

```bash
npm run preview
```

## Struktur

```
src/
  pages/index.astro          susunan section homepage
  layouts/BaseLayout.astro   <head>, preloader, wrapper ScrollSmoother, script
  components/
    Header.astro             navbar Agenko (header-two)
    Footer.astro             footer Agenko
    sections/                satu file per section homepage
  data/
    site.ts                  nomor WhatsApp, menu, social, link TODO
    content.ts               project, layanan, value, proses, testimoni
public/assets/               CSS/JS/font/gambar Agenko, dipakai apa adanya
```

## Cara edit yang paling sering dipakai

| Mau ganti apa | Edit di mana |
|---|---|
| Nomor WhatsApp | `src/data/site.ts` → `WHATSAPP_NUMBER` (satu tempat, dipakai semua CTA) |
| Tambah/ubah project | `src/data/content.ts` → array `projects` |
| Ubah teks layanan | `src/data/content.ts` → array `services` |
| Urutan section | `src/pages/index.astro` |
| Warna aksen | `public/assets/css/ricksite.css` → `--primary-color` |

## Placeholder yang masih perlu diganti

| Apa | Di mana |
|---|---|
| Nomor WhatsApp | `src/data/site.ts` — sekarang `6281234567890` |
| Screenshot project | `public/assets/images/ricksite/projects/project-0X.svg` — ganti dengan screenshot asli 1240×775, lalu ubah ekstensinya di `src/data/content.ts` |
| Gambar hero/fitur/about/testimoni | `public/assets/images/ricksite/pages/*.svg` — placeholder netral |
| Logo | `public/assets/images/ricksite/logo/logo-main.svg` — 151×40 |
| Testimoni | `src/data/content.ts` — teksnya sengaja ditandai placeholder, bukan quote client palsu |
| Link halaman dalam | `href="#"` bertanda `data-rs-todo` — menunggu `projects.html`, `services.html`, `about.html`, `project-details.html`, dan profil social |
| Form newsletter di footer | Markup asli template, masih perlu backend |

## Dua hal penting sebelum mengedit

**1. Semua `<script>` wajib pakai `is:inline`.**
`theme.js` mengharapkan jQuery ada di `window` dan plugin GSAP terdaftar secara
global. Tanpa `is:inline`, Astro membundel script sebagai ES module dan itu
membuat carousel serta animasi scroll berhenti bekerja tanpa pesan error.

**2. Spasi antar elemen itu berpengaruh ke layout.**
Beberapa elemen Agenko bersifat `inline-block` / `inline-flex`: menu navbar, chip
kategori project, ikon social footer, dan pasangan tombol di hero & CTA. Baris baru
di antara elemen tersebut ter-render sebagai spasi nyata yang menambah lebar.
Karena itu:

- `compressHTML: false` di `astro.config.mjs` — kalau kompresi aktif, navbar
  menyempit 16px dan link copyright 7px.
- Item hasil `.map()` dibungkus `<Fragment>…{' '}</Fragment>`, karena `.map()`
  tidak menghasilkan spasi antar item array.

Kalau salah satunya dihapus, layout menyempit beberapa piksel di sekitar enam
tempat berbeda.

## Catatan

Template asli Agenko disimpan lokal sebagai referensi desain
(`agenko-creative-digital-agency-html-template-.../`) dan sengaja tidak
ikut di-commit — lihat `.gitignore`.
