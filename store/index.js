import Vuex from 'vuex'

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
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            { id: '1', title: 'First Post', previewText: 'This is our first post!',
                            thumbnail: 'https://s7280.pcdn.co/wp-content/uploads/2020/06/Ai-Abstract-Cityscape-700x400-1.jpg.optimal.jpg'
                            },

                            { id: '2', title: 'Second Post', previewText: 'This is our second post!',
                            thumbnail: 'https://s7280.pcdn.co/wp-content/uploads/2020/06/Ai-Abstract-Cityscape-700x400-1.jpg.optimal.jpg'
                            },

                            { id: '3', title: 'Third Post', previewText: 'This is our third post!',
                            thumbnail: 'https://s7280.pcdn.co/wp-content/uploads/2020/06/Ai-Abstract-Cityscape-700x400-1.jpg.optimal.jpg'
                            },
                        ])

                        resolve()
                    }, 1500);
                    
                })
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