import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'statItem',
  title: 'Statistik',
  type: 'object',
  fields: [
    defineField({name: 'value', title: 'Angka (contoh: 500+)', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'label', title: 'Keterangan (contoh: Siswa Aktif)', type: 'string', validation: (Rule) => Rule.required()}),
  ],
  preview: {
    select: {title: 'value', subtitle: 'label'},
  },
})
