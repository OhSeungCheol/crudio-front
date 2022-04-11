<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      v-bind:src="news.urlToImage"
      height="200px"
    ></v-img>

    <v-card-title>
      {{news.title}}
    </v-card-title>

    <v-card-subtitle>
      {{news.publishedAt}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        v-on:click="openLink(news.url)"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{news.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
    export default {
        data: () => ({
            show: false,
        }),
        props: {
          news: Object
        },
        methods: {
          openLink: (url) => {
            window.open(url, '_blank').focus();
          }
        }
    }
</script>
<style scoped>
</style>