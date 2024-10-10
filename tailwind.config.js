/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        LightBlack: "#3a3c3f",
        DarkBlack: "#1f1f1f",
        Dark: "#212121",
        LightWhite: "#bec6e3",
        DarkWhite: "#bbe0ff",
        Blue: "#367cc1",
      },
      screens: {
        '990': '990px',
      },

    },
  },
  plugins: [
  ],
}

