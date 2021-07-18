<template>
    <div>
        <v-navigation-drawer app clipped>
            <sidebar></sidebar>
        </v-navigation-drawer>
        
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
        
        <v-footer app>
        </v-footer>
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue';
    export default {
        components: {
            Sidebar,
        }
    }
</script>

<style scoped>
</style>
