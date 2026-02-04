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
  }
};