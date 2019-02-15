<template>
  <span v-text="text" :class="['vux-badge', {'vux-badge-dot': typeof text === 'undefined', 'vux-badge-single': typeof text !== 'undefined' && text.toString().length === 1}]"></span>
</template>

<script>
export default {
  name: 'badge',
  props: {
    text: [String, Number]
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.vux-badge {
  display: inline-block;
  height: 16px;
  padding: 0 6px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  vertical-align: middle;
  color: #fff;
  background: @badge-bg-color;
  border-radius: 8px;
  background-clip: padding-box;
}

.vux-badge-single {
  width: 16px;
  padding: 0;
}

.vux-badge-dot {
  height: auto;
  padding: 5px;
}
</style>
