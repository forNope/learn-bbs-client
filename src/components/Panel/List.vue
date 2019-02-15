<template>
  <div class="panel-list-wrapper">
    <div class="panel-list">
      <p class="panel-list-tip">
        <slot name="tip" />
      </p>
      <slot>
        <slot name="no-data">
          <p class="panel-list-text">暂时还没有数据</p>
        </slot>
      </slot>
      <p v-if="isFetching" class="panel-list-text">
        <slot name="loading">
          加载中...
        </slot>
      </p>
      <p v-if="hasError" class="panel-list-text">
        <slot name="error">
          哦豁,网络出错了
        </slot>
      </p>
      <p v-if="loadedAll && $slots.default" class="panel-list-text">
        <slot name="no-more">没有更多数据了</slot>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props: {
      limit: {
        type: Number,
        default: 200
      },
      scrollEl: {
        type: Element,
        default: () => document.body
      },
      onLoading: {
        type: Function,
        default: void 0
      },
      autoRetry: {
        type: [Boolean, Object],
        default: true
      }
    },
    data: () => ({
      // prevent repeat request
      isFetching: false,
      hasError: false,
      loadedAll: false
    }),
    mounted () {
      // this component will work only have onLoading function
      if (this.onLoading) {
        window.addEventListener('scroll', this.handleScroll, false)
        this.loadData()
      }
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll, false)
    },
    methods: {
      loadData () {
        this.isFetching = true
        this.onLoading({
          loaded: () => {
            this.isFetching = false
          },
          loadedAll: () => {
            this.isFetching = false
            this.loadedAll = true
            window.removeEventListener('scroll', this.handleScroll, false)
          },
          error: () => {
            window.removeEventListener('scroll', this.handleScroll, false)
            this.hasError = true
          }
        })
      },
      handleScroll () {
        if (this.isFetching) return

        if (this.scrollEl.scrollHeight - this.scrollEl.clientHeight < this.scrollEl.scrollTop + this.limit) {
          this.loadData()
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .panel-list-wrapper {
    padding-top: 0.1rem;
  }
  
  .panel-list {
    padding: 0 0.5rem;
  }
  
  .panel-list-tip, .panel-list-text {
    padding: 0.5rem 0;
    font-size: 0.6rem;
    font-weight: 900;
    color: @pink;
  }
  
  .panel-list-text {
    text-align: center;
  }
</style>
