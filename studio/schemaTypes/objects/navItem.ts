import {defineType, defineField} from 'sanity'

/**
 * Satu item menu di navbar. Bisa berupa link biasa, atau punya sub-menu (dropdown).
 * linkType menentukan apakah menu mengarah ke:
 * - "internal": halaman/post yang ada di Sanity (dipilih dari daftar)
 * - "anchor": bagian di halaman Beranda (mis. #program, #faq)
 * - "external": URL bebas (mis. link WhatsApp, atau situs lain)
 */
export default defineType({
  name: 'navItem',
  title: 'Item Menu',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label Menu',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkType',
      title: 'Jenis Tautan',
      type: 'string',
      options: {
        list: [
          {title: 'Halaman / Tulisan di situs', value: 'internal'},
          {title: 'Bagian di Beranda (mis. #faq)', value: 'anchor'},
          {title: 'URL luar / khusus (mis. WhatsApp)', value: 'external'},
        ],
        layout: 'radio',
      },
      initialValue: 'external',
    }),
    defineField({
      name: 'internalPage',
      title: 'Pilih Halaman',
      type: 'reference',
      to: [{type: 'page'}, {type: 'post'}],
      hidden: ({parent}) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'anchor',
      title: 'Nama Bagian (contoh: program, faq, tentang-kami, berita)',
      type: 'string',
      hidden: ({parent}) => parent?.linkType !== 'anchor',
    }),
    defineField({
      name: 'externalUrl',
      title: 'URL',
      type: 'string',
      description: 'Contoh: https://wa.me/62... atau /berita',
      hidden: ({parent}) => parent?.linkType !== 'external',
    }),
    defineField({
      name: 'children',
      title: 'Sub-menu (dropdown)',
      type: 'array',
      of: [{type: 'navItem'}],
      description: 'Kosongkan jika menu ini tidak punya dropdown.',
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'linkType'},
  },
})
