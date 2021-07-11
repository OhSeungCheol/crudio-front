<template>
  <div id="app">
    <main-header/>
    <side-header/>
    <router-view></router-view>
  </div>
</template>


<script>
import mainHeader from './components/common/Header.vue'
import sideHeader from './components/common/Sidebar.vue'

export default {
  name: 'App',
  components: {
    mainHeader ,
    sideHeader
  },
}
</script>

<style>
</style>
