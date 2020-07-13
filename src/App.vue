<template>
  <div id="app">
    <LifeChild :name="msg"></LifeChild>
  </div>
</template>
<script>
import LifeChild from './components/LifeChild'
export default {
  components: {
    LifeChild
  },
  data () {
    return {
      msg: '我是父组件的值，现在传递给了子组件'
    }
  }
}
</script>
<style>
</style>
