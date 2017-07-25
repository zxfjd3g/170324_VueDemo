<template>
  <div>
    <h2 v-show="firstView">Enter name to search</h2>
    <h2 v-show="loading">Loading...</h2>

    <h2 v-show="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="user in users">
        <a :href="user.userUrl" target="_blank">
          <img :src="user.avatar" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: ['searchName'],
    data () {
      return {
        firstView: true,
        loading: false,
        errorMsg: null,
        users: []
      }
    },
    watch: {
      searchName: function (value) { // value就是searchName最新的值
        // 更新状态(请求中)
        this.firstView = false
        this.loading = true
        this.users = []
        this.errorMsg = null

        // 发ajax请求
        const url = `https://api.github.com/search2/users?q=${value}`
        axios.get(url)
          .then(response => {
            // 更新状态(请求成功)
            console.log(response.data)
            this.loading = false
            this.users = response.data.items.map(item => {
              return {
                userUrl: item.html_url,
                avatar: item.avatar_url,
                username: item.login
              }
            })
          })
          .catch(error => {
            this.loading = false
            this.errorMsg = '请求失败啦!!!'
          })
      }
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>