<template>
  <div class="admin-new-post-page">
      <section class="new-post-form">
          <AdminPostForm @submit="onSubmitted"/>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'

export default {
  name: 'new-post',

  layout: 'admin',
  
  components: { AdminPostForm },

  methods: {
    onSubmitted(postData) {
      axios.post('https://nuxt-bloggers-default-rtdb.firebaseio.com/posts.json', postData)
        .then(response => console.log(response))
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>