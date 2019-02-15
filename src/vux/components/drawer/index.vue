/**
* this component is forked from: https://github.com/bajian/vue-drawer
*/
<template>
  <div class="vux-drawer">
    <div :style="{transform: `translate3d(${translateX}px, 0, 0)`}"
    class="vux-drawer-body">
      <slot></slot>
      <div class="drawer-mask" :class="show ? 'vux-drawer-active' : ''" @click="hideMask"></div>
    </div>
    <div
    ref="drawer"
    class="vux-drawer-content"
    :style="drawerStyle"
    :class="[placement !=='left' ? 'drawer-right' : 'drawer-left', show ? 'vux-drawer-active' : '']" >
      <slot name="drawer"></slot>
    </div>
  </div> 
</template>

<script scoped>
export default {
  name: 'drawer',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'left'
    },
    showMode: {
      type: String,
      default: 'overlay'
    },
    drawerStyle: Object
  },
  data () {
    return {
      drawerWidth: 0,
      translateX: 0
    }
  },
  watch: {
    show: function () {
      if (!this.show) {
        this.$emit('on-hide')
      } else {
        this.$emit('on-show')
      }
      if (this.showMode === 'overlay') {
        return
      }
      if (!this.show) {
        this.translateX = 0
      } else {
        this.translateX = this.placement === 'left' ? this.drawerWidth : -this.drawerWidth
      }
    }
  },
  methods: {
    hideMask () {
      this.$emit('update:show', false)
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.drawerWidth = this.$refs.drawer.clientWidth
    })
  }
}
</script>

<style >
.vux-drawer {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.vux-drawer > .vux-drawer-body {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: transform ease-in-out 0.38s, visibility 0.38s;
}

.vux-drawer > .vux-drawer-body > .drawer-mask {
  visibility: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity ease-in-out 0.38s, visibility ease-in-out 0.38s;
}

.vux-drawer > .vux-drawer-body > .vux-drawer-active {
  visibility: visible;
  opacity: 1;
}

.vux-drawer > .vux-drawer-content {
  visibility: hidden;
  position: absolute;
  top: 0;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  pointer-events: none;
  transition: transform ease-in-out 0.38s, visibility 0.38s;
  will-change: none;
}

.vux-drawer > .drawer-left {
  transform: translateX(-100%);
  left: 0;
}

.vux-drawer > .drawer-right {
  transform: translateX(100%);
  right: 0;
}

.vux-drawer > .vux-drawer-active {
  pointer-events: inherit;
  visibility: visible;
  transform: translateX(0%);
}
</style>