const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      aajc: {
        orange: "#F57B20",
        darkorange: "#CE5800",
        lightorange: "#F8B96F",
        darkgrey: "#292929",
        lightblue: "#BFE8EA",
        yellowWhite: "#FDF4E6",
      },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [],
};
