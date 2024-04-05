/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          default: 'hsl(257, 27%, 26%)',
          100: 'hsl(257, 7%, 63%',
          200: 'hsl(260, 8%, 14%)'
        },
        cyan: 'hsl(180, 66%, 49%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        darkBlue: 'hsl(255, 11%, 22%)'
      }
    },
  },
  plugins: [],
}

