import { createRouter, createWebHistory } from 'vue-router'

import Recommend from '../views/recommend/index.vue'
const routes = [
  {
    path: '/',
    redirect: '/recommend',
  },
  {
    path: '/recommend',
    component: Recommend,
  },
  // {
  //   path: '/singer',
  //   component: Singer,
  //   children: [
  //     {
  //       path: ':id',
  //       component: SingerDetail
  //     }
  //   ]
  // },
  // {
  //   path: '/top-list',
  //   component: TopList,
  //   children: [
  //     {
  //       path: ':id',
  //       component: TopDetail
  //     }
  //   ]
  // },
  // {
  //   path: '/search',
  //   component: Search,
  //   children: [
  //     {
  //       path: ':id',
  //       component: SingerDetail
  //     }
  //   ]
  // },
  // {
  //   path: '/user',
  //   components: {
  //     user: UserCenter
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
