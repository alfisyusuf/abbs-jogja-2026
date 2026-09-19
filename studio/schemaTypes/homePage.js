import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Halaman Depan (Home)',
  type: 'document',
  fields: [
    // --- 1. HERO SECTION ---
    defineField({
      name: 'heroImage',
      title: 'Gambar Background Utama',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'heroTopLabel',
      title: 'Label Atas (Samping Logo)',
      type: 'string',
      initialValue: 'SMA ABBS Yogyakarta'
    }),
    defineField({
      name: 'heroOverline',
      title: 'Teks Kecil Atas Judul',
      type: 'string',
      initialValue: 'Est. — Excellence in Education'
    }),
    defineField({
      name: 'heroTitleTop',
      title: 'Judul Besar (Baris Atas - Teks Solid)',
      type: 'string',
      initialValue: 'Wujudkan'
    }),
    defineField({
      name: 'heroTitleBottom',
      title: 'Judul Besar (Baris Bawah - Teks Transparan bergaris)',
      type: 'string',
      initialValue: 'Potensi'
    }),
    defineField({
      name: 'heroVideoLink',
      title: 'Link Video Profil (Youtube)',
      type: 'url'
    }),
    defineField({
      name: 'heroVideoText',
      title: 'Teks Tombol Video (Sebelah Play)',
      type: 'string',
      initialValue: 'Tonton Video'
    }),

    // --- 2. PPDB FLOAT BOX ---
    defineField({
      name: 'ppdbLabel',
      title: 'Label Kecil Atas PPDB',
      type: 'string',
      initialValue: 'Penerimaan Siswa Baru'
    }),
    defineField({
      name: 'ppdbTitle',
      title: 'Judul Kotak PPDB',
      type: 'string',
      initialValue: 'PPDB TAHUN AJARAN BARU'
    }),
    defineField({
      name: 'ppdbText',
      title: 'Teks Pendek PPDB',
      type: 'text',
      rows: 2
    }),
    defineField({
      name: 'ppdbButtonText',
      title: 'Teks Tombol Link PPDB',
      type: 'string',
      initialValue: 'Selengkapnya'
    }),
    defineField({
      name: 'ppdbLink',
      title: 'Link Informasi Selengkapnya',
      type: 'url'
    }),

    // --- 3. PRINCIPAL MESSAGE ---
    defineField({
        name: 'principalOverline',
        title: 'Label Kecil Section Kepsek',
        type: 'string',
        initialValue: "Principal's Message"
    }),
    defineField({
        name: 'principalName',
        title: 'Nama Kepala Sekolah',
        type: 'string'
    }),
    defineField({
        name: 'principalRole',
        title: 'Jabatan (Bawah Nama)',
        type: 'string',
        initialValue: 'Kepala Sekolah SMA ABBS'
    }),
    defineField({
        name: 'principalPhoto',
        title: 'Foto Kepala Sekolah',
        type: 'image',
        options: { hotspot: true }
    }),
    defineField({
        name: 'principalMessage',
        title: 'Kutipan Pesan Kepsek',
        type: 'text',
        rows: 4
    }),
    defineField({
        name: 'principalTaglineTop',
        title: 'Tagline Kepsek (Baris Atas)',
        type: 'string',
        initialValue: 'Mendidik dengan'
    }),
    defineField({
        name: 'principalTaglineBottom',
        title: 'Tagline Kepsek (Baris Bawah - Di-highlight Kuning)',
        type: 'string',
        initialValue: 'Hati & Teknologi'
    }),
    defineField({
        name: 'schoolAge',
        title: 'Usia Sekolah (Untuk Badge Foto Kepsek)',
        type: 'string',
        initialValue: '15+'
    }),

    // --- 4. KURIKULUM ---
    defineField({
        name: 'curriculumOverline',
        title: 'Label Kecil Section Kurikulum',
        type: 'string',
        initialValue: 'Core Curriculum'
    }),
    defineField({
        name: 'curriculumHeader',
        title: 'Judul Section Kurikulum (Bagian Hitam)',
        type: 'string',
        initialValue: 'Three Pillars of'
    }),
    defineField({
        name: 'curriculumHeaderHighlight',
        title: 'Judul Section Kurikulum (Bagian Merah)',
        type: 'string',
        initialValue: 'Excellence'
    }),
    defineField({
        name: 'curriculumSubHeader',
        title: 'Deskripsi Kecil Kurikulum',
        type: 'string',
        initialValue: 'Tiga fondasi pendidikan yang membentuk generasi unggul, berakhlak, dan berdaya saing global.'
    }),
    defineField({
        name: 'curriculum',
        title: '3 Pilar Kurikulum',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {name: 'title', title: 'Judul (Misal: ICT & IoT)', type: 'string'},
                {name: 'desc', title: 'Deskripsi Singkat', type: 'text', rows: 2},
                {name: 'image', title: 'Gambar Background', type: 'image'},
                {name: 'link', title: 'Link Halaman Detail (Opsional)', type: 'string'},
                {name: 'color', title: 'Warna Aksen', type: 'string', options: {list: [
                    {title: 'Gold', value: 'bg-[#C9A227]/80'},
                    {title: 'Kuning/Gold', value: 'bg-yellow-600/80'},
                    {title: 'Hijau', value: 'bg-green-800/80'},
                    {title: 'Biru', value: 'bg-blue-800/80'},
                ]}}
            ]
        }],
        validation: Rule => Rule.max(3)
    }),

    // --- 5. STATISTIK ---
    defineField({
        name: 'stats',
        title: 'Angka Statistik',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {name: 'value', title: 'Angka (Misal: 100%)', type: 'string'},
                {name: 'label', title: 'Label (Misal: PTN Acceptance)', type: 'string'}
            ]
        }]
    }),

    // --- 6. ALUMNI LOGO ---
    defineField({
        name: 'alumniOverline',
        title: 'Teks Atas Logo Universitas',
        type: 'string',
        initialValue: 'Alumni Kami Diterima Di'
    }),
    defineField({
        name: 'alumniLogos',
        title: 'Logo Universitas Alumni',
        type: 'array',
        of: [{type: 'image'}]
    }),

    // --- 7. LEARNING EXPERIENCE ---
    defineField({
        name: 'videoOverline',
        title: 'Label Kecil Section Video',
        type: 'string',
        initialValue: 'Learning Experience'
    }),
    defineField({
        name: 'videoHeader',
        title: 'Judul Section Video (Bagian Hitam)',
        type: 'string',
        initialValue: 'Suasana Belajar'
    }),
    defineField({
        name: 'videoHeaderHighlight',
        title: 'Judul Section Video (Bagian Merah)',
        type: 'string',
        initialValue: 'Interaktif'
    }),
    defineField({
        name: 'videoYoutubeText',
        title: 'Teks Tombol Lihat Youtube',
        type: 'string',
        initialValue: 'Lihat Kanal Youtube'
    }),
    defineField({
        name: 'learningVideos',
        title: 'Video Pembelajaran (Grid 3)',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {name: 'title', title: 'Judul Video', type: 'string'},
                {name: 'category', title: 'Kategori (Label Warna)', type: 'string'},
                {name: 'thumbnail', title: 'Thumbnail Video', type: 'image'},
                {name: 'videoUrl', title: 'Link Youtube', type: 'url'},
                {name: 'colorClass', title: 'Warna Label', type: 'string', options: {list:[
                    {title: 'Merah', value: 'bg-red-700'},
                    {title: 'Biru', value: 'bg-blue-700'},
                    {title: 'Hijau', value: 'bg-green-700'},
                ]}}
            ]
        }]
    }),

    // --- 8. TESTIMONI ---
    defineField({
        name: 'testimonialsOverline',
        title: 'Label Kecil Section Testimoni',
        type: 'string',
        initialValue: 'Success Stories'
    }),
    defineField({
        name: 'testimonialsAcceptedText',
        title: 'Teks Pendahulu Universitas',
        type: 'string',
        initialValue: 'Diterima di'
    }),
    defineField({
        name: 'testimonials',
        title: 'Kisah Sukses Alumni',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {name: 'name', title: 'Nama Alumni', type: 'string'},
                {name: 'univ', title: 'Diterima di (Univ)', type: 'string'},
                {name: 'univLogo', title: 'Logo Kampus', type: 'image'},
                {name: 'photo', title: 'Foto Alumni', type: 'image'},
                {name: 'quote', title: 'Kutipan', type: 'text', rows: 3},
                {name: 'batch', title: 'Angkatan/Tahun', type: 'string'},
                {name: 'videoUrl', title: 'Link Video Testimoni (Opsional)', type: 'url'}
            ]
        }]
    }),
    
    // --- 9. CTA BAWAH ---
    defineField({
        name: 'ctaOverline',
        title: 'Label Kecil Section CTA',
        type: 'string',
        initialValue: 'Penerimaan Peserta Didik Baru'
    }),
    defineField({
        name: 'ctaTitle',
        title: 'Judul CTA Bawah',
        type: 'string',
        initialValue: 'Mulai Perjalanan Masa Depan Bersama Kami'
    }),
    defineField({
        name: 'ctaDesc',
        title: 'Deskripsi CTA',
        type: 'text',
        rows: 3
    }),
    defineField({
        name: 'ctaButtonPrimaryText',
        title: 'Teks Tombol Daftar (Utama)',
        type: 'string',
        initialValue: 'Daftar Sekarang'
    }),
    defineField({
        name: 'ctaLink',
        title: 'Link Tombol Daftar',
        type: 'url'
    }),
    defineField({
        name: 'ctaButtonSecondaryText',
        title: 'Teks Tombol Info (Kedua)',
        type: 'string',
        initialValue: 'Info Lengkap'
    }),

    // --- 10. ACHIEVEMENTS ---
    defineField({
      name: 'achievementsOverline',
      title: 'Label Kecil Section Prestasi',
      type: 'string',
      initialValue: 'Hall of Fame'
    }),
    defineField({
      name: 'achievementsTitle',
      title: 'Judul Prestasi (Bagian Putih)',
      type: 'string',
      initialValue: 'Siswa'
    }),
    defineField({
      name: 'achievementsTitleHighlight',
      title: 'Judul Prestasi (Bagian Kuning)',
      type: 'string',
      initialValue: 'Berprestasi'
    }),
    defineField({
      name: 'achievements',
      title: 'Siswa Berprestasi (Carousel Berjalan)',
      type: 'array',
      of: [{
          type: 'object',
          fields: [
              { name: 'name', title: 'Nama Siswa', type: 'string', validation: Rule => Rule.required() },
              { name: 'achievementTitle', title: 'Prestasi', type: 'string', validation: Rule => Rule.required() },
              { name: 'photo', title: 'Foto Siswa', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
              { name: 'batch', title: 'Angkatan/Tahun (Opsional)', type: 'string' },
              { name: 'videoUrl', title: 'Link Video (Opsional)', type: 'url' }
          ],
          preview: {
            select: { title: 'name', subtitle: 'achievementTitle', media: 'photo' }
          }
      }]
    }),

    // --- 11. JOURNAL / NEWS LABEL ---
    defineField({
        name: 'journalOverline',
        title: 'Label Kecil Section Jurnal',
        type: 'string',
        initialValue: 'Journal'
    }),
    defineField({
        name: 'journalTitle',
        title: 'Judul Section Jurnal (Bagian Hitam)',
        type: 'string',
        initialValue: 'Latest'
    }),
    defineField({
        name: 'journalTitleHighlight',
        title: 'Judul Section Jurnal (Bagian Merah)',
        type: 'string',
        initialValue: 'Updates'
    }),
    defineField({
        name: 'journalLinkText',
        title: 'Teks Tombol Lihat Semua',
        type: 'string',
        initialValue: 'Semua Berita'
    }),

    // --- 12. HIGHLIGHT KAMPUS ---
    defineField({ name: 'campusOverline', title: 'Label Kecil Section Kampus', type: 'string', initialValue: 'Kunjungi Kampus Kami' }),
    defineField({ name: 'campusTitle', title: 'Judul Section Kampus (Bagian Hitam)', type: 'string', initialValue: 'Kampus Baru,' }),
    defineField({ name: 'campusTitleHighlight', title: 'Judul Section Kampus (Bagian Biru)', type: 'string', initialValue: 'Siap Menyambut' }),
    defineField({ name: 'campusDescription', title: 'Deskripsi Kampus', type: 'text', rows: 3 }),
    defineField({
        name: 'campusImages',
        title: 'Foto Kampus (1-4 foto)',
        type: 'array',
        of: [{ type: 'image', options: { hotspot: true } }],
        validation: Rule => Rule.max(4)
    }),
    defineField({ name: 'campusAddress', title: 'Alamat Lengkap', type: 'text', rows: 2 }),
    defineField({ name: 'campusMapLink', title: 'Link Google Maps', type: 'url' }),

    // --- 13. JARINGAN ABBS ---
    defineField({ name: 'networkOverline', title: 'Label Kecil Section Jaringan', type: 'string', initialValue: 'Bukan Berdiri Sendiri' }),
    defineField({ name: 'networkTitle', title: 'Judul Section Jaringan (Bagian Hitam)', type: 'string', initialValue: 'Bagian dari' }),
    defineField({ name: 'networkTitleHighlight', title: 'Judul Section Jaringan (Bagian Biru)', type: 'string', initialValue: 'Jaringan ABBS' }),
    defineField({ name: 'networkDescription', title: 'Deskripsi Jaringan Yayasan', type: 'text', rows: 3,
        initialValue: 'SMA ABBS Yogyakarta berada di bawah naungan Yayasan Alabidin yang telah lebih dulu mengelola unit-unit sekolah lain dengan rekam jejak yang teruji.' }),
    defineField({
        name: 'networkUnits',
        title: 'Unit-Unit ABBS Lain',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                { name: 'name', title: 'Nama Unit', type: 'string' },
                { name: 'location', title: 'Lokasi', type: 'string' },
                { name: 'tagline', title: 'Tagline Singkat (opsional)', type: 'string' },
                { name: 'image', title: 'Foto/Logo', type: 'image' },
                { name: 'link', title: 'Link Website (opsional)', type: 'url' },
            ],
            preview: { select: { title: 'name', subtitle: 'location', media: 'image' } }
        }],
        validation: Rule => Rule.max(6)
    }),

    // --- 14. JADILAH ANGKATAN PERTAMA ---
    defineField({ name: 'foundingOverline', title: 'Label Kecil Section Angkatan Pertama', type: 'string', initialValue: 'Kesempatan Terbatas' }),
    defineField({ name: 'foundingTitle', title: 'Judul Section (Bagian Putih)', type: 'string', initialValue: 'Jadilah' }),
    defineField({ name: 'foundingTitleHighlight', title: 'Judul Section (Bagian Biru)', type: 'string', initialValue: 'Angkatan Pertama' }),
    defineField({ name: 'foundingDescription', title: 'Deskripsi', type: 'text', rows: 3,
        initialValue: 'Bergabung sejak angkatan pertama berarti mendapat perhatian paling personal, ruang untuk tumbuh bersama sekolah, dan namamu akan selalu tercatat sebagai pionir SMA ABBS Yogyakarta.' }),
    defineField({
        name: 'foundingBenefits',
        title: 'Keuntungan Jadi Angkatan Pertama',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                { name: 'icon', title: 'Ikon (nama Font Awesome, misal: fa-users)', type: 'string' },
                { name: 'text', title: 'Teks Keuntungan', type: 'string' },
            ]
        }],
        validation: Rule => Rule.max(4)
    }),
    defineField({ name: 'foundingCtaText', title: 'Teks Tombol', type: 'string', initialValue: 'Daftar Sekarang' }),
    defineField({ name: 'foundingCtaLink', title: 'Link Tombol', type: 'url' }),

    // --- 15. FAQ PPDB ---
    defineField({ name: 'faqOverline', title: 'Label Kecil Section FAQ', type: 'string', initialValue: 'Sering Ditanyakan' }),
    defineField({ name: 'faqTitle', title: 'Judul Section FAQ (Bagian Hitam)', type: 'string', initialValue: 'Pertanyaan' }),
    defineField({ name: 'faqTitleHighlight', title: 'Judul Section FAQ (Bagian Biru)', type: 'string', initialValue: 'Seputar PPDB' }),
    defineField({
        name: 'faqItems',
        title: 'Daftar FAQ',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                { name: 'question', title: 'Pertanyaan', type: 'string' },
                { name: 'answer', title: 'Jawaban', type: 'text', rows: 3 },
            ],
            preview: { select: { title: 'question' } }
        }],
    }),
  ]
})

