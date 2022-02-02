const typography = require("@tailwindcss/typography");

module.exports = {
  content: ["./pages/**/*.vue", "./components/**/*.vue", "./layouts/**/*.vue}", "./app.vue"],
  theme: {
    fontFamily: {
      sans: ["Urbanist", "sans-serif"],
    },
  },
  plugins: [
    typography,
  ],
};
