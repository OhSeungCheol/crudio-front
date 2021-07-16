<template>
  
<v-app>
  <v-navigation-drawer app clipped>
  </v-navigation-drawer>
  <common-header></common-header>
  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>
  <v-footer app>
  </v-footer>
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
