const  { Router } = require('express'),
  router = Router();

const Login = require('../methods/login-method'),
  Register = require('../methods/register-method'),
  ArticleList = require('../methods/article-method')

router.post('/login', Login.login)
router.post('/register', Register.register)
router.post('/admin/article', ArticleList.adminArticleList)
router.post('/admin/article/delete', ArticleList.deleteArticle)
router.post('/admin/article/patch', ArticleList.patchArticle)
router.post('/home', ArticleList.homeArticle)
router.post('/article/:articleId', ArticleList.checkDetail)

module.exports = router
