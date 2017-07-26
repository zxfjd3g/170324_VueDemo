/**
 * 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../components/about.vue'
import home from '../components/home.vue'
import news from '../components/news.vue'
import message from '../components/message.vue'
import messageDetail from '../components/messageDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active', // 指定选中的路由链接的class
  mode: 'history',  // 路由路径不带#
  routes: [ // 所有路由的数组
    {
      path: '/about',
      component: about
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: 'news',
          component: news
        },
        {
          path: 'message',
          component: message,
          children: [
            {
              path: 'detail/:id',
              component: messageDetail
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})