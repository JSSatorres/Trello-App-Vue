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
      // props true allow to catch props in routerlink
      // in BoardCards.vue =>  <router-link class="board-card" :to="{ name: 'board', params: { name, id } }">
    }
  ]
})
