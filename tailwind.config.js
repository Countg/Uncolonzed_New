const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily:{
      'Spartan': ['Spartan', ...defaultTheme.fontFamily.sans],
      'Arimo' : ['Arimo', ...defaultTheme.fontFamily.sans]

    },
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },

  plugins: [],
};
