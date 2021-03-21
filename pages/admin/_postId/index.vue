<template>
  <div class="admin-post-page">
      <section class="update-form">
          <AdminPostForm :post="loadedPost" />
      </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'
export default {
  layout: 'admin',
  
  components: { AdminPostForm },

  data() {
      return {
          loadedPost: {
              author: 'Niloy',
              title: 'My Awesome Post',
              content: 'This is a dummy content!',
              thumbnailLink: 'https://s7280.pcdn.co/wp-content/uploads/2020/06/Ai-Abstract-Cityscape-700x400-1.jpg.optimal.jpg'
          }
      }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>