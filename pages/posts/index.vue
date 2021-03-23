<template>
  <div class="posts-page">
    <PostList :posts="getLoadedPosts"/>
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList.vue'
export default {
  components: { PostList },

  computed: {
    getLoadedPosts()  {
      return this.$store.getters.loadedPosts
    }
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
