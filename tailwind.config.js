/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xl: "1.8rem",
      lg: "1.1rem",
      md: "17px",
    },
    extend: {
      colors: {
        orange: "#ff6a00",
        indigo_dark: "#191828",
        dark: "#242339",
        grey: "#403c4c",
      },
    },
  },
  plugins: [],
};
