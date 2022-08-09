/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainDark: '#2C3639',
        mainNavy: '#3F4E4F',
        mainTeal: '#A27B5C',
        mainLight: '#DCD7C9',
      },
    },
  },
  plugins: [],
}