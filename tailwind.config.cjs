const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // consider Akkurat: https://www.dafontfree.io/akkurat-font/
        sans: ['"Source Sans 3Variable"', ...defaultTheme.fontFamily.sans],
        serif: ['"Source Serif 4Variable"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
