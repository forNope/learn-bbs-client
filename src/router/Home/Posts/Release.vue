<template>
  <div class="release-wrapper" @click="$refs.modal.show()">
    <icon class="icon" type="release" />
    <release-modal
      ref="modal"
      :onReleaseClick="release"
    />
  </div>
</template>

<script>
  import { Icon, Modal, XTextarea, ReleaseModal } from 'components'
  import { message } from 'utils'

  export default {
    components: {Icon, Modal, XTextarea, ReleaseModal},
    props: {
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
      }
    },
    methods: {
      release (content, anonymous) {
        if (!content) {
          message.error('内容不能为空')
          return
        }
        if (!this.onBeforeRelease(content, anonymous)) return true

        this
          .$service
          .releasePost({
            category: this.$route.params.category,
            content,
            anonymous
          })
          .allOk(this.onReleaseSucceed)
          .clientError(this.onReleaseFailed)

        return true
      }
    }
  }
</script>

<style lang="less" scoped>
  .release-wrapper {
    width: 1.6rem;
    height: 1.6rem;
    overflow: hidden;
    background-color: @pink;
    border-radius: 50%;
  }
  
  .icon {
    .all-center;
    transform: translate(-55%, -50%) rotate(-8deg);
    width: 1.2rem;
    height: 1.2rem;
  }
</style>
