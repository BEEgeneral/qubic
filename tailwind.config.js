/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'carbon-black': '#1C1C1C',
        'aurum-gold': '#C9A84C',
        'neon-fluor': '#C8FF00',
        'off-white': '#E0DDD8',
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'sans-serif'],
        'mono': ['ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}