const sql = require('../mysql/index')

class ArticleList {
  adminArticleList (req, res) {
    let currentPage = (req.body['currentPage'] - 1) * req.body['limit']
    sql('SELECT * FROM article limit ?,?', [currentPage, req.body['limit']], (err, result) => {
      if (err) {
        console.log(err)
        res.send('请求出错')
        return
      }
      res.send({result: result})
    })
  }
}

module.exports = new ArticleList()
