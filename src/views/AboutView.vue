<template>
    <v-main>
        <v-container fluid>
            About view
            <counter></counter>
        </v-container>
    </v-main>
</template>

<script>
import counter from '../components/tempCounter.vue';

export default {
    components: {
        counter
    },
}
</script>

<style scoped>

</style>