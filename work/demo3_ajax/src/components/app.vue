<template>
  <div class="container">
    <search :set-search-name="setSearchName"></search>
    <my-main :search-name="searchName"></my-main>
  </div>
</template>
<script>
  import axios from 'axios'
  import search from './search.vue'
  import main from './main.vue'

  export default {
    data () {
      return {
        searchName: ''
      }
    },

    methods: {
      setSearchName (searchName) {
        this.searchName = searchName
      }
    },

    components: {
      search,
      "my-main": main
    }
  }
</script>
<style>

</style>