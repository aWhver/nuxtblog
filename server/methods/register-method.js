const crypto = require('crypto'),
  nodemailer = require('nodemailer'),
  sql = require('../mysql/index')

class Register {
  async register (req, res) {
    let md5 = crypto.createHash('md5');
    sql(`SELECT * FROM user WHERE username = ?`, [req.body["username"]], (err, result) => {
      if (result == ![]) {
        let newPassword = md5.update(req.body["password"]).digest('hex')
        sql(`INSERT INTO user (id,username,password,admin) VALUES (0,?,?,0)`, [req.body["username"],newPassword], (err, result1) => {
          res.json({code: {null:1}[err] || 2})
        })
      } else {
        res.json({code: 0})
      }
    })
    /*let transport = nodemailer.createTransport({
     service: "163",
     auth: {
     user: "18873283031@163.com",
     pass: "refuseLazy95."
     }
     })
     let mailOptions = {
     from: "'俊潼的博客'1095785257.com",
     to: '18873283031@163.com',
     subject: "欢迎注册俊潼的博客",
     html: "<h3>hello! welcome to my blog</h3>"
     }
     transport.sendMail(mailOptions,(error, info) => {
     if (error) {
     console.log(error)
     res.status(504).end('邮件发送失败')
     } else {
     console.log(info.response)
     }
     }) */
  }
}

module.exports = new Register()
