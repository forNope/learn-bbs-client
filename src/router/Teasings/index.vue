<template>
  <div class="ts-wrapper">
    <x-header :release="{onReleaseSucceed}" />
    <tabs :onTabClick="handleTabChange" />
    <div class="ts-list">
      <scroller ref="scroller" :onInfinite="load" :onRefresh="refresh">
        <div
          v-for="item in data"
          :key="item.id"
          class="ts-item"
        >
          <item v-bind="item" /> 
        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
  import XHeader from './XHeader'
  import Tabs from './Tabs'
  import Item from './Item'
  import { HOT_TEASING } from './constants'

  export default {
    name: 'index',
    components: {
      XHeader,
      Tabs,
      Item
    },
    data: () => ({
      mode: HOT_TEASING,
      data: [],
      request: null,
      isFetching: false
    }),
    watch: {
      mode () {
        if (this.request) {
          this.request.cancel()
          this.isFetching = false
        }
        this.refresh().complete(() => this.$refs.scroller.scrollTo(0, 0, true))
      }
    },
    methods: {
      onReleaseSucceed (data) {
        this.data.unshift(data)
      },
      fetch (mode = this.mode, offset = this.data.length, limit = 10) {
        this.isFetching = true
        this.request = this.$service
          .getTeasings({
            offset,
            limit,
            sort: mode
          })
          .complete(() => {
            this.isFetching = false
            this.request = null
          })

        return this.request
      },
      load () {
        if (this.isFetching) return

        return this.fetch().ok(({ data, total }) => {
          this.data.push(...data)
          this.$refs.scroller.finishInfinite(this.data.length === total)
        })
      },
      refresh () {
        if (this.isFetching) return

        return this.fetch(this.mode, 0, 10).ok(({ data }) => {
          this.data = data
          this.$refs.scroller.finishPullToRefresh()
        })
      },
      handleTabChange (mode) {
        this.mode = mode
      }
    }
  }
</script>

<style lang="less" scoped>
.ts-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
}

.ts-list {
  flex: 1;
  width: 100%;
}

.ts-item {
  padding: 0.2rem;
}
</style>
