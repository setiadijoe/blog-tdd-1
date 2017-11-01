<template>
  <div class="col-md-9">
    <div class="list-group">
      <ArticleSummary
        v-for="(article, index) in articles"
        :article="article"
        :key="index">
      </ArticleSummary>
    </div>
  </div>
</template>

<script>
import ArticleSummary from '@/components/ArticleSummary'
export default {
  props: ['articles'],
  components: {
    ArticleSummary
  }
}
</script>

<style>

</style>
