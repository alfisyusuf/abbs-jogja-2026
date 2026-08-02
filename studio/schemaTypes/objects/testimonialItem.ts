import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonialItem',
  title: 'Testimoni',
  type: 'object',
  fields: [
    defineField({name: 'quote', title: 'Isi Testimoni', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
    defineField({name: 'name', title: 'Nama', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'role', title: 'Peran (contoh: Wali Murid Kelas XI)', type: 'string'}),
    defineField({name: 'photo', title: 'Foto', type: 'image', options: {hotspot: true}}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'role', media: 'photo'},
  },
})
