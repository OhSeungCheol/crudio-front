<template>
  <div id="app">
      <main-header/>
      <!-- <main-sidebar/> -->
  </div>
</template>


<script>
import mainHeader from './components/common/Header.vue'
// import mainSidebar from './components/common/Sidebar.vue'

export default {
  name: 'App',
  components: {
    mainHeader ,
    // mainSidebar
  },
}
</script>

<style>
#app {
}
html, body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
