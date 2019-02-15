<template>
  <div class="home-posts-wrapper">
    <div class="home-posts-header">
      <tab
        class="home-posts-header-tab"
        customBarWidth="2rem"
        defaultColor="#A48E8E"
        activeColor="pink"
      >
        <tab-item selected @on-item-click="sort = 'hot'">最热排序</tab-item>
        <tab-item @on-item-click="sort = 'date'">最新排序</tab-item>
      </tab>
    </div>
    
    <div class="home-posts-content">
      <scroller
        ref="scroller"
        :onInfinite="loadData"
        :onRefresh="refreshData"
        refreshLayerColor="pink"
        loadingLayerColor="pink"
        snapping
      >
        <list :items="data" />
      </scroller>
    </div>
    <release
      :onReleaseFailed="handleReleaseFailed"
      :onReleaseSucceed="handleReleaseSucceed"
      class="home-posts-release"
    />
  </div>
</template>

<script>
  import { TitleBar, Post } from 'components'
  import { Tab, TabItem } from 'vux/components/tab'
  import { ButtonTab, ButtonTabItem } from 'vux/components/button-tab'
  import { message } from 'utils'
  import List from '../List'
  import Release from './Release'
 
  export default {
    name: 'index',
    components: {
      TitleBar,
      Tab,
      TabItem,
      Post,
      ButtonTab,
      ButtonTabItem,
      Release,
      List
    },
    data: () => ({
      data: [],
      sort: 'hot',
      isFetching: false
    }),
    watch: {
      sort () {
        this
          .refreshData()
          .complete(() => this.$refs.scroller.scrollTo(0, 0, true))
      }
    },
    beforeCreate () {
      document.title = '烦恼论坛'
    },
    methods: {
      fetchData (offset = this.data.length, limit = 10, sort = this.sort) {
        this.isFetching = true
        return this
          .$service
          .getPosts({
            category: this.$route.params.category,
            offset,
            limit,
            sort
          })
          .complete(() => { this.isFetching = false })
      },
      loadData () {
        if (this.isFetching) return

        return this
          .fetchData()
          .ok(({data, total}) => {
            this.data.push(...data)
            this.$refs.scroller.finishInfinite(this.data.length >= total)
          })
      },
      refreshData () {
        if (this.isFetching) return

        return this
          .fetchData(0)
          .ok(({data}) => {
            this.data = data
            this.$refs.scroller.finishPullToRefresh()
          })
      },
      handleReleaseFailed () {
        message.error('发布失败')
      },
      handleReleaseSucceed (data) {
        this.data.unshift(data)
        message.success('发布成功')
      }
    }
  }
</script>

<style lang="less" scoped>
  .home-posts-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  
  .home-header {
    background-color: rgb(16, 16, 16);
  }
  
  .home-posts-header, .home-posts-footer {
    flex-basis: auto;
  }
  
  .home-posts-header-tab {
    /deep/ .vux-tab {
      background-color: transparent !important;
    }
    
   /deep/ .vux-tab-item {
      font-size: 0.6rem;
      font-weight: 900;
    }
  }
  
  .home-posts-content {
    flex: 1;
    overflow: auto;
  }
  
  .home-posts-release {
    position: fixed;
    right: 20px;
    bottom: 4rem;
  }
</style>
