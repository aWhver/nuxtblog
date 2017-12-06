const sql = require('../mysql/index')

class ArticleList {
  // 获取所有文章列表在后台页面展示
  adminArticleList (req, res) {
    let currentPage = (req.body['currentPage'] - 1) * req.body['limit']
    let sort = req.body['sort'].toUpperCase()
    sql('select count(1) from article', null, (err, result1) => {
      sql('SELECT * FROM article order by id ' + sort + ' limit ?,?', [currentPage, req.body['limit']], (err, result) => {
        if (err) {
          res.send('请求出错')
          return
        }
        res.send({result: result, totalNum: result1[0]['count(1)']})
      })
    })
  }
  // 删除文章
  deleteArticle (req, res) {
    let articleId = req.body['articleId']
    sql('DELETE FROM article WHERE id = ?', [articleId], (err, result) => {
      if (err) {
        res.send({
          status: 0,
          type: 'ARTICLE_REMOVE_FAIL',
          msg: '删除文章失败'
        })
        return
      }
      res.send({
        status: 1,
        type: 'ARTICLE_REMOVE_SUCCESS',
        msg: '删除文章成功'
      })
    })
  }
  // 首页展示8篇文章
  homeArticle (req, res) {
    sql('SELECT * FROM article order by id DESC limit 0,8', null, (err, result) => {
      if (err) {
        res.send('请求失败')
      }
      res.send({articleList: result})
    })
  }
  // 文章详情
  checkDetail () {
    sql('select * from article where id = ?', [req.body['articleId']], (err, result) => {
      console.log(result)
    })
  }
}

module.exports = new ArticleList()
