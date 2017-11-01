<template>
  <div class="col-md-3">
    <WidgetArticle :articles="articles">
    </WidgetArticle>
  </div>
</template>

<script>
import WidgetArticle from '@/components/WidgetArticle'
export default {
  props: ['articles'],
  components: {
    WidgetArticle
  }
}
</script>

