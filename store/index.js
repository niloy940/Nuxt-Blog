import Vuex from 'vuex'
import axios from 'axios';

const createStore = ()=> {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },

        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        },

        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get(process.env.baseUrl + '/posts.json')
                .then(res => {
                    const postsArray = []

                    for (const key in res.data) {
                        postsArray.push({ ...res.data[key], id: key })
                    }
                    
                    vuexContext.commit('setPosts', postsArray)
                })
                .catch(e => context.error(e))                
            },

            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },

            addPost(vuexContext, post) {
                const createdPost = {...post, updatedDate: new Date() }

                return axios
                        .post(process.env.baseUrl + '/posts.json', createdPost)
                        .then(response => {
                            vuexContext.commit('addPost', {...createdPost, id: response.data.name })

                            console.log(response)
                        })
                        .catch(e => console.log(e))
            },

            editPost(vuexContext, editedPost) {
                return axios.put('https://nuxt-bloggers-default-rtdb.firebaseio.com/posts/' + 
                editedPost.id + '.json', editedPost)

                    .then(res => {
                        vuexContext.commit('editPost', editedPost)
                    })
                    .catch(e => console.log(e))
            }
        },

        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },

            addPost(state, post) {
                state.loadedPosts.push(post)
            },

            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                )

                state.loadedPosts[postIndex] = editedPost
            }
        }

    })
}

export default createStore