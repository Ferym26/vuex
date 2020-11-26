<template>
	<form @submit.prevent='sendPost'>
		<input type="text" placeholder="title" v-model='title'>
		<input type="text" placeholder="body" v-model='body'>
		<button class="btn" type='submit'>Send</button>
	</form>
</template>

<style lang="sass">
input
	display: block
	width: 100%
	margin-bottom: 10px
	padding: 5px
.btn
	width: 100px
	text-align: center
</style>

<script>
import {mapMutations} from 'vuex'
export default {
	data: () => ({
		title: '',
		body: '',
	}),
	methods: {
		// ...mapMutations(['createPost']),
		
		sendPost() {
			this.$store.commit('createPost', {
				title: this.title,
				body: this.body,
				id: Date.now(),
			})
			this.title = '';
			this.body = '';
		}
	}
}
</script>