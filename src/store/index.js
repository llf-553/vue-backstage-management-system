import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import todo from './moduls/todo' //导入分出去的todo模块
import music from './moduls/music'

export default new Vuex.Store({
    state: {},
    // getters相当于组件的计算属性，它与state相关，
    // 当它所关系的state变量发生变化时，会自动重新计算
    getters: {},
    // mutations是Vuex中专门用于更新state
    mutations: {},
    actions: {}, //专门与后端打交道，调接口  
    modules: { //分模块 ，不同模块分出来
        todo,
        music
    }

})