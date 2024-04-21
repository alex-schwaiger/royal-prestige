/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      cinzel: ['Cinzel', 'serif'],
    },
    extend: {
      colors: {
        'royal-gold': '#D4BA86',
        'royal-gray': '#393939',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  
};

