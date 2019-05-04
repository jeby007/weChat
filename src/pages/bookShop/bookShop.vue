<template>
<div class="bookShop">
  <swiper indicator-dots indicator-active-color="white">
    <swiper-item v-for="(book,index) in carouselList" :key="index">
      <img :src="book.image">
    </swiper-item>
  </swiper>
  <div class="allProductTitle">
    <span>全部商品</span>
    <span class="all" @click="toList">></span>
  </div>
  <div class="allProduct">
    <ul>
      <li v-for="(book,index) in books" :key="index" @click="toDetail(index)">
        <img :src="book.image">
        <p>《{{book.title}}》</p>
        <p>{{book.author}}</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  import books from './datas/data'
  export default {
    data(){
      return{
        books:[]
      }
    },
    mounted(){
      this.books=books
    },
    computed:{
      carouselList(){
        return [...this.books].splice(0,4)
      }
    },
    methods:{
      toList(){
        wx.navigateTo({
          url:'/pages/bookList/main?books='+ JSON.stringify(this.books)
        })
      },
      toDetail(index){
        wx.navigateTo({
          url:'/pages/detail/main?books='+ JSON.stringify(this.books[index])
        })

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.bookShop
  swiper
    width 100%
    height 400rpx
    img
      width 100%
      height 400rpx
  .allProductTitle
    height 80rpx
    width 100%
    line-height 80rpx
    padding 10rpx
    box-sizing border-box
    .all
      float right
      width 60rpx
      text-align right
  .allProduct
    ul
      display flex
      flex-wrap wrap
      width 100%
      padding 10rpx
      box-sizing border-box
      li
        display flex
        flex-direction column
        align-items center
        width 50%
        box-sizing border-box
        margin-top 20rpx
        border-bottom 1rpx solid #eee
        &:nth-child(2n+1)
          border-right  1rpx solid #eee
        img
          width 260rpx
          height 260rpx
        p
          margin 10rpx 0
          font-size 32rpx

</style>
