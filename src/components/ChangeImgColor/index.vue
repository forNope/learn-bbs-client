<template>
  <div
    :style="{background: `url(${src}) no-repeat center / cover`}"
    class="cic-img"
  />
</template>

<script>
  export default {
    name: 'change-img-color',
    props: {
      color: {
        type: String,
        default: 'pink'
      },
      src: {
        type: String,
        required: true
      }
    },
    mounted () {
      window.addEventListener('resize', this.apply, false)
      setTimeout(this.apply, 300)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.apply, false)
    },
    methods: {
      apply () {
        this.$el.style.filter = `drop-shadow(${this.color} ${this.$el.offsetWidth}px 0)`
      }
    }
  }
</script>

<style lang="less" scoped>
  .cic-img {
    position: relative;
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    margin-left: 1px;
    border-right: 1px solid transparent;
  }
</style>
