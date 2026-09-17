#!/bin/bash
# Jalankan dari root repo abbs-jogja-2026
# Hapus file/folder dari attempt lama yang sudah tidak dipakai
# (tergantikan oleh basis SMA ABBS Surakarta yang sudah kita rebrand)

set -e

echo "Menghapus config Sanity versi lama (duplikat .ts)..."
rm -f studio/sanity.cli.ts
rm -f studio/sanity.config.ts
rm -f studio/structure.ts
rm -f studio/schemaTypes/index.ts

echo "Menghapus schema lama yang tergantikan (documents/objects/singletons)..."
rm -rf studio/schemaTypes/documents
rm -rf studio/schemaTypes/objects
rm -rf studio/schemaTypes/singletons

echo "Menghapus layout & lib lama yang tergantikan..."
rm -f web/src/layouts/BaseLayout.astro
rm -rf web/src/lib

echo "Menghapus halaman duplikat (route Indonesia lama, kita pakai /news dan /team)..."
rm -rf web/src/pages/berita
rm -f web/src/pages/guru-karyawan.astro

echo ""
echo "Selesai. Sisa 'AGENTS.md' di root web/ SENGAJA tidak dihapus otomatis —"
echo "isinya kemungkinan referensi arsitektur lama, baca dulu manual:"
echo "  cat web/AGENTS.md"
echo "Hapus manual kalau memang sudah tidak relevan:"
echo "  rm web/AGENTS.md"
