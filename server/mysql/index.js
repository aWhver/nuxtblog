const mysql = require('mysql')

module.exports = (sql, params, callback) => {
  let config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nuxt',
    port: '3306',
    dateStrings: true
  })
  // 开始连接数据库
  config.connect()

  // 进行数据库操作
  params = params || null
  config.query(sql, params, (err, result) => {
    callback && callback(err, result)
  })

  // 结束连接
  config.end()
}
