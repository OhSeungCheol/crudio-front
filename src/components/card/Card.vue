<template>
    <v-card
        elevation="3"
        outlined
        shaped
    >
        <v-card-title>
            {{item.writer}}
        </v-card-title>
        <v-card-actions>
            {{item.message}}
        </v-card-actions>
        <!-- <v-btn @click="addComment">update</v-btn> -->
        <v-btn @click="deleteCard(item.id)">delete</v-btn>
        <comment-creator
            @addComment="addComment"
        ></comment-creator>
        <div v-for="(comment, index) in item.comments" :key="index">
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
            addComment(comment){
                comment['postId'] = this.item.id;
                this.item.comments.push(comment)
            },
            deleteCard(id) {
                this.$emit("deleteCard", id);
            }
        },
        data: () => {
            return {

            }
        }
    }
</script>

<style scoped>
</style>