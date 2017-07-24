<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="username">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="submit">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>

  export default {
    props: {
      addComment: {
        type: Function, //属性值的类型
        required: true // 属性是否必须输入
      }
    },
    data () {
      return {
        username: '',
        content: ''
      }
    },

    methods: {
      submit () {
        // 检查用户是否正常输入
        const {username, content} = this
        if(!username.trim() || !content.trim()) {
          alert('请正常输入')
          return
        }
        // 根据输入的数据, 生成comment对象
        const comment = {username, content}
        // 添加到comments
        this.addComment(comment)
        // 清除用户输入
        this.username = ''
        this.content = ''
      }
    }
  }
</script>
<style>
  
</style>