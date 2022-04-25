<template>
    <div id='commentCreator'>
        <v-form>
			<v-text-field
				v-model="message"
				label="Comment"
				required
			></v-text-field>
		</v-form>
        <v-btn @click="addComment">Save</v-btn>
    </div>
</template>

<script>
    export default {
        data: () => ({
            name: 'Guest',
            message: '',
        }),
        methods: {
            addComment() {
                if(this.message.trim() == ''){
                    alert('Input your message');
                    return;
                } 
                this.$emit("addComment", {name: this.name, message: this.message});
                this.message = '';
            },
        }
    }
</script>

<style scoped>
	#commentCreator {
		padding: 20px
	}
</style>