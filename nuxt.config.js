module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'myblog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '俊潼的第一个Nuxt.js项目实战' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /**
   * Global css
   */
  css: ['~/assets/css/index.css', 'bootstrap/dist/css/bootstrap.css', 'element-ui/lib/theme-chalk/index.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * 配置路由中间件
   */
  router: {
    middleware: 'auth'
  },
  /*
  ** Build configuration
  */
  build: {
    /**
     在自动生成的vendor文件中添加模块，减少应用bundle的体积
     */
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    /*
    ** loader处理
    */
    loaders: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [`${process.cwd()}/assets/icons/svg`],
        options: {
          symbolId: 'icon-[name]'
        }
      }
    ]
  },
  /*
  ** 插件引入
  */
  plugins: [
    { src: '~/plugins/element-ui.js', ssr: true}
  ],
  /*
  ** 访问地址
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
