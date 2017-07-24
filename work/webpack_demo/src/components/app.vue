<template>
  <div>
    <img src="../images/logo.png" alt="logo">
    <hello></hello>
  </div>
</template>
<script>
  import hello from './hello.vue'

  export default {
    components: {
      hello
    }
  }
</script>
<style>
  img {
    width: 100px;
    height: 100px;
  }
</style>