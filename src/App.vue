<template>
  <div id="app">
    <p v-bind:id="pid">动态属性 id</p>
    <p :id="pid">简写形式</p>
    <p :class="{ a: isA, b: isB }">使用 class</p>
    <p :class="[black, yellow]">使用 class （数组）</p>
    <p :style="styleData">使用 style</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pid: 'pid',
      isA: true,
      isB: true,

      black: 'black1',
      yellow: 'yellow1',

      styleData: {
        fontSize: '40px', // 转换为驼峰式
        color: 'red',
        backgroundColor: '#ccc' // 转换为驼峰式
      }
    }
  }
}
</script>
<style>
</style>
