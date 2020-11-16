import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // 路由注册
import { Login } from "@/components"

import arr from './pages/'

//定义路由匹配规则
let routes = []
arr.map(ele => {
    routes = [...routes, ...ele.arr]
})

// 路由系统，用于实现单页面应用程序
export default new VueRouter({
    routes: [
        ...routes, //有两层循环，需要展开两次
        { path: '/login', components: { login: Login } },
        //动态路由
        //一般用于从列表页面到商品详情页传递id
        //在详情页有两种传参方式，一种是使用 $route.params,另一种是使用props传值
        // { path: '/music/detail/:id', component: MusicDetail },
        // { path: '/music/detail/:id', component: MusicDetail, props: true },
        { path: '/*', redirect: '/' } //访问的页面不存在时，重定向到home
    ]
})