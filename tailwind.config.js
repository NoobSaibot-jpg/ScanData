module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "rgb(89,172,103)",
        lightGreen: "rgb(178,211,176)",
        customUelow: "rgb(255,204,0)"
      },
      animation: {
        gradientFlow: 'gradientShift 6s ease infinite',
    },
      keyframes: {
          gradientShift: {
              '0%, 100%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
          }
      }
    },
  },
  plugins: [],
}
