<template>
  <div
    ref="el"
    :style="{zIndex}"
    class="bm-wrapper"
  >
    <transition
      v-if="active"
      v-bind="dialogTransition"
      appear
    >
      <div
        data-role="dialog"
        class="bm-container"
      >
        <slot name="dialog" />
      </div>
    </transition>
    <x-mask
      v-if="showMask"
      ref="mask"
      @click.native="maskClosable && hide()"
    >
      <slot name="mask" />
    </x-mask>
  </div>
</template>

<script>
  import XMask from '../XMask'

  export default {
    name: 'base-modal',
    components: {XMask},
    props: {
      // 显示回调
      'onShow': {
        type: Function,
        default: () => {}
      },
      // 隐藏回调
      'onHide': {
        type: Function,
        default: () => {}
      },
      // 对话框过渡效果
      'dialogTransition': {
        type: Object,
        default: void 0
      },
      // 是否显示遮罩层
      'showMask': {
        type: Boolean,
        default: true
      },
      // 点击遮罩层是否关闭
      'maskClosable': {
        type: Boolean,
        default: true
      },
      // modal的z-index值
      'zIndex': {
        type: Number,
        default: 9999
      }
    },
    data: () => ({
      active: false
    }),
    mounted () {
      document.body.appendChild(this.$el)
    },
    beforeDestroy () {
      document.body.removeChild(this.$el)
    },
    methods: {
      show () {
        this.active = true
        this.$refs.mask.show()
        this.$nextTick(() => {
          this.$refs.el.querySelectorAll('[data-role=cancel]').forEach(el => {
            el.addEventListener('click', this.hide, false)
          })
        })
        this.onShow()
      },
      hide () {
        this.$refs.el.querySelectorAll('[data-role=cancel]').forEach(el => {
          el.removeEventListener('click', this.hide, false)
        })
        this.active = false
        this.$refs.mask.hide()
        this.onHide()
      }
    }
  }
</script>

<style lang="less" scoped>
  .bm-wrapper {
    position: fixed;
    top: 0;
    left: 0;
  }
  
  .bm-container {
    position: absolute;
    z-index: 10;
  }
</style>
