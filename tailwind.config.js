/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html',
    '../forStudent/**/*.{html}'
  ],
  theme: {
    extend: {
      margin: {
        '-mt34': '-34rem',
        '-mt82': '-23rem'
      },
      height: {
        'h82': '22.5rem'
      }
    },
  },
  plugins: [],
}