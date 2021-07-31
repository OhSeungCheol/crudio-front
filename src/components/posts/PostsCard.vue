<template>
    <v-card
        elevation="3"
        outlined
        shaped
    >
        <v-card-title>
            {{item.message}}
        </v-card-title>
        <v-card-actions>
            {{item.name}}
        </v-card-actions>

        <comment-creator></comment-creator>
    </v-card>
</template>

<script>
    import CommentCreator from '../comment/CommentCreator.vue' 
    export default {
        components: { CommentCreator },
        props: ['item'],
    }
</script>

<style scoped>
</style>