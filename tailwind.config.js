/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Moderateviolet': 'hsl(263, 55%, 52%)',
        'Verydarkgrayishblue': 'hsl(217, 19%, 35%)',
        'Verydarkblackishblue': 'hsl(219, 29%, 14%)',
        'White': 'hsl(0, 0%, 100%)',
        'Lightgray': 'hsl(0, 0%, 81%)',
        'Lightgrayishblue': 'hsl(210, 46%, 95%)'
      }
    },
  },
  plugins: [],
}