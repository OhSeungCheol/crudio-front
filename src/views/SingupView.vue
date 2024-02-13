<template>
    <v-main>
        <v-container fluid style="display: flex;">
            <div style=" flex:4;">
                <!-- 여백 -->
            </div>
            <div style="flex:4;">
                <singup-form></singup-form>
            </div>
            <div style=" flex:4;">
                <!-- 여백 -->
            </div>
        </v-container>
    </v-main>
</template>

<script>
import singupForm from '../components/login/Singup.vue';

export default {
    components: {
        singupForm
    },
}
</script>

<style scoped>

</style>