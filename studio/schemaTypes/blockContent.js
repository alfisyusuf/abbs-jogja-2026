import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Heading 2', value: 'h2'},
        {title: 'Heading 3', value: 'h3'},
        {title: 'Heading 4', value: 'h4'},
        {title: 'Kutipan', value: 'blockquote'},
        {title: 'Lead (Teks Besar)', value: 'lead'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Number', value: 'number'}
      ],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Coret', value: 'strike-through'},
        ],
        annotations: [
          {
            title: 'URL Link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel']
                })
              },
              {
                title: 'Buka di Tab Baru?',
                name: 'blank',
                type: 'boolean',
                initialValue: true
              }
            ]
          }
        ]
      }
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {name: 'caption', type: 'string', title: 'Caption'},
        {name: 'alt', type: 'string', title: 'Alternative Text'}
      ]
    }),
  ],
})
