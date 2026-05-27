/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#facc15",
        dark: "#0f0f0f",
        card: "#18181b",
        border: "#27272a",
      },
    },
  },
  plugins: [],
}