<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" @click="removeCompleted" v-show="completeSize">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: {
      todos: Array,
      removeCompleted: Function,
      selectAllTodos: Function
    },
    computed: {
      completeSize () {
        /*
        let totalSize = 0
        for (var i = 0; i < this.todos.length; i++) {
          var todo = this.todos[i]
          if(todo.complete) {
            totalSize++
          }
        }
        return totalSize*/

        return this.todos.reduce((preTotal, todo) => {
          return preTotal += todo.complete ? 1 : 0
        }, 0)

        // reduce()的结果最后一次遍历执行回调函数return的结果
        // 数组常用的方法: map()/filter()/reduce()/find()/findIndex()
      },

      isCheckAll: {
        get () {
          return this.completeSize===this.todos.length && this.todos.length>0
        },
        set (value) { // 当用户通过操作的方式改变了勾选状态
          // 更新todos
          this.selectAllTodos(value)
        }
      }
    }
  }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>