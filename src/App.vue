<template>
  <div id="app">
    <p>路径about和about1在同一模块异步加载，路径pay时另一模块异步加载</p>
    <p>路径user同步加载，可加参数</p>
    <p>我是路由参数：{{$route.params.id}}</p>
    <!-- 路由链接 -->
    <router-link to="/">我是路由链接</router-link>
    <!-- 路由占位符 -->
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted () {
    console.log(this.$route.params.id)
  }
}
</script>
<style>
</style>
