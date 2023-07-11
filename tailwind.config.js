/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':'#1DB954',
        'dark':'#000000',
        'light':'#ffffff',
        'lgreen':'#c5f0c9',
        'asul':'#2b84ed',
      },
    },
  },
  plugins: [],
}