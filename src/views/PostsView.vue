<template>
    <v-main>
        <div id='post-view-top-div'>
            <input-post/>
            <div v-for="item in items" :key="item.id">
                <post v-bind:item="item"/>
            </div>
        </div>    
    </v-main>
</template>

<script>
import Post from '../components/post/Post.vue';
import dummyPosts from '../dummyData/PostsData';
import inputPost from '../components/post/InputPost.vue';

export default {
    components: {
        Post,
        inputPost
    },
    data: () => {
        return {
            items: dummyPosts
        }
    }
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