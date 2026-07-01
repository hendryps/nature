/*
  FILE INTERAKSI WEBSITE
  File ini menangani tautan pendaftaran, navbar, menu ponsel,
  tombol kembali ke atas, penanda menu aktif, dan tahun footer.
*/

// ============================================================
// DATA YANG SERING DIUBAH
// Ganti alamat di bawah jika Google Form pendaftaran berubah.
// ============================================================
const registrationUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSf8TGiAw-wUbm_OG9bWwzGSvICBt7h2Cdnxr6zoirLbCSncwg/viewform';

// Mengisi alamat Google Form ke semua tombol yang memiliki class registration-link.
const registrationLinks = document.querySelectorAll('.registration-link');
registrationLinks.forEach((link) => {
  link.href = registrationUrl;
});

// Mengambil elemen yang akan diberi interaksi.
const navigation = document.querySelector('#mainNav');
const backToTopButton = document.querySelector('#backToTop');
const mobileMenu = document.querySelector('#navbarMenu');

// Mengubah tampilan navbar dan tombol kembali ke atas saat halaman digulir.
function updateScrollState() {
  // Navbar diberi latar gelap setelah halaman digulir lebih dari 40 piksel.
  const pageHasScrolled = window.scrollY > 40;
  navigation?.classList.toggle('scrolled', pageHasScrolled);

  // Tombol kembali ke atas muncul setelah halaman digulir lebih dari 500 piksel.
  const showBackToTop = window.scrollY > 500;
  backToTopButton?.classList.toggle('visible', showBackToTop);
}

// Menjalankan pemeriksaan saat halaman pertama kali dibuka.
updateScrollState();

// Menjalankan pemeriksaan kembali setiap kali halaman digulir.
window.addEventListener('scroll', updateScrollState, { passive: true });

// Menggulir halaman ke paling atas ketika tombol panah ditekan.
backToTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menutup menu ponsel setelah pengunjung memilih salah satu tautan.
mobileMenu?.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const openMenu = bootstrap.Collapse.getInstance(mobileMenu);
    openMenu?.hide();
  });
});

// Mengambil semua bagian halaman dan tautan menu.
const pageSections = document.querySelectorAll('main section[id]');
const navigationLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Memberi class "active" pada menu sesuai bagian halaman yang sedang terlihat.
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Abaikan bagian halaman yang sedang tidak terlihat.
      if (!entry.isIntersecting) return;

      // Periksa setiap tautan, lalu aktifkan tautan yang sesuai.
      navigationLinks.forEach((link) => {
        const linkPointsToCurrentSection =
          link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', linkPointsToCurrentSection);
      });
    });
  },
  {
    // Area pengamatan difokuskan ke bagian tengah layar.
    rootMargin: '-35% 0px -55%',
    threshold: 0
  }
);

// Mulai mengamati seluruh bagian halaman.
pageSections.forEach((section) => {
  sectionObserver.observe(section);
});

// Menampilkan tahun saat ini pada footer agar tidak perlu diganti setiap tahun.
const currentYear = document.querySelector('#currentYear');
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
