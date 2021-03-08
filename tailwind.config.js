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
                color: '##00CD81',
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
                code: {
                  color: '#f7fafc',
                  borderColor: 'transparent',
                  borderWidth: '0',
                  backgroundColor: 'transparent'
                }
              }
            },
          },
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography')
    ],
  }