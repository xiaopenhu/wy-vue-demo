<template>
  <div class="child">
    <p>普通插槽</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ChildOne'
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
