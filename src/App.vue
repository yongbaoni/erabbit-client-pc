<template>
  <div class="container">
    <p>{{ $store.state.moduleA.username }}</p>
    <p>{{ $store.getters['moduleA/newName'] }}</p>
    <p>{{ $store.state.moduleB.username }}</p>
    <p>{{ $store.getters['moduleB/newNames'] }}</p>
    <button @click="mutationsFn">mutationsFn</button>
    <button @click="actionsFn">actionsFn</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    function mutationsFn() {
      store.commit('moduleB/updateName')
    }
    function actionsFn() {
      store.dispatch('moduleB/initList')
    }
    return { mutationsFn, actionsFn }
  }
}
</script>

<style></style>
