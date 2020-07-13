<template>
  <div id="app">
    <p v-text="msg"></p>
    <LifeChild @fa="getMsg"></LifeChild>
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
      msg: '我是父组件的msg，请点击按钮'
    }
  },
  methods: {
    getMsg: function (val) {
      this.msg = val
    }
  }
}
</script>
<style>
</style>
