<template>
    <div id="commentCardDiv">
            <b>{{comment.name}}</b>
            <v-card-actions>
                {{comment.message}}
            </v-card-actions>
    </div>
</template>

<script>
    export default {
        props: ['comment'],
    }
</script>

<style scoped>
    #commentCardDiv {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
    }
</style>