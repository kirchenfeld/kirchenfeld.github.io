module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-dark': '#d7504d',
        'pink-light': '#e0a3a2'
      },
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
