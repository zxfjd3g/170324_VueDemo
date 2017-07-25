/**
 * 数据存储的工具模具
 *
 * 暴露哪个类型?
 * 对象: 模块有多个功能
 * 函数: 模块只有一个功能
 */
const TODOS_KEY = 'todos_key'
export default {
  saveTodos (todos) { // 存储数组对应的json
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },
  getTodos () { // 返回数组, 如果没有数据, 返回[]
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  }
}
