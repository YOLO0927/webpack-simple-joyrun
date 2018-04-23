import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Indicator } from 'mint-ui'
import { externalShare } from './public/share.js'
import App from './App.vue'

axios.defaults.baseURL = '//' + document.domain + '/{{ name }}'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  Indicator.open()
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((res) => {
  Indicator.close()
  return res.data
}, (err) => {
  return Promise.reject(err)
})

Vue.use(VueAxios, axios)
Vue.use(externalShare)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
