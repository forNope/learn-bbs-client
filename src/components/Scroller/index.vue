<template>
  <div class="wrapper">
    <div id="t" ref="el" class="container" style="transform: translate(0, 0);">
      <div class="refresh">
        下拉刷新
      </div>
      <div>
        <slot />
      </div>
      <!--<div class="loading">加载中...</div>-->
    </div>
  </div>
</template>

<script>
  import { Touches, Scroller } from 'utils'

  export default {
    name: 'scroller',
    props: {
      onLoad: {
        type: Function,
        default: () => void 0
      },
      onRefresh: {
        type: Function,
        default: () => void 0
      },
      scrollEl: {
        type: Element,
        default: () => document.body
      },
      limit: {
        type: Number,
        default: 200
      },
      axis: {
        type: String,
        default: 'y'
      }
    },
    mounted () {
      this.scroller = new Scroller(this.$refs.el)
      // this.touches.on('touchmove', this.handleTouchMove)
      // this.touches.on('touchend', this.handleTouchEnd)
      window.addEventListener('scroll', this.handleScroll, false)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll, false)
    },
    methods: {
      handleScroll () {
        if (this.scrollEl.scrollHeight - this.scrollEl.clientHeight < this.scrollEl.scrollTop + this.limit) {
          this.loadData()
        }
      },
      loadData () {
        console.log('laod')
      },
      handleTouchMove () {
        if (this.$refs.el.scrollTop === 0) {
          const {x, y} = this.touches.distance
          const speed = 5
          if (this.axis === 'x') this.scroller.scrollTo(x / speed, 0, false)
          else if (this.axis === 'y') this.scroller.scrollTo(0, y / speed, false)
          else this.scroller.scrollTo(x / speed, y / speed, false)
        }
      },
      handleTouchEnd () {
        this.scroller.scrollTo(0, 0, true)
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrapper,
  .container {
    width: 100%;
    height: 100%;
  }
  
  .container {
    overflow: auto;
  }
  
  .refresh,
  .loading {
    width: 100%;
    font-size: 0.7rem;
    text-align: center;
    color: @pink;
  }
  
  .refresh {
    position: absolute;
    transform: translateY(-100%);
    top: 0;
    left: 0;
  }
  
  .loading {
    position: relative;
  }
</style>
