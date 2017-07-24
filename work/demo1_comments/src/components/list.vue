<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <item v-for="(comment, index) in comments" :comment="comment"
            :key="index" :delete-comment="deleteComment" :index="index"></item>
    </ul>
  </div>
</template>
<script>
  import item from './item'

  export default {
    // 声明接收哪些属性
    props: ['comments', 'deleteComment'],
    components: {
      item
    }
  }
</script>
<style>
  .reply {
    margin-top: 0px;
  }
</style>