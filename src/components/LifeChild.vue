<template>
    <div>
        <p>父子生命周期：<input type="text" :value="name"></p>
    </div>
</template>

<script>

export default {
  name: 'LifeChild',
  props: ['name'],
  beforeCreate () {
    console.log('子组件-beforeCreate')
  },
  created () {
    console.log('子组件-created')
  },
  beforeMount () {
    console.log('子组件-beforeMount')
  },
  mounted () {
    console.log('子组件-mounted')
  },
  beforeUpdate () {
    console.log('子组件-beforeUpdate')
  },
  updated () {
    console.log('子组件-updated')
  },
  beforeDestroy () {
    console.log('子组件-beforeDestroy')
  },
  destroyed () {
    console.log('子组件-destroyed')
  },
  activated () {
    console.log('子组件-activated')
  },
  deactivated () {
    console.log('子组件-deactivated')
  }
}
</script>
