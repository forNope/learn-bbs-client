<template>
  <base-modal
    ref="modal"
    v-bind="$props"
    :dialogTransition="{name: 'sliding'}"
    class="bt-dialog"
  >
    <template slot="dialog">
      <div v-if="$slots.title" class="bt-dialog-title">
        <slot name="title" />
      </div>
      <div v-if="$slots.options" class="bt-dialog-options">
        <slot name="options" />
      </div>
      <slot name="dialog" />
    </template>
    <template slot="mask">
      <slot name="mask" />
    </template>
  </base-modal>
</template>

<script>
  import BaseModal from 'components/BaseModal'

  export default {
    name: 'bottom-dialog',
    components: {BaseModal},
    props: BaseModal.props,
    methods: {
      show () { this.$refs.modal.show() },
      hide () { this.$refs.modal.hide() }
    }
  }
</script>

<style lang="less" scoped>
  .bt-dialog {
    /deep/ [data-role="dialog"] {
      position: fixed;
      bottom: 0;
      z-index: 10;
      width: 100%;
      padding: 5px 0;
      background-color: white;
    }
    
    /deep/ .bt-dialog-title,
    /deep/ .bt-dialog-options > * {
      height: 1.5rem;
      line-height: 1.5rem;
      text-align: center;
    }
    
    /deep/ .bt-dialog-title {
      font-size: 0.7em;
      font-weight: 900;
    }
    
    /deep/ .bt-dialog-options > * {
      font-size: 0.8em;
      font-weight: 700;
    }
  }
</style>
