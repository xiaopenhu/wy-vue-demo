<template>
  <div id="app">
    <p>
      <button @click="changeVal">通过ref操作dom</button>
      <input ref="inText" type="text" value="">
    </p>
    <p>
      <button @click="changeChild">通过ref操作子组件</button>
      <LifeChild ref="lifeChild"></LifeChild>
    </p>
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
    }
  },
  methods: {
    changeVal: function () {
      this.$refs.inText.value = '通过ref操作dom成功'
      console.log(this.$refs.inText)
    },
    changeChild: function () {
      console.log(this.$refs.lifeChild)
      this.$refs.lifeChild.$el.value = '通过ref操作子组件成功'
    }
  }
}
</script>
<style>
</style>
