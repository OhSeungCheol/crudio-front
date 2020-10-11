<template>
  <div id="app">
    <main-header/>
      <!-- <main-sidebar id="test"/> -->
      <!-- <test-component id="test"/>   -->
      <!-- <main-sidebar/> -->
      <!-- <test-component/>   -->
    <main-content/>  
  </div>
</template>


<script>
import mainHeader from './components/common/Header.vue'
// import mainSidebar from './components/common/Sidebar.vue'
import mainContent from './components/common/Content.vue'
// import testComponent from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    mainHeader ,
    // mainSidebar ,
    mainContent ,
    // testComponent
  },
}
</script>

<style>
/* #test {
  display: inline-block;
} */
/* html, body {
  margin: 0px !important;
  padding: 0px !important;
} */
</style>
