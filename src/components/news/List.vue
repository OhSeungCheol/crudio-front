<template>
  <v-container class="grey lighten-5">
    <v-row>
      <news-card/>
      <news-card/>
      <news-card/>
      <news-card/>
      <news-card/>
    </v-row>

  </v-container>
</template>
<script>
    import NewsCard from './Card.vue';
    export default {
      components: {
        NewsCard
      }

    }
</script>
<style scoped>
</style>