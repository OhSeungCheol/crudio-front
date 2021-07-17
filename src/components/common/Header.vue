<template>
    <v-app-bar app clipped-left color="teal accent-3">
    <v-btn
      elevation="2"
      fab
      small
      to="/"
    >
      <v-icon>mdi-cursor-default</v-icon>
    </v-btn>

    <v-toolbar-title style="padding: 10px">
      <h4>
        Crudio
      </h4>
    </v-toolbar-title>
    
    <v-spacer></v-spacer>
    <v-tabs align-with-title>
      <v-tab to="dashboard" tag="div">Dashboard</v-tab>
      <v-tab to="posts" tag="div">Post</v-tab>
    </v-tabs>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  import mainRouter from '../../router/MainRouter';
    export default {
      components: mainRouter,
    }
</script>

<style scoped>
  .logo{
    text-decoration: none;
  }
</style>