<template>
  <modal ref="modal" class="pcrm-modal">
    <template slot="title">{{ title }}</template>
    <template slot="content">
      <x-textarea
        ref="textarea"
        :maxlength="maxlength"
        :placeholder="placeholder"
        class="rm-input"
      />
    </template>
    <template slot="options">
      <button
        @click="onReleaseClick($refs.textarea.getContent(), true) === true && hide()"
      >
        <slot name="left-btn">匿名发布</slot>
      </button>
      <button
        class="rm-release"
        @click="onReleaseClick($refs.textarea.getContent(), false) === true && hide()"
      >
        <slot name="right-btn">发布</slot>
      </button>
    </template>
  </modal>
</template>

<script>
  import { Modal, XTextarea } from 'components'

  export default {
    name: 'release-modal',
    components: {Modal, XTextarea},
    props: {
      title: {
        type: String,
        default: '发布您的烦恼'
      },
      placeholder: {
        type: String,
        default: '你的烦恼是什么'
      },
      maxlength: {
        type: String,
        default: '50'
      },
      onReleaseClick: {
        type: Function,
        default: () => void 0
      }
    },
    methods: {
      show () {
        this.$refs.modal.show()
      },
      hide () {
        this.$refs.modal.hide()
      }
    }
  }
</script>

<style lang="less" scoped>
  .pcrm-modal {
    /deep/ .rm-release {
      color: @pink;
    }
    /deep/ .rm-input {
      margin: 0 1rem;
    }
  }
</style>
