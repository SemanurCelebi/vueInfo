import Vue from 'vue'
import App from './App.vue'
import SvgIcon from '@/components/icon/SvgIcon'
Vue.component('SvgIcon',SvgIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
