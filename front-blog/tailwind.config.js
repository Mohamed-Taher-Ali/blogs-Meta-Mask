/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
    },
  },
  plugins: [],
}