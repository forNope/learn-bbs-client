<template>
  <wrapper>
    <x-router-link v-if="canLinkToDetail" :to="'/posts/' + id" />
    <avatar :url="author.avatar" />
    <x-h1>
      {{ author.nickname }}
    </x-h1>
    <x-h6>{{ date }}</x-h6>
    <x-h3>{{ content }}</x-h3>
    <tools>
      <agree :num="agreeNum" :defaultActive="isAgree" />
      <comment :num="commentNum" />
      <share class="panel-post-right" />
    </tools>
    <release
      v-if="release"
      v-bind="release"
      title="您的评论"
      placeholder="请发表您的评论"
      text="发表您的评论... 限30字"
    />
  </wrapper>
</template>

<script>
  import {
    Wrapper,
    Avatar,
    XH1,
    XH3,
    XH6,
    Icon,
    Agree,
    Share,
    Tools,
    Comment,
    Release,
    XRouterLink
  } from './components'
  import { formatTimestamp } from 'utils'

  export default {
    name: 'post',
    provide () {
      return {
        id: this.id,
        type: 'post'
      }
    },
    components: {
      Wrapper,
      Avatar,
      XH1,
      XH3,
      XH6,
      Icon,
      Agree,
      Share,
      Tools,
      Comment,
      Release,
      XRouterLink
    },
    props: {
      id: {
        type: [Number, String],
        required: true
      },
      author: {
        type: Object,
        default: () => ({nickname: '获取中...', avatar: ''})
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
      commentNum: {
        type: Number,
        default: 0
      },
      isAgree: {
        type: Boolean,
        default: false
      },
      canLinkToDetail: {
        type: Boolean,
        default: true
      },
      release: {
        type: Object,
        default: void 0
      }
    },
    computed: {
      date () {
        return formatTimestamp(this.createDate)
      }
    }
  }
</script>

<style lang="less" scoped>
  .panel-post-right {
    position: absolute;
    right: 0;
  }
</style>
