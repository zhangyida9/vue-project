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
import ObserveDOM from '@better-scroll/observe-dom'
import ObserveImage from '@better-scroll/observe-image'

BScroll.use(ObserveImage)
BScroll.use(ObserveDOM)
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
    },
    obServeDom: {
      type: Boolean,
      default: false
    },
    observeImage: {
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
      obServeDom: this.obServeDom,
      observeImage: this.observeImage //探测 img 标签的加载
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