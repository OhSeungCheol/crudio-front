<template>
  
<v-app>
  <common-header></common-header>
  <router-view></router-view>
</v-app>
</template>

<script>

// import HelloWorld from './components/HelloWorld';
import CommonHeader from './components/common/Header.vue';

export default {
  name: 'App',

  components: {
    CommonHeader,
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
