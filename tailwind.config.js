const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: '1rem',
            lineHeight: '1.75',
            color: '#4a5568',
            a: {
              color: '#00CD81',
              '&:hover': {
                textDecoration: 'underline'
              }
            },
            h1: {
              color: '#1a202c',
              fontWeight: '800',
              marginTop: '0',
              marginBottom: '0.8888889em',
              lineHeight: '1.11111em',
              fontSize: '2.25em'
            },
            h2: {
              color: '#1a202c',
              fontWeight: '700',
              fontSize: '1.5em',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.33333',
              paddingBottom: '0.5rem',
              borderBottomWidth: '1px',
              borderBottomWidthColor: '#edf2f7',
              ' + *': {
                marginTop: 0
              }
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em'
            },
            code: {
              color: '#1a202c',
              fontWeight: '400',
              fontSize: '0.875em',
              backgroundColor: '#f7fafc',
              padding: '0.25rem',
              borderWidth: '1px',
              borderColor: '#edf2f7',
              borderRadius: '0.25rem'
            },
            pre: {
              borderRadius: '0.25rem',
              code: {
                color: '#f7fafc',
                borderColor: 'transparent',
                borderWidth: '0',
                backgroundColor: 'transparent'
              }
            },
            blockquote: {
              borderLeftColor: '#1a202c',
              borderLeftStyle: 'solid',
              borderLeftWidth: '4px',
              color: 'rgb(116,129,141)',
              display: 'block'
            },
            ol: {
              listStyleType: 'decimal',
              li: {
                marginLeft: '1rem'
              }
            },
            ul: {
              listStyleType: 'disc',
              li: {
                marginLeft: '1rem'
              }
            },
            table: {
              borderCollapse: 'collapse',
              width: '100%',
              textAlign: 'left',
              lineHeight: '1.75rem',
              thead: {
                borderBottomWidth: '0.2em',
              },
              tr: {
                borderBottomWidth: '0.1em'
              },
              th: {
                padding: '0.5rem'
              },
              td: {
                padding: '0.5rem'
              }
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addBase, theme }){
      addBase({
        'html': { fontFamily: 'Roboto\\ Condensed' },
      })
    })
  ],
}