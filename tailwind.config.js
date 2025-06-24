/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6b6e55',
        secondary: '#020202',
      }
    },
    container: {
      padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
      },
      center: true,
    },
  },
  plugins: [],
}