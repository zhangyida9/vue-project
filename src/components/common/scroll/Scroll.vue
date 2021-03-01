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
  data() {
    return {
      scroll: null
    }
  },
  props: {
    isPullUpLoad: {
      type:Boolean,
      defaule: false
    },
    whatProbeType: {
      type:Number,
      default:1
    },
    isShopBackTop: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,  
      pullUpLoad: this.isPullUpLoad,
      probeType: this.whatProbeType,
      useTransition: false, //解决滑动时模糊
    })
    if(this.isPullUpLoad) {
      this.scroll.on('pullingUp',() => {
        this.$emit('onPullingUp')
     })
    }
    if(this.whatProbeType === 2 || this.whatProbeType ===3) {
      this.whatProbeType && this.scroll.on('scroll', (position) => {
      this.$emit('scrollPositon', position)
      })
    }
  },
  methods: {
    finishLoad(){
      this.scroll && this.scroll.finishPullUp()
    },
    scrollTo(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>