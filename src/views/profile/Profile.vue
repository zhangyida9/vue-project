<template>
  <div id="profile">
    <profile-nav-bar/>
    <scroll class="content">
      <login/>
      <money/>
      <profile-list/>
    </scroll>  
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll"

  import ProfileNavBar from "./children/ProfileNavBar";
  import Login from "./children/Login";
  import Money from "./children/Money";
  import ProfileList from "./children/ProfileList";
  
  export default {
    name: "Profile",
    components:{
      Scroll,
      ProfileNavBar,
      Login,
      Money,
      ProfileList
    }
  }
</script>

<style lang="scss" scoped>
 #profile {
   position: relative;
   height: 100vh;
   .content {
    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 45vw;
    z-index: 9;
   }
 }
</style>
