/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import other from './other'
import order from './order'
import mine from './mine'
import advertise from './advertise'
import publics from './public'
import show from './show'


Vue.use(VueRouter)

const routes = [
   {
     path: "/",
     redirect:'/adver'
   },
   ...other,
   ...order,
   ...mine,
   ...advertise,
   ...publics,
   ...show,
  {
    path:"/index",
    name:"首页",
    component:()=>import('../views/index.vue')
  },
  {
    path: "/class",
    name: "分类页",
    component: () => import('../views/classs.vue')
  },
  {
    path: "/shopCar",
    name: "购物车",
    component: () => import('../views/shopCar.vue')
  },
  {
    path: "/mine",
    name: "我的",
    component: () => import('../views/mine.vue')
  },
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "aui-footer-active"
})

export default router
