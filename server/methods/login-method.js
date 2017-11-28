const crypto = require('crypto'),
  sql = require('../mysql/index'),
  jwt = require('jsonwebtoken'),
  tokenConfig = require('../config/token.config'),
  secret = tokenConfig.jwt

class Login {
  constructor () {
    this.login = this.login.bind(this)
  }
  async login (req, res) {
    let md5 = crypto.createHash('md5'),
      self = this,
      newPassword = md5.update(req.body["password"]).digest('hex');
    sql(`SELECT * FROM user WHERE username = ?`, [req.body["username"]], (err, result) => {
      if (err) {
        res.json({code:3})
        return ;
      }
      if (result == ![]) {
        res.json({code: 0})
        return ;
      }
      if (result[0].password === newPassword) {
        const loginInfo = {
          token: self.createToken(result[0]["id"], result[0]["username"]),
          name: result[0]["username"],
          admin: result[0]["admin"]
        }
        // res.cookie('login', {userId: result[0]['id']}, {maxAge: 1000*60*60*24*7}) // 设置7天
        // req.session.admin = Number(result[0].admin)
        res.send({
          code: 1,
          loginInfo: loginInfo
        })
      } else {
        res.json({code: 2})
      }
    })
  }
  createToken (id, name) {
    return jwt.sign({
      id: id,
      name: name
    }, secret.cert, {expiresIn: '7d'})
  }
}

module.exports = new Login()
