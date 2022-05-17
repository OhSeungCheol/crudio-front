<template>
    <v-main>
        <v-container fluid>
            <login-form></login-form>
        </v-container>
    </v-main>
</template>

<script>
import loginForm from '../components/login/Login.vue';

export default {
    components: {
        loginForm
    },
}
</script>

<style scoped>

</style>