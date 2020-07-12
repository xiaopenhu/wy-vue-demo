<template>
  <div id="app">
    <ChildOne>
      <p>{{obj.name}}</p>
      <p>{{obj.age}}</p>
    </ChildOne>
    <ChildTwo>
      <template v-slot:header>
        <p>{{obj.name}}</p>
      </template>
      <template v-slot:footer>
        <p>{{obj.age}}</p>
      </template>
    </ChildTwo>
  </div>
</template>
<script>
import ChildOne from './components/ChildOne'
import ChildTwo from './components/ChildTwo'
export default {
  components: {
    ChildOne,
    ChildTwo
  },
  data () {
    return {
      obj: {
        name: '前端爆米花',
        age: 1024
      }
    }
  }
}
</script>
<style>
</style>
