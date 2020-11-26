export default {
	// данные и состояние
	state: {
		posts: [],
	},
	// меняют state
	mutations: {
		updateposts(state, posts) {
			state.posts = posts
		},
		createPost(state, newPost) {
			state.posts.push(newPost)
		}
	},
	// взаимодействуют с backend api
	actions: {
		fetchPosts({commit}, limit = 3) {
			fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
				.then(response => response.json())
				.then(json => {
					commit('updateposts', json)
				})
		}
	},
	// возвращают данные
	getters: {
		allPosts(state) {
			return state.posts
		},
		postsCount(state, getters) {
			return getters.validPosts.length
		},
		validPosts(state) {
			return state.posts.filter(p => {
				return p.title && p.body
			})
		}
	},
}