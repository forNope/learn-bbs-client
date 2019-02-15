<template>
  <icon :type="active ? 'agree-fill' : 'agree'" @click.native="agree">
    <template slot="text">{{ agreeNum }}</template>
  </icon>
</template>

<script>
  import Icon from './Icon'
  import upperFirst from 'lodash/upperFirst'

  export default {
    name: 'agree',
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
        agreeNum: this.num,
        req: void 0
      }
    },
    methods: {
      agree () {
        if (this.req) this.req.cancel()

        if (this.active) {
          this.req = this
            .$service['cancelAgree' + upperFirst(this.type)]({id: this.id})
            .allOk(() => {
              this.active = false
              this.agreeNum -= 1
            })
        } else {
          this.req = this
            .$service['agree' + upperFirst(this.type)]({id: this.id})
            .allOk(() => {
              this.active = true
              this.agreeNum += 1
            })
        }
      }
    }
  }
</script>
