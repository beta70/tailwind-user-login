/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{js,html,json}',
    './views/**/*.{js,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
