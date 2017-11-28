<template>
  <section>
    
    <div class="banner-content" ref="bannerContent">
      <div class="container">
        <div class="motto text-center">
          <h2>welcome to <em>My blog</em></h2>
          <p>不积小流无以成江海 不积跬步无以至千里<br>
            每天积累一点点，将所学知识消化，前端小白的进阶之路
          </p>
        </div>
        <div class="white-btn text-center">
          <a href="javascript:void(0);" ref="goArticle">Let's start</a>
        </div>
      </div>
    </div>
    <div class="article" id="article">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-12" v-for="value in list">
            <h4 class="text-center">vue</h4>
            <div class="line"></div>
            <p class="desc">Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。如果你是有经验的前端开发者，想知道 Vue.js 与其它库/框架的区别，查看对比其它框架</p>
            <div class="readAll text-center">
              <nuxt-link :to="'/article?45'">阅读全文</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        list: [1, 2, 3, 4, 5, 6],
        scrollTop: 0
      }
    },
    methods: {
      scrollAnimation (goArticleTop) { // scrollTop 动画
        let timer = null
        clearInterval(timer)
        timer = setInterval(() => {
          this.scrollTop += 40
          document.body.scrollTop = this.scrollTop
          document.documentElement.scrollTop = this.scrollTop
          if (this.scrollTop >= goArticleTop) {
            this.scrollTop = goArticleTop
            clearInterval(timer)
          }
        }, 30)
      }
    },
    mounted () {
      let goArticleTop = this.$refs.bannerContent.offsetHeight
      this.$refs.goArticle.onclick = () => {
        this.scrollAnimation(goArticleTop)
      }
      window.addEventListener('scroll', () => {
        this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      })
    }
  }
</script>

<style>
div.banner-content {
  padding-top: 35vh;
  height: 100vh;
  background: url(~/assets/images/banner_bg.jpg) no-repeat center/cover;
}
div.motto {
  color: #fff;
  font-size: 20px;
}
div.motto h2 {font-size: 36px;}
div.motto em {
  color: #f89624;
}
.white-btn a {
  color: #333;
  border-radius: 25px;
  padding: 10px 20px;
  background: #fff;
  text-transform: uppercase;
  margin-top: 25px;
  display: inline-block;
}
#article {
  background: url(~/assets/images/about-bg.jpg) no-repeat center/cover;
  background-attachment: fixed;
  padding: 150px 0;
  color: #fff;
  word-wrap: break-word;
}
#article h4 {
  margin: 45px 0 30px;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: bold;
}
#article div.line {
  width: 100%;
  height: 1px;
  background: #fff;
  margin-bottom: 25px;
}
#article p.desc {
  line-height: 24px;
  height: 72px;  
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
#article .readAll a {
  padding: 10px 35px;
  background: #fff;
  color: #333;
  display: inline-block;
  margin-top: 20px;
  border-radius: 25px;
}
</style>
