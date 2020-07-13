<template>
  <div id="app">
    <p>修改触发更新过程：<input type="text" v-model="name"></p>
    <LifeChild :name="name"></LifeChild>
    <div>
      <button @click="changeState('A')">A</button>
      <button @click="changeState('B')">B</button>
      <button @click="changeState('C')">C</button>
      <keep-alive> <!-- tab 切换 -->
        <KeepAliveStateA v-if="state === 'A'"/> <!-- v-show -->
        <KeepAliveStateB v-if="state === 'B'"/>
        <KeepAliveStateC v-if="state === 'C'"/>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import LifeChild from './components/LifeChild'
import KeepAliveStateA from './components/KeepAliveStateA'
import KeepAliveStateB from './components/KeepAliveStateB'
import KeepAliveStateC from './components/KeepAliveStateC'
export default {
  components: {
    LifeChild,
    KeepAliveStateA,
    KeepAliveStateB,
    KeepAliveStateC
  },
  data () {
    return {
      name: '前端爆米花',
      state: 'A'
    }
  },
  methods: {
    changeState (state) {
      this.state = state
    }
  },
  beforeCreate () {
    console.log('父组件-beforeCreate')
  },
  created () {
    console.log('父组件-created')
  },
  beforeMount () {
    console.log('父组件-beforeMount')
  },
  mounted () {
    console.log('父组件-mounted')
  },
  beforeUpdate () {
    console.log('父组件-beforeUpdate')
  },
  updated () {
    console.log('父组件-updated')
  },
  beforeDestroy () {
    console.log('父组件-beforeDestroy')
  },
  destroyed () {
    console.log('父组件-destroyed')
  },
  activated () {
    console.log('父组件-activated')
  },
  deactivated () {
    console.log('父组件-deactivated')
  }
}
</script>
<style>
</style>
