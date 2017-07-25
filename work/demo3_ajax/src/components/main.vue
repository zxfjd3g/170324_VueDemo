<template>
  <div>
    <p>{{searchName}}</p>
    <div class="row">
      <div class="card">
        <a href="https://github.com/reactjs" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
        </a>
        <p class="card-text">reactjs</p>
      </div>
      <div class="card">
        <a href="https://github.com/reactjs" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
        </a>
        <p class="card-text">reactjs</p>
      </div>
      <div class="card">
        <a href="https://github.com/reactjs" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
        </a>
        <p class="card-text">reactjs</p>
      </div>
      <div class="card">
        <a href="https://github.com/reactjs" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
        </a>
        <p class="card-text">reactjs</p>
      </div>
      <div class="card">
        <a href="https://github.com/reactjs" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
        </a>
        <p class="card-text">reactjs</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: ['searchName'],

    watch: {
      searchName: function (value) { // value就是searchName最新的值
        // 发ajax请求
        const url = `https://api.github.com/search/users?q=${value}`
        axios.get(url)
          .then(response => {
            console.log(response.data)
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