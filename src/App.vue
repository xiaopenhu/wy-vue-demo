<template>
  <div id="app">
    <h1>我是state：{{ $store.state.name }}</h1>
    <h1>我是getters：{{ this.$store.getters.fullInfo }}</h1>
<!--    <button @click="activeMu">触发mutations</button>-->
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
  // computed: {
  //   ...mapGetters(['test'])
  // }
}
</script>
<style>
</style>
