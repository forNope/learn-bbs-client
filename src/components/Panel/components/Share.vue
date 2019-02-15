<template>
  <base-share>
    <icon type="share" />
  </base-share>
</template>

<script>
  import { XMask, Share as BaseShare } from 'components'
  import Icon from './Icon'

  export default {
    name: 'share',
    components: { XMask, BaseShare, Icon }
  }
</script>
