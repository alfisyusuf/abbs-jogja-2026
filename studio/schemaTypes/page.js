import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Halaman Statis (Profil, Fasilitas, dll)',
  type: 'document',
  fields: [
    // 1. JUDUL HALAMAN
    defineField({
      name: 'title',
      title: 'Judul Halaman',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    // 2. SLUG (URL)
    defineField({
      name: 'slug',
      title: 'Link URL (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    // 3. GAMBAR HERO (HEADER BESAR)
    defineField({
      name: 'heroImage',
      title: 'Gambar Header (Background)',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'body',
      title: 'Isi Konten',
      type: 'blockContent',
    }),
  ],
})

