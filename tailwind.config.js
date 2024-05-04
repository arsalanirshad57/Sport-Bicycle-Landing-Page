/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral': '#A2A199',
        'black': '#0C0D0F',
      },
      fontSize: {
     'font-15':"15px",
     'font-22':"22px",
     'font-17':"17px",
      },
      fontWeight:{
        '450':'450',
        '550':'550',
      },
      backgroundImage: {
        'hero-bg': "url('/src/images/bg_2.png')",
      }
    },
  },
  plugins: [],
}