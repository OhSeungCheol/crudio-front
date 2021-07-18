<template>
    <v-main>
        <div style="display: flex; background-color:#f4f4f4">

            <div style=" flex:2;">
                <!-- 여백 -->
            </div>

            <div class="child" style="flex:4;">
                <posts-creator
                    @emitMessage="addPostCard"
                ></posts-creator>
                <div v-for="item in items.slice().reverse()" :key="item.id" style="margin-bottom: 30px; margin-top: 30px">
                    <posts-card
                        v-bind:item="item"
                    ></posts-card>
                </div>
            </div>

            <div style="flex:2;">
                <!-- 여백 -->
            </div>

        </div>
    </v-main>
</template>

<script>
import PostsCard from '../components/posts/PostsCard.vue';
import PostsCreator from '../components/posts/PostsCreator.vue';
import dummyPosts from '../dummyData/PostsData';

export default {
    components: {
        PostsCreator,
        PostsCard
    },
    data: () => {
        return {
            items: dummyPosts,
            message: ''
        }
    },
    methods: {
        addPostCard(card){
            // create PostCard By API
            // if success, reload items
            this.items.push(card);
        },
    },
}
</script>

<style scoped>
    #post-view-top-div {
        /* padding-top: 30px; */
        /* padding-bottom: 30px; */
        /* padding-left: 300px; */
        /* padding-right: 300px; */
    }
</style>