<template>
  <div>
    <h2>About</h2>
    <p>About route component!</p>
    <h3>读取router-view数据: {{msg}}</h3>
  </div>
</template>

<script>
  export default {
    props: ['msg']
  }
</script>

<style>

</style>