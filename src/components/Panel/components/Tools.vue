<template>
  <div class="pct-tools">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'tools'
  }
</script>

<style lang="less" scoped>
  .pct-tools {
    display: flex;
    align-items: center;
    margin-top: 0.4rem;
  }
</style>
