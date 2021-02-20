<template>
  <div>
    <home-nav-bar/>
    <swiper :banners="banners"></swiper>
  </div>
</template>

<script>
import HomeNavBar from "./child/HomeNavBar"
import Swiper from "./child/Swiper"

import { getHomeMutilData } from "network/home"
 
export default {
  components: {
    HomeNavBar,
    Swiper
   },
   data() {
     return {
       banners: []
     }
   },
   created() {
     this.getHomeMutil()
   },
   methods: {
     getHomeMutil() {
       return getHomeMutilData().then(res =>{
        //  console.log(res)
         this.banners = res.data.banner.list
       })
     }
   }
}
</script>

<style lang='scss' scoped>

</style>