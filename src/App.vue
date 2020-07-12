<template>
  <div id="app">
    <p v-if="type === 'a'">A</p>
    <p v-else-if="type === 'b'">B</p>
    <p v-else-if="type === 'c'">C</p>
    <p v-else>other</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      type: 'a'
    }
  }
}
</script>
<style>
</style>
