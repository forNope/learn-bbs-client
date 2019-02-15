<template>
  <i
    :style="{
      backgroundImage: `url(${require(`./assets/${type}.svg`)})`
    }"
    class="i-icon"
  />
</template>

<script>
  export default {
    name: 'icon',
    props: {
      type: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .i-icon {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>
