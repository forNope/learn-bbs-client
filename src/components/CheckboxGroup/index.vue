<template>
  <div>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'checkbox-group',
    methods: {
      getCheckedList () {
        return this
          .$children
          .filter(checkbox => checkbox.checked)
          .map(checkbox => ({
            value: checkbox.value
          }))
      },
      getNonCheckedList () {
        return this
          .$children
          .filter(checkbox => !checkbox.checked)
          .map(checkbox => ({
            value: checkbox.value
          }))
      },
      getList () {
        return this.$children.map(checkbox => ({
          checked: checkbox.checked,
          value: checkbox.value
        }))
      }
    }
  }
</script>
