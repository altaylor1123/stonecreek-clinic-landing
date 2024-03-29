/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "stonecreek-blue": "#2eabdf",
        "stonecreek-green": "#58d1ca",
        "stonecreek-dark-grey": "#4b566a",
        "stonecreek-light-grey": "#e9eef1",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
