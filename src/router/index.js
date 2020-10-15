import Vue from 'vue'
import VueRouter from 'vue-router'
import Emoticon from '../views/Emoticon.vue'
import TODO from '../views/TODO.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/TODO',
    name: 'TODO',
    component: TODO,
    children: [
      // {path: '', component: TodoSection},
      // {path: '', component: TodoSection},
      // {path: '', component: TodoSection},
    ]
  },
  {
    path: '/Emoticon',
    name: 'Emoticon',
    component: Emoticon
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
