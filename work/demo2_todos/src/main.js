/**
 * 入口js
 */
import Vue from 'vue'
import app from './components/app.vue'
import './index.css'

/*
new Vue({
  el: '#app',
  components: {
    app
  },
  template: '<app />'
})
*/
new Vue({
  el: '#app',
  render: h => h(app)
  /* render: function (createElement) {
    return createElement(app)  // 返回的主是<app />
  } */
})