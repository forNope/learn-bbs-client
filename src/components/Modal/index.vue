<template>
  <base-modal
    ref="modal"
    v-bind="$props"
    :dialogTransition="{name: 'scale'}"
    class="md-dialog"
  >
    <template slot="dialog">
      <div class="md-title">
        <slot name="title" />
      </div>
      <div class="md-content">
        <slot name="content" />
      </div>
      <div class="md-options">
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
  import { BaseModal } from '../'

  export default {
    name: 'modal',
    components: {BaseModal},
    props: BaseModal.props,
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
  .md-dialog {
    /deep/ [data-role="dialog"] {
      position: fixed;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      width: 80%;
      padding: 0.5rem 0;
      background-color: white;
      border-radius: 6px;
    }
    
    /deep/ .md-title {
      font-size: 0.8rem;
      font-weight: 900;
      text-align: center;
      color: black;
    }
    
    /deep/ .md-content {
      margin: 20px 0;
      
      &, * {
        font-size: 0.6rem;
        font-weight: 700;
        color: #888;
      }
    }
    
    /deep/ .md-options {
      display: flex;
      justify-content: center;
      align-items: center;
      
      > * {
        font-size: 0.7rem;
        font-weight: 700;
        text-align: center;
        color: #626262;
        flex: 1;
      }
    }
  }
</style>
