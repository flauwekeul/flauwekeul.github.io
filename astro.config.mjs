// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Open Sans',
        cssVariable: '--font-open-sans',
        weights: [400, 700],
      },
      {
        provider: fontProviders.google(),
        name: 'Fira Sans',
        cssVariable: '--font-fira-sans',
        weights: [400, 700],
      },
      // fixme: can't get this to work yet
      // {
      //   provider: fontProviders.googleicons(),
      //   name: 'Material Symbols Outlined',
      //   cssVariable: '--font-material-symbols',
      // }
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
