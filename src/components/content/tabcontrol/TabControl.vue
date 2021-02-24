<template>
  <div class="tab_control">
    <div v-for="(item, index) in titles" :key="index" class="tab_control_item"
      :class="{active: currentIndex === index}"
      @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type:Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
    }
  }
}
</script>

<style lang='scss' scoped>
.tab_control {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  .tab_control_item {
    flex: 1;
    span {
      padding: 5px;
    }
    &.active {
      span {
        color: #ff5777;
        border-bottom: 3px solid #ff5777;
      }
    }
  }
}
</style>