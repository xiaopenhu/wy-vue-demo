<template>
  <div id="app">
    <p ref="msgDiv">{{msg}}</p>
    <p>msg1: {{msg1}}</p>
    <p>msg2: {{msg2}}</p>
    <p>msg3: {{msg3}}</p>
    <button @click="changeMsg">
      使用nextTick可获取渲染完成之后的dom
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '我是初始字符串',
      msg1: '',
      msg2: '',
      msg3: ''
    }
  },
  methods: {
    changeMsg () {
      this.msg = '改变后的字符串'
      this.msg1 = this.$refs.msgDiv.innerHTML
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
      this.msg3 = this.$refs.msgDiv.innerHTML
    }
  }
}
</script>
<style>
</style>
