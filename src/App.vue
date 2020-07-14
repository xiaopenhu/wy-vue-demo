<template>
  <div id="app">
    <button @click="currentIndex = 0">
      加载A组件
    </button>
    <button @click="currentIndex = 1">
      加载B组件
    </button>
    <component :is="currentTabComponent"></component>
  </div>
</template>
<script>
import ChildA from './components/ChildA'
import ChildB from './components/ChildB'
export default {
  components: {
    ChildA,
    ChildB
  },
  data () {
    return {
      currentIndex: 0,
      status: ['ChildA', 'ChildB']
    }
  },
  computed: {
    currentTabComponent () {
      return this.status[this.currentIndex]
    }
  }
}
</script>
<style>
</style>
