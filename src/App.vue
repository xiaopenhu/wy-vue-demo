<template>
  <div id="app">
    <button @click="ifVal = false">
      点击按钮，懒加载（异步加载）B组件
    </button>
    <ChildA v-if="ifVal"></ChildA>
    <ChildB v-if="!ifVal"></ChildB>
  </div>
</template>
<script>
import ChildA from './components/ChildA'
export default {
  components: {
    ChildA,
    ChildB: () => import('./components/ChildB')
  },
  data () {
    return {
      ifVal: true
    }
  }
}
</script>
<style>
</style>
