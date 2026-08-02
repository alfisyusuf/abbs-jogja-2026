// Dokumen singleton (hanya 1 entri, tidak bisa dibuat/dihapus dari daftar)
import siteSettings from './singletons/siteSettings'
import homePage from './singletons/homePage'
import guruKaryawanPage from './singletons/guruKaryawanPage'

// Dokumen biasa (bisa dibuat berkali-kali, seperti Post/Page di WordPress)
import post from './documents/post'
import page from './documents/page'
import category from './documents/category'
import author from './documents/author'
import staffMember from './documents/staffMember'

// Objek pendukung (dipakai di dalam dokumen-dokumen di atas)
import blockContent from './objects/blockContent'
import navItem from './objects/navItem'
import faqItem from './objects/faqItem'
import programItem from './objects/programItem'
import statItem from './objects/statItem'
import testimonialItem from './objects/testimonialItem'
import seo from './objects/seo'

export const schemaTypes = [
  // singletons
  siteSettings,
  homePage,
  guruKaryawanPage,
  // documents
  post,
  page,
  category,
  author,
  staffMember,
  // objects
  blockContent,
  navItem,
  faqItem,
  programItem,
  statItem,
  testimonialItem,
  seo,
]

// Nama tipe yang statusnya singleton — dipakai di structure.ts & sanity.config.ts
export const singletonTypes = new Set(['siteSettings', 'homePage', 'guruKaryawanPage'])
