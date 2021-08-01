<template>
    <v-card
        elevation="3"
        outlined
        shaped
    >
        <v-card-title>
            {{item.name}}
        </v-card-title>
        <v-card-actions>
            {{item.message}}
        </v-card-actions>

        <comment-creator></comment-creator>
        <comment-card
            v-bind:item="item"
        ></comment-card>
        <comment-card
            v-bind:item="item"
        ></comment-card>
    </v-card>
</template>

<script>
    import CommentCreator from '../comment/CommentCreator.vue' 
    import CommentCard from '../comment/CommentCard.vue' 
    export default {
        components: { 
            CommentCreator
            , CommentCard
        },
        props: ['item'],
    }
</script>

<style scoped>
</style>