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
                return axios.get('https://nuxt-bloggers-default-rtdb.firebaseio.com/posts.json')
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
            }
        },

        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        }

    })
}

export default createStore