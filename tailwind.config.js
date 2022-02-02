module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            hr: {
              borderColor: theme('colors.gray.200'),
              borderTopWidth: '1px',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            'ol > li::before': {
              color: theme('colors.gray.900'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.900'),
            },
          },
        },
      }),
      fontFamily: {
        bebas: "'Bebas Neue', cursive",
        roboto: "'Roboto', sans-serif",
        courgette: "'Courgette', cursive",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
