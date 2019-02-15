<template>
  <div class="pcx6-text">
    <svg width="100%" height="100%">
      <text
        :fill="color"
        font-size="0.5rem"
        x="0"
        y="1em"
      >
        <slot />
      </text>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'x-h6',
    props: {
      color: {
        type: String,
        default: '#736D6D'
      }
    }
  }
</script>

<style lang="less" scoped>
  .pcx6-text {
    height: 0.7rem;
  }
</style>
