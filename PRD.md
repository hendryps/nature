# Product Requirements Document

## Website Resmi NATURE Jabodetabek

| Informasi | Detail |
|---|---|
| Produk | Website NATURE Jabodetabek |
| Organisasi | Naposo Sitorus Boru Bere |
| Versi dokumen | 2.0 |
| Status | Implemented |
| Periode pengurus | 2025-2027 |
| Jenis | Static single-page website |
| Production | https://naposo-sitorus-hendry1.vercel.app |

## 1. Ringkasan

Website NATURE Jabodetabek adalah pusat informasi organisasi, dokumentasi
kegiatan, pengenalan budaya Batak, dan pintu pendaftaran anggota. Website dibuat
statis agar cepat, mudah dipelihara, dan tidak membutuhkan backend.

## 2. Tujuan

- Memperkenalkan identitas dan sejarah NATURE.
- Menyampaikan visi, misi, nilai, kegiatan, dan struktur organisasi.
- Memudahkan naposo pomparan Raja Sitorus untuk bergabung.
- Menyediakan kanal kontak dan media sosial resmi.
- Mendukung pelestarian adat dan budaya Batak.

## 3. Target Pengguna

- Naposo Sitorus, Boru, Bere, dan Ibebere.
- Anggota dan pengurus NATURE Jabodetabek.
- Natua-tua dan keluarga besar Raja Sitorus.
- Masyarakat yang ingin mengetahui kegiatan NATURE.

## 4. Ruang Lingkup

Website terdiri dari satu halaman dengan navigasi menuju:

1. Beranda
2. Tentang, visi, misi, dan nilai
3. Makna lambang
4. Sejarah NATURE
5. Program dan kegiatan
6. Struktur organisasi 2025-2027
7. Galeri
8. Cara bergabung
9. FAQ
10. Kontak dan media sosial

Fitur di luar ruang lingkup saat ini:

- Login dan dashboard pengurus
- Database anggota
- CMS
- Kalender kegiatan dinamis
- Portal berita
- Pembayaran atau iuran daring

## 5. Konten Resmi

### 5.1 Identitas

- Nama: NATURE Jabodetabek
- Kepanjangan: Naposo Sitorus Boru Bere
- Tagline: Bersatu dalam kekeluargaan. Bertumbuh dalam budaya.
- Wilayah: Jakarta, Bogor, Depok, Tangerang, dan Bekasi

### 5.2 Sejarah

Punguan Naposo Sitorus resmi terbentuk pada 2017 melalui Musyawarah Nasional
di Universitas Mpu Tantular, Jakarta Timur. Musyawarah dipimpin Bapatua Rikson
Sitorus dan menyepakati nama NATURE.

Riwayat ketua umum:

| Periode | Nama |
|---|---|
| 2017-2018 | Arion Pinang Sitorus |
| 2018 | Haposan Sitorus (PJ) |
| 2018-2022 | Daniel Sitorus |
| 2022-2025 | Angri Sitorus |
| 2025-2027 | Hendry Sitorus |

### 5.3 Visi dan Misi

Judul konten menggunakan **Visi Naposo Sitorus** dan **Misi Naposo Sitorus**.
Panel harus memiliki kontras tinggi, ukuran teks konsisten, dan tetap mudah
dibaca pada perangkat mobile.

### 5.4 Program

- Ibadah bulanan
- Olahraga
- Perayaan Natal
- Gondang Naposo

### 5.5 Struktur Organisasi 2025-2027

Hierarki utama:

| Jabatan | Nama |
|---|---|
| Pembina | Rikson Sitorus |
| Pendamping | Arman Sitorus |
| Ketua Umum | Hendry Sitorus |
| Wakil Ketua Umum | Boni Sitorus |
| Sekretaris Umum 1 | Eva Sitorus |
| Sekretaris Umum 2 | Sean Hutagaol |
| Bendahara Umum | Firyani Sitorus |

Divisi Humas & Publikasi:

- Samuel Sitorus
- Marta Laura Sitorus
- Lenny Napitupulu

Divisi Rohani & Sosial:

- Claudia Tampubolon
- Theresia Sitorus
- Agrefida Sitorus

Divisi Olahraga:

- Marusaha Situmorang
- Richard Sitorus
- Rany Sitorus
- Jefri Siagian

Divisi Dana & Usaha:

- David Christian Sitorus
- Hendrick Luther P. Sitorus
- Nopi Manalu
- Novlin Claudi Sitorus

Foto pengurus masih memakai placeholder lokal dan akan diganti secara manual.

## 6. Kontak dan Integrasi

- Email: naposositorusjabodetabek@gmail.com
- WhatsApp 1: 0812 6542 3393
- WhatsApp 2: 0813 7086 2282
- Instagram: https://www.instagram.com/naposo_sitorusjabodetabek/
- TikTok: https://www.tiktok.com/@naposo_sitorusjbdtk
- Formulir: Google Forms yang dikonfigurasi pada `js/main.js`

Tautan WhatsApp harus membuka percakapan dengan pesan awal mengenai cara
bergabung. Tautan eksternal dibuka pada tab baru dengan `rel="noopener"`.

## 7. Desain dan Responsivitas

- Warna utama menggunakan merah, putih, tinta gelap, dan latar netral.
- Kartu struktur organisasi menggunakan latar putih dengan aksen merah.
- Struktur organisasi menampilkan hierarki Pembina/Pendamping, Ketua Umum,
  pengurus inti, lalu divisi.
- Bento layout digunakan pada nilai, makna lambang, kegiatan, dan galeri.
- Radius kartu maksimal 6px.
- Desktop menggunakan grid multi-kolom.
- Tablet menggunakan dua kolom untuk konten yang memungkinkan.
- Mobile menggunakan satu kolom tanpa overflow horizontal.
- Font display: Cinzel.
- Font antarmuka dan isi: Poppins.

## 8. Kebutuhan Fungsional

- Navigasi fixed dan responsif.
- Menu aktif mengikuti section yang sedang terlihat.
- Smooth scrolling.
- Menu mobile menutup setelah tautan dipilih.
- Tombol pendaftaran membuka Google Forms.
- FAQ menggunakan accordion.
- Tombol kembali ke atas muncul setelah halaman digulir.
- Email, WhatsApp, Instagram, dan TikTok dapat diklik.

## 9. Kebutuhan Nonfungsional

- Mendukung viewport mulai 320px.
- Menggunakan semantic HTML.
- Kontras teks harus terbaca.
- Placeholder dekoratif memakai `alt=""`.
- Foto asli nantinya memakai alt text nama orang.
- Mendukung `prefers-reduced-motion`.
- Memiliki title, description, favicon, canonical, Open Graph, dan JSON-LD.
- Seluruh halaman dilayani melalui HTTPS.
- Aset visual dioptimalkan untuk web.

## 10. Teknologi dan Struktur

| Bagian | Implementasi |
|---|---|
| Markup | `index.html` |
| Styling | Bootstrap 5 + `css/style.css` |
| Interaksi | `js/main.js` |
| Aset | `assets/web/` |
| Hosting | Vercel |

Tidak ada proses build. Bootstrap, Bootstrap Icons, dan Google Fonts dimuat
melalui CDN.

## 11. SEO

- Canonical menunjuk domain production.
- Open Graph memakai gambar `nature-toba.webp`.
- JSON-LD bertipe `Organization`.
- Metadata mencantumkan email, telepon, logo, Instagram, dan TikTok.
- Bahasa dokumen menggunakan `id`.

## 12. Kriteria Penerimaan

- Seluruh section dapat dibuka melalui navigasi.
- Tidak ada aset lokal yang gagal dimuat.
- Nama dan jabatan pengurus sesuai dokumen ini.
- Seluruh kontak membuka tujuan yang benar.
- Tidak ada overflow atau tumpang tindih pada desktop, tablet, dan mobile.
- Formulir pendaftaran dapat dibuka.
- Metadata menggunakan domain production terbaru.
- Deployment GitHub dan Vercel berhasil.

## 13. Pemeliharaan

Sebelum publikasi:

1. Periksa nama, jabatan, ejaan, dan tautan.
2. Jalankan `git diff --check`.
3. Periksa desktop, tablet, dan mobile.
4. Uji menu, FAQ, Google Forms, WhatsApp, dan media sosial.
5. Pastikan tidak ada aset tanpa referensi.
6. Commit dan push ke GitHub.
7. Deploy production ke Vercel.

Untuk mengganti foto dummy:

1. Simpan foto teroptimasi di `assets/web/`.
2. Ganti `src="assets/web/photo-dummy.svg"` pada anggota terkait.
3. Isi atribut `alt` dengan nama lengkap.
4. Pertahankan rasio foto persegi agar pemotongan lingkaran tetap rapi.

## 14. Pengembangan Berikutnya

- Foto asli pengurus dan ketua terdahulu
- Dokumentasi galeri kegiatan
- Agenda kegiatan dinamis
- CMS atau dashboard pengurus
- Database dan kartu anggota digital
