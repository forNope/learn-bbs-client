<template>
  <div class="wrapper">
    <div class="header">
      <logo class="logo" />
      <div class="title">
        <x-text>GlobalForum</x-text>
        <x-text>答案之酒烦恼</x-text>
        <x-text>全球论坛</x-text>
      </div>
      <x-text class="question">你的烦恼是什么?</x-text>
    </div>
    <div class="items">
      <item to="/home/categories/married">婚姻 Married</item>
      <item to="/home/categories/work" mode="black">工作 Work</item>
      <item to="/home/categories/money">金钱 Money</item>
      <item to="/home/categories/study" mode="black">学业 Study</item>
      <item to="/home/categories/family">家庭 Family</item>
      <item to="/home/categories/healthy" mode="black">健康 Healthy</item>
      <item to="/home/categories/others">其它 Others...</item>
    </div>
  </div>
</template>

<script>
  import Logo from './Logo'
  import XText from './Text'
  import Item from './Item'

  export default {
    name: 'group-view',
    components: {
      Logo,
      XText,
      Item
    }
  }
</script>

<style lang="less" scoped>
  .wrapper {
    display: flex;
    width: 100%;
    min-height: 100vh;
    overflow: auto;
    padding: 0 0.7rem;
    background-color: black;
    flex-direction: column;
  }
  
  .header {
    position: relative;
    margin-top: -28%;
  }
  
  .logo {
    width: 50%;
  }
  
  .title {
    display: inline-block;
    width: 50%;
    padding-left: 1rem;
    vertical-align: middle;
  }
  
  .question {
    position: absolute;
    transform: translateX(-50%);
    bottom: 2rem;
    left: 50%;
  }
  
  .items {
    display: flex;
    overflow: hidden;
    margin-top: -7%;
    flex-direction: column;
    flex: 1;
    flex-basis: auto;
  }
</style>
