<template>
    <div>
      <nav class="nav navbar navbar-default navbar-fixed-top" ref="head_nav" :style="{'background':countScollTop}" >
        <div class="container">
          <div class="navbar-header">
            <button class="navbar-toggle" data-target="#navCollapse" data-toggle="collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="javascript:void(0);" class="navbar-brand">Myblog</a>
            <div class="pull-left"  v-if="!tokenIsValid">
              <nuxt-link class="navbar-brand" to="/login">登录</nuxt-link>
              <nuxt-link class="navbar-brand" to="/register">注册</nuxt-link>
            </div>
            <div class="pull-left" v-else>
              <a href="javascript:void(0);" class="navbar-brand">你好,{{ loginInfo.name }}</a>
              <nuxt-link v-if="loginInfo.admin === 1" to="/admin" class="navbar-brand">后台</nuxt-link>
              <a href="javascript:void(0);" class="navbar-brand" @click="logout()">退出</a>
            </div>
          </div>
          <div class="navbar-collapse collapse" id="navCollapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="active">
                <nuxt-link to="/" class="">Home</nuxt-link>
              </li>
              <li class="active">
                <nuxt-link to="/webAutomation">前端自动化</nuxt-link>
              </li>
              <li class="active">
                <nuxt-link to="/article">文章</nuxt-link>
              </li>
              <li class="active">
                <nuxt-link to="/logger">生活日志</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <nuxt/>
      </div>
      <footer>
        <div class="container">
          <div class="row">
             <div class="col-md-4">
                <h2>Juntong Blog</h2>
                <p class="say">漫漫人生路,为何找不到出路? <br>
                    趁现在,带着年轻的资本，勇敢去闯一闯,即使最后失败了，也别让以后的自己后悔
                </p>
                <div>
                    <p>Copyright © Juntong Blog All Rights Reserved. 湘ICP备17001973号</p>
                </div>
            </div>
            <div  class="col-md-8">
              <h4>好友博客入口：</h4>
              欢迎各位攻城狮交换博客链接
            </div>
          </div>

        </div>
      </footer>
    </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
footer {
  background: #282828;
  color: #fff;
}

nav.nav .navbar-brand {color: #fff;}
nav.nav {
  background: transparent;
}
nav.nav .container ul.nav li a {
  color: #fff;
  background: transparent !important;
}
nav.nav .container ul.nav li a.nuxt-link-exact-active.nuxt-link-active {
  color: #fcac45 !important;
}
.navbar-default {border: none;}
.navbar-default .navbar-collapse {border: none;}
 @media screen and (max-width: 768px) {
   .navbar-brand {
     line-height: 50px;
     padding:0 3px;
     font-size: 16px;
   }
 }
</style>
<script>
// import { mapState, mapActions } from 'vuex'
import jwt from 'jsonwebtoken'
import config from '~/server/config/token.config'
export default {
  data () {
    return {
      scrollTopLimit: 140,
      scrollTop1: 0,
      loginInfo: {
        token: '',
        name: '',
        admin: 0
      },
      tokenIsValid: 0
    }
  },
  methods: {
    navShowBg () {
      this.scrollTop1 = document.body.scrollTop || document.documentElement.scrollTop
      if (this.scrollTop1 >= this.scrollTopLimit) {
        this.$refs.head_nav.style.background = 'rgba(255,255,255,0.95)'
        Array.from(this.$refs.head_nav.querySelectorAll('a')).forEach(function (item) {
          item.style.color = '#121212'
        })
      }
    },
    scroll () {
      window.addEventListener('scroll', () => {
        this.scrollTop1 = document.body.scrollTop || document.documentElement.scrollTop
        if (this.scrollTop1 >= this.scrollTopLimit) {
          Array.from(this.$refs.head_nav.querySelectorAll('a')).forEach(function (item) {
            item.style.color = '#121212'
          })
        } else {
          Array.from(this.$refs.head_nav.querySelectorAll('a')).forEach(function (item) {
            item.style.color = '#fff'
          })
        }
      })
    },
    logout () {
      localStorage.removeItem('loginInfo')
      this.$router.replace('/login')
    }
    // ...mapActions(['getWebInfo'])
  },
  mounted () {
    this.navShowBg()
    this.scroll()
    // console.log(JSON.parse(localStorage.getItem('loginInfo')))
    if (JSON.parse(localStorage.getItem('loginInfo')) !== null) {
      this.loginInfo = JSON.parse(localStorage.getItem('loginInfo'))
      // 校验token
      jwt.verify(this.loginInfo.token, config.jwt.cert, (err) => {
        this.tokenIsValid = {null: 1}[err] || 0
      })
    }
    // this.getWebInfo(this.webInfo)
  },
  computed: {
    //  ...mapState(['webInfo']),
    countScollTop () {
      return this.scrollTop1 >= this.scrollTopLimit ? 'rgba(255,255,255,.95)' : 'transparent'
    }
  }
}
</script>

