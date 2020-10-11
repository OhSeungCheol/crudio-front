<template>
  <div id="app">
    <main-header/>
    <router-view></router-view>
  </div>
</template>


<script>
import mainHeader from './components/common/Header.vue'

export default {
  name: 'App',
  components: {
    mainHeader ,
  },
}
</script>

<style>
</style>
