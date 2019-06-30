import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'

Vue.use(Router)

import Home from './home/home.js';

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Index',
      component: Index,
      children:Home
    }
  ]
})
