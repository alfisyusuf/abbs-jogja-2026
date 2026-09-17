import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footerSettings',
  title: '👇 Pengaturan Footer',
  type: 'document',
  fields: [
    defineField({ name: 'schoolName', title: 'Nama Sekolah (Tebal)', type: 'string', initialValue: 'SMA ABBS' }),
    defineField({ name: 'schoolRegion', title: 'Nama Daerah (Warna Aksen)', type: 'string', initialValue: 'Yogyakarta' }),
    defineField({ name: 'shortDesc', title: 'Deskripsi Singkat', type: 'text', rows: 3 }),
    
    // KONTAK SEKOLAH
    defineField({ name: 'address', title: 'Alamat Lengkap', type: 'string' }),
    defineField({ name: 'phone', title: 'Nomor Telepon', type: 'string' }),
    defineField({ name: 'email', title: 'Alamat Email', type: 'string' }),
    
    // KOLOM LINK 1
    defineField({ name: 'col1Title', title: 'Judul Kolom Link 1', type: 'string', initialValue: 'Akses Cepat' }),
    defineField({
      name: 'col1Links', title: 'Daftar Link Kolom 1', type: 'array',
      of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'url', type: 'string' }] }]
    }),

    // KOLOM LINK 2
    defineField({ name: 'col2Title', title: 'Judul Kolom Link 2', type: 'string', initialValue: 'Akademik' }),
    defineField({
      name: 'col2Links', title: 'Daftar Link Kolom 2', type: 'array',
      of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'url', type: 'string' }] }]
    }),

    // TEKS BAWAH
    defineField({ name: 'copyright', title: 'Teks Copyright', type: 'string' }),
  ]
})
