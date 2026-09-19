import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: '⚙️ Pengaturan Umum & Sosmed',
  type: 'document',
  fields: [
    defineField({ name: 'logo', title: 'Logo Sekolah (Putih/Transparan)', type: 'image' }),
    defineField({ name: 'seoDescription', title: 'Deskripsi SEO (Untuk Google)', type: 'text', rows: 3 }),

    // --- SOSIAL MEDIA ---
    defineField({ name: 'socmedIg', title: 'Link Instagram', type: 'url' }),
    defineField({ name: 'socmedYt', title: 'Link YouTube', type: 'url' }),
    defineField({ name: 'socmedWa', title: 'Link WhatsApp (https://wa.me/...)', type: 'url' }),
    defineField({ name: 'socmedTk', title: 'Link TikTok', type: 'url' }),
    defineField({ name: 'socmedFb', title: 'Link Facebook', type: 'url' }),
    defineField({ name: 'socmedX', title: 'Link Twitter / X', type: 'url' }),
    defineField({ name: 'socmedThreads', title: 'Link Threads', type: 'url' }),

    // --- TOMBOL WHATSAPP MENGAMBANG ---
    defineField({
      name: 'whatsappNumber',
      title: 'Nomor WhatsApp (untuk tombol mengambang)',
      type: 'string',
      description: 'Format: kode negara tanpa tanda + atau 0 di depan, misal 6281234567890. Beda dari Link WhatsApp di atas — field ini khusus untuk tombol WA yang selalu muncul di pojok kanan bawah tiap halaman.',
    }),
    defineField({
      name: 'whatsappFloatMessage',
      title: 'Pesan Default Tombol WhatsApp',
      type: 'string',
      initialValue: 'Assalamualaikum, saya ingin bertanya mengenai PPDB SMA ABBS Yogyakarta',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Pengaturan Umum & Sosmed',
        subtitle: 'Logo, SEO, dan Tautan Media Sosial'
      }
    }
  }
})