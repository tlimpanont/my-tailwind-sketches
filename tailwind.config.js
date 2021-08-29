const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx,css,scss}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        stripepurple: "#635bff",
      },
    },
  },
  variants: {
    extend: {
      backgroundBlendMode: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
