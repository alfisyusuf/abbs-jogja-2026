import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure' // Pastikan import structureTool dari sini
import {visionTool} from '@sanity/vision'
import {table} from '@sanity/table'
import {schemaTypes} from './schemaTypes'

// Tentukan mana saja dokumen yang bersifat Singleton (hanya 1 dokumen)
const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["siteSettings", "navbarSettings", "footerSettings", "homePage", "pageTeam", "popupAnnouncement"])

export default defineConfig({
  name: 'default',
  title: 'SMA ABBS Yogyakarta Studio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'ki64hdlp',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Menu Utama')
          .items([
            // KELOMPOK PENGATURAN GLOBAL
            S.listItem()
              .title('⚙️ Pengaturan Global')
              .child(
                S.list()
                  .title('Pengaturan Global')
                  .items([
                    S.listItem().title('Umum & Sosmed').id('siteSettings').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
                    S.listItem().title('Navbar Menu').id('navbarSettings').child(S.document().schemaType('navbarSettings').documentId('navbarSettings')),
                    S.listItem().title('Footer Area').id('footerSettings').child(S.document().schemaType('footerSettings').documentId('footerSettings')),
                    S.listItem().title('📢 Popup Pengumuman').id('popupAnnouncement').child(S.document().schemaType('popupAnnouncement').documentId('popupAnnouncement')),
                  ])
              ),
            
            S.divider(),

            // HALAMAN SINGLETON LAINNYa
            S.listItem().title('🏠 Halaman Depan').id('homePage').child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem().title('👥 Halaman: Guru & Staf').id('pageTeam').child(S.document().schemaType('pageTeam').documentId('pageTeam')),

            S.divider(),

            // SISANYA (Berita, dsb)
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
    table(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Sembunyikan tombol "Create New" untuk dokumen Singleton
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => !singletonTypes.has(templateItem.templateId))
      }
      return prev
    },
    // Hilangkan opsi Delete/Duplicate untuk dokumen Singleton
    actions: (prev, { schemaType }) => {
      if (singletonTypes.has(schemaType)) {
        return prev.filter(({ action }) => singletonActions.has(action))
      }
      return prev
    },
  },
})

