<template>
  <div>
    <div class="enterText">
      <input type="text" placeholder="Please enter value" v-model="inputText" placeholder-class="text"
             confirm-type="Search" @confirm="reqSearchContent">
      <span v-show="inputText" @click="clear">×</span>
    </div>
    <bookLisit :bookList="bookList" v-if="inputText"/>
  </div>
</template>

<script>
  import request from '../../utils/request'
  import bookLisit from '../bookList/bookList'
  export default {
    data () {
      return {
        inputText: '',
        bookList:[]
      }
    },
    methods: {
      clear () {
        this.inputText = ''
      },
      async reqSearchContent () {
        const result = await request('/searchBook', {req: this.inputText})
        this.bookList=result.data.books
      }
    },
    components:{
      bookLisit
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .enterText
    width 80%
    height 80rpx
    margin 0 auto
    position relative

    input
      margin 20rpx auto 0
      width 100%
      border-bottom 1rpx solid #02a774

      .text
        font-size 30rpx
        color #02a774
        line-height 80rpx
        text-align center

    span
      position absolute
      top: -6rpx
      right: 0
      color #02a774
      width 40rpx
      font-size 50rpx
      line-height 60rpx
      z-index 2
</style>
