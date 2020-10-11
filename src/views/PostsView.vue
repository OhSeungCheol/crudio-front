<template>
    <div>
        <div v-for="item in items" :key="item">
            <post v-bind:item="item"/>
        </div>
    </div>    
</template>

<script>
import Post from '../components/post/Post.vue';

export default {
    components: {
        Post
    },
    data: () => {
        return {
            items: [
                {id: 1, name: '1'},
                {id: 2, name: '2'},
                {id: 3, name: '3'},
                {id: 4, name: '4'},
                {id: 5, name: '5'},
                {id: 6, name: '6'},
                {id: 7, name: '7'},
                {id: 8, name: '8'},
            ]
        }
        
    }
}
</script>

<style scoped>
</style>