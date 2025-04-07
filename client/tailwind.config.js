/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translate(0%)" },
          "95%": { transform: "translate(-95%)" }
        },
        scrollReverse: {
          "0%": { transform: "translate(-55%)" },
          "95%": { transform: "translate(55%)" }
        }

      },
      animation: {
        scroll: 'scroll 100s infinite',
        scrollReverse: 'scrollReverse 100s infinite',
      }
    }
  },
  plugins: [],
}