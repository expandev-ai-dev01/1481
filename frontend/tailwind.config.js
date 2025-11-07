/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        oldMoney: {
          gold: '#D4AF37',
          darkGold: '#B8941F',
          brown: '#8B4513',
          darkBrown: '#654321',
          cream: '#F5F5DC',
          darkCream: '#E8E8D0',
          leather: '#C19A6B',
          mahogany: '#420D09',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
