import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

/**
 * Ini "Berita" (setara Post di WordPress). Berdasar skema blog bawaan Sanity,
 * disesuaikan untuk kebutuhan sekolah:
 * - "publishedAt" dipakai sebagai tanggal tayang (bisa dijadwalkan mundur/maju)
 * - ditambah "excerpt" agar kartu berita & SEO description bisa diisi manual
 * - "body" memakai blockContent yang sudah mendukung gambar inline
 */
export default defineType({
  name: 'post',
  title: 'Berita',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {name: 'content', title: 'Konten', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Judul',
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
      name: 'mainImage',
      title: 'Gambar Utama',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      fields: [{name: 'alt', title: 'Teks alternatif (alt)', type: 'string'}],
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'reference',
      group: 'content',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'author',
      title: 'Penulis',
      type: 'reference',
      group: 'content',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Tayang',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Ringkasan',
      type: 'text',
      group: 'content',
      rows: 3,
      description: 'Ditampilkan di kartu daftar berita. Jika kosong, diambil otomatis dari isi.',
      validation: (Rule) => Rule.max(220),
    }),
    defineField({
      name: 'body',
      title: 'Isi Berita',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'tags',
      title: 'Tag',
      type: 'array',
      group: 'content',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'featured',
      title: 'Jadikan berita utama di Beranda?',
      type: 'boolean',
      group: 'content',
      initialValue: false,
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  orderings: [
    {
      title: 'Tanggal Tayang, Terbaru',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', media: 'mainImage', date: 'publishedAt'},
    prepare({title, media, date}) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString('id-ID') : 'Belum ditayangkan',
        media,
      }
    },
  },
})
