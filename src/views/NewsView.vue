<template>
    <v-main>
        <v-container class="grey lighten-5">
            <v-row >
                <v-col v-for="(news, index) in newsList" v-bind:key="index">
                    <news-card v-bind:news="news"></news-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import NewsCard from '../components/news/Card.vue';
import dummyNewsList from '../dummyData/NewsData';

export default {
    components: {
        NewsCard
    },
    data: () => {
        return {
            newsList: {}
        }
    },
    created() {
        const response = dummyNewsList();
        this.newsList = response.articles;
        console.log(this.newsList);
    }
}
</script>

<style scoped>

</style>