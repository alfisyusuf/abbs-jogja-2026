import {defineType, defineField} from 'sanity'
import {UsersIcon} from '@sanity/icons'

/**
 * SINGLETON — mengatur teks tetap di halaman Guru & Karyawan (judul, intro,
 * dan CTA "Tertarik Bergabung Sebagai Pengajar?"). Daftar orangnya sendiri
 * dikelola lewat dokumen "Guru & Karyawan" (staffMember) yang bisa ditambah
 * berapa pun tanpa batas.
 */
export default defineType({
  name: 'guruKaryawanPage',
  title: 'Halaman Guru & Karyawan',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({name: 'eyebrow', title: 'Label Kecil', type: 'string', initialValue: 'Sumber Daya Manusia'}),
    defineField({name: 'title', title: 'Judul Halaman', type: 'string', initialValue: 'Guru & Karyawan'}),
    defineField({name: 'description', title: 'Deskripsi Singkat', type: 'text', rows: 3}),
    defineField({name: 'ctaTitle', title: 'Judul Ajakan Bergabung (CTA)', type: 'string', initialValue: 'Tertarik Bergabung Sebagai Pengajar?'}),
    defineField({name: 'ctaDescription', title: 'Deskripsi CTA', type: 'text', rows: 2}),
    defineField({name: 'ctaButtonLabel', title: 'Label Tombol CTA', type: 'string', initialValue: 'Kirim Lamaran via WhatsApp'}),
    defineField({name: 'ctaButtonUrl', title: 'URL Tombol CTA', type: 'string'}),
  ],
  preview: {
    prepare() {
      return {title: 'Halaman Guru & Karyawan'}
    },
  },
})
