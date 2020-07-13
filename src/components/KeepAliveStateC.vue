<template>
    <p>state C</p>
</template>

<script>
export default {
  beforeCreate () {
    console.log('C-beforeCreate')
  },
  created () {
    console.log('C-created')
  },
  beforeMount () {
    console.log('C-beforeMount')
  },
  mounted () {
    console.log('C-mounted')
  },
  beforeUpdate () {
    console.log('C-beforeUpdate')
  },
  updated () {
    console.log('C-updated')
  },
  beforeDestroy () {
    console.log('C-beforeDestroy')
  },
  destroyed () {
    console.log('C-destroyed')
  },
  activated () {
    console.log('C-activated')
  },
  deactivated () {
    console.log('C-deactivated')
  }
}
</script>
