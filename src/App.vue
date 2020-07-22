<template>
  <div id="app">
    <h1>过滤器</h1>
    <input type="text" v-model='msg'>
    <div>{{msg | upper}}</div>
    <div>{{msg | upper | lower}}</div>
    <div>{{msg | upper | lower2('abc')}}</div>
    <div :abc='msg | upper'>动态属性应用</div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      msg: 'aaaa'
    }
  },
  filters: {
    upper: function (val) {
      return val.charAt(0).toUpperCase() + val.slice(1)
    },
    lower: function (val) {
      return val.charAt(0).toLowerCase() + val.slice(1)
    },
    lower2: function (val, arg) {
      return val.charAt(0).toLowerCase() + val.slice(1) + arg
    }
  }
}
</script>
<style>
</style>
