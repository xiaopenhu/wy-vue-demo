import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User'
import UserA from '../views/user/UserA'
import UserB from '../views/user/UserB'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 路由懒加载
    // /* webpackChunkName: "about" */ 将懒加载的组件按组，打包在异步块中
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { btnPermissions: ['admin', 'supper', 'normal'] }, // 页面需要的权限
    // 使用子路由，需要在父路由填写<router-view/>路由占位符
    children: [
      {
        path: 'usera',
        name: 'userA',
        component: UserA,
        meta: { btnPermissions: ['admin', 'supper'] } // 页面需要的权限
      },
      {
        path: 'userb',
        name: 'UserB',
        component: UserB,
        meta: { btnPermissions: ['admin', 'normal'] } // 页面需要的权限
      }
    ]
  },
  {
    path: '/about1',
    name: 'About1',
    // 路由懒加载
    // /* webpackChunkName: "about" */ 将懒加载的组件按组，打包在异步块中
    component: () => import(/* webpackChunkName: "about" */ '../views/About1.vue')
  },
  {
    path: '/pay',
    name: 'Pay',
    // 路由懒加载
    // /* webpackChunkName: "pay" */ 将懒加载的组件按组，打包在异步块中
    component: () => import(/* webpackChunkName: "pay" */ '../views/Pay.vue')
  },
  // 携带参数的路由
  {
    path: '/user/:id',
    // 加载页面时，会一同加载
    component: User
  }
]

const router = new VueRouter({
  routes
})

export default router
