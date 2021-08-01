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

        <comment-creator
            @addCommentCard="addCommentCard"
        ></comment-creator>
        <div v-for="comment in comments" :key="comment">
            <comment-card
                v-bind:comment="comment"
            ></comment-card>
        </div>

        
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
        methods: {
            addCommentCard(comment){
                this.comments.push(comment)
            }
        },
        data: () => {
            return {
                comments: [
                    {
                        name: 'tempName',
                        message: 'tempMessage',
                    }
                ]
            }
        }
    }
</script>

<style scoped>
</style>