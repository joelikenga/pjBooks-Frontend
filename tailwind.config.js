/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        // main colors

        default_primary_1 : '#EEEEEE',
        default_primary_2 : '#DDDDDD',
        default_secondary : '#06113C',
        default_accent : '#FF8C32',
        'ig-purple': '#833ab4',
        'ig-pink': '#fd1d1d',
        'ig-orange': '#fcb045',

      },
      backgroundImage: theme => ({
        'instagram-gradient': 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)',
      }),

    },
  },
  plugins: [require("tailwindcss-animate")],
}