const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx,css,scss}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '600px': '600px',
        '400px': '400px',
        '300px': '300px',
        '200px': '200px',
        '1px': '1px',
      },
      width: {
        '1200px': '1200px',
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
