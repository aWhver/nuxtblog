const jwt = require('jsonwebtoken'),
  secret = require('../config/token.config').jwt

// 验证token
export default (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).end('no token')
  } else {
    // console.log(req.headers.authorization)
    const token = req.headers.authorization.split(' ')[0]
    jwt.verify(token, secret.cert, (err) => {
      if (err) {
        res.status(401).end(err.message)
      } else {
        next()
      }
    })
  }
}
