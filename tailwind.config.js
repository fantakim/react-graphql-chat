module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
