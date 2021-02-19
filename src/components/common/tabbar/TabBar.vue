<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.tab-bar {
  display: flex;
  text-align: center;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  height: 49px;
  background-color:#fff;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, .1);
}
</style>