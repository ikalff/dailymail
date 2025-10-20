/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'brand': ['"Inter"', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        'brand-blue': '#003580',

      }
    }
  },
  plugins: [],
}