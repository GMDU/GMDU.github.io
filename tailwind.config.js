const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    screens: {
      xs: '375px',
      mob: '450px',
      sm: '640px',
      md: '768px',
      tab: '860px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      hd: '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        minecraft: ['Minecraft', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'header-start': '#af4890',
        'header-end': '#4b51b5',
      },
      backgroundImage: {
        'tile-dark': 'url("/images/bg_tile.png")',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
