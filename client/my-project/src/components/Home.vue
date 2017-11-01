<template>
<div>
    <div class="container">
        <div class="row">
            <div class="md-col-3">
                <SideBar />
            </div>
            <div class="md-col-9">
                <h1>Home Alone</h1>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SideBar from '@/components/SideBar'
export default {
  components: {
    SideBar
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>