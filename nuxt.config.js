module.exports = {
  mode: 'spa',
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/board/' : '/',
    linkExactActiveClass: 'is-active'
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | Planet Blexar',
    title: 'Chairman of the Board Room',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Board game based mission control gizmo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=News+Cycle|Material+Icons'
        },
      {
        rel: 'stylesheet',
        href:
          'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#6699cc' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/globals',
    '~/plugins/vue-multiselect',
    '~/plugins/vee-validate',
    '~/plugins/vue-flatpickr',
    '~/plugins/vue-notification.client',
    '~/plugins/vue-goodtable.client',
    '~/plugins/apex-charts.client',
    '~/plugins/vue2-editor.client',
    '~/plugins/vue2-dropzone.client'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/style-resources', '@nuxtjs/pwa'],

  styleResources: {
    stylus: ['~assets/css/global.styl']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
