import {defineType, defineField} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

/**
 * "Halaman" bebas, setara Page di WordPress. Dipakai untuk halaman seperti
 * "Sejarah, Visi & Misi" (sample-page.html) atau halaman lain yang admin
 * buat sendiri di kemudian hari. Tidak dipakai untuk Beranda atau
 * Guru & Karyawan karena keduanya sudah punya singleton khusus.
 */
export default defineType({
  name: 'page',
  title: 'Halaman',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {name: 'content', title: 'Konten', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Halaman',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      group: 'content',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub-judul / Deskripsi Singkat',
      type: 'text',
      group: 'content',
      rows: 2,
      description: 'Tampil di bawah judul, di bagian atas halaman.',
    }),
    defineField({
      name: 'body',
      title: 'Isi Halaman',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {
    select: {title: 'title'},
  },
})
