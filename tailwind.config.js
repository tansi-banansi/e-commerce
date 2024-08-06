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
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};