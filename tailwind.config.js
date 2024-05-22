/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '29pr': '29%',
        '18px':'18px'
      },
      maxWidth: {
        '700px': '700px'
      },
      height: {
        '700': '700px',
        '18px':'18px'
      },
      colors: {
        'neutral': '#A2A199',
        'black': '#0C0D0F',
        'green': '#AEB1A4',
        'blue': '#007dc1',
        'grey': '#cdcecf',
        'rgbBlack': 'rgb(33, 33, 33, 0.7 )'
      },
      fontSize: {
        'font-15': "15px",
        'font-22': "22px",
        'font-17': "17px",
        '13px': '13px'
      },
      fontWeight: {
        '450': '450',
        '550': '550',
      },
      backgroundImage: {
        'hero-bg': "url('/src/images/bg_2.png')",
      },
      rotate: {
        '70min': '-70deg',
      },
      borderWidth: {
        '2px': '2.5px'
      }
    },
  },
  plugins: [],
}