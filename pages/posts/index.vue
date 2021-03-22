<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList.vue'
export default {
  components: { PostList },

  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          { id: '1', title: 'First Post', previewText: 'This is our first post!',
            thumbnail: 'https://s7280.pcdn.co/wp-content/uploads/2020/06/Ai-Abstract-Cityscape-700x400-1.jpg.optimal.jpg'
          },

          { id: '2', title: 'Second Post', previewText: 'This is our second post!',
            thumbnail: 'https://s7280.pcdn.co/wp-content/uploads/2020/06/Ai-Abstract-Cityscape-700x400-1.jpg.optimal.jpg'
          },

          { id: '3', title: 'Third Post', previewText: 'This is our third post!',
            thumbnail: 'https://s7280.pcdn.co/wp-content/uploads/2020/06/Ai-Abstract-Cityscape-700x400-1.jpg.optimal.jpg'
          },
        ]
      });
    }, 1500);
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
