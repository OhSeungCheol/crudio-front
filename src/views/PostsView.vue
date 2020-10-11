<template>
    <div>
        <div v-for="item in items" :key="item.id">
            <post v-bind:item="item"/>
        </div>
    </div>    
</template>

<script>
import Post from '../components/post/Post.vue';
import dummyPosts from '../dummyData/PostsData';

export default {
    components: {
        Post
    },
    data: () => {
        return {
            items: dummyPosts
        }
    }
}
</script>

<style scoped>
</style>