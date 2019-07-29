import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

// 宽高过滤器
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);//匹配需要替换的具体位置
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
