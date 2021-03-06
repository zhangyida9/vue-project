<template>
  <div id="detail">
    <detail-nav-bar :titles="titles"/>
    <scroll :isPullUpLoad="true" :whatProbeType="3" :obServeDom="true" :observeImage="true" class="scroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :baseData="baseData"/>
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-dress-info :detailInfo="detailInfo"/>
      <detail-item-params :itemParams="itemParams"/>
      <detail-common-info :rate="rate"/>
      <p class="recommend">推荐商品</p>
      <goods-list :goods="recommended"/>
    </scroll>
    <detail-bottom-bar @addCart="addCart"/>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import GoodsList from "components/content/goods/GoodsList"

import DetailNavBar from "./child/DetailNavBar"
import DetailSwiper from "./child/DetailSwiper"
import DetailBaseInfo from "./child/DetailBaseInfo"
import DetailShopInfo from "./child/DetailShopInfo"
import DetailDressInfo from "./child/DetailDressInfo"
import DetailItemParams from "./child/DetailItemParams"
import DetailCommonInfo from "./child/DetailCommonInfo"
import DetailBottomBar from "./child/DetailBottomBar"

import {getDetailData, GetDeatilBaseData, GetDetailShopInfo, GetItemParams, getRecommentdData} from "network/detail"

export default {
  name: "Detail",
  components: {
    Scroll,
    GoodsList,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailDressInfo,
    DetailItemParams,
    DetailCommonInfo,
    DetailBottomBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论','推荐'],
      iid: null,
      topImages: [],
      baseData: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      rate: {},
      recommended: []
    }
  },
  created() {
    this.iid = this.$route.params.iid

    getDetailData(this.iid).then(res => {
      // console.log(res)
      this.topImages = res.result.itemInfo.topImages
      this.baseData = new GetDeatilBaseData(res.result.itemInfo, res.result.columns, res.result.shopInfo)
      this.shopInfo = new GetDetailShopInfo(res.result.shopInfo)
      this.detailInfo = res.result.detailInfo
      this.itemParams =res.result.itemParams ? new GetItemParams(res.result.itemParams) : {}
      this.rate = res.result.rate.list ? res.result.rate.list[0] : {}
      // console.log(this.detailInfo)
      // console.log(this.baseData)
      // console.log(this.topImages)
    })
    getRecommentdData().then(res => {
      this.recommended = res.data.list
    })
  },
  methods: {
    addCart(){
      const cartListData = {
        title : this.baseData.title,
        desc : this.baseData.desc,
        iid : this.iid,
        image : this.topImages[0],
        price:this.baseData.lowNowPrice
      }
    this.$store.dispatch('addCart',cartListData)
    }
  }
}
</script>

<style lang="scss" scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
  .scroll {
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    top: 49px;
    bottom: 50px;
  }
  .recommend {
    padding: 8px;
  }
}
</style>