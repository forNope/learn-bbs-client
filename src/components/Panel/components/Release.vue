<template>
  <div>
    <span class="pcr-text" @click="$refs.modal.show()">{{ text }}</span>
    <release-modal
      ref="modal"
      :title="title"
      :onReleaseClick="release"
      :placeholder="placeholder"
      maxlength="30"
    />
  </div>
</template>

<script>
  import { ReleaseModal } from 'components'
  import { message } from 'utils'

  export default {
    inject: ['id', 'type'],
    name: 'release',
    components: {ReleaseModal},
    props: {
      title: {
        type: String,
        default: '发布您的烦恼'
      },
      text: {
        type: String,
        default: '发表您的评论'
      },
      receiverReplyId: {
        type: [String, Number],
        default: void 0
      },
      onBeforeRelease: {
        type: Function,
        default: () => true
      },
      onReleaseSucceed: {
        type: Function,
        default: () => void 0
      },
      onReleaseFailed: {
        type: Function,
        default: () => void 0
      },
      placeholder: {
        type: String,
        default: '请输入'
      }
    },
    methods: {
      release (content, anonymous) {
        if (!content) {
          message.error('内容不可为空')
          return
        }
        if (!this.onBeforeRelease(content, anonymous)) return true

        if (this.type === 'post') {
          this
            .$service
            .releaseComment({
              postId: this.id,
              content,
              anonymous
            })
            .allOk(this.onReleaseSucceed)
            .clientError(this.onReleaseFailed)
        } else if (this.type === 'comment') {
          this
            .$service
            .releaseReply({
              commentId: this.id,
              receiverReplyId: this.receiverReplyId,
              content,
              anonymous
            })
            .allOk(this.onReleaseSucceed)
            .clientError(this.onReleaseFailed)
        }

        return true
      }
    }
  }
</script>

<style lang="less" scoped>
  .pcr-text {
    transform: scale(0.9);
    font-size: 0.5rem;
    font-weight: 700;
    color: #b3a8aa;
  }
</style>
