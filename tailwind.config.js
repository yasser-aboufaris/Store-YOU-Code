/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': "#634C9F",
        'primary-light': "#DBD2E5",
        'secondary': "#DC2626",
        'secondary-light': "#EA580C",
        'gray-light': "#F3F4F6",
        'gray': "#EFEFEF",
        'gray-dark': "#AAAAAA",
        'dark': "#565656",
        'bullet': "#7F7F7F"
      },
    },
  },
  plugins: [],
}