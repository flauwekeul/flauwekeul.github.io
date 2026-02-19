// @ts-check
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Fira Sans',
        cssVariable: '--font-fira-sans',
        weights: [400, 700],
      },
      {
        provider: fontProviders.google(),
        name: 'Aleo',
        cssVariable: '--font-aleo',
        weights: [400, 700],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
});
