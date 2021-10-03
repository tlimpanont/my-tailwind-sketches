const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx,css,scss}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxSizing: ["hover", "focus"],
      borderStyle: ["hover", "focus"],
      spacing: {
        175: "43.75rem", // 700px
        43.75: "10.9375rem", // 175px
        300: "75rem", // 1200px
        150: "37.5rem", // 600px
        75: "18.75rem", // 300px
        100: "25rem", // 400px
      },
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
