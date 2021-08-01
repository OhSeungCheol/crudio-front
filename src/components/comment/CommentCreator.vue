<template>
    <div id='commentCreator'>
        <v-form
			ref="form"
			v-model="valid"
			lazy-validation
		>
			<v-text-field
				v-model="name"
				:counter="10"
				:rules="nameRules"
				label="Comment"
				required
			></v-text-field>

		</v-form>
        <v-btn>Save</v-btn>
    </div>
</template>

<script>
    export default {
        // data: () => ({
        //     name: 'Guest',
        //     message: '',
        // }),
        // methods: {
        //     addPostCard() {
        //         if(this.message.trim() == ''){
        //             alert('Input your message');
        //             return;
        //         } 
        //         this.$emit("addPostCard", {name: this.name, message: this.message});
        //         this.message = '';
        //     },
        // }
    }
</script>

<style scoped>
	#commentCreator {
		padding: 20px
	}
</style>