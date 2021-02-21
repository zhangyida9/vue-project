<template>
  <div>
    <home-nav-bar/>
    <swiper :banners="banners"></swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feture-view/>
    <tab-control :titles="titles"></tab-control>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>

import TabControl from "components/content/tabcontrol/TabControl"

import HomeNavBar from "./child/HomeNavBar"
import Swiper from "./child/Swiper"
import RecommendView from "./child/RecommendView"
import FetureView from "./child/FetureView"

import { getHomeMutilData } from "network/home"
 
export default {
  components: {
    TabControl,
    HomeNavBar,
    Swiper,
    RecommendView,
    FetureView
   },
   data() {
     return {
       banners: [],
       recommends: [],
       titles: ["流行","新款","精选"]
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