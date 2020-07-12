<template>
  <div class="child">
    <p>具名插槽</p>
    <slot name="header"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'ChildTwo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .child{
    width: 200px;
    height: 200px;
    background: yellow;
  }
</style>
