<template>
  <div class="recommends">
    <div v-for="(item, index) in recommends" :key="index" class="recommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type:Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style lang='scss' scoped>
.recommends {
  display: flex;
  text-align: center;
  border-bottom: 8px solid #eee;
  .recommend {
    flex: 1;
    margin: 12px 0;
      img {
         width: 70px;
         height: 70px;
      }
      div {
        padding-top: 5px;
      }
  }
}
</style>