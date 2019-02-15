<template>
  <p class="vux-x-hr"></p>
</template>

<script>
export default {
  name: 'x-hr'
}
</script>

<style lang="less">
@import '../../styles/weui/base/mixin/setOnepx.less';

.vux-x-hr {
  position: relative;
  margin-bottom: 15px;
  padding-top: 15px;

  &::before {
    .setBottomLine()
  }
}
</style>