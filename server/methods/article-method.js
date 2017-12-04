const sql = require('../mysql/index')

class ArticleList {
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
}

module.exports = new ArticleList()
