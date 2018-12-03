const pkg = require('./package')
const path = require('path')
const museUiThemePath = path.join(
  __dirname,
  'node_modules',
  'muse-ui',
  'src/styles/themes/variables/default.less'
)
module.exports = {
  mode: 'spa',
  /*
  ** Router config
  */
  router: {
    middleware: 'check-auth',
    mode: 'hash'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'e德互联手机客服' + pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ],
    script: [{ src: 'cordova.js' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/main.css',
    '@/static/css/all.min.css',
    'swiper/dist/css/swiper.css',
    'optiscroll/dist/optiscroll.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vee-validate.js',
    '~/plugins/muse.config.js',
    '~/plugins/AxiosForm'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  generate: {
    routes: ['/home'],
    dir: 'app/www'
  },
  /*
   ** Build configuration
   */
  build: {
    publicPath: '/nuxt/',
    vendor: [
      '~/plugins/vee-validate.js',
      '~/plugins/muse.config.js',
      '~/plugins/AxiosForm',
      'vue-awesome-swiper',
      'optiscroll',
      'vue-base64-file-upload'
    ],
    loaders: {
      less: {
        globalVars: {
          museUiTheme: `'${museUiThemePath}'`
        }
      }
    },
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
      // muse设置
      config.resolve.alias['muse-components'] = 'muse-ui/src'
      config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
      config.module.rules.push({
        test: /muse-ui.src.*?js$/,
        loader: 'babel-loader'
      })
    }
  }
}
