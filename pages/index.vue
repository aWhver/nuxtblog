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
            <h4 class="text-center">{{ value.tag }}</h4>
            <div class="line"></div>
            <p class="desc">{{ value.description }}</p>
            <div class="readAll text-center">
              <nuxt-link :to="`/article/${value.id}`">阅读全文</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from '~/plugins/axios'
  export default {
    data () {
      return {
        list: [],
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
      },
      async getArticleList () {
        let { data: { articleList } } = await axios.post('/api/home')
        this.list = articleList
      }
    },
    mounted () {
      this.getArticleList()
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
