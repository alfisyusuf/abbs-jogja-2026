import type {StructureResolver} from 'sanity/structure'
import {CogIcon, HomeIcon, UsersIcon} from '@sanity/icons'

/**
 * Menyusun tampilan menu di sisi kiri Studio agar mudah dipakai admin:
 * - Bagian atas: halaman "paten" (Beranda, Guru & Karyawan, Pengaturan Situs)
 *   sebagai singleton — admin langsung klik & edit, tanpa opsi "buat baru/hapus".
 * - Bagian bawah: daftar konten yang bisa dibuat berkali-kali (Berita, Halaman,
 *   Guru & Karyawan per orang, Kategori, Penulis) — mirip Posts/Pages WordPress.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Konten Situs')
    .items([
      S.listItem()
        .title('Halaman Beranda')
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Halaman Guru & Karyawan')
        .icon(UsersIcon)
        .child(S.document().schemaType('guruKaryawanPage').documentId('guruKaryawanPage')),
      S.listItem()
        .title('Pengaturan Situs')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('post').title('Berita'),
      S.documentTypeListItem('page').title('Halaman'),
      S.documentTypeListItem('staffMember').title('Guru & Karyawan (per orang)'),
      S.documentTypeListItem('category').title('Kategori Berita'),
      S.documentTypeListItem('author').title('Penulis'),
    ])
