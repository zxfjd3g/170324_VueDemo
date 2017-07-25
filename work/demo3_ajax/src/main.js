/**
 * 入口js
 */
import Vue from 'vue'
import app from './components/app.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource) // 背后给所有的vm和组件对象添加了一个属性: $http

new Vue({
  el: '#app',
  render: h => h(app)
})