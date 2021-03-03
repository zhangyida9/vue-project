<template>
  <div>
    <detail-nav-bar :titles="titles"/>
  </div>
</template>

<script>
import DetailNavBar from "./child/DetailNavBar"

import {getDetailData} from "network/detail"

export default {
  components: {
    DetailNavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论','推荐'],
      iid: null,
      topImages: []
    }
  },
  created() {
    this.iid = this.$route.params.iid

    getDetailData(this.iid).then(res => {
      console.log(res)
      this.topImages = res.result.itemInfo.topImages
      console.log(this.topImages)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>