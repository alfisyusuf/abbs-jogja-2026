import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'popupAnnouncement',
  title: '📢 Popup Pengumuman',
  type: 'document',
  fields: [
    defineField({ name: 'isActive', title: 'Aktifkan popup?', type: 'boolean', initialValue: false }),
    defineField({ name: 'image', title: 'Gambar Popup', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'link', title: 'Link tujuan (opsional)', type: 'url' }),
    defineField({ name: 'startDate', title: 'Mulai tampil (opsional)', type: 'datetime' }),
    defineField({ name: 'endDate', title: 'Berhenti tampil (opsional)', type: 'datetime' }),
  ],
  preview: {
    prepare() {
      return { title: 'Popup Pengumuman', subtitle: 'Gambar popup saat pertama akses web' }
    }
  }
})

