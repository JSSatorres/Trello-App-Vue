import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/views/Home'
import Board from '@/components/Board'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/board/:id',
      name: 'board',
      component: Board,
      // props true allow to catch props in routerlink
      // in BoardCards.vue =>  <router-link class="board-card" :to="{ name: 'board', params: { name, id } }">
      props: true
    }
  ]
})
