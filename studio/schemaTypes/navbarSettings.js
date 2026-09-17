import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navbarSettings',
  title: '🖥️ Pengaturan Navbar',
  type: 'document',
  fields: [
    defineField({ name: 'menuLabel', title: 'Label Tombol Menu', type: 'string', initialValue: 'MENU' }),
    defineField({ name: 'ctaLabel', title: 'Label Tombol Utama', type: 'string', initialValue: 'DAFTAR' }),
    defineField({ name: 'ctaLink', title: 'Link Tombol Utama', type: 'string', description: 'Bisa berupa URL atau /halaman' }),
    defineField({ name: 'journalLabel', title: 'Label Link Jurnal (Desktop)', type: 'string', initialValue: 'JURNAL' }),
    
    // BUILDER MENU DENGAN SUBMENU
    defineField({
      name: 'menuItems',
      title: 'Daftar Menu (Overlay Layar Penuh)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Judul Menu', type: 'string' },
          { name: 'link', title: 'Link URL', type: 'string' },
          { 
            name: 'submenus', 
            title: 'Sub-Menu (Opsional)', 
            type: 'array', 
            of: [{
              type: 'object',
              fields: [
                { name: 'title', title: 'Judul Sub-menu', type: 'string' },
                { name: 'link', title: 'Link Sub-menu', type: 'string' }
              ]
            }] 
          }
        ]
      }]
    })
  ]
})
