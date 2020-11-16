import axios from 'axios'

//生产环境
//测试环境
//开发环境
// 每个环境都有对应的URL

const baseURL = 'http://localhost:8080'
    //创建一个axios实例
const instance = axios.create({
    baseURL, //调接口的地址
    timeout: 7000, //超时时间
    headers: {}
})

//封装请求拦截器  （可以在文档上复制封装）
instance.interceptors.request.use(function(config) {
    // Do something before request is sent
    //在请求被send出去之前，可以在这里做一些事
    //加token
    // console.log('请求拦截器', config)
    config.headers.Authorization = localStorage.getItem('token')
    return config;
}, function(error) {

    return Promise.reject(error);
});
//封装响应拦截器
instance.interceptors.response.use(function(res) {
    let response = null
        //当后端返回数据，抵达客户端之前
        //对数据过滤
        //对后端响应的错误信息进行处理
        // console.log('响应拦截器', res)
    if (res.status === 200) {
        if (res.data) { //返回的数据
            let err = res.data.err //拿到返回的err
            if (err == 0) { //err=0,成功
                response = res.data.data //成功的数据
            } else if (err === -1) {
                //当token无效
                window.location.href = "/login"
            } else {
                //用element的交互提示框
            }
        }

    } else {
        console.log('调接口失败')
    }
    return response;
}, function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


//导出
export default instance