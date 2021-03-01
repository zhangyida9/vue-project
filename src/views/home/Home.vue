<template>
  <div class="home">
    <home-nav-bar/>
    <scroll :isPullUpLoad="true" :whatProbeType="3" 
      @onPullingUp="loadMore" class="scroll" ref="scroll" @scrollPositon="scrollPositon">
      <swiper :banners="banners"></swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feture-view/>
      <tab-control :titles="titles" @itemClick="itemClick" ref="tabControl"/>
      <goods-list :goods="goods[currentTitles].list"/>
    </scroll>
    <back-top @click.native="scrollTop" v-show="isShopBackTop"/>
  </div>
</template>

<script>
import TabControl from "components/content/tabcontrol/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/content/backtop/BackTop"

import HomeNavBar from "./child/HomeNavBar"
import Swiper from "./child/Swiper"
import RecommendView from "./child/RecommendView"
import FetureView from "./child/FetureView"

import { getHomeMutilData,getHomeGoodsData } from "network/home"
 
export default {
  components: {
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeNavBar,
    Swiper,
    RecommendView,
    FetureView
   },
   data() {
     return {
       banners: [],
       recommends: [],
       titles: ["流行","新款","精选"],
       goods: {
         pop: {page: 0, list:[]},
         new: {page: 0, list:[]},
         sell: {page: 0, list:[]}
       },
       currentTitles: 'pop',
       isShopBackTop: false
     }
   },
   created() {
     this.getHomeMutil()
     this.getHomeGoods('pop')
     this.getHomeGoods('new')
     this.getHomeGoods('sell')
   },
   methods: {
     getHomeMutil() {
       return getHomeMutilData().then(res =>{
        //  console.log(res)
         this.banners = res.data.banner.list
         this.recommends = res.data.recommend.list
       })
     },
     getHomeGoods(type) {
       let page = this.goods[type].page + 1
       return getHomeGoodsData(type, page).then(res =>{
         let data = res.data.list
         this.goods[type].list.push(...data)
         this.goods[type].page += 1
         this.$refs.scroll && this.$refs.scroll.finishLoad()
        //  console.log(res)
       })
     },
     itemClick(index) {
       switch(index) {
         case 0:
           this.currentTitles = 'pop'
           break;
         case 1:
           this.currentTitles = 'new'
           break;
         case 2:
           this.currentTitles = 'sell'
           break
       }
       this.$refs.tabControl.currentIndex = index
     },
     loadMore() {
       this.getHomeGoods(this.currentTitles)
     },
     scrollTop() {
       this.$refs.scroll.scrollTo(0, 0, 500)
     },
     scrollPositon(position) {
      //  console.log(position)
       this.isShopBackTop = (-position.y) > 1000
     }
   }
}
</script>

<style lang='scss' scoped>
.home {
  position: relative;
  height: 100vh;
}
.scroll{
  overflow: hidden;
  position: absolute;
  top: 48px;
  right: 0;
  left: 0;
  bottom: 54px;
}
</style>