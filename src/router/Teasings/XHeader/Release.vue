<template>
  <div class="ts-release-wrapper">
    <router-link class="ts-release-btn" to="/add-question">
      我要吐槽
    </router-link>
    <release-modal
      ref="modal" 
      :onReleaseClick="release"
      title="吐心中不快"
      placeholder="您有什么想吐槽呢"
    />
  </div>
</template>

<script>
  import { ReleaseModal } from 'components'
  import { message } from 'utils'

  export default {
    name: 'release',
    components: { ReleaseModal },
    props: {
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
          message.error('内容不可为空')
          return
        }
        this.$service
          .releaseTeasing({
            content,
            anonymous
          })
          .allOk(res => {
            this.onReleaseSucceed(res)
          })
          .catch(err => {
            this.onReleaseFailed(err)
          })
          .complete(() => {
            this.$refs.modal.hide()
          })
      }
    }
  }
</script>

<style lang="less" scoped>
.ts-release-wrapper {
  .vertical-center;
  display: inline-block;
}

.ts-release-btn {
  display: block;
  width: 3rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  font-weight: bold;
  font-size: 0.6rem;
  border-radius: 0.4rem;
  background: #fff;
  color: black;
}
</style>
