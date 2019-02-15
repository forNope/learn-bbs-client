<template>
  <div class="home-list-wrapper">
    <div
      v-for="item in items"
      :key="item.id"
      class="home-list-post"
    >
      <post v-bind="item" />
    </div>
  </div>
</template>

<script>
  import { Post } from 'components'

  export default {
    name: 'list',
    components: {Post},
    props: {
      items: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="less" scoped>
  .home-list-wrapper {
    background-color: @black;
  }
  
  .home-list-post {
    margin: 0.5rem;
    background-color: #101010;
  }
</style>
