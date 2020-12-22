/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {

        nuxt: {
          gray: '#243746',
          lightgreen: '#41B38A',
          green: '#158876',
          blue: '#1DA1F2'
        },

        division: {
          grandmaster: '#FFC0CB',
          master: '#000000',
          diamond: '#B9F2FF',
          sapphire: '#0F52BA',
          platinum: '#10B6B1',
          gold: '#FFD700',
          silver: '#C3C3C3',
          bronze: '#815A2B',
          iron: '#A19D94'
        }
      },
      fill: theme => ({
        'nuxt-gray': theme('colors.nuxt.gray'),
        'nuxt-lightgreen': theme('colors.nuxt.lightgreen'),
        'nuxt-green': theme('colors.nuxt.green'),
        'nuxt-blue': theme('colors.nuxt.blue'),

        'grandmaster': theme('colors.division.grandmaster'),
        'master': theme('colors.division.master'),
        'diamond': theme('colors.division.diamond'),
        'sapphire': theme('colors.division.sapphire'),
        'platinum': theme('colors.division.platinum'),
        'gold': theme('colors.division.gold'),
        'silver': theme('colors.division.silver'),
        'bronze': theme('colors.division.bronze'),
        'iron': theme('colors.division.iron'),
      }),
      stroke: theme => ({
        'nuxt-gray': theme('colors.nuxt.gray'),
        'nuxt-lightgreen': theme('colors.nuxt.lightgreen'),
        'nuxt-green': theme('colors.nuxt.green'),
        'nuxt-blue': theme('colors.nuxt.blue'),

        'grandmaster': theme('colors.division.grandmaster'),
        'master': theme('colors.division.master'),
        'diamond': theme('colors.division.diamond'),
        'sapphire': theme('colors.division.sapphire'),
        'platinum': theme('colors.division.platinum'),
        'gold': theme('colors.division.gold'),
        'silver': theme('colors.division.silver'),
        'bronze': theme('colors.division.bronze'),
        'iron': theme('colors.division.iron'),
      })
    }
  },
  variants: {
    margin: ['responsive', 'last'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus', 'dark-hover'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus'],
    borderWidth: ['responsive', 'first', 'last']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: ['dark-mode']
    }
  }
}