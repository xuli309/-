import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import VCharts from 'v-charts'
import '@/styles/index.scss' // global css


import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局icon
import '@/icons'
import '@/permission'
Vue.use(ElementUI,{locale})
Vue.use(VCharts)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
