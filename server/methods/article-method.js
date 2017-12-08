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
  // 新增文章
  async addArticle (req, res) {
    let time = req.body.form['time'].split('.')[0].split('T').join(' ')
    await sql('INSERT INTO article (id, author, title, description, uId, time, tag) values (0, ?, ?, ?, 7, ?, ?)', [req.body.form['author'], req.body.form['title'], req.body.form['description'], time, req.body.form['tag']], (err, result) => {
      if (err) {
        res.send({
          status: 0,
          type: 'ARTICLE_ADD_FAIL',
          msg: '添加文章失败'
        })
        return
      }
      res.send({
        status: 1,
        type: 'ARTICLE_ADD_SUCCESS',
        msg: '文章添加成功'
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
  // 前端首页展示8篇文章
  homeArticle (req, res) {
    sql('SELECT * FROM article order by id DESC limit 0,8', null, (err, result) => {
      if (err) {
        res.send({
          status: 0
        })
        return
      }
      res.send({articleList: result, status: 1})
    })
  }
  // 文章详情
  checkDetail (req, res) {
    sql('select * from article where id = ?', [req.params['articleId']], (err, result) => {
      if (err) {
        res.send({
          status: 0
        })
        return
      }
      res.send({
        detail: result,
        status: 1
      })
    })
  }
}

module.exports = new ArticleList()
