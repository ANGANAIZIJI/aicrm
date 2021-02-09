// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as filters from './filters'

// 权限配置
import './permission'
// 插件
import '@/plugins/vant' // 全局引入按需引入UI库 vant
import '@/plugins/other' // 其他的js插件
// 引入全局样式
import '@/styles/index.scss'

// 全局指令
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
