<template>
  <div id="app">
    <h1>我是state的name：{{ $store.state.name }}</h1>
    <h1>我是state的name：{{ name }}</h1>
    <h1>我是getters的fullInfo：{{ this.$store.getters.fullInfo }}</h1>
    <h1>我是getters的fullInfo：{{ fullInfo }}</h1>
    <p>
      <button @click="activeMu">触发mutations</button>
    </p>
    <p>
      <button @click="activeMu2">触发mutations</button>
    </p>
    <p>
      <button @click="activeAction">触发actions</button>
    </p>
    <p>
      <button @click="activeAction2">触发actions</button>
    </p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'name'
    ]),
    ...mapGetters(['fullInfo'])
  },
  methods: {
    activeMu: function () {
      this.$store.commit('editAge', { a: 1, b: 2 })
    },
    activeMu2: function () {
      this.editAge({ a: 1, b: 2 })
    },
    // 相当于定义了一个 editAge 方法
    ...mapMutations([
      'editAge'
    ]),
    activeAction: function () {
      this.$store.dispatch('aEditAge', { a: 1, b: 2 })
    },
    activeAction2: function () {
      this.aEditAge({ a: 1, b: 2 })
    },
    // 相当于定义了一个 increAsyn 方法
    ...mapActions([
      'aEditAge'
    ])
  }
}
</script>
<style>
</style>
