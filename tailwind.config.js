const typography = require("@tailwindcss/typography");

const Color = require("color");

const colors = {
  white: "#FFFFFF",
  red: "#EC1F27",
  orange: "#ff9c31",
  yellow: "#edd458",
  green: "#b3dd64",
  cyan: "#8eede2",
  blue: "#4078dd",
  purple: "#8550d8",
  pink: "#ef78e4",
  gray: "#918d8d",
  black: "#231F20",
};

// generate light / dark values
const caclcColors = () => {
  const calcdColors = { ...colors };
  Object.keys(colors).forEach((key) => {
    calcdColors[key] = {
      100: String(
        Color(colors[key]).lighten(0.5).saturate(0.125).hex(),
      ).replace("0x", "#"),
      200: String(
        Color(colors[key]).lighten(0.375).saturate(0.125).hex(),
      ).replace("0x", "#"),
      light: String(
        Color(colors[key]).lighten(0.375).saturate(0.125).hex(),
      ).replace("0x", "#"),
      300: String(
        Color(colors[key]).lighten(0.25).saturate(0.125).hex(),
      ).replace("0x", "#"),
      400: String(Color(colors[key]).lighten(0.125).hex()).replace("0x", "#"),
      DEFAULT: String(Color(colors[key]).hex()).replace("0x", "#"),
      500: String(Color(colors[key]).hex()).replace("0x", "#"),
      600: String(
        Color(colors[key]).darken(0.125).saturate(0.125).hex(),
      ).replace("0x", "#"),
      700: String(
        Color(colors[key]).darken(0.25).saturate(0.125).hex(),
      ).replace("0x", "#"),
      dark: String(
        Color(colors[key]).darken(0.375).saturate(0.125).hex(),
      ).replace("0x", "#"),
      800: String(
        Color(colors[key]).darken(0.375).saturate(0.125).hex(),
      ).replace("0x", "#"),
      900: String(Color(colors[key]).darken(0.5).saturate(0.125).hex()).replace(
        "0x",
        "#",
      ),
    };
  });
  return calcdColors;
};

module.exports = {
  content: ["./components/**/*.vue",
    "./pages/**/*.vue",
    "./app/**/*.vue",
    "./layouts/**/*.vue",
    "./assets/**/*.css"],
  theme: {
    screens: {
      sm: "650px",
      md: "850px",
      lg: "1200px",
      xl: "1800px",
      hd: "1920px",
      "4k": "3840px",
    },
    fontFamily: {
      sans: ["specter", "sans-serif"],
      graph: ["graph", "sans-serif"],
    },
    letterSpacing: {
      "-1": "-0.056rem",
      "-2": "-0.111rem",
      "-3": "-0.167rem",
      0: "0px",
      1: "0.056rem",
      "1-5": "0.0835rem",
      2: "0.111rem",
      3: "0.167rem",
    },
    minHeight: {
      "hero-sm": "20rem",
      "hero-md": "30rem",
      "hero-lg": "40rem",
      "1/3-screen": "33vh",
      "1/2-screen": "50vh",
      screen: "100vh",
    },
    extend: {
      colors: caclcColors(colors),
      fontSize: {
        xxs: ".625rem",
        xs: ".75rem",
        sm: ".865rem",
        md: "1rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "2-5xl": "2.5rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5rem",
        "6xl": "6rem",
        "7xl": "7rem",
        "8xl": "8rem",
        "9xl": "9rem",
        "10xl": "10rem",
      },
      maxWidth: {
        "7xl": "80rem",
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "104rem",
      },
      borderRadius: {
        DEFAULT: "2px",
      },
      height: {
        divider: ".2rem",
      },
      lineHeight: {
        tighter: "1.111",
        tight: "1.333",
        list: "1.5",
        normal: "1.666",
      },
      width: {
        30: "7.5rem",
        "1/8": `${(1 / 8) * 100}%`,
        "2/5": "40%",
        "3/5": "60%",
        "2/7": "28%",
        "3/7": "43%",
        "4/7": "57%",
      },
      margin: {
        96: "24rem",
        128: "32rem",
      },
    },
  },
  plugins: [
    typography,
  ],
};
