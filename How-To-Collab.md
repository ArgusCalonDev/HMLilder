# Panduan Kolaborasi HMLilder

Dokumen ini menjelaskan cara melakukan kolaborasi pada proyek HMLilder melalui GitHub. Panduan ini ditujukan bagi kontributor yang ingin melakukan perubahan kode secara rapi dan terstruktur.

## 1. Cara Melakukan Modifikasi Kode

Kolaborasi dilakukan menggunakan sistem fork dan pull request. Berikut langkah-langkah umumnya.

### A. Melalui GitHub Desktop

1. Buka repository resmi **HMLilder** di GitHub.
2. Klik tombol **Fork** untuk menyalin repository ke akun GitHub kamu.
3. Buka aplikasi **GitHub Desktop**.
4. Pilih **File > Clone Repository**, lalu clone repository hasil fork milik kamu.
5. Lakukan perubahan kode sesuai kebutuhan pada folder proyek di komputer kamu.
6. Setelah selesai, buka kembali GitHub Desktop.
7. Isi judul dan deskripsi commit yang jelas, lalu klik **Commit to main** atau branch terkait.
8. Klik **Push origin** untuk mengirim perubahan ke repository fork milik kamu.
9. Buka repository fork di GitHub melalui browser.
10. Klik **Compare & Pull Request** untuk mengajukan pull request ke repository asli HMLilder.
11. Isi deskripsi pull request secara singkat dan jelas, lalu kirimkan.

### B. Melalui Git (Command Line)

1. Buka repository resmi **HMLilder** di GitHub.
2. Klik tombol **Fork** untuk menyalin repository ke akun GitHub kamu.
3. Salin URL repository hasil fork.
4. Buka terminal atau command prompt, lalu jalankan perintah berikut:

```bash
git clone https://github.com/username/hmlilder.git
```

5. Masuk ke folder proyek:

```bash
cd hmlilder
```

6. Lakukan perubahan kode sesuai kebutuhan.
7. Tambahkan perubahan ke staging area:

```bash
git add .
```

8. Lakukan commit dengan pesan yang jelas:

```bash
git commit -m "Deskripsi perubahan yang dilakukan"
```

9. Kirim perubahan ke repository fork:

```bash
git push origin main
```

10. Buka repository fork kamu di GitHub melalui browser.
11. Klik **Compare & Pull Request** untuk mengajukan pull request ke repository asli HMLilder.
12. Isi deskripsi pull request secara singkat dan jelas, lalu kirimkan.

## 2. File yang Boleh Dimodifikasi

Untuk menjaga konsistensi dan keterbacaan kode, kamu hanya diperbolehkan memodifikasi file berikut:

* File HTML yang **belum di-minify**.
* File JavaScript versi normal yang masih dapat dibaca dengan jelas.

File yang sudah di-minify atau file hasil build otomatis mohon tidak diubah secara langsung.

## 3. Catatan Tambahan

Saya mohon maaf apabila struktur atau penulisan kode di dalam proyek ini masih terlihat berantakan di beberapa bagian. Proyek ini masih terus dikembangkan dan akan dirapikan secara bertahap seiring waktu.
