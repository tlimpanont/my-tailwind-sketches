module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx,css,scss}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundBlendMode: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
