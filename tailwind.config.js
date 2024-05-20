/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '29pr': '29%'
      },
      height: {
        '700': '700px'
      },
      colors: {
        'neutral': '#A2A199',
        'black': '#0C0D0F',
        'green': '#AEB1A4',
        'blue': '#007dc1',
        'grey': '#cdcecf'
      },
      fontSize: {
        'font-15': "15px",
        'font-22': "22px",
        'font-17': "17px",
      },
      fontWeight: {
        '450': '450',
        '550': '550',
      },
      backgroundImage: {
        'hero-bg': "url('/src/images/bg_2.png')",
      }
    },
  },
  plugins: [],
}