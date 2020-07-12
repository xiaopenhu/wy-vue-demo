<template>
  <div id="app">
    <p>num {{num}}</p>
    <p>num {{num}}</p>
    <p>double1 {{double1}}</p>
    <p>double1 {{double1}}</p>
    <input v-model="double2"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 20
    }
  },
  computed: {
    double1 () {
      console.log('double1')
      return this.num
    },
    double2: {
      get () {
        console.log('double2get')
        return this.num
      },
      set (val) {
        console.log('double2set')
        this.num = val
      }
    }
  }
}
</script>
<style>
</style>
