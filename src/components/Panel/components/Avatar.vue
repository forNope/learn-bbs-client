<template>
  <div class="panel-com-avatar">
    <img :src="url" alt="头像">
  </div>
</template>

<script>
  export default {
    name: 'avatar',
    props: {
      url: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .panel-com-avatar {
    position: absolute;
    transform: translate(-120%, -20%);
    top: 0;
    left: 0;
    width: 1.9rem;
    height: 1.9rem;
    
    img {
      border-radius: 50%;
    }
  }
</style>
