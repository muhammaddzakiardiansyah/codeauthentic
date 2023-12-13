/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3399FF',
        'secondary': '#1B1F23',
        'tree': '#FDFDFE',
        'for': '#1B4183'
      },
      fontFamily: {
        'open-sans': 'Open Sans'
      }
    },
  },
  plugins: [],
}

