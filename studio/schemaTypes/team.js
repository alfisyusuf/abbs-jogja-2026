import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Data Guru & Staf',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Lengkap & Gelar',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Jabatan / Mata Pelajaran',
      type: 'string', // Misal: Kepala Sekolah, Guru Biologi
    }),
    defineField({
      name: 'photo',
      title: 'Foto Profil (3:4)',
      type: 'image',
      options: { hotspot: true }
    }),
    
    // INFO ALMAMATER (Muncul saat hover)
    defineField({
      name: 'educationDegree',
      title: 'Jenjang Pendidikan',
      type: 'string',
      options: {
        list: [
          {title: 'Sarjana (S1)', value: 'Sarjana (S1)'},
          {title: 'Master (S2)', value: 'Master (S2)'},
          {title: 'Doktor (S3)', value: 'Doktor (S3)'},
          {title: 'Lc. (S1)', value: 'Lc. (S1)'},
        ]
      }
    }),
    defineField({
      name: 'university',
      title: 'Nama Universitas',
      type: 'string', // Misal: UGM, ITB, Al-Azhar
    }),

    // SOCIAL MEDIA (Opsional)
    defineField({
      name: 'email',
      title: 'Email Resmi',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'Link LinkedIn / Profil Lain',
      type: 'url',
    }),
    
    // URUTAN TAMPIL
    defineField({
      name: 'order',
      title: 'Nomor Urut Tampil',
      type: 'number',
      initialValue: 99
    })
  ],
})
