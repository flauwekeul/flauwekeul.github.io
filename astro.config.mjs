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
        name: 'Bitter',
        cssVariable: '--font-bitter',
        weights: [400, 700],
      },
    ],
  },

  vite: {
    // @ts-expect-error: https://github.com/withastro/astro/issues/14030#issuecomment-3027129338
    plugins: [tailwindcss()],
  },
});
