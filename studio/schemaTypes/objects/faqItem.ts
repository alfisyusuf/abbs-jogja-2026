import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faqItem',
  title: 'Pertanyaan',
  type: 'object',
  fields: [
    defineField({name: 'question', title: 'Pertanyaan', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'answer', title: 'Jawaban', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
  ],
  preview: {
    select: {title: 'question'},
  },
})
