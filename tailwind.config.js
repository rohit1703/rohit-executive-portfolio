/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        deepBlue: '#0A192F',
        electricOrange: '#FF6B35',
        surface: '#142138',
        surface2: '#1B2C49',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['"Geist Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      }
    },
  },
  plugins: [],
}