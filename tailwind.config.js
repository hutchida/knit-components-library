// tailwind.config.js
module.exports = {
  content: ['./src/components/**/*.{ts, tsx}'],
  theme: {
    fontSize: {
      '25pc': '25%',
      '50pc': '50%',
      '75pc': '75%',
      '80pc': '80%',
      '90pc': '90%',
      '100pc': '100%',
    },
    extend: {
      padding: {
        '1pc': '1%',
      },
      rotate: {}
      ,
      inset: {
        '1/2': '50%',
      },
      translate: {
        50: '50%',
        12: '12%',
        70: '70%',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),],
  mode: 'jit',
}
