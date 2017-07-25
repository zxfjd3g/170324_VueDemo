<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="inputName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['setSearchName'],
    data () {
      return {
        inputName: ''
      }
    },
    methods: {
      search () {
        const inputName = this.inputName.trim()
        if (!inputName) {
          return
        }
        this.setSearchName(inputName)
      }
    }
  }
</script>

<style>

</style>