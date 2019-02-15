<template>
  <transition
    v-if="value"
    v-bind="transition || {name: 'fade'}"
    appear
  >
    <div class="xm-mask">
      <slot />
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'x-mask',
    props: {
      transition: {
        type: Object,
        default: void 0
      }
    },
    data: () => ({
      value: false
    }),
    mounted () {
      document.body.appendChild(this.$el)
    },
    beforeDestroy () {
      document.body.removeChild(this.$el)
    },
    methods: {
      toggle () {
        this.value = !this.value
      },
      show () {
        this.value = true
      },
      hide () {
        this.value = false
      }
    }
  }
</script>

<style lang="less" scoped>
.xm-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

</style>
