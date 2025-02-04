/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      colors: {
        PrimaryColor: "#d6eaf8",
       SecondaryColor: "#eb3434",
       DarkColor: "#F",
       dExtraDarkColor: "#eb3434"
      },
    },
  },
  plugins: [],
}
// 