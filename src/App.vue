<template>
  <div id="app">
    <button v-on:click="increment1">+1</button>
    <button @click="increment1">简写形式</button>
    <button @click="increment2(2, $event)">携带参数</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    increment1 (event) {
      console.log(event) // 是原生的 event 对象
    },
    increment2 (val, event) {
      console.log(event, val)
    },
    loadHandler () {
      console.log('do some thing')
    }
  },
  mounted () {
    window.addEventListener('load', this.loadHandler)
  },
  beforeDestroy () {
    window.removeEventListener('load', this.loadHandler)
  }
}
</script>
<style>
</style>
