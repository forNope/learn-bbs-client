<template>
  <div class="logo">
    <img src="~assets/lips.png">
  </div>
</template>

<script>
  export default {
    name: 'logo'
  }
</script>

<style lang="less" scoped>
  @rem: 30rem;
  
  .logo {
    display: inline-block;
    vertical-align: middle;
    
    img {
      transform: rotate(275deg);
      width: 10rem;
      height: 16rem;
    }
  }
</style>
