<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)

export default {
  props: {
    isPullUpLoad: {
      type:Boolean,
      defaule:false
    },
    whatProbeType: {
      type:Number,
      default:1
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,  
      pullUpLoad: this.isPullUpLoad,
      probeType: this.whatProbeType,
      useTransition: false //解决滑动时模糊
    })
    if(this.isPullUpLoad) {
      this.scroll.on('pullingUp',()=>{
        this.$emit('onPullingUp')
     })
    }
  },
  methods: {
    finishLoad(){
      this.scroll && this.scroll.finishPullUp()
    }
  }
}
</script>

<style lang='scss' scoped>

</style>