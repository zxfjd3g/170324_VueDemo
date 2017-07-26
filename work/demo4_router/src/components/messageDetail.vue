<template>
  <div>{{detail}}</div>
</template>

<script>
  export default {
    data () {
      return {
        detail: ''
      }
    },
    methods: {
      showDetail (id) {
        // 启动异步任务查询对应的详情
        setTimeout(() => {
          this.detail = `消息ID为${id}的详情为xxxxxxxxxxx${Date.now()}`
        }, 1000)
      }
    },
    created () {
      // 得到请求参数
      const id = this.$route.params.id
      // 启动异步任务查询对应的详情
      this.showDetail(id)
    },
    watch: {
      '$route': function (to, from) {
        // 根据最新id显示详情
        this.showDetail(to.params.id)
      }
    }
  }
</script>

<style>

</style>