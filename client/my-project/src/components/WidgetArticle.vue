<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      Latest Article
    </div>
    <div class="panel-body">
      <div class="list-group">
        <router-link 
          v-for="(article, index) in articles"
          :to="'/blog/'+article._id"
          class="list-group-item"
          :key="index">
          <h5>{{ article.title }}</h5>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['articles']
}
</script>

<style scoped>
.panel-body {
  padding: 0;
}
.list-group {
  margin-bottom: 0;
}
.list-group-item {
  cursor: pointer;
}
</style>