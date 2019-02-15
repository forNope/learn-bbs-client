<template>
  <div class="vux-dev-tip">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dev-tip'
}
</script>

<style>
.vux-dev-tip {
  margin-bottom: 0.3em;
  padding: 5px 10px;
  font-size: 12px;
  color: #000;
  background-color: #fc0;
}
</style>
