<template>
  <div class="pcw-wrapper">
    <div class="pcw-container">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wrapper'
  }
</script>

<style lang="less" scoped>
  .pcw-wrapper {
    width: 100%;
    padding: 0.5rem 0 0.5rem 2.5rem;
    border-radius: 3px;
  }
  
  .pcw-container {
    width: 100%;
  }
</style>
