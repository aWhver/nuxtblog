<template>
  <div class="article_content">
    <div class="container">
      <div v-show="!errorShow">
        <div class="article-head text-center">
          <h3>{{ articleDetail.title }}</h3>
          <div class="article_info">
            {{ articleDetail.author }}&nbsp;<span>发布于&nbsp;</span>{{ articleDetail.time }}&nbsp;<span class="article_label"></span>&nbsp;{{ articleDetail.tag }}&nbsp;
            <!--<span class="read_number"></span>9999&nbsp;<span class="comment_number"></span>8888-->
          </div>
        </div>
        <div class="article_content">
          {{ articleDetail.content }}
        </div>
      </div>
      <div v-show="errorShow">
        <error-box></error-box>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from '~/plugins/axios'
  export default {
    async asyncData ({ params }) {
      let { data: { detail, status } } = await axios.post(`/api/article/${params.articleId}`)
      return { articleDetail: detail[0], status: status }
    },
    data () {
      return {
        errorShow: false
      }
    },
    created () {
      if (this.status === 0) {
        this.errorShow = true
      }
    }
  }
</script>
<style>
  .article_content {margin-bottom: 10px;}
  .article_info {
    line-height: 30px;
    height: 30px;
    color: #000;
    padding-bottom: 30px;
    border-bottom: 1px solid #666;
    box-sizing: content-box;
  }
  .article_info span {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    color: #b7b7b7;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px 30px;
    vertical-align: bottom;
  }
  .article_info span.article_label {
    width:30px;
    background-image: url(~/assets/images/label_icon.png)
  }
  .article_info span.read_number {
    width:30px;
    background-image: url(~/assets/images/browser_icon.png)
  }
  .article_info span.comment_number {
    width:30px;
    background-image: url(~/assets/images/comment_icon.png)
  }
  .article_content {
    padding: 15px 10px;
  }
</style>

