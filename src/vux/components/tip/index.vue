<template>
  <div class="vux-group-tip" :style="{'text-align':align}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tip',
  props: {
    align: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style>
.vux-group-tip, .vux-group-tip p {
  padding-top: 0.3em;
  padding-right: 5px;
  padding-left: 10px;
  font-size: 14px;
  text-align: center;
  color: #888;
}

.vux-group-tip .weui-icon {
  padding-right: 3px;
}
</style>
