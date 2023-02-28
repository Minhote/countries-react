/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        //Light
        "light-main": "#6096B4",
        "light-secondary": "#93BFCF",
        "light-gray": "#BDCDD6",
        "light-white": "#EEE9DA",

        //Dark
        "dark-main": "#181D31",
        "dark-secondary": "#678983",
        "dark-gray": "#E6DDC4",
        "dark-white": "#F0E9D2",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
