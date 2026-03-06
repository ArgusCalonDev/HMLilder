const components = {
  hero: {
    name: "Hero Section",
    html: `
<section class="hero">
  <h1 class="hero-title">Judul Utama Website</h1>
  <p class="hero-desc">
    Deskripsi singkat yang menjelaskan tujuan website atau produk.
  </p>
  <button class="hero-button">Mulai Sekarang</button>
</section>
`,
    css: `
.hero {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #4361ee, #3a0ca3);
  color: white;
  border-radius: 16px;
}

.hero-title {
  font-size: 2.8rem;
  margin-bottom: 20px;
}

.hero-desc {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 30px;
}

.hero-button {
  background: white;
  color: #4361ee;
  border: none;
  padding: 15px 36px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
}
`,
    description:
      "Hero Section adalah bagian pembuka halaman yang berfungsi menarik perhatian pengguna. Biasanya berisi judul utama, deskripsi singkat, dan tombol ajakan bertindak."
  },

  features: {
    name: "Features Section",
    html: `
<section class="features">
  <h2 class="features-title">Fitur Unggulan</h2>

  <div class="features-grid">
    <div class="feature-item">
      <h3 class="feature-title">Fitur Pertama</h3>
      <p>Penjelasan singkat tentang fitur.</p>
    </div>

    <div class="feature-item">
      <h3 class="feature-title">Fitur Kedua</h3>
      <p>Penjelasan singkat tentang fitur.</p>
    </div>
  </div>
</section>
`,
    css: `
.features {
  padding: 60px 20px;
}

.features-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 40px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.feature-item {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  border-left: 5px solid #4361ee;
}

.feature-title {
  color: #4361ee;
  margin-bottom: 10px;
}
`,
    description:
      "Section untuk menampilkan keunggulan atau fitur utama dari produk atau layanan dalam bentuk kartu yang rapi dan responsif."
  },

  pricing: {
    name: "Pricing Table",
    html: `
<section class="pricing">
  <div class="pricing-grid">
    <div class="price-card">
      <h3 class="price-title">Basic</h3>
      <div class="price-value">Rp149K</div>
      <button class="price-button">Pilih Paket</button>
    </div>

    <div class="price-card popular">
      <h3 class="price-title">Premium</h3>
      <div class="price-value">Rp399K</div>
      <button class="price-button">Pilih Paket</button>
    </div>
  </div>
</section>
`,
    css: `
.pricing {
  padding: 60px 20px;
  background: #f5f7fa;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: auto;
}

.price-card {
  background: white;
  padding: 35px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.price-card.popular {
  border: 2px solid #4361ee;
  transform: scale(1.05);
}

.price-title {
  color: #4361ee;
  margin-bottom: 10px;
}

.price-value {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.price-button {
  width: 100%;
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
<section class="testimonials">
  <div class="testimonial-grid">
    <div class="testimonial-item">
      <p class="testimonial-text">
        Website ini sangat membantu proses belajar saya.
      </p>
      <span class="testimonial-name">— Pengguna</span>
    </div>
  </div>
</section>
`,
    css: `
.testimonials {
  padding: 60px 20px;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  max-width: 1000px;
  margin: auto;
}

.testimonial-item {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 12px;
}

.testimonial-text {
  font-style: italic;
  color: #555;
}

.testimonial-name {
  display: block;
  margin-top: 10px;
  font-weight: 700;
}
`,
    description:
      "Section untuk menampilkan ulasan atau pendapat pengguna sebagai bukti sosial."
  },

  ctaBar: {
    name: "CTA Bar",
    
    html: `
<section class="cta-bar">
  <div class="cta-container">
    <div class="cta-text">
      <h2 class="cta-title">Siap Memulai Proyekmu?</h2>
      <p class="cta-desc">
        Gunakan tools ini untuk membangun website dengan lebih cepat dan mudah.
      </p>
    </div>

    <div class="cta-action">
      <a href="#" class="cta-button">Mulai Sekarang</a>
    </div>
  </div>
</section>`,

    css: `
.cta-bar {
  background: linear-gradient(135deg, #4361ee, #3a0ca3);
  color: white;
  padding: 50px 20px;
  border-radius: 14px;
}

.cta-container {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

.cta-title {
  font-size: 2rem;
  margin-bottom: 10px;
}

.cta-desc {
  font-size: 1rem;
  color: #e0e7ff;
}

.cta-button {
  display: inline-block;
  padding: 14px 32px;
  background: white;
  color: #4361ee;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px;
  transition: 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}`,

    description: "Sebuah bar ajakan"
  },

  linkblock: {
    name: "Link Block",

    html: `
<section class="link-block">
  <h2 class="linkblock-title">Link Penting</h2>

  <div class="linkblock-list">

    <a href="#" class="linkblock-item">
      <span class="linkblock-text">Dokumentasi</span>
    </a>

    <a href="#" class="linkblock-item">
      <span class="linkblock-text">Tutorial</span>
    </a>

    <a href="#" class="linkblock-item">
      <span class="linkblock-text">Download Resource</span>
    </a>

    <a href="#" class="linkblock-item">
      <span class="linkblock-text">Hubungi Kami</span>
    </a>

  </div>
</section>
`,

    css: `
.link-block {
  max-width: 600px;
  margin: auto;
  padding: 40px 20px;
}

.linkblock-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 25px;
}

.linkblock-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.linkblock-item {
  display: block;
  background: #f8f9fa;
  padding: 16px 20px;
  border-radius: 10px;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  transition: 0.2s ease;
  border: 1px solid #e5e7eb;
}

.linkblock-item:hover {
  background: #4361ee;
  color: white;
  transform: translateY(-2px);
}

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
<footer class="mini-footer">
  <div class="mini-footer-container">

    <p class="mini-footer-text">
      © 2026 Nama Website. All rights reserved.
    </p>

    <div class="mini-footer-links">
      <a href="#" class="mini-footer-link">Tentang</a>
      <a href="#" class="mini-footer-link">Kontak</a>
      <a href="#" class="mini-footer-link">Privacy</a>
    </div>

  </div>
</footer>
`,

    css: `
.mini-footer {
  background: #111827;
  color: #d1d5db;
  padding: 25px 20px;
  font-size: 0.95rem;
}

.mini-footer-container {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.mini-footer-text {
  margin: 0;
}

.mini-footer-links {
  display: flex;
  gap: 18px;
}

.mini-footer-link {
  text-decoration: none;
  color: #9ca3af;
  transition: 0.2s ease;
}

.mini-footer-link:hover {
  color: white;
}
`,

    description:
    "Mini Footer adalah footer sederhana yang berisi copyright dan beberapa link penting seperti kontak, privacy policy, atau tentang website."
  },

  pricingcomparison: {
    name: "Pricing Comparison Table",

    html: `
<section class="pricing-comparison">
  <h2 class="pricingcmp-title">Perbandingan Paket</h2>

  <div class="pricingcmp-table-wrapper">
    <table class="pricingcmp-table">
      <thead>
        <tr>
          <th>Fitur</th>
          <th>Basic</th>
          <th>Pro</th>
          <th>Premium</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Jumlah Website</td>
          <td>1</td>
          <td>5</td>
          <td>Unlimited</td>
        </tr>

        <tr>
          <td>Support Email</td>
          <td>✔</td>
          <td>✔</td>
          <td>✔</td>
        </tr>

        <tr>
          <td>Custom Domain</td>
          <td>✖</td>
          <td>✔</td>
          <td>✔</td>
        </tr>

        <tr>
          <td>Analytics</td>
          <td>✖</td>
          <td>✔</td>
          <td>✔</td>
        </tr>

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
.pricing-comparison {
  padding: 60px 20px;
  max-width: 1000px;
  margin: auto;
}

.pricingcmp-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 35px;
}

.pricingcmp-table-wrapper {
  overflow-x: auto;
}

.pricingcmp-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.pricingcmp-table th {
  background: #4361ee;
  color: white;
  padding: 14px;
  text-align: center;
}

.pricingcmp-table td {
  padding: 14px;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;
}

.pricingcmp-table td:first-child {
  text-align: left;
  font-weight: 600;
}

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
<section class="project-showcase">
  <h2 class="project-title">Proyek Terbaru</h2>
  <p class="project-subtitle">
    Beberapa proyek yang pernah kami kerjakan.
  </p>

  <div class="project-grid">

    <div class="project-card">
      <img src="https://via.placeholder.com/600x350" alt="Project Preview" class="project-image">
      <div class="project-content">
        <h3 class="project-name">Website Portfolio</h3>
        <p class="project-desc">
          Website portfolio modern untuk menampilkan karya developer.
        </p>
        <a href="#" class="project-link">Lihat Proyek</a>
      </div>
    </div>

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
.project-showcase {
  padding: 60px 20px;
  max-width: 1100px;
  margin: auto;
}

.project-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.project-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: 0.2s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-content {
  padding: 20px;
}

.project-name {
  margin-bottom: 8px;
}

.project-desc {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 15px;
}

.project-link {
  display: inline-block;
  padding: 8px 16px;
  background: #4361ee;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
}

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
<section class="achievements">
  <h2 class="achievements-title">Our Achievements</h2>

  <div class="achievements-grid">
    
    <div class="achievement-item">
      <h3 class="achievement-number">120+</h3>
      <p class="achievement-label">Projects Completed</p>
    </div>

    <div class="achievement-item">
      <h3 class="achievement-number">80+</h3>
      <p class="achievement-label">Happy Clients</p>
    </div>

    <div class="achievement-item">
      <h3 class="achievement-number">10+</h3>
      <p class="achievement-label">Years Experience</p>
    </div>

    <div class="achievement-item">
      <h3 class="achievement-number">15</h3>
      <p class="achievement-label">Awards Won</p>
    </div>

  </div>
</section>
`,

    css: `
.achievements {
  padding: 70px 20px;
  background: #f8fafc;
  text-align: center;
}

.achievements-title {
  font-size: 2.2rem;
  margin-bottom: 40px;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 30px;
  max-width: 900px;
  margin: auto;
}

.achievement-item {
  background: white;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.05);
}

.achievement-number {
  font-size: 2rem;
  color: #4361ee;
  margin-bottom: 8px;
}

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
<section class="bio-block">
  <div class="bio-container">

    <div class="bio-image">
      <img src="https://via.placeholder.com/300" alt="Profile Photo">
    </div>

    <div class="bio-content">
      <h2 class="bio-name">John Doe</h2>
      <p class="bio-role">Founder & Web Developer</p>

      <p class="bio-description">
        John adalah seorang web developer yang berfokus pada pembuatan website modern
        dan cepat. Ia memiliki pengalaman dalam HTML, CSS, dan JavaScript serta
        telah membantu banyak bisnis membangun kehadiran online mereka.
      </p>

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
.bio-block {
  padding: 70px 20px;
  background: #ffffff;
}

.bio-container {
  max-width: 900px;
  margin: auto;
  display: flex;
  gap: 40px;
  align-items: center;
  flex-wrap: wrap;
}

.bio-image img {
  width: 260px;
  border-radius: 12px;
  object-fit: cover;
}

.bio-content {
  flex: 1;
  min-width: 250px;
}

.bio-name {
  font-size: 2rem;
  margin-bottom: 5px;
}

.bio-role {
  color: #4361ee;
  font-weight: 600;
  margin-bottom: 15px;
}

.bio-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.bio-links a {
  text-decoration: none;
  margin-right: 15px;
  color: #4361ee;
  font-weight: 500;
}

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
<section class="upper-navbar">
  <div class="uppernav-container">

    <div class="uppernav-left">
      <span>Email: hello@example.com</span>
      <span>Phone: +62 812 3456 7890</span>
    </div>

    <div class="uppernav-right">
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
      <a href="#">GitHub</a>
    </div>

  </div>
</section>
`,

    css: `
.upper-navbar {
  background: #111827;
  color: #e5e7eb;
  font-size: 0.9rem;
  padding: 8px 20px;
}

.uppernav-container {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.uppernav-left span {
  margin-right: 20px;
}

.uppernav-right a {
  color: #e5e7eb;
  text-decoration: none;
  margin-left: 15px;
}

.uppernav-right a:hover {
  text-decoration: underline;
}
`,

    description:
    "Upper Navbar adalah bar kecil yang berada di atas navbar utama, biasanya digunakan untuk menampilkan informasi kontak, pengumuman singkat, atau link media sosial."
  },
};