import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  mode: process.env === 'production' ? 'history' : '',
  base: process.env === 'production' ? '/activity/{{ name }}' : '',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
