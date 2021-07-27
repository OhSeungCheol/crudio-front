<template>
    <v-card
        elevation="3"
        outlined
        shaped
    >
        <v-card-title>
            {{item.message}}
        </v-card-title>
        <!-- <v-card-subtitle> -->
        <!-- </v-card-subtitle> -->
        <v-card-text>
            {{item.name}}
        </v-card-text>
        <!-- <v-card-actions> -->
        <!-- </v-card-actions> -->
    </v-card>
</template>

<script>
    export default {
        props: ['item']
    }
</script>

<style scoped>
</style>