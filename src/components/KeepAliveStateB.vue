<template>
    <p>state B</p>
</template>

<script>
export default {
  beforeCreate () {
    console.log('B-beforeCreate')
  },
  created () {
    console.log('B-created')
  },
  beforeMount () {
    console.log('B-beforeMount')
  },
  mounted () {
    console.log('B-mounted')
  },
  beforeUpdate () {
    console.log('B-beforeUpdate')
  },
  updated () {
    console.log('B-updated')
  },
  beforeDestroy () {
    console.log('B-beforeDestroy')
  },
  destroyed () {
    console.log('B-destroyed')
  },
  activated () {
    console.log('B-activated')
  },
  deactivated () {
    console.log('B-deactivated')
  }
}
</script>
