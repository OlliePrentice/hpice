const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: {
    content: [
      './*.php',
      './template-parts/**/*.php',
      './classes/**/*.php',
      './inc/**/*.php',
      './assets/**/*.scss',
      './assets/**/*.js',
    ],
    options: {
      safelist: ['bg-primary', 'bg-secondary', 'bg-tertiary', 'bg-quaternary', 'bg-quinary']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#EFEFEF',
          400: '#9F9E9E'
        },
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'tertiary': 'var(--color-tertiary)',
        'quaternary': 'var(--color-quaternary)',
        'quinary': 'var(--color-quinary)',
        'off-white': 'var(--color-off-white)',
        'facebook': 'var(--color-facebook)',
        'twitter': 'var(--color-twitter)'
      },
      fontSize: {
        'zero': '0',
        'xxs': '.625rem',
        'slg': '1.063rem',
        'base': ['1rem', '1.1875'],
        'lg': ['1.125rem', '1.222'],
        'xl': ['1.375rem', '1.35'],
        '2xl': ['1.500rem', '1.208333'],
        '3xl': ['1.750rem', '1.214285'],
        '3xxl': ['1.875rem', '1.214285'],
        '5xl': '3.125rem',
        '6xl': '3.438rem',
        '8xl': '6.250rem'
      },
      fontFamily: {
        'display': ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        'body': ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
      maxWidth: {
        '2xl': '44.688rem',
      },
      boxShadow: {
        'card': '4px 4px 6px 0 rgba(0, 0, 0, 0.16)'
      },
      borderRadius: {
        '4xl': '2.875rem',
        '5xl': '4.063rem'
      },
      screens: {
        'xl': '1172px',
        '2xl': '1172px',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
        }
      },
    },
  },
  variants: {
    extend: {
      inset: ['important'],
      width: ['important'],
      margin: ['last'],
      textColor: ['important'],
      borderColor: ['important'],
      overflow: ['important'],
      display: ['important']
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    })
  ],
}
