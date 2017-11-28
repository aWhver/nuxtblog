const  { Router } = require('express'),
  router = Router();

const Login = require('../methods/login-method'),
  Register = require('../methods/register-method'),
  ArticleList = require('../methods/article-method')

router.post('/login', Login.login)
router.post('/register', Register.register)
router.post('/admin/article', ArticleList.adminArticleList)

module.exports = router
