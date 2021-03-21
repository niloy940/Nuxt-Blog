<template>
    <section class="post-list">
      <PostPreview 
        id="1"
        :is-admin="isAdmin"
        :thumbnail="thumbnail"
        title="First Post"
        previewText="This is my first post!"
      />

      <PostPreview 
        id="2"
        :is-admin="isAdmin"
        :thumbnail="thumbnail"
        title="Second Post"
        previewText="This is my second post!"
      />

      <PostPreview 
        id="3"
        :is-admin="isAdmin"
        :thumbnail="thumbnail"
        title="Third Post"
        previewText="This is my Third post!"
      />

    </section>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview.vue'
export default {
  components: { PostPreview },

  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      thumbnail: 'https://s7280.pcdn.co/wp-content/uploads/2020/06/Ai-Abstract-Cityscape-700x400-1.jpg.optimal.jpg'
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>