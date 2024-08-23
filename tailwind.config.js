/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          50: '#f8f4f2',
          100: '#e9ded8',
          200: '#dac7be',
          300: '#ccb1a4',
          400: '#bd9b89',
          500: '#a77962',
          600: '#835c49',
          700: '#684a3b',
          800: '#4e372c',
          900: '#34251d',
          950: '#1a120f',
        },
        'soft-white': '#fcfcfc',
        'charcoal-gray': '#333333',
        'muted-black': '#4A4A4A',
        'mustard-yellow': '#F7C94C',
        'olive-green': '#6B8E23',
        'light-gray': '#D0D0D0',
        'terracotta': '#E07A5F',
        'sage-green': '#9CA18D',
        'burnt-sienna': '#E97451',
        'soft-beige': '#FAF3F3',
        'dusty-rose': '#D8A9A0',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};