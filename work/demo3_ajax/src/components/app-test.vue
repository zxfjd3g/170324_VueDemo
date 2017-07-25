<template>
  <div>
    <h2 v-if="loading">Loading</h2>
    <h3 v-else>
      most stars repo is <a :href="repoUrl">{{repoName}}</a>
    </h3>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        loading: true,
        repoUrl: null,
        repoName: null
      }
    },

    created () {
      // 发送ajax请求
      const url = 'https://api.github.com/search/repositories?q=vu&sort=stars'
      /*axios.get(url)
        .then(response => {
          const {name, html_url} = response.data.items[0]
          this.loading = false
          this.repoUrl = html_url
          this.repoName = name
        })*/

      //使用vue-resource发送ajax请求
      this.$http.get(url)
        .then(response => {
          const {name, html_url} = response.body.items[0]
          this.loading = false
          this.repoUrl = html_url
          this.repoName = name
        })
    }
  }
</script>
<style>

</style>