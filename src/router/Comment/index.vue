<template>
  <div class="wrapper">
    <div class="main">
      <comment-panel
        v-if="comment"
        v-bind="comment"
        :canLinkToDetail="false"
        :release="{
          onReleaseSucceed: handleReleaseSucceed,
          onReleaseFailed: handleReleaseFailed
        }"
      />
    </div>
    <div class="replies">
      <list :onLoading="loadData">
        <template slot="tip">全部回复 {{ total }}</template>
        <template>
          <div>
            <reply
              v-for="item in replies"
              v-bind="item"
              :commentId="$route.params.id"
              :key="item.id"
              :onReplySucceed="handleReleaseSucceed"
            />
          </div>
        </template>
      </list>
    </div>
  </div>
</template>

<script>
  import { Comment as CommentPanel, Reply, List } from 'components'
  import { message } from 'utils'

  export default {
    name: 'comment',
    components: {CommentPanel, Reply, List},
    data: () => ({
      comment: void 0,
      replies: [],
      total: 0
    }),
    mounted () {
      this
        .$service
        .getComment({id: this.$route.params.id})
        .ok(data => {
          this.comment = data
        })
    },
    methods: {
      loadData ({loaded, loadedAll}) {
        this
          .$service
          .getReplies({
            commentId: this.$route.params.id,
            offset: this.replies.length,
            limit: 10,
            sort: 'date'
          })
          .ok(({data, total}) => {
            this.replies.push(...data)
            this.total = total
            if (this.replies.length === total) {
              loadedAll()
            } else {
              loaded()
            }
          })
      },
      handleReleaseSucceed (data) {
        this.replies.unshift(data)
        this.comment.commentNum++
      },
      handleReleaseFailed () {
        message.error('回复失败')
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrapper {
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
  
  .main {
    padding: 0 0.5rem;
  }
  
  .replies {
    flex: 1 1 auto;
    background-color: #101010;
  }
</style>
