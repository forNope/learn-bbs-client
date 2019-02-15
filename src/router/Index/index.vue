<template>
  <router-link class="wrapper" to="/welcome">
    <img src="~assets/loading.jpg">
  </router-link>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style lang="less" scoped>
  .wrapper {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
