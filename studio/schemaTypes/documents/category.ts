import {defineType, defineField} from 'sanity'
import {TagIcon} from '@sanity/icons'

/**
 * Skema bawaan Sanity blog untuk "category" masih relevan dan dipakai apa adanya,
 * hanya ditambah field "color" agar badge kategori di web bisa berwarna sesuai
 * identitas (biru/maroon/emerald), konsisten dengan desain statis yang dikirim.
 */
export default defineType({
  name: 'category',
  title: 'Kategori Berita',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Kategori',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'color',
      title: 'Warna Badge',
      type: 'string',
      options: {
        list: [
          {title: 'Biru', value: 'blue'},
          {title: 'Maroon', value: 'maroon'},
          {title: 'Emerald', value: 'emerald'},
          {title: 'Abu-abu', value: 'gray'},
        ],
      },
      initialValue: 'blue',
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})
