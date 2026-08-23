# Ricksite Studio — Portofolio Website

Website Ricksite Studio: jasa pembuatan website, pengembangan web custom, dan iklan
digital. Dibangun di atas design system Agenko (template HTML) yang direbrand dan
diisi ulang kontennya dalam Bahasa Indonesia.

## Struktur

```
ricksite/          -> build statis (single index.html) — buka ricksite/index.html
ricksite-astro/    -> build Astro, component-based, output HTML identik
serve.js           -> preview build statis di http://localhost:5173
serve-astro.js     -> preview build Astro di http://localhost:5174
```

Kedua build menghasilkan halaman yang **identik secara visual** — `ricksite-astro/`
adalah migrasi arsitektur, bukan redesign. Detail verifikasinya ada di
[ricksite-astro/README.md](ricksite-astro/README.md).

Untuk daftar placeholder yang masih perlu diganti (nomor WhatsApp, screenshot
project, link halaman yang belum ada), lihat [ricksite/README.md](ricksite/README.md).

## Jalankan lokal

Build statis:

```bash
node serve.js
```

Build Astro (dari sumber, dengan hot reload):

```bash
cd ricksite-astro && npm install && npm run dev
```

Build Astro (hasil build statis):

```bash
cd ricksite-astro && npm run build && cd .. && node serve-astro.js
```

## Mana yang dipakai?

Keduanya menghasilkan output yang sama, jadi pilih sesuai kebutuhan:

- **`ricksite/`** — kalau mau edit HTML langsung tanpa tooling apa pun.
- **`ricksite-astro/`** — kalau mau nambah project/layanan lewat file data,
  atau nanti nambah halaman baru (projects.html, about.html, dst) tanpa
  copy-paste header/footer.
