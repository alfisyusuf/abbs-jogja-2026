import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO (opsional)',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Judul SEO',
      type: 'string',
      description: 'Kosongkan untuk memakai judul halaman secara otomatis.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Deskripsi SEO',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(160).warning('Sebaiknya di bawah 160 karakter.'),
    }),
    defineField({
      name: 'shareImage',
      title: 'Gambar untuk dibagikan (Open Graph)',
      type: 'image',
      description: 'Kosongkan untuk memakai gambar utama halaman ini.',
    }),
  ],
})
