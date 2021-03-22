<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>

      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedPost.updatedData }}</div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>

      <p class="post-content">{{ loadedPost.content }}</p>
    </section>

    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send me mail to
        <a href="mailto:niloy940@gmail.com">niloy940@gmail.com</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(()=> {
      callback(null, {

        loadedPost: {
          id: '1', 
          title: 'Post Title (ID: ' + context.route.params.id + ')', 
          previewText: 'This is our first post!',
          author: 'Niloy',
          updatedData: new Date(),
          content: 'Cupidatat non quis cupidatat dolor eiusmod fugiat incididunt fugiat ex aliqua incididunt pariatur. Nisi mollit cillum ullamco nulla cillum non velit elit adipisicing id dolore dolore. Occaecat aliqua tempor est velit elit dolor laborum in eiusmod adipisicing. Adipisicing irure culpa qui reprehenderit aute ad laboris.',
          thumbnail: 'https://s7280.pcdn.co/wp-content/uploads/2020/06/Ai-Abstract-Cityscape-700x400-1.jpg.optimal.jpg'
        }

      })
    }, 1500)
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
