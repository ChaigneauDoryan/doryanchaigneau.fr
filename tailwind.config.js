const colors = require('tailwindcss/colors')

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        customGray: {
          extraLight: "rgb(108,108,108)",
          light: "rgb(59,59,59)",
          default: "rgb(31,31,31)"
        },
        orange: colors.orange,
      },
    }
  },
  plugins: [],
}
