import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 配置你自己的路由
const routes = [
  // 吐槽模块路由
  {
    path: '/teasing-index',
    name: 'teasingIndex',
    component: () => import('./TeasingIndex')
  },
  {
    path: '/teasing-protocol',
    name: 'teaingsProtocol',
    component: () => import('./TeasingProtocol')
  },
  {
    path: '/teasings',
    name: 'teasings',
    component: () => import('./Teasings')
  },
  {
    path: '/add-question',
    name: 'addQuestion',
    component: () => import('./AddQuestion')
  },
  {
    path: '/platform',
    name: 'platform',
    component: () => import('./Platform')
  },
  // 论坛路由
  {
    path: '/',
    name: 'index',
    component: () => import('./Index/index')
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('./Welcome')
  },
  {
    path: '/protocol',
    name: 'protocol',
    component: () => import('./Protocol')
  },
  // 论坛分类选择
  {
    path: '/categories',
    name: 'categories',
    component: () => import('./Categories')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./Home'),
    children: [
      {
        path: 'categories/:category',
        component: () => import('./Home/Posts')
      },
      {
        path: 'user/posts',
        component: () => import('./Home/MyPosts')
      }
    ]
  },
  { path: '/posts/:id', component: () => import('./Post') },
  { path: '/comments/:id', component: () => import('./Comment') }
]

export default new VueRouter({
  routes,
  mode: 'hash'
})
