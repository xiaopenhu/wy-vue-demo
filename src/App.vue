<template>
  <div id="app">
    <p v-text="msgText"></p>
    <p v-html="msgHtml"></p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msgText: '<span style="color:red">我是v-text</span>',
      msgHtml: '<span style="color:red">我是v-html</span>'
    }
  }
}
</script>

