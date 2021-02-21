<template>
  <div>
    <home-nav-bar/>
    <swiper :banners="banners"></swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feture-view/>
  </div>
</template>

<script>
import HomeNavBar from "./child/HomeNavBar"
import Swiper from "./child/Swiper"
import RecommendView from "./child/RecommendView"
import FetureView from "./child/FetureView"

import { getHomeMutilData } from "network/home"
 
export default {
  components: {
    HomeNavBar,
    Swiper,
    RecommendView,
    FetureView
   },
   data() {
     return {
       banners: [],
       recommends: []
     }
   },
   created() {
     this.getHomeMutil()
   },
   methods: {
     getHomeMutil() {
       return getHomeMutilData().then(res =>{
         console.log(res)
         this.banners = res.data.banner.list
         this.recommends = res.data.recommend.list
       })
     }
   }
}
</script>

<style lang='scss' scoped>

</style>