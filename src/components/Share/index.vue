<template>
  <div @click="click">
    <slot />
    <x-mask ref="mask" class="sh-wrapper" style="z-index: 99999;" @click.native="$refs.mask.hide()">
      <p class="sh-text">点击右上角即可分享哦~</p>
    </x-mask>
  </div>
</template>

<script>
  import { XMask } from 'components'

  export default {
    name: 'share',
    components: {XMask},
    methods: {
      click () {
        this.$refs.mask.show()
      }
    }
  }
</script>

<style lang="less" scoped>
  .sh-wrapper {
    /deep/ .sh-text {
      .all-center(absolute);
      white-space: nowrap;
      font-size: 1.2rem;
      color: white;
    }
  }
</style>
