
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
require('tailwindcss/')


module.exports = {
  mode : 'jit', 
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/components/**/*.{html,js}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.blueGray,
      indigo: colors.indigo,
      yellow : colors.yellow,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      white : colors.white,
      sky: colors.sky,
      cyan: colors.cyan,
      customRed: {
        DEFAULT : "#FF6B6B"
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addComponents }){
      const buttons = {
        '.btn-red': {
          padding: '.5rem 1rem',
          borderRadius: '.50rem',
          fontWeight: '600',
          backgroundColor: 'rgba(255, 115, 150, 20%)',
          color: "#FF6B6B",
          '&:hover': {
            backgroundColor: 'rgba(255, 115, 150, 30%)'
          }
        }
      }
      
      addComponents(buttons)
    })
  ],
}

