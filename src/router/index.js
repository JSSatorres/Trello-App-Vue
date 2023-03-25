import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Board from '@/views/Board'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/board/:id',
      name: 'board',
      component: Board,
      props: true
    },
    {
      path: '/card/:id',
      name: 'board',
      component: Board,
      props: true
    }
  ]
})
