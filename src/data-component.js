const components = {
  hero: {
    name: "Hero Section",
    html: `
<!-- Section Hero: bagian utama yang pertama dilihat pengunjung -->
<section class="hero">
  
  <!-- Judul utama website / produk -->
  <h1 class="hero-title">Judul Utama Website</h1>
  
  <!-- Deskripsi singkat tentang website atau produk -->
  <p class="hero-desc">
    Deskripsi singkat yang menjelaskan tujuan website atau produk.
  </p>
  
  <!-- Tombol call-to-action untuk mengarahkan pengguna -->
  <button class="hero-button">Mulai Sekarang</button>

</section>
`,
    css: `
/* Container utama hero section */
.hero {
  text-align: center; /* membuat semua teks di tengah */
  padding: 80px 20px; /* ruang dalam atas-bawah dan kiri-kanan */
  
  /* background gradasi biru */
  background: linear-gradient(135deg, #4361ee, #3a0ca3);
  
  color: white; /* warna teks putih agar kontras */
  border-radius: 16px; /* sudut section dibuat melengkung */
}

/* Judul utama hero */
.hero-title {
  font-size: 2.8rem; /* ukuran judul besar */
  margin-bottom: 20px; /* jarak ke elemen bawah */
}

/* Deskripsi di bawah judul */
.hero-desc {
  font-size: 1.2rem; /* ukuran teks deskripsi */
  
  max-width: 600px; /* membatasi lebar agar mudah dibaca */
  margin: 0 auto 30px; /* center + jarak bawah */
}

/* Tombol utama (Call To Action) */
.hero-button {
  background: white; /* background tombol */
  color: #4361ee; /* warna teks tombol */
  
  border: none; /* menghilangkan border default */
  padding: 15px 36px; /* ukuran tombol */
  border-radius: 8px; /* sudut tombol */
  
  font-size: 1.1rem; /* ukuran teks tombol */
  font-weight: 700; /* teks lebih tebal */
  cursor: pointer; /* cursor berubah jadi tangan */
}
`,
    description:
      "Hero Section adalah bagian pembuka halaman yang berfungsi menarik perhatian pengguna. Biasanya berisi judul utama, deskripsi singkat, dan tombol ajakan bertindak."
  },

  features: {
    name: "Features Section",
    html: `
<!-- Section fitur: menampilkan keunggulan produk / website -->
<section class="features">

  <!-- Judul utama bagian fitur -->
  <h2 class="features-title">Fitur Unggulan</h2>

  <!-- Container grid untuk menampung semua item fitur -->
  <div class="features-grid">

    <!-- Item fitur pertama -->
    <div class="feature-item">
      <h3 class="feature-title">Fitur Pertama</h3>
      <p>Penjelasan singkat tentang fitur.</p>
    </div>

    <!-- Item fitur kedua -->
    <div class="feature-item">
      <h3 class="feature-title">Fitur Kedua</h3>
      <p>Penjelasan singkat tentang fitur.</p>
    </div>

  </div>
</section>
`,
    css: `
/* Section fitur utama */
.features {
  padding: 60px 20px; /* ruang atas bawah dan kiri kanan */
}

/* Judul utama fitur */
.features-title {
  text-align: center; /* judul di tengah */
  font-size: 2.2rem; /* ukuran judul */
  margin-bottom: 40px; /* jarak ke grid fitur */
}

/* Container grid untuk fitur */
.features-grid {
  display: grid; /* menggunakan CSS Grid */

  /* otomatis menyesuaikan jumlah kolom */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  gap: 25px; /* jarak antar item */
}

/* Card fitur */
.feature-item {
  background: #f8f9fa; /* background abu terang */
  padding: 25px; /* ruang dalam card */
  border-radius: 12px; /* sudut card melengkung */

  /* garis aksen di kiri */
  border-left: 5px solid #4361ee;
}

/* Judul tiap fitur */
.feature-title {
  color: #4361ee; /* warna sama dengan aksen */
  margin-bottom: 10px; /* jarak ke paragraf */
}
`,
    description:
      "Section untuk menampilkan keunggulan atau fitur utama dari produk atau layanan dalam bentuk kartu yang rapi dan responsif."
  },

  pricing: {
    name: "Pricing Table",
    html: `
<!-- Section pricing: menampilkan paket harga produk -->
<section class="pricing">

  <!-- Grid untuk menampung semua kartu harga -->
  <div class="pricing-grid">

    <!-- Paket Basic -->
    <div class="price-card">
      <h3 class="price-title">Basic</h3>

      <!-- Harga paket -->
      <div class="price-value">Rp149K</div>

      <!-- Tombol untuk memilih paket -->
      <button class="price-button">Pilih Paket</button>
    </div>

    <!-- Paket Premium (paket yang disarankan / populer) -->
    <div class="price-card popular">
      <h3 class="price-title">Premium</h3>

      <!-- Harga paket -->
      <div class="price-value">Rp399K</div>

      <!-- Tombol memilih paket -->
      <button class="price-button">Pilih Paket</button>
    </div>

  </div>
</section>
`,
    css: `
/* Section pricing utama */
.pricing {
  padding: 60px 20px; /* ruang atas bawah dan samping */
  background: #f5f7fa; /* background abu terang */
}

/* Grid container untuk kartu harga */
.pricing-grid {
  display: grid;

  /* jumlah kolom otomatis sesuai layar */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  gap: 30px; /* jarak antar card */

  max-width: 1000px; /* membatasi lebar container */
  margin: auto; /* membuat grid berada di tengah */
}

/* Card harga */
.price-card {
  background: white;
  padding: 35px;
  border-radius: 16px;
  text-align: center;

  /* shadow agar card terlihat seperti melayang */
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

/* Card yang ditandai sebagai populer */
.price-card.popular {
  border: 2px solid #4361ee; /* border highlight */
  transform: scale(1.05); /* sedikit lebih besar */
}

/* Judul paket */
.price-title {
  color: #4361ee;
  margin-bottom: 10px;
}

/* Harga paket */
.price-value {
  font-size: 2.5rem; /* harga dibuat besar */
  font-weight: 700;
  margin-bottom: 20px;
}

/* Tombol memilih paket */
.price-button {
  width: 100%; /* tombol full lebar card */
  padding: 14px;

  background: #4361ee;
  color: white;

  border: none;
  border-radius: 8px;

  font-weight: 700;
  cursor: pointer;
}
`,
    description:
      "Digunakan untuk menampilkan daftar harga atau paket layanan dalam bentuk kartu yang mudah dibandingkan."
  },

  testimonial: {
    name: "Testimonials",
    html: `
<!-- Section testimonial: menampilkan pendapat atau review dari pengguna -->
<section class="testimonials">

  <!-- Grid container untuk menampung testimonial -->
  <div class="testimonial-grid">

    <!-- Item testimonial -->
    <div class="testimonial-item">

      <!-- Isi testimoni dari pengguna -->
      <p class="testimonial-text">
        Website ini sangat membantu proses belajar saya.
      </p>

      <!-- Nama atau identitas pengguna -->
      <span class="testimonial-name">— Pengguna</span>

    </div>

  </div>
</section>
`,
    css: `
/* Section testimonial utama */
.testimonials {
  padding: 60px 20px; /* ruang atas bawah dan samping */
}

/* Container grid testimonial */
.testimonial-grid {
  display: grid;

  /* jumlah kolom menyesuaikan ukuran layar */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  gap: 25px; /* jarak antar testimonial */

  max-width: 1000px; /* membatasi lebar container */
  margin: auto; /* membuat posisi di tengah */
}

/* Card testimonial */
.testimonial-item {
  background: #f8f9fa; /* background abu terang */
  padding: 30px; /* ruang dalam card */
  border-radius: 12px; /* sudut melengkung */
}

/* Teks isi testimonial */
.testimonial-text {
  font-style: italic; /* membuat teks terlihat seperti kutipan */
  color: #555; /* warna abu agar tidak terlalu kuat */
}

/* Nama pengguna */
.testimonial-name {
  display: block; /* agar berada di baris baru */
  margin-top: 10px; /* jarak dari teks testimonial */
  font-weight: 700; /* teks lebih tebal */
}
`,
    description:
      "Section untuk menampilkan ulasan atau pendapat pengguna sebagai bukti sosial."
  },

  ctaBar: {
    name: "CTA Bar",
    
    html: `
<!-- CTA Bar: bagian ajakan terakhir sebelum footer -->
<section class="cta-bar">

  <!-- Container untuk mengatur layout isi CTA -->
  <div class="cta-container">

    <!-- Bagian teks CTA -->
    <div class="cta-text">

      <!-- Judul ajakan -->
      <h2 class="cta-title">Siap Memulai Proyekmu?</h2>

      <!-- Deskripsi tambahan -->
      <p class="cta-desc">
        Gunakan tools ini untuk membangun website dengan lebih cepat dan mudah.
      </p>

    </div>

    <!-- Tombol aksi utama -->
    <div class="cta-action">
      <a href="#" class="cta-button">Mulai Sekarang</a>
    </div>

  </div>
</section>`,

    css: `
/* Section CTA utama */
.cta-bar {
  background: linear-gradient(135deg, #4361ee, #3a0ca3); /* background gradasi */
  color: white; /* warna teks putih */
  padding: 50px 20px; /* ruang dalam */
  border-radius: 14px; /* sudut melengkung */
}

/* Container isi CTA */
.cta-container {
  max-width: 1100px; /* batas lebar */
  margin: auto; /* center container */

  display: flex; /* layout horizontal */
  justify-content: space-between; /* teks kiri, tombol kanan */
  align-items: center; /* rata tengah vertikal */

  gap: 30px; /* jarak antar elemen */
  flex-wrap: wrap; /* agar responsive saat layar kecil */
}

/* Judul CTA */
.cta-title {
  font-size: 2rem;
  margin-bottom: 10px;
}

/* Deskripsi CTA */
.cta-desc {
  font-size: 1rem;
  color: #e0e7ff; /* warna teks sedikit lebih lembut */
}

/* Tombol CTA */
.cta-button {
  display: inline-block;
  padding: 14px 32px;

  background: white;
  color: #4361ee;

  font-weight: 700;
  text-decoration: none; /* menghilangkan underline link */

  border-radius: 8px;

  transition: 0.2s ease; /* animasi halus */
}

/* Efek hover tombol */
.cta-button:hover {
  transform: translateY(-2px); /* tombol sedikit naik */
  box-shadow: 0 8px 20px rgba(0,0,0,0.15); /* bayangan */
}`,

    description: "Sebuah bar ajakan"
  },

  linkblock: {
    name: "Link Block",

    html: `
<!-- Section link penting -->
<section class="link-block">

  <!-- Judul bagian link -->
  <h2 class="linkblock-title">Link Penting</h2>

  <!-- Container daftar link -->
  <div class="linkblock-list">

    <!-- Item link ke dokumentasi -->
    <a href="#" class="linkblock-item">
      <span class="linkblock-text">Dokumentasi</span>
    </a>

    <!-- Item link ke tutorial -->
    <a href="#" class="linkblock-item">
      <span class="linkblock-text">Tutorial</span>
    </a>

    <!-- Item link ke resource download -->
    <a href="#" class="linkblock-item">
      <span class="linkblock-text">Download Resource</span>
    </a>

    <!-- Item link untuk menghubungi -->
    <a href="#" class="linkblock-item">
      <span class="linkblock-text">Hubungi Kami</span>
    </a>

  </div>

</section>
`,

    css: `
/* Section utama link block */
.link-block {
  max-width: 600px; /* membatasi lebar section */
  margin: auto; /* posisi di tengah */
  padding: 40px 20px; /* ruang dalam */
}

/* Judul section */
.linkblock-title {
  text-align: center; /* judul di tengah */
  font-size: 2rem;
  margin-bottom: 25px;
}

/* Container daftar link */
.linkblock-list {
  display: flex;
  flex-direction: column; /* link disusun vertikal */
  gap: 15px; /* jarak antar link */
}

/* Item link */
.linkblock-item {
  display: block;
  background: #f8f9fa; /* background abu terang */

  padding: 16px 20px;
  border-radius: 10px;

  text-decoration: none; /* menghilangkan garis bawah link */
  color: #333;
  font-weight: 600;

  transition: 0.2s ease; /* animasi halus */

  border: 1px solid #e5e7eb; /* border tipis */
}

/* Efek hover link */
.linkblock-item:hover {
  background: #4361ee; /* background berubah biru */
  color: white; /* teks berubah putih */
  transform: translateY(-2px); /* efek sedikit naik */
}

/* Teks link */
.linkblock-text {
  display: block;
}
`,

    description:
    "Link Block adalah komponen untuk menampilkan daftar tautan penting dalam bentuk blok yang rapi dan mudah diklik. Cocok untuk halaman link-in-bio, resource list, atau navigasi sederhana."
},

  minifooter: {
    name: "Mini Footer",

    html: `
<!-- Footer kecil di bagian paling bawah website -->
<footer class="mini-footer">

  <!-- Container isi footer -->
  <div class="mini-footer-container">

    <!-- Teks copyright -->
    <p class="mini-footer-text">
      © 2026 Nama Website. All rights reserved.
    </p>

    <!-- Kumpulan link footer -->
    <div class="mini-footer-links">

      <!-- Link halaman tentang -->
      <a href="#" class="mini-footer-link">Tentang</a>

      <!-- Link halaman kontak -->
      <a href="#" class="mini-footer-link">Kontak</a>

      <!-- Link kebijakan privasi -->
      <a href="#" class="mini-footer-link">Privacy</a>

    </div>

  </div>

</footer>
`,

    css: `
/* Section footer utama */
.mini-footer {
  background: #111827; /* background gelap */
  color: #d1d5db; /* warna teks abu terang */

  padding: 25px 20px; /* ruang dalam */
  font-size: 0.95rem; /* ukuran teks sedikit kecil */
}

/* Container isi footer */
.mini-footer-container {
  max-width: 1100px; /* batas lebar */
  margin: auto; /* center container */

  display: flex; /* layout horizontal */
  justify-content: space-between; /* teks kiri, link kanan */
  align-items: center; /* rata tengah vertikal */

  flex-wrap: wrap; /* responsive di layar kecil */
  gap: 15px; /* jarak antar elemen */
}

/* Teks copyright */
.mini-footer-text {
  margin: 0; /* menghapus margin default paragraf */
}

/* Container link footer */
.mini-footer-links {
  display: flex;
  gap: 18px; /* jarak antar link */
}

/* Link footer */
.mini-footer-link {
  text-decoration: none; /* menghilangkan underline */
  color: #9ca3af; /* warna link abu */
  transition: 0.2s ease; /* animasi halus */
}

/* Efek hover link */
.mini-footer-link:hover {
  color: white; /* berubah putih saat hover */
}
`,

    description:
    "Mini Footer adalah footer sederhana yang berisi copyright dan beberapa link penting seperti kontak, privacy policy, atau tentang website."
  },

  pricingcomparison: {
    name: "Pricing Comparison Table",

    html: `
<!-- Section perbandingan paket -->
<section class="pricing-comparison">

  <!-- Judul section -->
  <h2 class="pricingcmp-title">Perbandingan Paket</h2>

  <!-- Wrapper agar tabel bisa discroll di layar kecil -->
  <div class="pricingcmp-table-wrapper">

    <!-- Tabel perbandingan paket -->
    <table class="pricingcmp-table">

      <!-- Header tabel -->
      <thead>
        <tr>
          <th>Fitur</th>
          <th>Basic</th>
          <th>Pro</th>
          <th>Premium</th>
        </tr>
      </thead>

      <!-- Isi tabel -->
      <tbody>

        <!-- Baris fitur jumlah website -->
        <tr>
          <td>Jumlah Website</td>
          <td>1</td>
          <td>5</td>
          <td>Unlimited</td>
        </tr>

        <!-- Baris fitur support email -->
        <tr>
          <td>Support Email</td>
          <td>✔</td>
          <td>✔</td>
          <td>✔</td>
        </tr>

        <!-- Baris fitur custom domain -->
        <tr>
          <td>Custom Domain</td>
          <td>✖</td>
          <td>✔</td>
          <td>✔</td>
        </tr>

        <!-- Baris fitur analytics -->
        <tr>
          <td>Analytics</td>
          <td>✖</td>
          <td>✔</td>
          <td>✔</td>
        </tr>

        <!-- Baris fitur priority support -->
        <tr>
          <td>Priority Support</td>
          <td>✖</td>
          <td>✖</td>
          <td>✔</td>
        </tr>

      </tbody>

    </table>
  </div>

</section>
`,

    css: `
/* Section utama perbandingan harga */
.pricing-comparison {
  padding: 60px 20px; /* ruang atas bawah */
  max-width: 1000px; /* membatasi lebar section */
  margin: auto; /* center container */
}

/* Judul section */
.pricingcmp-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 35px;
}

/* Wrapper tabel agar bisa horizontal scroll di mobile */
.pricingcmp-table-wrapper {
  overflow-x: auto;
}

/* Tabel utama */
.pricingcmp-table {
  width: 100%;
  border-collapse: collapse; /* menggabungkan border */
  font-size: 0.95rem;
}

/* Header tabel */
.pricingcmp-table th {
  background: #4361ee; /* background biru */
  color: white;
  padding: 14px;
  text-align: center;
}

/* Sel tabel */
.pricingcmp-table td {
  padding: 14px;
  text-align: center;
  border-bottom: 1px solid #e5e7eb; /* garis antar baris */
}

/* Kolom pertama (nama fitur) */
.pricingcmp-table td:first-child {
  text-align: left;
  font-weight: 600;
}

/* Efek hover baris */
.pricingcmp-table tr:hover {
  background: #f8f9fa;
}
`,

    description:
      "Pricing Comparison Table digunakan untuk membandingkan fitur dari beberapa paket layanan dalam bentuk tabel sehingga pengguna dapat melihat perbedaan dengan jelas."
  },

  projectshowcase: {
    name: "Project Showcase",

    html: `
<!-- Section untuk menampilkan proyek atau portfolio -->
<section class="project-showcase">

  <!-- Judul utama section -->
  <h2 class="project-title">Proyek Terbaru</h2>

  <!-- Subtitle penjelasan -->
  <p class="project-subtitle">
    Beberapa proyek yang pernah kami kerjakan.
  </p>

  <!-- Grid container proyek -->
  <div class="project-grid">

    <!-- Card proyek -->
    <div class="project-card">

      <!-- Gambar preview proyek -->
      <img src="https://via.placeholder.com/600x350" alt="Project Preview" class="project-image">

      <!-- Konten card -->
      <div class="project-content">

        <!-- Nama proyek -->
        <h3 class="project-name">Website Portfolio</h3>

        <!-- Deskripsi proyek -->
        <p class="project-desc">
          Website portfolio modern untuk menampilkan karya developer.
        </p>

        <!-- Link menuju proyek -->
        <a href="#" class="project-link">Lihat Proyek</a>

      </div>
    </div>

    <!-- Card proyek kedua -->
    <div class="project-card">

      <img src="https://via.placeholder.com/600x350" alt="Project Preview" class="project-image">

      <div class="project-content">

        <h3 class="project-name">Landing Page Produk</h3>

        <p class="project-desc">
          Landing page yang dirancang untuk meningkatkan konversi.
        </p>

        <a href="#" class="project-link">Lihat Proyek</a>

      </div>
    </div>

  </div>
</section>
`,

    css: `
/* Section utama project showcase */
.project-showcase {
  padding: 60px 20px; /* ruang atas bawah */
  max-width: 1100px; /* batas lebar */
  margin: auto; /* center section */
}

/* Judul section */
.project-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 10px;
}

/* Subtitle */
.project-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
}

/* Grid proyek */
.project-grid {
  display: grid;

  /* jumlah kolom otomatis */
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  gap: 25px; /* jarak antar card */
}

/* Card proyek */
.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden; /* agar gambar mengikuti radius */

  box-shadow: 0 10px 25px rgba(0,0,0,0.08);

  transition: 0.2s ease; /* animasi hover */
}

/* Hover card */
.project-card:hover {
  transform: translateY(-5px);
}

/* Gambar preview */
.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover; /* menjaga rasio gambar */
}

/* Konten dalam card */
.project-content {
  padding: 20px;
}

/* Nama proyek */
.project-name {
  margin-bottom: 8px;
}

/* Deskripsi proyek */
.project-desc {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 15px;
}

/* Tombol link proyek */
.project-link {
  display: inline-block;

  padding: 8px 16px;

  background: #4361ee;
  color: white;

  text-decoration: none;
  border-radius: 6px;

  font-size: 0.9rem;
}

/* Hover tombol */
.project-link:hover {
  background: #3a0ca3;
}
`,

    description:
    "Project Showcase digunakan untuk menampilkan daftar proyek atau portfolio dalam bentuk kartu grid yang rapi dan responsif."
  },

  achievements: {
    name: "Achievements Section",

    html: `
<!-- Section untuk menampilkan pencapaian atau statistik -->
<section class="achievements">

  <!-- Judul section -->
  <h2 class="achievements-title">Our Achievements</h2>

  <!-- Grid container statistik -->
  <div class="achievements-grid">
    
    <!-- Item statistik -->
    <div class="achievement-item">

      <!-- Angka pencapaian -->
      <h3 class="achievement-number">120+</h3>

      <!-- Label penjelasan -->
      <p class="achievement-label">Projects Completed</p>

    </div>

    <!-- Statistik kedua -->
    <div class="achievement-item">

      <h3 class="achievement-number">80+</h3>
      <p class="achievement-label">Happy Clients</p>

    </div>

    <!-- Statistik ketiga -->
    <div class="achievement-item">

      <h3 class="achievement-number">10+</h3>
      <p class="achievement-label">Years Experience</p>

    </div>

    <!-- Statistik keempat -->
    <div class="achievement-item">

      <h3 class="achievement-number">15</h3>
      <p class="achievement-label">Awards Won</p>

    </div>

  </div>

</section>
`,

    css: `
/* Section utama achievements */
.achievements {
  padding: 70px 20px; /* ruang atas bawah */
  background: #f8fafc; /* background abu sangat terang */
  text-align: center; /* semua teks di tengah */
}

/* Judul section */
.achievements-title {
  font-size: 2.2rem;
  margin-bottom: 40px;
}

/* Grid statistik */
.achievements-grid {
  display: grid;

  /* kolom otomatis menyesuaikan layar */
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));

  gap: 30px; /* jarak antar item */

  max-width: 900px; /* batas lebar */
  margin: auto; /* center container */
}

/* Card statistik */
.achievement-item {
  background: white;
  padding: 30px 20px;
  border-radius: 10px;

  /* shadow ringan */
  box-shadow: 0 6px 15px rgba(0,0,0,0.05);
}

/* Angka pencapaian */
.achievement-number {
  font-size: 2rem;
  color: #4361ee; /* warna aksen */
  margin-bottom: 8px;
}

/* Label penjelasan */
.achievement-label {
  font-size: 0.95rem;
  color: #555;
}
`,

    description:
    "Achievements Section digunakan untuk menampilkan pencapaian penting seperti jumlah project, klien, pengalaman, atau penghargaan dalam bentuk statistik yang mudah dilihat."
  },

  bioblock: {
    name: "Bio Block",

    html: `
<!-- Section bio / profil seseorang -->
<section class="bio-block">

  <!-- Container utama -->
  <div class="bio-container">

    <!-- Foto profil -->
    <div class="bio-image">
      <img src="https://via.placeholder.com/300" alt="Profile Photo">
    </div>

    <!-- Konten biodata -->
    <div class="bio-content">

      <!-- Nama -->
      <h2 class="bio-name">John Doe</h2>

      <!-- Peran / jabatan -->
      <p class="bio-role">Founder & Web Developer</p>

      <!-- Deskripsi singkat -->
      <p class="bio-description">
        John adalah seorang web developer yang berfokus pada pembuatan website modern
        dan cepat. Ia memiliki pengalaman dalam HTML, CSS, dan JavaScript serta
        telah membantu banyak bisnis membangun kehadiran online mereka.
      </p>

      <!-- Link sosial / website -->
      <div class="bio-links">
        <a href="#">Website</a>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
      </div>

    </div>

  </div>
</section>
`,

    css: `
/* Section bio utama */
.bio-block {
  padding: 70px 20px; /* ruang atas bawah */
  background: #ffffff;
}

/* Container layout bio */
.bio-container {
  max-width: 900px; /* batas lebar */
  margin: auto; /* center */

  display: flex; /* layout horizontal */
  gap: 40px; /* jarak antar elemen */

  align-items: center; /* rata tengah vertikal */
  flex-wrap: wrap; /* responsive di layar kecil */
}

/* Gambar profil */
.bio-image img {
  width: 260px; /* ukuran gambar */
  border-radius: 12px; /* sudut melengkung */
  object-fit: cover; /* menjaga rasio gambar */
}

/* Konten teks */
.bio-content {
  flex: 1; /* mengisi sisa ruang */
  min-width: 250px; /* menjaga layout mobile */
}

/* Nama */
.bio-name {
  font-size: 2rem;
  margin-bottom: 5px;
}

/* Role / jabatan */
.bio-role {
  color: #4361ee; /* warna aksen */
  font-weight: 600;
  margin-bottom: 15px;
}

/* Deskripsi */
.bio-description {
  color: #555;
  line-height: 1.6; /* jarak antar baris */
  margin-bottom: 20px;
}

/* Link sosial */
.bio-links a {
  text-decoration: none;
  margin-right: 15px;

  color: #4361ee;
  font-weight: 500;
}

/* Hover link */
.bio-links a:hover {
  text-decoration: underline;
}
`,

    description:
    "Bio Block digunakan untuk menampilkan profil seseorang seperti founder, penulis, atau anggota tim lengkap dengan foto, deskripsi singkat, dan link sosial."
  },

  uppernavbar: {
    name: "Upper Navbar",

    html: `
<!-- Upper navbar: bar kecil di atas navbar utama -->
<section class="upper-navbar">

  <!-- Container isi bar -->
  <div class="uppernav-container">

    <!-- Bagian kiri: info kontak -->
    <div class="uppernav-left">

      <!-- Email -->
      <span>Email: hello@example.com</span>

      <!-- Nomor telepon -->
      <span>Phone: +62 812 3456 7890</span>

    </div>

    <!-- Bagian kanan: link sosial media -->
    <div class="uppernav-right">

      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
      <a href="#">GitHub</a>

    </div>

  </div>

</section>
`,

    css: `
/* Upper navbar utama */
.upper-navbar {
  background: #111827; /* background gelap */
  color: #e5e7eb; /* warna teks terang */

  font-size: 0.9rem; /* teks kecil */
  padding: 8px 20px; /* ruang dalam */
}

/* Container layout */
.uppernav-container {
  max-width: 1100px; /* batas lebar */
  margin: auto; /* center */

  display: flex; /* layout horizontal */
  justify-content: space-between; /* kiri dan kanan */
  align-items: center;

  flex-wrap: wrap; /* responsive */
}

/* Info kontak */
.uppernav-left span {
  margin-right: 20px; /* jarak antar info */
}

/* Link sosial */
.uppernav-right a {
  color: #e5e7eb;
  text-decoration: none;

  margin-left: 15px; /* jarak antar link */
}

/* Hover link */
.uppernav-right a:hover {
  text-decoration: underline;
}
`,

    description:
    "Upper Navbar adalah bar kecil yang berada di atas navbar utama, biasanya digunakan untuk menampilkan informasi kontak, pengumuman singkat, atau link media sosial."
  },
};