import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'programItem',
  title: 'Program Unggulan',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Nama Program', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Deskripsi Singkat', type: 'text', rows: 3}),
    defineField({
      name: 'color',
      title: 'Warna Aksen',
      type: 'string',
      options: {
        list: [
          {title: 'Biru (ABBS Blue)', value: 'blue'},
          {title: 'Merah Maroon', value: 'maroon'},
          {title: 'Hijau Emerald', value: 'emerald'},
        ],
        layout: 'radio',
      },
      initialValue: 'blue',
    }),
    defineField({
      name: 'icon',
      title: 'Ikon',
      type: 'string',
      description: 'Nama ikon (lihat daftar ikon yang didukung di README web).',
      options: {
        list: [
          {title: 'Topi wisuda (Cambridge)', value: 'academic-cap'},
          {title: 'Petir (ICT)', value: 'bolt'},
          {title: 'Buku (Tahfidz)', value: 'book-open'},
          {title: 'Bintang', value: 'star'},
          {title: 'Globe', value: 'globe'},
        ],
      },
      initialValue: 'academic-cap',
    }),
    defineField({
      name: 'ctaText',
      title: 'Teks Tombol',
      type: 'string',
      initialValue: 'Tanya detail program',
    }),
    defineField({
      name: 'ctaUrl',
      title: 'URL Tombol (WhatsApp/lainnya)',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'description'},
  },
})
