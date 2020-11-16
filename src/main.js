import Vue from 'vue'
import App from './App.vue'

// ElementUI安装
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

import router from './router'
import store from './store/'
import http from '@/utils/api'
import img from "@/utils/img"
import tips from '@/utils/tip'

Vue.prototype.$http = http
Vue.prototype.$img = img
Vue.prototype.$tips = tips

/* new Vue({
    render: h => h(App),
}).$mount('#app') */

//在根容器创建vue环境
new Vue({
    router,
    store,
    render: h => h(App),
    el: '#app',

})