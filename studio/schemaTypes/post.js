import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Berita & Artikel',
  type: 'document',
  fields: [
    // 1. JUDUL BERITA
    defineField({
      name: 'title',
      title: 'Judul Berita',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    // 2. SLUG (URL LINK)
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

    // 3. TANGGAL PUBLISH
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publish',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),

    // 4. KATEGORI (DROPDOWN)
    defineField({
      name: 'category',
      title: 'Kategori / Label',
      type: 'string',
      options: {
        list: [
          {title: 'Prestasi', value: 'Prestasi'},
          {title: 'Kegiatan Sekolah', value: 'Kegiatan Sekolah'},
          {title: 'Akademik', value: 'Akademik'},
          {title: 'Tahfidz', value: 'Tahfidz'},
          {title: 'Artikel', value: 'Artikel'},
          {title: 'Info PPS', value: 'Info PPS'},
        ],
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'tags',
      title: 'Tags / Kata Kunci',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags' // Tampilan input jadi seperti chip/tag
      }
    }),

    // 5. GAMBAR UTAMA (HERO IMAGE)
    defineField({
      name: 'mainImage',
      title: 'Gambar Utama (Cover)',
      type: 'image',
      options: {
        hotspot: true, // Agar bisa atur titik fokus crop
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),

    // 6. ISI BERITA (RICH TEXT + GAMBAR + TABEL)
    defineField({
      name: 'body',
      title: 'Isi Konten',
      type: 'blockContent',
    }),
  ],

  // KONFIGURASI TAMPILAN LIST DI ADMIN
  preview: {
    select: {
      title: 'title',
      author: 'category',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `Kategori: ${author}`}
    },
  },
})

