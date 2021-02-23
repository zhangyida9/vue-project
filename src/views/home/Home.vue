<template>
  <div>
    <home-nav-bar/>
    <swiper :banners="banners"></swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feture-view/>
    <tab-control :titles="titles"></tab-control>
    <goods-list :goods="goods[currentTitles].list"/>
  </div>
</template>

<script>
import TabControl from "components/content/tabcontrol/TabControl"
import GoodsList from "components/content/goods/GoodsList"

import HomeNavBar from "./child/HomeNavBar"
import Swiper from "./child/Swiper"
import RecommendView from "./child/RecommendView"
import FetureView from "./child/FetureView"

import { getHomeMutilData,getHomeGoodsData } from "network/home"
 
export default {
  components: {
    TabControl,
    GoodsList,
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
       currentTitles: 'pop'
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
         console.log(res)
       })
     }
   }
}
</script>

<style lang='scss' scoped>

</style>