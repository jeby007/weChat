<template>
  <div>
    <div id="bookListContainer" v-for="(item, index) in bookList" :key="index" @click="toDetail(index)">
      <img class="bookImg" :src="item.image">
      <div class="bookInfo">
        <p>{{item.title}}</p>
        <p>作者：{{item.author}}</p>
        <p>出版社: {{item.publisher}}</p>
      </div>
      <p class="bookPrice">{{item.price}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      bookList:Array
    },
    data(){
      return{
        bookList:[]
      }
    },
    mounted(){
      if (this.$mp) {
        this.bookList=JSON.parse(this.$mp.query.books)
      }
      console.log(this.bookList)
    },
    methods:{
      toDetail(index){
        wx.navigateTo({
          url:'/pages/detail/main?books='+ JSON.stringify(this.bookList[index])
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #bookListContainer
    display flex
    padding 10rpx
    border-bottom 1rpx solid #eee
    img
      width 140rpx
      height 140rpx
      margin-right 20rpx
    .bookInfo
      p
        font-size 28rpx
        line-height 50rpx
    .bookPrice
      position absolute
      right 30rpx
      font-size 36rpx
      font-weight bold
      color red
</style>
