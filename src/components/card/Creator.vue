<template>
    <div>
        <v-textarea
            outlined
            name='input-7-4'
            label='Post Creator'
            background-color='white'
            v-model='message'
            placeholder="Input your meesages"
            style="padding-top: 30px"
        ></v-textarea>
        <v-btn @click="addPostCard">Save</v-btn>
    </div>
</template>

<script>
    export default {
        data: () => ({
            writer: 'Guest',
            message: '',
        }),
        methods: {
            addPostCard() {
                if(this.message.trim() == ''){
                    alert('Input your message');
                    return;
                } 
                this.$emit("addPostCard", {writer: this.writer, message: this.message, comments: []});
                this.message = '';
            },
        }
    }
</script>

<style scoped>
</style>