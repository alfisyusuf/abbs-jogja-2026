# Setup SMA ABBS Yogyakarta — override repo `abbs-jogja-2026`

## Basis yang dipakai
Ini di-clone dari **`abbs-web-sanity`** (basis SMA ABBS Surakarta yang sudah
lengkap: popup, OG share preview, favicon dinamis, navbar/footer dinamis) —
**bukan** dari basis SDTQ. Alasannya: SMA ABBS Yogyakarta konteksnya sama
(SMA, bukan SD), dan program Cambridge/ICP/statistik alumni-nya relevan
persis dengan struktur konten SMA yang asli — beda dengan SDTQ yang saya
rombak khusus untuk konteks SD tahfidz.

## Struktur folder
Mengikuti yang sudah ada di repo kamu — `web/` (Astro frontend) dan
`studio/` (Sanity Studio), **bukan** `frontend/`+`sanity-studio/` seperti
di SDTQ.

## Keputusan warna
- **Maroon (`#800000`) TIDAK diubah** — ini identitas seragam Rabu yang
  sama di semua unit ABBS (Solo, Boyolali, Sukoharjo, Karanganyar,
  Yogyakarta, Klaten), sesuai yang kamu jelaskan.
- **Aksen kuning diganti biru muda `#4F9FD6`** (skala turunan dari
  `#60A0D0`, diambil presisi dari logo ABBS Yogyakarta — bukan tebakan).
- Diimplementasikan dengan cara **override skala warna `yellow` Tailwind**
  di `web/src/styles/global.css` (bukan ganti nama class satu-satu) —
  supaya SEMUA pemakaian `text-yellow-400`, `bg-yellow-500`,
  `hover:bg-yellow-600`, dst di seluruh file otomatis ikut berubah, tanpa
  risiko ada yang kelewat (ini pelajaran dari kasus SDTQ kemarin, di mana
  saya sempat kelewat 114 pemakaian class serupa karena cuma ganti hex).
- `.bg('800000')` di `MainLayout.astro` (background OG image fallback)
  **sengaja dibiarkan maroon**, bukan diganti — itu memang harus tetap
  warna identitas utama.

## WAJIB dilakukan manual

### 1. Isi `web/public/`
Folder ini gak ikut ke-generate (gambar gak bisa lewat text dump). Buat
folder `web/public/` isi minimal:
- `favicon.ico` — dari logo ABBS Yogyakarta
- `logo-abbs-jogja-putih.png` — versi monokrom/putih dari logo, dipakai
  sebagai fallback kalau field Logo di Sanity belum diisi

### 2. Ganti domain setelah tahu
`web/astro.config.mjs` sudah saya isi placeholder
`https://abbs-jogja-2026.pages.dev` — sesuaikan kalau beda.

### 3. Commit & push (override repo lama)
```bash
cd abbs-jogja-2026
# copy semua file dari paket ini, timpa isi web/ dan studio/ yang lama
git add .
git commit -m "override: rebuild dari basis abbs-web-sanity, rebrand Yogyakarta"
git push
```

### 4. Cloudflare Pages
Kalau project Cloudflare Pages untuk repo ini sudah pernah dibuat dari
attempt sebelumnya, cek lagi **Root directory**-nya harus `web` (bukan
kosong, bukan `frontend`).

### 5. Deploy Studio
```bash
cd studio
npx sanity deploy
```
Karena `appId` sengaja saya kosongkan, ini akan generate app baru — jangan
kaget kalau di-minta konfirmasi nama subdomain studio.

## Soal "belum jalan KBM" (intake pertama 2027/2028)

Section-section yang butuh data siswa riil (Statistik, Alumni/Testimoni,
Hall of Fame Achievements) **sudah didesain otomatis hilang kalau
kosong** — jadi aman langsung deploy sekarang meski belum ada data, gak
akan nampilin section kosong yang aneh. Fokus isi dulu:
- **PPDB** (paling relevan sekarang — pendaftaran gelombang pertama)
- **3 Pilar Kurikulum** → isi sesuai bio Instagram: Cambridge/ICP, ICT,
  Tahfidz (persis 3 program yang mereka highlight)
- **Sambutan Kepala Sekolah**
- Section lain (statistik, alumni, testimoni) tinggal dikosongkan dulu,
  isi belakangan begitu ada siswa/lulusan pertama

## Update: palet warna final (role-swap)

Setelah didiskusikan lagi, palet warnanya **dibalik total**, bukan cuma
"aksen kuning jadi biru":

| Peran | Sebelumnya | Sekarang |
|---|---|---|
| Warna dominan (tombol, panel menu, background besar) | Maroon `#800000` | **Biru `#2E6DA4`** |
| Hover/dark variant dominan | `#600000` | **`#1E4E7D`** |
| Aksen kecil (highlight teks, underline, badge kategori) | Kuning `#EAB308` | **Maroon `#800000`** (balik jadi aksen, bukan dominan) |
| Biru muda (glow lembut, garis gradient dua-warna) | – | **`#60A0D0`** (sampel asli logo) |
| Section CTA "Angkatan Pertama" (dramatis, gelap) | – | **`#123A5C`** (varian biru paling gelap) |

Implementasi: hampir semua `#800000` literal di kode ganti jadi biru,
KECUALI beberapa garis gradient dua-warna dan badge kategori "Info PPS"
yang sengaja dipertahankan maroon sebagai aksen. Skala warna `yellow-*`
Tailwind di-override ke maroon di `global.css` (bukan biru lagi).

## Update: 4 section baru di homepage

Untuk mengatasi kesan "kayak barang reuse yang bagiannya hilang" karena
banyak section based-on-data (Statistik, Testimoni, Achievement) yang
masih kosong, ditambahkan 4 section baru — **semuanya otomatis
tersembunyi kalau belum diisi**, jadi aman deploy sekarang:

1. **Highlight Kampus** (setelah Kurikulum) — isi `campusImages`,
   `campusDescription`, `campusAddress`, `campusMapLink` di homePage.
2. **Bagian dari Jaringan ABBS** (menggantikan slot Statistik yang
   kosong) — isi `networkDescription` dan minimal 1 `networkUnits`
   (nama unit, lokasi, foto) untuk Solo/Boyolali/Sukoharjo/Karanganyar.
3. **Jadilah Angkatan Pertama** (menggantikan slot Achievement yang
   kosong) — isi `foundingTitle` (WAJIB diisi supaya section muncul),
   `foundingDescription`, dan opsional `foundingBenefits` (maks 4).
4. **FAQ PPDB** (sebelum Journal) — isi minimal 1 `faqItems`.

Semua field ini ada di Studio, di dalam dokumen "Halaman Depan (Home)"
yang sama, section 12-15.


## Yang belum saya bawa dari improvement SDTQ

Beberapa hal yang kita kembangkan khusus pas proses SDTQ (section Galeri,
field Threads di sosmed, field metaDescription per halaman untuk OG,
LinkedIn di data guru) **belum saya terapkan di sini** — supaya scope
awal ini tetap fokus ke rebranding basis SMA yang bersih dulu. Kabari
kalau mau saya portingkan juga fitur-fitur itu ke sini.
