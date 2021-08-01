<template>
    <div id="commentCardDiv">
            {{item.name}}
            <v-card-actions>
                {{item.message}}
            </v-card-actions>
    </div>
</template>

<script>
    export default {
        props: ['item'],
    }
</script>

<style scoped>
    #commentCardDiv {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
    }
</style>