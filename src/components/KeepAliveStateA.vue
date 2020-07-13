<template>
    <p>state A</p>
</template>

<script>
export default {
  beforeCreate () {
    console.log('A-beforeCreate')
  },
  created () {
    console.log('A-created')
  },
  beforeMount () {
    console.log('A-beforeMount')
  },
  mounted () {
    console.log('A-mounted')
  },
  beforeUpdate () {
    console.log('A-beforeUpdate')
  },
  updated () {
    console.log('A-updated')
  },
  beforeDestroy () {
    console.log('A-beforeDestroy')
  },
  destroyed () {
    console.log('A-destroyed')
  },
  activated () {
    console.log('A-activated')
  },
  deactivated () {
    console.log('A-deactivated')
  }
}
</script>
