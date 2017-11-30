const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const api = require('./api/')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3001
const sql = require('./mysql/index')

app.use("*", (req, res, next) => {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  });
  next()
});

// 用于判断是否登录
app.use(cookieParser('Inigo'))
// 用于判断是否为管理员账号
app.use(session({secret: 'free'}))

// import api routes
app.use('/api', api)

// 导入和设置nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// 初始化nuxt.js
const nuxt = new Nuxt(config)

if (!config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// 给express模块赋予中间件
app.use(nuxt.render)

// 端口监听
app.listen(port, host)
console.log(`server listening on ${port} ${host}`)
