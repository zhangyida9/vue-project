<template>
  <nav-bar class="nav-bar">
    <template v-slot:middle>
      <div>购物街</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

export default {
  components: {
    NavBar
  }
}
</script>

<style lang='scss' scoped>
.nav-bar {
  background-color: #ff8198;
  div {
    font-size: 18px;
    color: #fff;
  }
}
</style>