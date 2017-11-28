export default ({isClient, isServer, route, req, res, redirect}) => {
  // 判断是否在服务端登录
  if (isServer) {
    let path = req.originalUrl
    if (path.indexOf('login') > 0) {
      redirect('/login')
    } else {
      redirect(path)
    }
  }
  // 客户端是否登陆
  if (isClient) {
    let loginInfo = JSON.parse(localStorage.getItem('loginInfo'))
    let token = null
    if (loginInfo !== null) {
      token = loginInfo.token
    }
    let isLogin = !!token
    // console.log(isLogin)
    if (route.path.indexOf('admin') > 0 && !isLogin) {
      redirect('/login')
    }
  }
}
