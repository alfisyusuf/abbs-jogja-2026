import {defineType, defineField} from 'sanity'
import {UserIcon} from '@sanity/icons'

/**
 * Skema bawaan "author" tetap relevan (dipakai untuk penulis berita, mis. "Tim Humas ABBS")
 * dan tetap dipertahankan tanpa perubahan signifikan.
 */
export default defineType({
  name: 'author',
  title: 'Penulis',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({name: 'name', title: 'Nama', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'bio',
      title: 'Bio Singkat',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
