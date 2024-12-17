export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custblue": "#2185D5",
        "custblack": "#303841",
        "custgrey": "#3A4750",
        "custwhite": "#F3F3F3"
      },
      fontFamily: {
        "Open-Sans": ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}