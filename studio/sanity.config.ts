import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes, singletonTypes} from './schemaTypes'
import {structure} from './structure'

/**
 * PENTING: samakan projectId & dataset di bawah dengan punya Anda
 * (lihat sanity.json / .env di project Anda, atau buka manage.sanity.io).
 * Anda bisa juga memakai variabel lingkungan seperti contoh yang dikomentari.
 */
export default defineConfig({
  name: 'default',
  title: 'SMA ABBS Yogyakarta',

  projectId: 'ki64hdlp',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
    // Sembunyikan singleton dari pencarian "buat dokumen baru" global,
    // supaya admin tidak sengaja membuat Beranda/Pengaturan Situs duplikat.
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // Hilangkan aksi "Duplikat" dan "Hapus" khusus untuk dokumen singleton.
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && !['duplicate', 'delete', 'unpublish'].includes(action))
        : input,
  },
})
