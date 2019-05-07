<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    TodoList: () => import(/* webpackChunkName: "TodoList.vue"  */'./components/TodoList.vue')
  }
}
</script>

<style lang="sass">

</style>
