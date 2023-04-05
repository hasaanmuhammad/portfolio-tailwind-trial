/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        secondary: '#64748b',
        tema: 'rgb(var(--warna-tema) / <alpha-value>)',
      },
      screens: {
        '2xl': '1320px'
      },
      fontFamily: {
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
}

