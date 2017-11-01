<template>
<div>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <router-link to="/" class="navbar-brand">HOME</router-link>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><router-link to="blog">BLOG</router-link></li>
                <li><router-link to="profile">PROFILE</router-link></li>
            </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
