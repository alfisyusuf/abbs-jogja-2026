import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'

/**
 * SINGLETON — hanya ada 1 dokumen ini. Menampung semua isi Beranda yang
 * "paten" strukturnya (Hero, Program, Tentang Kami, Statistik, Testimoni,
 * Galeri, FAQ) tapi teks/gambarnya bebas diubah admin dari sini.
 */
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
    {name: 'faq', title: 'FAQ'},
  ],
  fields: [
    // HERO
    defineField({name: 'heroHeadline', title: 'Judul Utama (Headline)', type: 'string', group: 'hero'}),
    defineField({name: 'heroHighlight', title: 'Bagian Judul yang Ditonjolkan (garis bawah)', type: 'string', group: 'hero'}),
    defineField({name: 'heroDescription', title: 'Deskripsi Hero', type: 'text', rows: 3, group: 'hero'}),
    defineField({name: 'heroImage', title: 'Gambar Hero', type: 'image', group: 'hero', options: {hotspot: true}}),
    defineField({name: 'heroPrimaryCtaLabel', title: 'Tombol Utama — Label', type: 'string', group: 'hero', initialValue: 'Daftar PPS Sekarang'}),
    defineField({name: 'heroPrimaryCtaUrl', title: 'Tombol Utama — URL', type: 'string', group: 'hero'}),
    defineField({name: 'heroSecondaryCtaLabel', title: 'Tombol Kedua — Label', type: 'string', group: 'hero', initialValue: 'Lihat Profil'}),
    defineField({name: 'heroSecondaryCtaUrl', title: 'Tombol Kedua — URL (contoh: #tentang-kami)', type: 'string', group: 'hero'}),
    defineField({name: 'heroNote', title: 'Catatan Kecil di Bawah Tombol', type: 'string', group: 'hero'}),

    // PROGRAM
    defineField({name: 'programSectionTitle', title: 'Judul Bagian Program', type: 'string', group: 'program', initialValue: 'Program Unggulan'}),
    defineField({
      name: 'programs',
      title: 'Daftar Program Unggulan',
      type: 'array',
      group: 'program',
      of: [{type: 'programItem'}],
    }),

    // TENTANG KAMI
    defineField({name: 'aboutEyebrow', title: 'Label Kecil (contoh: "Tentang Kami")', type: 'string', group: 'tentang'}),
    defineField({name: 'aboutTitle', title: 'Judul', type: 'string', group: 'tentang'}),
    defineField({name: 'aboutDescription', title: 'Deskripsi', type: 'text', rows: 4, group: 'tentang'}),
    defineField({name: 'aboutImagePrimary', title: 'Gambar Utama', type: 'image', group: 'tentang', options: {hotspot: true}}),
    defineField({name: 'aboutImageSecondary', title: 'Gambar Kedua (kecil, tumpang tindih)', type: 'image', group: 'tentang', options: {hotspot: true}}),
    defineField({name: 'aboutBadgeText', title: 'Teks Badge Melayang (contoh: "Akreditasi A")', type: 'string', group: 'tentang'}),
    defineField({name: 'aboutBadgeSubtext', title: 'Sub-teks Badge (contoh: "BAN-S/M")', type: 'string', group: 'tentang'}),
    defineField({
      name: 'aboutFeatures',
      title: 'Poin Keunggulan',
      type: 'array',
      group: 'tentang',
      of: [
        {
          type: 'object',
          name: 'featureItem',
          fields: [
            {name: 'title', title: 'Judul Poin', type: 'string'},
            {name: 'subtitle', title: 'Sub-teks', type: 'string'},
          ],
          preview: {select: {title: 'title', subtitle: 'subtitle'}},
        },
      ],
    }),

    // STATISTIK
    defineField({
      name: 'stats',
      title: 'Statistik',
      type: 'array',
      group: 'statistik',
      of: [{type: 'statItem'}],
    }),

    // TESTIMONI
    defineField({name: 'testimonialSectionTitle', title: 'Judul Bagian Testimoni', type: 'string', group: 'testimoni', initialValue: 'Apa Kata Mereka'}),
    defineField({
      name: 'testimonials',
      title: 'Daftar Testimoni',
      type: 'array',
      group: 'testimoni',
      of: [{type: 'testimonialItem'}],
    }),

    // GALERI
    defineField({name: 'gallerySectionTitle', title: 'Judul Bagian Galeri', type: 'string', group: 'galeri', initialValue: 'Kehidupan Kampus'}),
    defineField({
      name: 'galleryImages',
      title: 'Foto Galeri',
      type: 'array',
      group: 'galeri',
      of: [{type: 'image', options: {hotspot: true}, fields: [{name: 'alt', title: 'Teks alternatif', type: 'string'}]}],
    }),

    // FAQ
    defineField({name: 'faqSectionTitle', title: 'Judul Bagian FAQ', type: 'string', group: 'faq', initialValue: 'Yang Sering Ditanyakan Orang Tua'}),
    defineField({
      name: 'faqs',
      title: 'Daftar Pertanyaan',
      type: 'array',
      group: 'faq',
      of: [{type: 'faqItem'}],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Halaman Beranda'}
    },
  },
})
