<template>
  <div id="app">
    <p>可以是值：{{msg}}</p>
    <p>可以是表达式：{{ok? '1':'2'}}</p>
    <p v-cloak>v-cloak去除闪动：{{msg}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!',
      ok: true
    }
  }
}
</script>
<style>
  [v-cloak] {
    display: none;
  }
</style>
