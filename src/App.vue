<template>
  <div id="app">
	  <h1>{{postsCount}}</h1>
	  <div class="post" v-for="post in validPosts" :key="post.id">
		  <h2>{{ post.title }}</h2>
		  <p>{{ post.body }}</p>
	  </div>
	  <PostForm />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import PostForm from '@/components/PostForm'
export default {
  name: 'App',
  data: () => ({}),

  computed: {
	  ...mapGetters(['validPosts']),
	  postsCount() {
		  this.$store.getters.postsCount
	  }
  },
  methods: mapActions(['fetchPosts']),
  mounted() {
	//   this.fetchPosts(2);
	  this.$store.dispatch('fetchPosts', 2);
  },
  components: {
	  PostForm,
  }
}
</script>

<style lang="sass">
*
	margin: 0
	padding: 0
	box-sizing: border-box
#app
	max-width: 600px
	margin: 0 auto

.post
	border: 1px solid #ccc
	border-radius: 5px
	margin-bottom: 30px
	padding: 15px
</style>
