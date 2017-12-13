/**
 * Created by lenovo on 2017/12/11.
 */
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = function () {
  this.extendBuild((config, { isClient, isServer }) => {
    config.module.rules.splice(7, 1)
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        exclude: [resolve('assets/icons/svg')],
        options: { limit: 1000, name: 'img/[name].[hash:7].[ext]' }
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('assets/icons/svg')],
        options: {
          symbolId: 'icon-[name]'
        }
      }
    ]
  })
}
