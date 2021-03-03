<template>
  <nav-bar class="nav">
    <template v-slot:left>
      <div @click="itemClick"><img src="~assets/img/common/back.svg" alt=""></div>
    </template>
    <template v-slot:middle>
      <div class="nav_title">
        <div v-for="(item, index) in titles" :key="index" class="nav_title_item" @click="titleClick(index)" :class="{active: currentIndex === index}">{{ item }}</div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

export default {
  components: {
    NavBar
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.go(-1)
    },
    titleClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: #fff;
    font-size: 18px;
    img {
      margin-top: 10px;
    }
    .nav_title {
      display: flex;
      justify-content: space-around;
      font-size: 14px;
      .nav_title_item{
        &.active{
          color: #ff5777;
        }
      }
    }
  }
</style>