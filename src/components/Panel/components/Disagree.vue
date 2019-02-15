<template>
  <icon
    :class="['pcd-con', active ? 'pcd-active' : '']"
    :type="active ? 'disagree-fill' : 'disagree'"
    @click.native="disagree"
  />
</template>

<script>
  import Icon from './Icon'
  import upperFirst from 'lodash/upperFirst'

  export default {
    name: 'disagree',
    components: {Icon},
    inject: ['id', 'type'],
    props: {
      defaultActive: {
        type: Boolean,
        default: false
      },
      num: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        active: this.defaultActive,
        disagreeNum: this.num,
        req: void 0
      }
    },
    methods: {
      disagree () {
        if (this.req) this.req.cancel()

        if (this.active) {
          this.req = this
            .$service['cancelDisagree' + upperFirst(this.type)]({id: this.id})
            .allOk(() => {
              this.active = false
              this.disagreeNum -= 1
            })
        } else {
          this.req = this
            .$service['disagree' + upperFirst(this.type)]({id: this.id})
            .allOk(() => {
              this.active = true
              this.disagreeNum += 1
            })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .pcd-con {
    opacity: 0.6;
    
    &.pcd-active {
      opacity: 1;
    }
  }
</style>
