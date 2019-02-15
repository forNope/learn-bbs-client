<template>
  <wrapper>
    <avatar :url="author.avatar" />
    <x-h1>
      <span>{{ author.nickname }}</span>
      <more class="panel-reply-right" @click.native="$refs.bottomDialog.show()" />
    </x-h1>
    <x-h6 v-if="replyToAuthor">{{ '回复 @' + replyToAuthor.nickname }}</x-h6>
    <x-h3>{{ content }}</x-h3>
    <tools>
      <agree :num="agreeNum" :defaultActive="isAgree" />
      <x-h6 class="panel-reply-time" color="pink">{{ date }}</x-h6>
      <disagree :num="disagreeNum" :defaultActive="isDisagree" class="panel-reply-right" />
    </tools>
    <bottom-dialog ref="bottomDialog">
      <template slot="title">更多操作</template>
      <template slot="options">
        <div data-role="cancel" @click="$refs.releaseModal.show()">回复</div>
        <div @click="$refs.reportDialog.show()">举报该回复</div>
        <div data-role="cancel">取消</div>
      </template>
    </bottom-dialog>
    <report-dialog ref="reportDialog" />
    <release-modal
      ref="releaseModal"
      :onReleaseClick="revert"
      :title="'回复:' + author.nickname"
      placeholder="请输入要回复的内容"
    />
  </wrapper>
</template>

<script>
  import { ReleaseModal, BottomDialog } from 'components'
  import { message, formatTimestamp } from 'utils'
  import {
    Wrapper,
    Avatar,
    XH1,
    XH3,
    XH6,
    Tools,
    Agree,
    Disagree,
    More,
    ReportDialog
  } from './components'

  export default {
    provide () {
      return {
        id: this.id,
        type: 'reply'
      }
    },
    components: {
      ReleaseModal,
      ReportDialog,
      BottomDialog,
      Wrapper,
      Avatar,
      XH1,
      XH3,
      XH6,
      Tools,
      Agree,
      Disagree,
      Comment,
      More
    },
    props: {
      id: {
        type: [Number, String],
        required: true
      },
      commentId: {
        type: [Number, String],
        required: true
      },
      author: {
        type: Object,
        default: () => ({nickname: '获取中...', avatar: ''})
      },
      replyToAuthor: {
        type: Object,
        default: void 0
      },
      createDate: {
        type: Number,
        default: 0
      },
      content: {
        type: String,
        default: ''
      },
      agreeNum: {
        type: Number,
        default: 0
      },
      disagreeNum: {
        type: Number,
        default: 0
      },
      isAgree: {
        type: Boolean,
        default: false
      },
      isDisagree: {
        type: Boolean,
        default: false
      },
      onBeforeReply: {
        type: Function,
        default: () => true
      },
      onReplySucceed: {
        type: Function,
        default: () => void 0
      },
      onReplyFailed: {
        type: Function,
        default: () => void 0
      }
    },
    computed: {
      date () {
        return formatTimestamp(this.createDate)
      }
    },
    methods: {
      revert (content, anonymous) {
        if (!content) {
          message.error('内容不可为空')
          return
        }
        if (this.onBeforeReply() === false) return true
        this
          .$service
          .releaseReply({
            commentId: this.commentId,
            receiverReplyId: this.id,
            content,
            anonymous
          })
          .ok(res => {
            this.onReplySucceed(res)
            message.success('回复成功')
          })
          .clientError(err => {
            this.onReplyFailed(err)
            message.error('回复失败')
          })

        return true
      }
    }
  }
</script>

<style lang="less" scoped>
  .panel-reply-right {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 0;
  }
  
  .panel-reply-time {
    margin-left: 0.4rem;
    opacity: 0.7;
  }
</style>
