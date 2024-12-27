import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custblue": "#2185D5",
      },
      fontFamily: {
        "Open-Sans": ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [
    daisyui
  ],
}