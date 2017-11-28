const {Router}  = require('express')
const bodyParser = require('body-parser')

const router = Router()
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.use('/',require('./api'))

/*
router.post('/checkLogin', (req, res) => {
  console.log('cookie:' + req)
  console.log('admin:' + req.session.admin)
  if (req.cookies['login']) {
    sql(`SELECT * FROM user WHERE username = ?`, [req.cookies["login"].userId], (err, result) => {
      res.send({result: result})
    })
  } else {
    res.send({code:1})
  }
}) */

module.exports =  router
