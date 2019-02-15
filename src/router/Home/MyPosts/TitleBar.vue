<template>
  <x-title-bar class="wrapper">
    <template slot="left">
      <div class="title">
        <div class="line_group">
          <div class="line" />
          <div class="line" />
          <div class="line" />
          <div class="line" />
        </div>
        <span class="text">我的烦恼</span>
      </div>
    </template>
  </x-title-bar>
</template>

<script>
  import { TitleBar as XTitleBar } from 'components'

  export default {
    name: 'title-bar',
    components: {XTitleBar}
  }
</script>

<style lang="less" scoped>
  .wrapper {
    background-color: #101010;
  }
  
  .title {
    display: flex;
    align-items: center;
  }
  
  .text {
    font-size: 0.8rem;
    font-weight: 900;
  }
  
  .line_group {
    display: inline-block;
    width: 30px;
    height: 1rem;
    margin-right: 5px;
    vertical-align: middle;
    
    .line:nth-child(1) {
      top: 2px;
    }
    
    .line:nth-child(2) {
      top: 8px;
    }
    
    .line:nth-child(3) {
      top: 14px;
    }
    
    .line:nth-child(4) {
      top: 20px;
    }
  }
  
  .line {
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 1px;
    background-color: pink;
  }
</style>