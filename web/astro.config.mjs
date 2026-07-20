// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sanity({
      projectId: 'ki64hdlp',
      dataset: 'production',
      useCdn: true, // Gunakan Edge CDN untuk performa maksimal
      apiVersion: '2026-07-20', // Gunakan tanggal hari ini
    }), 
    react()]
});