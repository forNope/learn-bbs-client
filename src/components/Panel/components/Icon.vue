<template>
  <div :class="['pci-wrapper', mode]">
    <x-icon :type="type" class="pci-icon" />
    <div v-if="$slots.text" class="pci-text">
      <slot name="text" />
    </div>
    <slot />
  </div>
</template>

<script>
  import { Icon as XIcon } from 'components'

  export default {
    name: 'icon',
    components: {XIcon},
    props: {
      type: {
        type: String,
        required: true
      },
      mode: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less" scoped>
  .pci-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    
    &.light {
      opacity: 0.6;
    }
  }
  
  .pci-icon {
    width: 0.9rem;
    margin-right: 0.1rem;
  }
  
  .pci-text {
    display: inline-block;
    transform: scale(0.7);
    font-size: 1rem;
    color: pink;
  }
</style>
