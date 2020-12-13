import { NuxtConfig  } from '@nuxt/types'

const config: NuxtConfig  = {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'MK8DX 150cc Lounge',
    titleTemplate: '%s / MK8DX 150cc Lounge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'description', name: 'description', content: 'Welcome to the MK8DX 150cc Lounge' },
      { hid: 'og:description', property: 'og:description', content: 'Welcome to the MK8DX 150cc Lounge' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    ['@nuxtjs/google-analytics', {
      id: 'UA-176556228-1'
    }]
  ],

  serverMiddleware: [
    '~/api/index.ts'
  ],

  colorMode: {
    preference: 'dark'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    analyze: true
  },

  manifest: {
    name: 'MK8DX 150cc Lounge',
    theme_color: '#000000',
    background_color: '#ffffff',
    display: 'standalone',
    Scope: '/',
    start_url: '/',
    splash_pages: null,
    "icons": [
      {
        "src": "/android-chrome-36x36.png",
        "sizes": "36x36",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-48x48.png",
        "sizes": "48x48",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-152x152.png",
        "sizes": "152x152",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  },

    /*
  ** Nuxt.js modules
  */
 modules: [
  // Doc: https://axios.nuxtjs.org/usage
  '@nuxtjs/axios',
  '@nuxtjs/pwa',
  ['@nuxtjs/google-adsense', {
    id: 'ca-pub-7932483299460648',
    pageLevelAds: true,
    analyticsUacct: 'UA-176556228-1',
    analyticsDomainName: '150cc-lounge.glitch.me'
  }],
  '@nuxtjs/dayjs',
  '@nuxt/content'
],

loading: { color: '#1DA1F2' },

router: {
  middleware: [
    'getPlayers'
  ]
},

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
 axios: {
  baseURL: 'http://localhost:3000/'
 }
}

export default config
