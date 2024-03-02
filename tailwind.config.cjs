/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      animation: {
        'spin-react': 'spin 20s linear infinite',
      },
      transitionDuration: {
        2000: '2000ms',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
