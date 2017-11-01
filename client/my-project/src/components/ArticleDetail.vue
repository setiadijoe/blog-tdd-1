<template>
  <div class="col-md-9">
    <h2>{{ article.title }}</h2>
    <div class="row">
      <div class="col-md-offset-2 col-md-8">
        <img :src="article.imgUrl" alt="Binding Data" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div id="article-content" class="col-md-12">
        <p>{{ article.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      article: {}
    }
  },
  methods: {
    getDetailArticle (id) {
      console.log(id)
      this.$http.get('/blog/' + id)
      .then(({data}) => {
        this.article = data
      })
      .catch((err) => console.log(err))
    }
  },
  mounted () {
    this.getDetailArticle(this.id)
  },
  watch: {
    id (newId) {
      this.getDetailArticle(newId)
    }
  }
}
</script>

<style>
h2 {
  margin-top: 0px;
}
#article-content {
  margin-top: 16px;
}
</style>
