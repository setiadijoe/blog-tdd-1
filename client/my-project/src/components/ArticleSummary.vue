<template>
  <a href="#" class="list-group-item">
    <div class="row">
      <div class="col-md-4">
        <img :src="article.imgUrl" alt="Test This One" class="img-responsive">
      </div>
      <div class="col-md-8">
        <router-link :to=" '/blog/' + article._id ">
          <h4 class="list-group-item-heading">
            {{article.title}}
          </h4>
        </router-link>
        <p class="list-group-item-text">
          {{article.content.substring(0, 100)}} . . .
        </p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style>

</style>
