<template>
  <div class="firstView">
    <swiper :indicator-dots="current<3" indicator-active-color="white" @change="handlechange">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg">
      </swiper-item>
    </swiper>
    <button @click="toBooksShop" v-show="current===3">Star</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        current: 0
      }
    },
    methods: {
      handlechange (e) {
        this.current = e.mp.detail.current
      },
      toBooksShop () {
        wx.switchTab({
          url:'/pages/bookShop/main'
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .firstView
    width 100%
    height 100%

    swiper
      height 100%
      width 100%

      img
        width 100%
        height 100%
    button
      width 280rpx
      height 80rpx
      position absolute
      bottom 20rpx
      left 50%
      margin-left -140rpx
      background: rgba(0,0,0,.3)
      border 1rpx solid white
      line-height 80rpx
      text-align center
      color white
</style>
