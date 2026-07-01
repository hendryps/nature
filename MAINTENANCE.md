# Panduan Maintenance Website

Website ini dibuat dengan HTML, CSS, JavaScript, dan Bootstrap. Tidak ada
framework atau proses build yang harus dipelajari.

## Urutan file yang perlu dipahami

1. `index.html` berisi seluruh teks dan susunan halaman.
2. `css/style.css` mengatur warna, ukuran, jarak, dan tampilan.
3. `js/main.js` mengatur tautan formulir dan interaksi halaman.
4. `assets/web/` menyimpan gambar yang digunakan website.
5. `vercel.json` berisi pengaturan deployment Vercel.

Setiap bagian pada ketiga file kode sudah dilengkapi komentar berbahasa
Indonesia.

## Mengganti teks website

Buka `index.html`, kemudian cari teks yang ingin diganti. Bagian halaman
dipisahkan oleh komentar besar seperti:

```html
<!-- PROGRAM DAN KEGIATAN -->
```

Teks dapat diganti langsung di antara tanda pembuka dan penutup HTML. Contoh:

```html
<h3>Nama Ketua</h3>
```

Menjadi:

```html
<h3>Hendry Sitorus</h3>
```

Jangan menghapus tanda `<`, `>`, atau `/` di sekitar teks.

## Mengganti tautan pendaftaran

Buka `js/main.js`, lalu cari:

```js
const registrationUrl =
```

Ganti alamat Google Form di bawahnya. Semua tombol pendaftaran otomatis
menggunakan alamat tersebut.

## Mengganti warna utama

Buka `css/style.css`, lalu cari bagian `:root`. Warna utama berada pada:

```css
--red: #c91c2d;
--red-dark: #8f0e1c;
--red-deep: #5e0711;
```

Gunakan kode warna dengan format `#RRGGBB`.

## Mengganti gambar

Gambar website tersimpan dalam folder `assets/web/`:

- `logo-nature.webp` adalah logo organisasi.
- `nature-toba.webp` adalah gambar Danau Toba.

Cara paling mudah mengganti gambar adalah memakai nama file dan format yang
sama. Dengan cara ini, `index.html` tidak perlu diubah.

Gunakan gambar WebP agar website tetap cepat. Usahakan setiap gambar berukuran
di bawah 300 KB.

## Membuka website di komputer

Klik dua kali `index.html` untuk membukanya langsung di browser.

Jika memakai Visual Studio Code, ekstensi Live Server juga dapat digunakan:

1. Klik kanan `index.html`.
2. Pilih **Open with Live Server**.

## Memeriksa sebelum dipublikasikan

- Buka `index.html` di Google Chrome.
- Periksa tampilan pada komputer dan ponsel.
- Klik seluruh menu navigasi.
- Buka dan tutup setiap FAQ.
- Pastikan tombol pendaftaran membuka Google Form yang benar.
- Pastikan tidak ada gambar yang hilang.
- Periksa ejaan dan nama pengurus.

## Deployment production

Website dipublikasikan melalui Vercel. Deployment manual dapat dilakukan
dengan perintah:

```bash
npx vercel --prod
```

## Checklist pembaruan

- Periksa ejaan dan nama pengurus.
- Pastikan tautan pendaftaran dapat dibuka.
- Gunakan gambar yang jelas dan ringan.
- Periksa tampilan desktop dan ponsel.
- Commit dan push perubahan ke GitHub.
- Deploy ulang ke Vercel.
