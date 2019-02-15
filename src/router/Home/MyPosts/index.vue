<template>
  <div class="home-my-posts-wrapper">
    <scroller v-if="data.length" ref="scroller" :onInfinite="loadData">
      <list :items="data" />
    </scroller>
    <p v-else class="home-my-posts-no-data">暂时没看到你有什么烦恼呢</p>
  </div>
</template>

<script>
  import List from '../List'

  export default {
    components: {List},
    data: () => ({
      data: []
    }),
    beforeCreate () {
      document.title = '我的烦恼'
    },
    mounted () {
      this.loadData()
    },
    methods: {
      loadData () {
        this
          .$service
          .getPosts({
            onlySelf: true,
            offset: this.data.length,
            limit: 10,
            sort: 'date'
          })
          .ok(({data, total}) => {
            this.data.push(...data)
            this.$refs.scroller.finishInfinite(this.data.length === total)
          })
      }
    }
  }
</script>

<style lang="less" scoped>
  .home-my-posts-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  
  .home-my-posts-header {
    background-color: #101010;
  }
  
  .home-my-posts-no-data {
    .all-center(absolute);

    font-size: 0.7rem;
    font-weight: 900;
    text-align: center;
    white-space: nowrap;
    color: @pink;
  }
</style>
