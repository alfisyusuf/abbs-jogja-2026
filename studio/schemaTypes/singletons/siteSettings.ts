import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

/**
 * SINGLETON — hanya ada 1 dokumen ini di seluruh situs.
 * Ini "pusat kendali" yang paling sering dibuka admin: judul situs, logo,
 * menu navigasi, kontak, sosial media, dan tombol WhatsApp mengambang.
 * Semua field di sini otomatis dipakai di setiap halaman (navbar & footer).
 */
export default defineType({
  name: 'siteSettings',
  title: 'Pengaturan Situs',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'identity', title: 'Identitas', default: true},
    {name: 'menu', title: 'Menu Navigasi'},
    {name: 'kontak', title: 'Kontak & Sosial Media'},
    {name: 'pps', title: 'Pendaftaran (PPS)'},
    {name: 'seo', title: 'SEO Default'},
  ],
  fields: [
    // --- IDENTITAS ---
    defineField({
      name: 'siteTitle',
      title: 'Nama Sekolah / Judul Situs',
      type: 'string',
      group: 'identity',
      initialValue: 'SMA ABBS Yogyakarta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteTagline',
      title: 'Tagline (contoh: "Yogyakarta")',
      type: 'string',
      group: 'identity',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'identity',
      options: {hotspot: true},
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'identity',
    }),
    defineField({
      name: 'footerText',
      title: 'Deskripsi Singkat di Footer',
      type: 'text',
      group: 'identity',
      rows: 3,
    }),
    defineField({
      name: 'copyrightText',
      title: 'Teks Hak Cipta (contoh: © 2026 SMA ABBS Yogyakarta. All rights reserved.)',
      type: 'string',
      group: 'identity',
    }),

    // --- MENU ---
    defineField({
      name: 'mainMenu',
      title: 'Menu Navigasi Utama',
      type: 'array',
      group: 'menu',
      of: [{type: 'navItem'}],
      description: 'Urutan di sini menentukan urutan tampil di navbar.',
    }),
    defineField({
      name: 'navCtaLabel',
      title: 'Label Tombol Navbar (kanan atas)',
      type: 'string',
      group: 'menu',
      initialValue: 'Daftar via WhatsApp',
    }),
    defineField({
      name: 'navCtaUrl',
      title: 'URL Tombol Navbar',
      type: 'string',
      group: 'menu',
    }),

    // --- KONTAK & SOSMED ---
    defineField({name: 'phone', title: 'Nomor Telepon (format tampil, contoh: (0274) 1234567)', type: 'string', group: 'kontak'}),
    defineField({name: 'whatsappNumber', title: 'Nomor WhatsApp (format internasional, contoh: 62274xxxxxxx)', type: 'string', group: 'kontak'}),
    defineField({name: 'email', title: 'Email', type: 'string', group: 'kontak'}),
    defineField({name: 'address', title: 'Alamat Lengkap', type: 'text', rows: 2, group: 'kontak'}),
    defineField({
      name: 'socialLinks',
      title: 'Tautan Sosial Media',
      type: 'array',
      group: 'kontak',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {list: ['Instagram', 'Facebook', 'YouTube', 'TikTok', 'X (Twitter)']},
            }),
            defineField({name: 'url', title: 'URL', type: 'string'}),
          ],
          preview: {select: {title: 'platform', subtitle: 'url'}},
        },
      ],
    }),

    // --- PPS / WHATSAPP FLOAT ---
    defineField({
      name: 'whatsappFloatMessage',
      title: 'Pesan Default Tombol WhatsApp Mengambang',
      type: 'text',
      rows: 2,
      group: 'pps',
      initialValue: 'Assalamualaikum, saya ingin bertanya tentang PPS',
    }),
    defineField({
      name: 'ppsActive',
      title: 'Status Pendaftaran (PPS) sedang dibuka?',
      type: 'boolean',
      group: 'pps',
      initialValue: true,
    }),
    defineField({
      name: 'ppsBadgeText',
      title: 'Teks Badge di Hero (contoh: "PPS 2026/2027 Resmi Dibuka")',
      type: 'string',
      group: 'pps',
    }),

    // --- SEO DEFAULT ---
    defineField({name: 'seoDescription', title: 'Deskripsi SEO Default Situs', type: 'text', rows: 3, group: 'seo'}),
    defineField({name: 'seoKeywords', title: 'Kata Kunci SEO (pisahkan koma)', type: 'string', group: 'seo'}),
  ],
  preview: {
    prepare() {
      return {title: 'Pengaturan Situs'}
    },
  },
})
