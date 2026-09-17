// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://abbs-jogja-2026.pages.dev', // TODO: ganti kalau nama project Cloudflare Pages-nya beda
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sanity({
      projectId: 'ki64hdlp',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2026-03-05',
    })
  ]
});
