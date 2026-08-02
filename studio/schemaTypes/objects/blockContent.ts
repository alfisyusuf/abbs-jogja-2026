import {defineType, defineArrayMember} from 'sanity'

/**
 * Konten kaya (rich text) yang dipakai di Post, Page, dan field "isi" lainnya.
 * Admin bisa: heading, paragraf, bold/italic, list, quote, link, dan gambar inline.
 */
export default defineType({
  title: 'Konten',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Judul H2', value: 'h2'},
        {title: 'Judul H3', value: 'h3'},
        {title: 'Judul H4', value: 'h4'},
        {title: 'Kutipan', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Bernomor', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Tebal', value: 'strong'},
          {title: 'Miring', value: 'em'},
          {title: 'Garis bawah', value: 'underline'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Tautan',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) =>
                  Rule.uri({allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel']}),
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Buka di tab baru',
                initialValue: true,
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Teks alternatif (alt)',
          description: 'Penting untuk SEO dan aksesibilitas.',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Keterangan gambar',
        },
      ],
    }),
  ],
})
