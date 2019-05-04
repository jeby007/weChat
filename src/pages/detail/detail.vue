<template>
  <div id="warp">
    <div class="title">
      <h2>{{book.title}}</h2>
      <img :src="book.image">
      <p>作者：{{book.author}}</p>
      <p>出版社：{{book.publisher}}</p>
      <p>出版日期：{{book.pubdate}}</p>
      <p>定价：￥{{book.price}}</p>
    </div>
    <button>Collect</button>
    <div class="line"></div>
    <div class="content">
      <h2>作者简介</h2>
      <p>{{book.author_intro}}</p>
      <div class="line"></div>
      <h2>文章简介</h2>
      <p>{{book.summary}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        book:[]
      }
    },
    mounted(){
      this.book=JSON.parse(this.$mp.query.books)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#warp
  padding 20rpx
  box-sizing border-box
  font-size 34rpx
  p
    padding-left 30rpx
  .title
    box-sizing border-box
    margin-bottom 20rpx
    h2
      color #02a774
      font-weight bold
      height 80rpx
      line-height 80rpx
      text-align center
      font-size 40rpx
    img
      width 100%
      height 600rpx
  button
    width 200rpx
    height 60rpx
    font-size 30rpx
    line-height 60rpx
    text-align center
    background: rgba(255,255,255,.5);
    border 1rpx solid #02a774
  .line
    width 90%
    border-bottom 1rpx solid #eee
    margin 30rpx auto
  .content
    h2
      color #02a774
      font-weight bold
      height 80rpx
      line-height 80rpx
      text-align center
      font-size 40rpx

</style>
