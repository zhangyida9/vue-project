import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './network/request'

//按需导入vant
// import './vant'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
