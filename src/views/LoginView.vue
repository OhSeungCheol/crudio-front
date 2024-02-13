<template>
    <v-main>
        <v-container fluid style="display: flex;">
            <div style=" flex:4;">
                <!-- 여백 -->
            </div>
            <div style="flex:4;">
                <login-form></login-form>
            </div>
            <div style=" flex:4;">
                <!-- 여백 -->
            </div>
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