// https://c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace =txt.yqq.center&searchid=48297577300829329&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%BC%A0%E6%9D%B0&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0

//封装接口
//axios的GET请求，用 params 选项向后端传递数据，
//axios的Post请求，用 data 选项向后端传递数据

//与后端联调接口，一般考虑三件事
//1.是GET还是POST 2.URL是多少？ 3.怎么传参，哪些必填，哪些非必填?数据类型？

//导入封装的axios实例
import fetch from './axios'

//封装调接口的方法
//调qq音乐的接口
export function fetchQqMusic(params) {
    return fetch({ //fetch是封装的axios实例
        url: '/soso/fcgi-bin/client_search_cp', //路径，？前面的
        method: 'GET',
        params, //入参，post请求要用data，get用params


    })

}
//登录 {username:String,password:String}
export function fetchLogin(data) {
    return fetch({
        url: "/api/v1/user/login",
        method: "POST",
        data
    })
}

//商品编辑和新增
export function fetchGoodAddOrEdit(data) {
    return fetch({
        url: "/api/v1/good/addOrEdit",
        method: "POST",
        data
    })
}

//获取当前系统支持的所有请求
export function fetchAllcate(params) {
    return fetch({ //fetch是封装的axios实例
        url: '/api/v1/good/cates', //路径，？前面的
        method: 'GET',
        params, //入参，post请求要用data，get用params


    })

}

//商品列表
export function fetchGoodList(params) {
    return fetch({ //fetch是封装的axios实例
        url: '/api/v1/good/List', //路径，？前面的
        method: 'GET',
        params, //入参，post请求要用data，get用params


    })

}

//删除商品 {id:商品_id}
export function fetchGoodDel(params) {
    return fetch({ //fetch是封装的axios实例
        url: '/api/v1/good/delete', //路径，？前面的
        method: 'GET',
        params, //入参，post请求要用data，get用params


    })

}

export default {
    fetchQqMusic,
    fetchLogin,
    fetchGoodAddOrEdit,
    fetchAllcate,
    fetchGoodList,
    fetchGoodDel
}