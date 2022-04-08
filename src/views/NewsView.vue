<template>
    <v-main>
        <v-container fluid>
            <news-list></news-list>
        </v-container>
    </v-main>
</template>

<script>
import NewsList from '../components/news/List.vue';
export default {
    components: {
        NewsList
    },
    data: () => {
        return {

        }
    },
    created() {
    }
}
</script>

<style scoped>

</style>