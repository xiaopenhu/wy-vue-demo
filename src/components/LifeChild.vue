<template>
    <div>
      <button @click="pushMsg">{{value}}</button>
    </div>
</template>

<script>

export default {
  name: 'LifeChild',
  data () {
    return {
      value: '我是子组件的value'
    }
  },
  methods: {
    pushMsg: function () {
      this.$emit('fa', this.value)
    }
  }
}
</script>
