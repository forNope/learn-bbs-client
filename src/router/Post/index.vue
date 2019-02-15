<template>
  <div class="post-wrapper">
    <div class="post-main">
      <div class="post-status-bar">
        <b class="post-category">{{ category }}</b>
        <!--<b>520关注</b>-->
        <!--<b class="attention">+关注烦恼</b>-->
      </div>
      <post-panel
        v-if="post"
        v-bind="post"
        :canLinkToDetail="false"
        :release="{
          onReleaseSucceed: handleReleaseSucceed,
          onReleaseFailed: handleReleaseFailed
        }"
      />
    </div>
    <div class="post-comments">
      <list v-if="hotComments.length">
        <template slot="tip">热门评论</template>
        <template>
          <comment
            v-for="(item, index) of hotComments"
            v-bind="item"
            :key="index"
          />
        </template>
      </list>
      <list :onLoading="loadData">
        <template slot="tip">最新评论</template>
        <template>
          <comment
            v-for="item in latestComments"
            v-bind="item"
            :key="item.id"
          />
        </template>
      </list>
    </div>
  </div>
</template>

<script>
  import { mapCategory, message } from 'utils'
  import { Post as PostPanel, Comment, List } from 'components'

  export default {
    name: 'post',
    components: {PostPanel, Comment, List},
    data: () => ({
      post: void 0,
      category: '获取中',
      hotComments: [],
      latestComments: [],
      isFetching: false,
      allLoaded: false
    }),
    beforeCreate () {
      document.title = '烦恼详情'
    },
    mounted () {
      this
        .$service
        .getPost({id: this.$route.params.id})
        .ok(data => {
          this.post = data
          this.category = mapCategory(data.category)
        })

      this
        .$service
        .getComments({
          postId: this.$route.params.id,
          offset: 0,
          limit: 10,
          sort: 'hot'
        })
    },
    methods: {
      loadData ({loaded, loadedAll}) {
        this
          .$service
          .getComments({
            postId: this.$route.params.id,
            offset: this.latestComments.length,
            limit: 10,
            sort: 'date'
          })
          .ok(({data, total}) => {
            this.latestComments.push(...data)
            if (this.latestComments.length === total) loadedAll()
            else loaded()
          })
      },
      handleReleaseSucceed (data) {
        message.success('评论成功')
        this.post.commentNum++
        this.latestComments.unshift(data)
      },
      handleReleaseFailed () {
        message.error('评论失败')
      }
    }
  }
</script>

<style lang="less" scoped>
  .post-wrapper {
    display: flex;
    width: 100%;
    min-height: 100%;
    padding-top: 0.5rem;
    background-color: @black;
    flex-direction: column;
    
    > div {
      min-height: 0;
    }
  }
  
  .post-main {
    padding: 0 0.5rem;
  }
  
  .post-status-bar {
    margin-bottom: 1rem;
    font-size: 0.6rem;
    color: @pink;
  }
  
  .post-category {
    margin: 0 0.5rem;
    font-weight: 900;
  }
  
  .post-attention {
    position: absolute;
    right: 0;
  }
  
  .post-comments {
    flex: 1 1 auto;
    background-color: #101010;
  }
</style>
