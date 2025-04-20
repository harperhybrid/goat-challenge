/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2e9e5b",
          light: "#4eba7d",
          dark: "#1e7a45",
        },
        secondary: {
          DEFAULT: "#7c5cff",
          light: "#9f85ff",
          dark: "#5a3dd6",
        },
        accent: {
          DEFAULT: "#f59e0b",
          light: "#fbb33c",
          dark: "#d97706",
        },
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
}