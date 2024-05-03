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

      },

    },
  },
  plugins: [require("tailwindcss-animate")],
}