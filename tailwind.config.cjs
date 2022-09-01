/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
         primary: "#00040f",
        // primary: "#0d52ce",
        secondary: "#0d50ce",
        accent: "#ffc800",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 255, 0.1)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        batangas: ["Batangas", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
