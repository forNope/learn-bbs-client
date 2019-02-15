<template>
  <h3 class="pcx3-text">
    <slot />
  </h3>
</template>

<script>
  export default {
    name: 'x-h3'
  }
</script>

<style lang="less" scoped>
  .pcx3-text {
    font-size: 0.7rem;
    font-weight: 700;
    color: #b3a8aa;
  }
</style>
