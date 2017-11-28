<template>
  <div class="article_content">
      <div class="container">
        <div class="article-head text-center">
            <h3>文章标题</h3>
            <div class="article_info">
                inigo&nbsp;<span>发布于&nbsp;</span>2017-11-15&nbsp;<span class="article_label"></span>&nbsp;vue&nbsp;<span class="read_number"></span>9999&nbsp;<span class="comment_number"></span>8888
            </div>
        </div>
        <div class="article_content">
            hfdhjksfdhfjhsdlkfklsdjflsdkjfklsdjfklsdjfkl
        </div>
      </div>
  </div>
</template>
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

