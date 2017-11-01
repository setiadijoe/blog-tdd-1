<template>
<div>
  <div class="container">
    <div class="row">
      <SideBar
        :articles="articles">
      </SideBar>
      <router-view
        :articles="articles">
      </router-view>  
    </div>
  </div>
</div>
</template>

<script>
import SideBar from '@/components/SideBar'
import MainContent from '@/components/MainContent'
export default {
  components: {
    SideBar,
    MainContent
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles () {
      this.$http.get('/blog')
      .then(({data}) => {
        this.articles = data
      })
      .catch((err) => {
        console.log('====================================')
        console.error(err)
        console.log('====================================')
      })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>

<style>

</style>
