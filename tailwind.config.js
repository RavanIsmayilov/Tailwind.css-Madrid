/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',

  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 2px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

