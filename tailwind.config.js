/** @type {import('tailwindcss').Config} */
const colors = require('./src/theme/colors');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
