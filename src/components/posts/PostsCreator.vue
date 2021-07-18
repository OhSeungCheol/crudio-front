<template>
    <div>
        <span>Post Card</span>
        <br>
        <br>
        <v-textarea
          outlined
          name='input-7-4'
          label='Outlined textarea'
          background-color='white'
          v-model='message'
        ></v-textarea>
        <p>
            name : <input type='text' v-model='name' style='background-color:white'>
        </p>
        <v-btn @click="emitMessage">Save</v-btn>
    </div>
</template>

<script>
    export default {
        data: () => ({
            name: 'guest',
            message: 'default message',
        }),
        methods: {
            emitMessage() {
                this.$emit("emitMessage", this.getCardInfo());
            },
            getCardInfo() {
                const card = {};
                card.name = this.name;
                card.message = this.message;
                return card;
            }
        }
    }
</script>

<style scoped>
</style>