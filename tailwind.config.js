// tailwind.config.js
module.exports = {
  content: ['./src/components/**/*.{ts, tsx}'],
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
      },
      translate: {
        50: '50%',
        12: '12%',
        70: '70%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),],
  mode: 'jit',
}
