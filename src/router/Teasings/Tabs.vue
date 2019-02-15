<template>
  <tab
    class="ts-tabs"
    customBarWidth="2rem"
    defaultColor="black"
    activeColor="black"
  >
    <tab-item selected @on-item-click="onTabClick(HOT_TEASING)">热门吐槽</tab-item>
    <tab-item @on-item-click="onTabClick(HOT_COMMENT)">热门评论</tab-item>
    <tab-item @on-item-click="onTabClick(HOT_SHARE)">热门转发</tab-item>
    <tab-item @on-item-click="onTabClick(HOT_TODAY)">今日热榜</tab-item>
  </tab>
</template>

<script>
  import { Tab, TabItem } from 'vux/components/tab'
  import { HOT_TEASING, HOT_COMMENT, HOT_SHARE, HOT_TODAY } from './constants'

  export default {
    components: {
      Tab,
      TabItem
    },
    props: {
      onTabClick: {
        type: Function,
        required: false,
        default: () => void 0
      }
    },
    data: () => ({
      HOT_TEASING,
      HOT_COMMENT,
      HOT_SHARE,
      HOT_TODAY
    })
  }
</script>

<style lang="less" scoped>
  .ts-tabs {
    width: 100%;
    height: 2rem;
    
    /deep/ .vux-tab {
      color: black;
      background-color: @pink;
    }
    
    /deep/ .vux-tab-item {
      font-size: 0.6em;
    }
  }
</style>
