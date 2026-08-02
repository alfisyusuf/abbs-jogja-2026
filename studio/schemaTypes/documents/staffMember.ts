import {defineType, defineField} from 'sanity'
import {UsersIcon} from '@sanity/icons'

/**
 * Satu kartu di halaman "Guru & Karyawan". Admin tinggal tambah/ubah/hapus
 * dokumen ini kapan pun tanpa perlu sentuh kode — kelompok (group) menentukan
 * dokumen ini masuk seksi mana di halaman (Pimpinan, Guru Cambridge, dst).
 */
export default defineType({
  name: 'staffMember',
  title: 'Guru & Karyawan',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({name: 'name', title: 'Nama Lengkap & Gelar', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'group',
      title: 'Kelompok',
      type: 'string',
      options: {
        list: [
          {title: 'Pimpinan Sekolah (kartu besar di atas)', value: 'pimpinan'},
          {title: 'Guru Kelas Cambridge', value: 'cambridge'},
          {title: 'Guru Kelas ICT', value: 'ict'},
          {title: 'Musyrif & Musyrifah Tahfidz', value: 'tahfidz'},
          {title: 'Tenaga Kependidikan', value: 'kependidikan'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Jabatan / Mata Pelajaran',
      type: 'string',
      description: 'Contoh: "Matematika (IGCSE)" atau "Kepala Sekolah".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'bio',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'email',
      title: 'Email (opsional, biasanya untuk Kepala Sekolah)',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampil (angka kecil tampil dulu)',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {title: 'Urutan Tampil', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'name', subtitle: 'position', media: 'photo', group: 'group'},
    prepare({title, subtitle, media, group}) {
      return {title, subtitle: `${subtitle} — ${group}`, media}
    },
  },
})
