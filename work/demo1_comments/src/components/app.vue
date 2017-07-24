<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <add :add-comment="addComment"></add>
      <list :comments="comments" :delete-comment="deleteComment"></list>
    </div>
  </div>
</template>
<script>
  import add from './add.vue'
  import list from './list.vue'

  export default {
    data () {
      return {
        comments: []
      }
    },
    created () {
      // 模拟发送ajax请求, 迅步获取数据
      setTimeout(() => {
        // 得到数据
        const comments = [
          {
            username: 'Tom',
            content: 'Vue不错!'
          },
          {
            username: '老班',
            content: 'So easy!'
          }
        ]
        // 更新数据
        this.comments = comments
      }, 1000)
    },

    methods: {
      addComment (comment) {
        this.comments.unshift(comment)
      },
      deleteComment (index) {
        this.comments.splice(index, 1)
      }
    },

    components: {
      add,
      list
    }
  }
</script>
<style>

</style>