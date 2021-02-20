<template>
  <div class="swiper-list">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return []
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
}
</style>