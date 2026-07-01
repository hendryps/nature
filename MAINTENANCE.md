# Panduan Maintenance Website

Panduan ini ditujukan bagi pengelola yang belum terbiasa dengan Astro.

## File yang paling sering diubah

| Kebutuhan | File |
|---|---|
| Mengganti teks, kegiatan, FAQ, atau nama pengurus | `src/pages/index.astro` |
| Mengganti warna, ukuran, atau tampilan | `src/styles/global.css` |
| Mengganti logo utama | `src/assets/logo-nature.png` |
| Mengganti gambar Danau Toba | `src/assets/nature-toba.jpg` |
| Mengganti pengaturan deployment | `netlify.toml` |

## Mengganti konten

Buka `src/pages/index.astro`, lalu cari bagian:

```text
DATA YANG SERING DIUBAH
```

Pada bagian tersebut terdapat:

- `registrationUrl` untuk alamat formulir pendaftaran.
- `activities` untuk daftar kegiatan.
- `values` untuk nilai organisasi.
- `leaders` untuk pengurus inti.
- `divisions` untuk bidang organisasi.
- `faqs` untuk pertanyaan umum.

Pastikan tanda kutip, koma, dan kurung tetap lengkap saat mengganti teks.

## Mengganti nama pengurus

Contoh data awal:

```js
['Ketua', 'Nama Ketua']
```

Ganti menjadi:

```js
['Ketua', 'Nama Pengurus']
```

## Mengganti warna utama

Buka `src/styles/global.css`, lalu cari `:root`. Warna utama berada pada:

```css
--red: #c91c2d;
--red-dark: #8f0e1c;
--red-deep: #5e0711;
```

Gunakan kode warna dengan format `#RRGGBB`.

## Menjalankan website di komputer

Instal dependensi satu kali:

```bash
npm install
```

Jalankan mode pengembangan:

```bash
npm run dev
```

Astro akan menampilkan alamat lokal yang dapat dibuka melalui browser.

## Memeriksa sebelum dipublikasikan

Jalankan:

```bash
npm run build
```

Jika perintah selesai tanpa error, hasil website akan tersedia di folder
`dist`.

## Checklist pembaruan

- Periksa ejaan dan nama pengurus.
- Pastikan tautan pendaftaran dapat dibuka.
- Gunakan gambar yang jelas tetapi tidak terlalu besar.
- Periksa tampilan desktop dan ponsel.
- Jalankan `npm run build`.
- Commit dan push perubahan ke GitHub.
