<template>
  <router-link v-bind="$attrs" class="pcxr-link" />
</template>

<script>
  export default {
    name: 'x-router-link'
  }
</script>

<style lang="less" scoped>
  .pcxr-link {
    position: absolute;
    z-index: 9999;
    width: 90%;
    height: 65%;
  }
</style>
