import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
{{#if_eq componentLibrary "mintUi"}}
import { Indicator, Toast } from 'mint-ui'
{{/if_eq}}
{{#if_eq componentLibrary "vux"}}
import { LoadingPlugin, ToastPlugin } from 'vux'
{{/if_eq}}
import { externalShare } from './public/share.js'
import App from './App.vue'

axios.defaults.baseURL = '//' + document.domain + '/{{ name }}'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  {{#if_eq componentLibrary "mintUi"}}
  Indicator.open()
  {{/if_eq}}
  {{#if_eq componentLibrary "vux"}}
  Vue.$vux.loading.show()
  {{/if_eq}}
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((res) => { {{#if_eq componentLibrary "mintUi"}}
  Indicator.close(){{/if_eq}}{{#if_eq componentLibrary "vux"}}
  Vue.$vux.loading.hide(){{/if_eq}}
  return res.data
}, (err) => {
  return Promise.reject(err)
})

Vue.use(VueAxios, axios)
Vue.use(externalShare)
{{#if_eq componentLibrary "vux"}}
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin, {
  position: 'middle',
  time: 3000,
  type: 'text',
  width: 'auto'
})
{{/if_eq}}
Vue.prototype.nativeService = new nativeService()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
