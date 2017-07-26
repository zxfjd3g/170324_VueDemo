<template>
  <div>
    <ul>
      <li v-for="(m, index) in messages" :key="index">
        <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages: []
      }
    },
    created () {
      setTimeout(() => {
        this.messages = [
          {title: 'message001', id: 1},
          {title: 'message002', id: 2},
          {title: 'message003', id: 3},
          {title: 'message004', id: 4},
          {title: 'message005', id: 5},
        ]
      }, 1000)
    }
  }
</script>

<style>

</style>