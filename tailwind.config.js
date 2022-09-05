/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'ms': {'max': '1050px'},
      'mmd': {'max': '700px'},
      'mxs': {'max': '500px'},
      // => @media (max-width: 1535px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
