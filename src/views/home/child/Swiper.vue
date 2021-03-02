<template>
  <div class="swiper-list">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#ff5a86">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      if(!this.isLoad) {
        this.$emit('imgLoadOver')
        this.isLoad = true
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.swiper-list {
  img {
    width: 100%;
  }
  /deep/ .van-swipe__indicator {
    width: 10px;
    height: 10px;
    opacity: 0.8;
    border-radius: 100%;
    background-color: white;
  }
}
</style>