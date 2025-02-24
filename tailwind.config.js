/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'scale': 'transform',
        'shadow': 'box-shadow'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // This prevents Tailwind from conflicting with Mantine
  },
} 