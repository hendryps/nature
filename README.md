# NATURE Jabodetabek

Website resmi **Naposo Sitorus Boru Bere Jabodetabek (NATURE)**.

Production: [https://naposo-sitorus-hendry1.vercel.app](https://naposo-sitorus-hendry1.vercel.app)

## Fitur

- Profil, visi, misi, nilai, dan sejarah NATURE
- Makna lambang organisasi
- Program dan kegiatan
- Struktur organisasi periode 2025-2027
- Galeri kegiatan
- Alur dan formulir pendaftaran
- FAQ, email, WhatsApp, Instagram, dan TikTok
- Layout responsif untuk desktop, tablet, dan mobile
- Metadata Open Graph dan JSON-LD organisasi

## Teknologi

- HTML5
- CSS3 dan Bootstrap 5
- JavaScript vanilla
- Bootstrap Icons
- Google Fonts
- Vercel

Website ini tidak menggunakan framework, package manager, database, atau proses
build. Seluruh source dapat diedit langsung.

## Struktur Proyek

```text
.
|-- assets/
|   `-- web/
|       |-- logo-nature.webp
|       |-- nature-toba.webp
|       `-- photo-dummy.svg
|-- css/
|   `-- style.css
|-- js/
|   `-- main.js
|-- index.html
|-- PRD.md
|-- README.md
|-- robots.txt
`-- vercel.json
```

## Menjalankan Secara Lokal

Karena berupa website statis, `index.html` dapat dibuka langsung di browser.
Untuk pengembangan, gunakan Live Server atau server statis lokal agar perilaku
tautan dan aset sama dengan production.

## Pemeliharaan

- Konten, nama, kontak, dan struktur pengurus: `index.html`
- Warna, layout, dan breakpoint responsif: `css/style.css`
- Tautan Google Forms dan interaksi: `js/main.js`
- Logo, hero, dan foto pengurus: `assets/web/`
- Konfigurasi deployment dan header: `vercel.json`

Foto pengurus saat ini menggunakan `assets/web/photo-dummy.svg`. Saat foto asli
tersedia, simpan hasil optimasi di `assets/web/`, ubah atribut `src`, lalu isi
atribut `alt` dengan nama orang yang bersangkutan.

## Kontak Resmi

- Email: `naposositorusjabodetabek@gmail.com`
- WhatsApp: `0812 6542 3393`
- WhatsApp: `0813 7086 2282`
- Instagram: `@naposo_sitorusjabodetabek`
- TikTok: `@naposo_sitorusjbdtk`

## Deployment

Repository GitHub: [hendryps/nature](https://github.com/hendryps/nature)

Deployment production menggunakan proyek Vercel `naposo-sitorus`:

```powershell
npx vercel --prod
```

Spesifikasi produk dan checklist pemeliharaan tersedia di [PRD.md](PRD.md).
