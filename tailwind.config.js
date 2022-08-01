/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'test-shoe': "url('../public/images/apollonshoe.png')",
      }),
      fontSize: {
        extrafont: ['30px', '70px'],
      }
    },
    fontFamily: {
      'display': ['"Helvetica Neue"']
    }
  },
  plugins: [],
}
