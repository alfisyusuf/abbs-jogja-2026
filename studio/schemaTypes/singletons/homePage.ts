import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'homePage',
  title: 'Halaman Beranda',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {name: 'hero', title: 'Hero', default: true},
    {name: 'program', title: 'Program'},
    {name: 'tentang', title: 'Tentang Kami'},
    {name: 'statistik', title: 'Statistik'},
    {name: 'testimoni', title: 'Testimoni'},
    {name: 'galeri', title: 'Galeri'},
    {name: 'berita', title: 'Berita'},
    {name: 'faq', title: 'FAQ'},
  ],
  fields: [
    // --- HERO ---
    defineField({name: 'heroHeadline', title: 'Judul Utama (Headline)', type: 'string', group: 'hero'}),
    defineField({name: 'heroHighlight', title: 'Bagian Judul Ditonjolkan', type: 'string', group: 'hero'}),
    defineField({name: 'heroDescription', title: 'Deskripsi Hero', type: 'text', rows: 3, group: 'hero'}),
    defineField({name: 'heroImage', title: 'Gambar Hero', type: 'image', group: 'hero', options: {hotspot: true}}),
    defineField({name: 'heroPrimaryCtaLabel', title: 'Tombol Utama — Label', type: 'string', group: 'hero'}),
    defineField({name: 'heroPrimaryCtaUrl', title: 'Tombol Utama — URL', type: 'string', group: 'hero'}),
    defineField({name: 'heroSecondaryCtaLabel', title: 'Tombol Kedua — Label', type: 'string', group: 'hero'}),
    defineField({name: 'heroSecondaryCtaUrl', title: 'Tombol Kedua — URL', type: 'string', group: 'hero'}),
    defineField({name: 'heroNote', title: 'Catatan Kecil (Bawah Tombol)', type: 'string', group: 'hero'}),

    // --- PROGRAM ---
    defineField({name: 'programEyebrow', title: 'Kicker/Label Kecil', type: 'string', group: 'program'}),
    defineField({name: 'programSectionTitle', title: 'Judul Bagian Program', type: 'string', group: 'program'}),
    defineField({name: 'programDescription', title: 'Deskripsi Seksi Program', type: 'text', rows: 2, group: 'program'}),
    defineField({name: 'programs', title: 'Daftar Program', type: 'array', group: 'program', of: [{type: 'programItem'}]}),

    // --- TENTANG KAMI ---
    defineField({name: 'aboutEyebrow', title: 'Kicker (contoh: "Tentang Kami")', type: 'string', group: 'tentang'}),
    defineField({name: 'aboutTitle', title: 'Judul', type: 'string', group: 'tentang'}),
    defineField({name: 'aboutDescription', title: 'Deskripsi', type: 'text', rows: 4, group: 'tentang'}),
    defineField({name: 'aboutImagePrimary', title: 'Gambar Utama', type: 'image', group: 'tentang', options: {hotspot: true}}),
    defineField({name: 'aboutImageSecondary', title: 'Gambar Kedua', type: 'image', group: 'tentang', options: {hotspot: true}}),
    defineField({name: 'aboutBadgeText', title: 'Teks Badge (Akreditasi)', type: 'string', group: 'tentang'}),
    defineField({name: 'aboutBadgeSubtext', title: 'Sub-teks Badge', type: 'string', group: 'tentang'}),
    defineField({
      name: 'aboutFeatures', title: 'Poin Keunggulan', type: 'array', group: 'tentang',
      of: [{ type: 'object', fields: [{name: 'title', type: 'string'}, {name: 'subtitle', type: 'string'}]}]
    }),

    // --- STATISTIK ---
    defineField({name: 'stats', title: 'Statistik', type: 'array', group: 'statistik', of: [{type: 'statItem'}]}),

    // --- TESTIMONI ---
    defineField({name: 'testimonialEyebrow', title: 'Kicker (contoh: "Kata Mereka")', type: 'string', group: 'testimoni'}),
    defineField({name: 'testimonialSectionTitle', title: 'Judul Bagian Testimoni', type: 'string', group: 'testimoni'}),
    defineField({name: 'testimonials', title: 'Daftar Testimoni', type: 'array', group: 'testimoni', of: [{type: 'testimonialItem'}]}),

    // --- GALERI (Dirombak untuk support Video) ---
    defineField({name: 'galleryEyebrow', title: 'Kicker (contoh: "Galeri & Campus Life")', type: 'string', group: 'galeri'}),
    defineField({name: 'gallerySectionTitle', title: 'Judul Bagian Galeri', type: 'string', group: 'galeri'}),
    defineField({name: 'galleryDescription', title: 'Deskripsi Seksi Galeri', type: 'text', rows: 2, group: 'galeri'}),
    defineField({
      name: 'galleryItems',
      title: 'Item Galeri (Foto / Video YouTube)',
      type: 'array',
      group: 'galeri',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Judul / Caption (Opsional)', type: 'string'},
            {
              name: 'mediaType', 
              title: 'Tipe Media', 
              type: 'string', 
              options: {list: [{title: 'Gambar/Foto', value: 'image'}, {title: 'Video (YouTube/Vimeo)', value: 'video'}]},
              initialValue: 'image'
            },
            {name: 'image', title: 'Gambar (atau Thumbnail untuk Video)', type: 'image', options: {hotspot: true}},
            {
              name: 'videoUrl', 
              title: 'URL Video', 
              type: 'url', 
              description: 'Masukkan link YouTube/Vimeo. Wajib diisi jika tipe media adalah Video.',
              hidden: ({parent}) => parent?.mediaType !== 'video'
            },
          ]
        }
      ]
    }),

    // --- BERITA ---
    defineField({name: 'beritaEyebrow', title: 'Kicker (contoh: "Info & Update")', type: 'string', group: 'berita'}),
    defineField({name: 'beritaTitle', title: 'Judul Seksi Berita', type: 'string', group: 'berita', initialValue: 'Berita & Agenda Terkini'}),

    // --- FAQ ---
    defineField({name: 'faqEyebrow', title: 'Kicker (contoh: "Pertanyaan Umum")', type: 'string', group: 'faq'}),
    defineField({name: 'faqSectionTitle', title: 'Judul Bagian FAQ', type: 'string', group: 'faq'}),
    defineField({name: 'faqs', title: 'Daftar Pertanyaan', type: 'array', group: 'faq', of: [{type: 'faqItem'}]}),
  ],
})