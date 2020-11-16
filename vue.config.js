// 只要修改了vue.config。js这个配置文件，都要启动项目
module.exports = {
    devServer: {
        //用代理的方式来解决同源策略对ajax的限制
        proxy: {
            '/soso': { //baseURL后面的第一个斜杠，后面发送请求时我发现你的地址里有/soso，就给你代理
                target: 'https://c.y.qq.com', //目标远程服务器的URL
                ws: true,
                changeOrigin: true //允许改变域
            },
            '/api': {
                target: 'http://10.20.158.29:9000',
                changeOrigin: true
            }

        }
    }
}