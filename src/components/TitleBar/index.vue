<template>
  <div class="wrapper">
    <div>
      <slot name="left">
        <a class="back_text">
          <slot name="backText">返回</slot>
        </a>
        <div class="arrow" />
        <div class="arrow cover" />
      </slot>
    </div>
    <div class="title">
      <slot />
    </div>
    <div>
      <slot name="right" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'title-bar'
  }
</script>

<style lang="less" scoped>
  @back-text-size: 0.8rem;
  @title-text-size: 0.9rem;
  @title-text-color: pink;
  @theme-color: pink;
  @arrow-size: 2px;
  @arrow-color: pink;
  @arrow-cover-color: black;
  @wrapper-padding: 0.5rem;
  
  .wrapper {
    display: flex;
    width: 100%;
    padding: @wrapper-padding;
    color: @theme-color;
    
    > div {
      flex: 1;
    }
  }
  
  .back_text {
    padding-left: @title-text-size - 0.1;
    font-size: @back-text-size;
    font-weight: 700;
  }
  
  .arrow {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    width: 0;
    height: 0;
    border: @title-text-size / 2 solid @theme-color;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    
    &.cover {
      left: @arrow-size;
      border-right-color: @arrow-cover-color;
    }
  }
  
  .title {
    width: 100%;
    font-size: @title-text-size;
    font-weight: 900;
    text-align: center;
  }
</style>
