import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageTeam',
  title: 'Halaman: Guru & Staf',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Gambar Header Background',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Teks Kecil Atas (Kuning)',
      type: 'string',
      initialValue: 'The Educators'
    }),
    defineField({
      name: 'heroTitle',
      title: 'Judul Besar (Putih)',
      type: 'string',
      initialValue: 'Guru &'
    }),
    defineField({
      name: 'heroTitleHighlight',
      title: 'Judul Highlight (Merah)',
      type: 'string',
      initialValue: 'Staf'
    }),
    defineField({
      name: 'introText',
      title: 'Teks Intro (Paragraf Tengah)',
      type: 'text',
      rows: 3,
      initialValue: 'Dibimbing oleh tenaga pendidik profesional lulusan universitas terbaik dalam dan luar negeri.'
    })
  ]
})
