// tailwind.config.js
module.exports = {
  content: [],
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
  plugins: [],
  mode: 'jit',
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './stories/*'],  
}
