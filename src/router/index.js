import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/firststage',
    name: 'FirstStage',
    component: () => import('../views/FirstStage.vue')
  },
  {
    path: '/secondstage',
    name: 'SecondStage',
    component: () => import('../views/SecondStage.vue')
  },
  {
    path: '/thirdstage',
    name: 'ThirdStage',
    component: () => import('../views/ThirdStage.vue')
  },
  {
    path: '/firststage-badend',
    name: 'FirstStageBadEnd',
    component: () => import('../views/FirstStageBadEnd.vue')
  },
  {
    path: '/secondstage-badend',
    name: 'SecondStageBadEnd',
    component: () => import('../views/SecondStageBadEnd.vue')
  },
  {
    path: '/thirdstage-badend',
    name: 'ThirdStageBadEnd',
    component: () => import('../views/ThirdStageBadEnd.vue')
  },
  {
    path: '/true-end',
    name: 'TrueEnd',
    component: () => import('../views/TrueEnd.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
