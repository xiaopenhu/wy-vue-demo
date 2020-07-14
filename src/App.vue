<template>
  <div id="app">
    <p>mixin-city：{{city}}</p>
    <p>app-name：{{name}}</p>
    <p>
      <button @click="showCity">console.log(mixin-city)</button>
    </p>
  </div>
</template>
<script>
import Base from './components/mixin/base'
export default {
  mixins: [Base],
  data () {
    return {
      name: '前端爆米花'
    }
  }
}
</script>
<style>
</style>
