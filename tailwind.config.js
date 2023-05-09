/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'coinbase': ['CoinbaseDisplay', 'system-ui'],
      'coinmedium': ['CoinbaseDisplay-Medium', 'Georgia'],
      'icons': ['CoinbaseIcons'],
      'sansmedium': ['CoinbaseSans-Medium'],
      'sansregular': ['CoinbaseSans-Regular'],
      'text': ['CoinbaseText-Regular'],
    },
    extend: {
      maxWidth: {
        modal: '550px'
      },
      colors: {
        'dark': '#090912',
        'light-dark': '#ACACAE',
        'primary': '#5A4EE8',
        'dark-primary': '#262447',
      },
      backgroundImage: {
        'page-404': "url('../img/background/stars.png')",
      }
    },
  },
  plugins: [],
}

