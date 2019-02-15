<template>
  <bottom-dialog ref="bottomDialog">
    <template slot="title">标题</template>
    <template slot="options">
      <div>选项1</div>
      <div>选项2</div>
      <div data-role="cancel">取消</div>
    </template>
  </bottom-dialog>
</template>

<script>
  import { BottomDialog } from 'components'
  export default {
    name: 'more',
    components: { BottomDialog },
    methods: {
      show () {
        this.$refs.bottomDialog.show()
      },
      hide () {
        this.$refs.bottomDialog.hide()
      }
    }
  }
</script>
