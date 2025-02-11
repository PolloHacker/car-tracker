/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bgColor: 'var(--bgColor)',
        gtColor1: 'var(--gtColor1)',
        gtColor2: 'var(--gtColor2)',
        textColor: 'var(--textColor)',
        textColor2: 'var(--textColor2)'
      }
    },
  },
  plugins: [],
}

