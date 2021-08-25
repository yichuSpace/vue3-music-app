import { createRouter, createWebHistory } from 'vue-router'

const Recommend = () => import('@/views/recommend/index.vue' /* webpackChunkName: "recommend" */)
const Singer = () => import('@/views/singer/index.vue' /* webpackChunkName: "singer" */)
const TopList = () => import('@/views/topList/index.vue' /* webpackChunkName: "top-list" */)
const Search = () => import('@/views/search/index.vue' /* webpackChunkName: "search" */)
const UserCenter = () => import('@/views/user/index.vue' /* webpackChunkName: "user" */)
// const SingerDetail = () => import('@/views/singer-detail'/* webpackChunkName: "singer-detail" */)
// const Album = () => import('@/views/album'/* webpackChunkName: "album" */)
// const TopDetail = () => import('@/views/top-detail'/* webpackChunkName: "top-detail" */)
// const UserCenter = () => import('@/views/user-center'/* webpackChunkName: "user-center" */)
const routes = [
  {
    path: '/',
    redirect: '/recommend',
  },
  {
    path: '/recommend',
    component: Recommend,
  },
  {
    path: '/singer',
    component: Singer,
  },
  {
    path: '/topList',
    component: TopList,
    // children: [
    //   {
    //     path: ':id',
    //     component: TopDetail
    //   }
    // ]
  },
  {
    path: '/search',
    component: Search,
    // children: [
    //   {
    //     path: ':id',
    //     component: SingerDetail
    //   }
    // ]
  },
  {
    path: '/user',
    components: UserCenter,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
