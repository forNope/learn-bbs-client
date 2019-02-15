<template>
  <h1 class="pcx1-text">
    <slot />
  </h1>
</template>

<script>
  export default {
    name: 'x-h1'
  }
</script>

<style lang="less" scoped>
  .pcx1-text {
    font-size: 0.8rem;
    font-weight: 900;
    color: #ccc5c6;
  }
</style>
