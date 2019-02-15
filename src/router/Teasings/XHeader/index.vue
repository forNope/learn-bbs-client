<template>
  <div class="ts-header-wrapper">
    <release v-bind="release" />
    
    <div class="ts-header-title">
      <div><b>SPIT SLOT</b></div>
      <div><b>答案之酒吐槽平台</b></div>
    </div>
    
    <div class="ts-header-icons">
      <icon class="ts-header-glass" type="search" />
      <div class="ts-header-more" @click="$refs.more.show()">
        <div class="ts-header-point" />
        <div class="ts-header-point" />
        <div class="ts-header-point" />
      </div>
    </div>
    
    <more ref="more" />
  </div>
</template>

<script>
  import { Icon } from 'components'
  import Release from './Release'
  import More from './More'

  export default {
    name: 'x-header',
    components: {Icon, More, Release},
    props: {
      release: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<style lang="less" scoped>
  .ts-header-wrapper {
    width: 100%;
    padding: 0.2rem 0.5rem;
    background: #fda1b1;
  }
  
  .ts-header-release {
    .vertical-center;
    width: 3rem;
    height: 1.2rem;
    font-size: 0.6rem;
    border-radius: 0.4rem;
    background: #fff;
  }
  
  .ts-header-title {
    display: inline-block;
    margin: 0 0.8rem;
    font-weight: 900;
    text-align: center;
  }
  
  .ts-header-icons {
    display: inline-block;
  }
  
  .ts-header-glass,
  .ts-header-more {
    display: inline-block;
    .vertical-center;
  }
  
  .ts-header-glass {
    width: 1rem;
    height: 1rem;
    margin-left: 0.2rem;
  }
  
  .ts-header-more {
    margin-left: 0.8rem;
  }
  
  .ts-header-point {
    width: 0.2rem;
    height: 0.2rem;
    margin-top: 0.15rem;
    border-radius: 50%;
    background-color: black;
  }
</style>
