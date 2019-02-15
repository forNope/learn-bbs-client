<template>
  <div class="pcm-wrapper">
    <div class="pcm-round" />
    <div class="pcm-round" />
    <div class="pcm-round" />
  </div>
</template>

<script>
  export default {
    name: 'more'
  }
</script>

<style lang="less" scoped>
  @round-margin: 0 0.05rem;
  @round-size: 0.2rem;
  
  .pcm-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
  }
  
  .pcm-round {
    width: @round-size;
    height: @round-size;
    margin: @round-margin;
    background-color: @pink;
    border-radius: 50%;
  }
</style>
