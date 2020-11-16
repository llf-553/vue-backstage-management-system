# vue后台管理系统（相关概念）

## 一、*环境
   + node v12+ (v12以上版本)
   + node -v 
   + npm -v
> 以上基本环境都配置完成后，安装淘宝镜像
+ npm install -g cnpm --registry=https://registry.npm.taobao.org

## 二、*vue脚手架搭建
### VUE CLI:Vue.js 开发的标准工具 
+ 全局安装Vue CLI用于搭建vue脚手架
  + cnpm install @vue/cli -g
+ 在指定目录下创建一个项目 vue create 项目名(my-project)
  + vue create vue-study
> 注意安装过程中看安装的信息，选择vue2.0版本
+ 进入项目vue-study目录
  + cd vue-study
+ 启动开发环境
  + npm run serve
+ 上线(测试环境，生产环境) 
  + npm run build 
+ 当项目跑不起来时，可以试着把node_modules包删干净，重装：
  + cnpm install

## 三、*详解脚手架搭建的项目架构
### README.MD
+ 记录项目详细信息
+ 拿到一个项目第一步先看REDEME.MD
### package.json
+ 项目信息描述文件
+ 在script中添加开始运行项目命令，以后开启该项目可以直接：npm start
  > "start":"npm run serve"
+ dependencies:开发环境的包(-s)
+ devpendencies:环境依赖的包(-D)
### package-lock.json
+ 用于记录当前状态下实际安装的各个npm package的具体来源和版本号。用于保证pakage.json的安全做的加锁文件(不动)
### bable.config
+ 配置文件，用于编译.js文件
### node_modules
+ 下载的包，上线的时候删掉。后期直接下载pack.json中文件即可
### public
+ 静态资源服务器
+ index.html
### src
+ 放置源码的地方
+ assets目录：静态资源的目录，项目中需要用到的静态资源如图片、css等
+ components目录：组件目录
+ main.js:整个应用程序的入口文件。代码从这里开始运行
```js
import Vue from 'vue'  //从nodemodule中引入vue
import App from './App.vue' //引入了App.vue组件
Vue.config.productionTip = false  //在开发环境中，有些东西在生产环境中可以忽略,阻止vue启动生产消息（不重要）
new Vue({     //根容器创建
    render: h => h(App), //渲染App页面
}).$mount('#app') //把#app这个挂在vue上
```
+ App.vue:可以当作网站首页
  + 一个.vue文件就是一个首页
  + export default 中的 components是指向 components目录的
  + 引入的组件在这里变成局部组件，才能在页面上显示
## 四、后期涉及到的构架（提前补充）
### pages
+ 页面目录。
+ pages 下的一个目录就是一个单页包含的功能。
+ 用于该页面功能的具体逻辑
  +index.js
    + 负责进出口文件
    + 在pages中新建index.js文件
    + 在这里导入所有pages文件下的vue,建立一个数组，里面分别存放每个vue相关的信息,一个vue对应一个对象{键1：值1，键2：值2，...}，导出数组
    + 作用：降低耦合、方便其它文件直接遍历它间接获取各个vue的信息；用于router.js路由文件配置路由 和 components/common/layout.QfAside.vue 文件渲染页面(需要导入index.js才能使用：import routes from '@/pages/')
> 路由匹配规则
+ pages/index.js中一个大数组里面存放一个个vue信息对象，当作一个交警，这个大数组就是路由匹配规则
### store
+ 用于存放vue状态管理文件
### utils
+ 用于存放封装的工具，比如axios.js,api,js,img.js....
+ > 比如需要在原型链上挂载的文件，在utils下建立.js文件--->main.js中引入(import img from "@/utils/xx)--->main.js中：Vue.prototype.$xx = xx
  + 这样就可以在所有.vue文件中直接$xx使用了,在vue文件的组件内直接$xx，vue中的script中this.$xx
### vue.congilg.js
 + 处理跨域的文件，代理
### router.js
 + 路由配置文件
 + 系统中所有路由都在这里进行统筹分配
### components
 + 组件目录
 + components/common:里面存放这登录的组件 和 layout(系统页面整体布局模块文件)
   + login 和 Layout文件在App.vue中显示，兄弟关系
 + components/good :商品分类文件(CateSelect.vue)
 + common-->layout-->QfLayout.vue-->index.js(引入里面的所有.vue，抛出)--->App.vue(将QfLayout当组件用)
 ## 五、*路由
 ### 1.安装路由
 ```
 cnpm install vue-router -S 
 ```
### 2. 在src 根目录中新建一个router.js文件，代码如下：
> 路由匹配规则
```js
//导入下载好的vue,vue-router包
import Vue from 'vue'
import VueRouter from 'vue-router'
 //路由注册
Vue.use(VueRouter) 
//将.vue组件导入到router.js中进行路由配置
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
        //系统界面
        ...routes, //有两层循环，需要展开两次
        //访问登录页面
        { path: '/login', components: { login: Login } },
        //动态路由
        { path: '/*', redirect: '/' } //访问的页面不存在时，重定向到home
    ]
})
```
### 3.在main.js中挂载
```js
import router from './router'
new Vue({
    router,
    render: h => h(App),
    el: '#app',

})

```
## 六、动态路由
+ 一般用于一个页面到另个页面传递id
+ 路由匹配规则的写法：
  + 法1： { path: '/detail/:id', component:'组件名' }
  + 法2：{path: '/detail/:id', component: '组件名', props: true } 
+ 两种路由的参数传参方式：$route /props
+ 法一：通过$route.params接收；法二通过：使用props来接收路由中的动态参数
+ 传参时需要在这个页面将id穿到另一个页面
  + this.$router.push('/detail/'+item.id)
+ 传参页面-->route.js-->接收参数页面
+ 本次项目中涉及到的动态路由写法：
  + 1.直接通过引入pages/index(路由匹配规则)然后定以路由匹配规则，展开
  + 2. login:在App.vue文件中/router-view中命名后，需要更改为components:{名字：组件名}
  + 3.路由重定向   { path: '/*', redirect: '/' }

## 七、视图显示-router-view
+ 在适当的地方，比如App组件中，使用<router-view></router-view>来显示url匹配成功的组件(如login)

## 八、如何改变URL?
+ 声明式路由导航：建议使用vue-router内置
  + <router-link> 组件来实现。
  + 需要高亮显示的用router-link
+ 编程式路由导航：使用 路由api【$router.push()/replace()/back()】来实现页面跳转。
  + 普通跳转，涉及到业务逻辑的用编程式路由导航
## 九、三个命名
+ 视图命名
  + 当router-view标签添加name属性时，在路由匹配规则定义时要使用components字段。
  + 默认是name:default
  + 路由定义匹配规则：默认使用component:组件名。在router-view中命名后，需要更改为components:{名字：组件名}
  + 比如在在一个页面内同时显示多个组件时可以用
    ```
    <router-view name="login"></router-view>
    ```
+ 路由别名
  + 路由匹配规则中path的名字过于复杂，给路由起个小名
  + alias:'/小名'
  + 小名同大名，所有地方都适用。路由也可以写小名
  + 本项目中在pages/index->路由匹配规则定义中有用到

+ 路由命名
  + 给路由匹配规则起一个名字
  + name:'名字'
  + 在其他页面跳转访问该页面时，路由写成对象形式
      + 如： this.$router.push({name:'me'})
  + 有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候

## 十、声明式路由导航--router-link
+ 声明式路由导航
+ 在适当的地方使用，比如QfAside
+ 访问某个页面时，可以直接输入路由访问，也可以通过router-link.比如在Aside栏中点击音乐列表、就可以自动跳转到该页面
+ router-link被编译后，默认使用 a 标签 。通过tag="标签名" 可以改变标签
+ 在标签内定义相关属性
  + to:/路径   //与a标签相比，前面不需要加#/
  + active-class='类名' //激活类名，指被点击激活时显示的样式
  + > :exact='true'  exact-active-class='on'  //实现路由完全(精准)匹配
 + v-for ,key,v-text等指令都可以使用
    + 比如：<router-link v-for='nav in routes' :key='nav.id' :to='nav.path' tag='div'active-class='on' v-text='nav.text' > </router-link>

## 十一、两种路由模式
+ 两种路由模式，默认是 hash 路由，还可以改成 history
+  hash 路由：表现上有# ,上线后刷新页面没有报错，原理与history不同
+ history 路由：表现上没有#,上线后刷新页面可能会报404错误，原理与hash不同
+ router实例方法
  + push() :进入下一个路径
  + replace() :替换当前路径
  + back() :发回上个页面

## 十二、路由懒加载
+ 一种性能优化方案，可以理解为导入组件的一种方法
+ 可以这么理解：只需要访问一个页面时，不需要将所有的页面都加载进来，可以使用路由懒加载，需要哪个页面就加载哪个页面
+ 原理：webpack代码分割功能和异步组件的特点来实现
```
const Home =()=>import('./home/Home.vue')
```
## 十三、状态管理
+ 1. 如何理解"状态"
  + 在应用程序中，状态就是数据
  + 状态管理工具在Vue项目架构中是可选的，但从项目发展角度来看，最好还是安装集成一下。
  + Vuex，是vue全家桶中最流利使用的状态工具。是一个专为 Vue.js 应用程序开发的状态管理模式
+ 2. 状态管理工具可以解决什么问题？
  + 组件之间数据的共享
  + 实现数据的缓存

+ 3.DevTools安装
  + 下载地址：https://github.com/arcliang/Vue-Devtools-
+ 4.Vuex中的五大概念
  + state: 存储中心，所有需要被共享或存储的数据都在这里定义
  + getters: 相当于组件的计算属性，与state相关，当它所关系的state变量发生变化时，会自动计算
  + mutations:Vuex中专门用于更新state
  + actions: 专门用于与后端api打交道
  + mudules:分模块，将不同的业务模块区分出来，使代码更加优雅

+ 5. *Vuex安装
```
cnpm install vuex -S
```
+ 在src根目录，创建/store/index.js 文件，代码如下
```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{},
  getters:{},
  mutations:{},
  actions:{}
})
```
+ 在 main.js中挂载
```js
import store from './store/index.js'
new Vue({
  store
}).$mount('#app')
```
+ 组件之间如何用Vuex中的数据
```js
this.$store.state.msg
```
+ 组件中如何更新Vuex中的数据
```js
this.$store.commit('mutationFn', payload)
```
> 如何优雅的使用Vuex来管理应用程序中的外部数据
+ 把外部数据定义在Vuex的state中，页面中就可以通过$store.state来使用。
+ 封装了api接口（参考utils/api.js）
+ 在Vuex导入api方法，在actions中定义与后端交互的逻辑，把处理完成的数据通过mutations方法提交到state
+ 在mutations中定义、更新state的方法。当state变化时，页面自动更新
+ actions在页面逻辑中被触发。
> 温馨提示:建议在组件中使用 map* 系列方法来使用Vuex中的数据和函数
  + *步骤：
    + 在store/index.js内使用modules方法。
    + 将 state/ getters/mutations/actions中的内容按业务分别提取出来，放到新建的store/xxx.js中。
      + xxx.js 中需要注意： namespaced: true,
    + 在store/index.js内导入xxx，再放到moduls中
    + 在组件中从vuex中引入map*系列 （参考MusiList.vue）
    + mapState和mapGetters写在computed中
    + mapActions和mapMutations写在methods中
      + 例如： ...mapState('music',['musicList'])  //music命名空间,第二个参数是要用的变量
    + 这样就可以直接在页面中使用，不需要$store...

## 十四、*axios
+ 它是http工具，用于与后端进行数据交互
+ 特点：
  + 基于promise封装的库
  + 在客户端，Node端都可以使用
+ 在项目中如何使用
  1. cnpm install axios -S
  2. 一定要封装请求拦截器和响应拦截器。utils/axios.js
  3. 最好把所有api统一封装可以复用的方法。参考 utils/api.js
### 浏览器的同源策略阻止了ajax,如何解决？
+ 跨域，通过代理的方式。向本地服务器发送请求，本地服务器再向目标远程服务器发送请求
+ 在项目根目录里新建vue.config.js文件，代码如下：
```js
// 只要修改了vue.config.js这个配置文件，都要启动项目
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
```
> 小结：axios是用于发送和接收请求的。api.js是封装的请求，里面可以放不同的请求，再通过axios去处理发送接收请求等。受同源策略的影响，需要通过vue.config.js进行代理。vue.config.js中通过验证baseURL后面的第一个斜杆，后面发送请求时我发现你的地址里有/XX(与api.js中url:第一个斜杠后第二个斜杠之间的XX),就给你代理

# 后台管理系统开发
### ToB vs ToC
+ ToB:数据逻辑强(一般后台管理用)
+ ToC:交互多
## 一、Element
+ 网站快速成型工具。
+ 只适用与做管理系统
## 二、安装
```
 cnpm install element-ui -S
```
> main.js中
```js
// ElementUI安装
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

```
## 三、如何使用sass
+ 在element中使用sass写样式
```
cnpm install sass-loader -D
cnpm install node-sass -D
```
```
<style lang='scss' scoped>
</style>
```
## 四、整体布局
+ 1. components/common/layout:放整体布局样式.vue
  + QfAside.vue:左侧固定导航栏
  + QfHeader.vue:右侧头部模块
  + QfMain.vue:中间显示模块
    + router-view，页面中的业务功能逻辑页面在这里显示。比如：商品列表，商品新增等
  + QfLayout.vue：统筹汇总整个页面，将aside,header,main集合在一起
    + > 在element组件中找到conteiner容器、找到想要的布局，复制代码粘贴到该页面、理解每一行代码、根据需求更改。(注意：复制过来的代码用div包裹，方便后期更改样式)
    + 将 QfAside、QfHeader、QfMai组件引入-->在components内添加-->在el-container代码中作为标签使用
+ 2.  components/index.js
   + 将 QfLayout.vue引入-->抛出
+ 3. App.vue中引入-->引入的组件变成局部组件-->作为标签使用<QfLayout> 
  ```js
  import {QfLayout} from './components/'
  
  export default {
      components: {
          QfLayout, 
      }
  }
  //在templete中放Qflayout标签
  ```
  + 4. 根据需求调整样式
    + min-with：设置最小宽，防止被压扁
    + overflow:auto 滚动条
## 五、菜单实现
+ 1. >在element组件中找到Navmenu导航菜单、找到想要的布局，复制代码粘贴到 QfAside.vue页面、理解每一行代码、根据需求更改。
  + el-submenu标签:一级菜单
  + el-menu-item标签:二级菜单
+ 2.路由匹配规则定义
  + pages/index.js:一个大数组，里面是一个个对象，一个对象表示一个一级菜单，对象里面的数组表示二级菜单，数组中的小对象表示一个个一个一级菜单下面对应的一个个二级菜单
    + 第一层不用放路由，第二层才放路由
  + 导入pages下面的所有.vue文件(用路由懒加载的方式导入)-->路由匹配规则定义-->抛出
+ 3. 路由匹配：router.js
  + 导入路由匹配规则 import arr from './pages/'
  + 定义路由匹配规则：二层循环(详情：router.js)
    + 展开可以用es6语法：
      ```js
          let routes = []
          arr.map(ele => {
          routes = [...routes, ...ele.arr]
         }) 
        
        export default new VueRouter({
            routes: [
                 ...routes, //有两层循环，需要展开两次
                  { path: '/*', redirect: '/' } //访问的页面不存在时，重定向到home
             ]
           })
      ```
+ 4.渲染菜单：QfAside.vue
  + 导入pages/index
  ```
  import routes from '@/pages/'
  ```
  + 在组件中用v-for遍历循环 
    + 有些不需要渲染成菜单的，在pages/index中加isNotNav: true/false,遍历的时候用v-if判断显影(如音乐列表，商品新增)
    + >> v-for 和v-if不能在同一个标签内使用
    + 通过router-link实现点击菜单栏跳转到相应页面
    + 组件中的属性：:unique-opened="true" ：表示一次只展开一个菜单
  ```
   <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
        :unique-opened="true"
      >
     <!-- 一层循环 -->
      <el-submenu v-for='group in routes' :key='group.id' :index="group.id+''">
        <template slot="title">
          <i :class="group.icon"></i>
          <span v-text='group.text'></span>
        </template>
         <!-- 二层循环 -->
      <div v-for="nav in group.arr" :key='nav.id'>
        <el-menu-item
          v-if='!nav.isNotNav'
          :index="nav.id+''">
          <router-link  :to='nav.path' v-text='nav.text' tag='div'></router-link>
        </el-menu-item>
      </div>
    </el-submenu>
+ 菜单logo：
  + 图片放在asses中，会被当做资源请求(小图);图片放在public中，不会当作资源请求(大图)
  + 模块化管理：assets中放logo-->utils/img.js：导入图片-->抛出-->main.js中引入、挂载-->QfAside.vue中使用
    + utils/img.js
     ```js
        import logo from '@/assets/log2.jpg'
        export default {
                logo,
         }     
     ```
     + main.js
        ```js
            import img from "@/utils/img"
            Vue.prototype.$img = img
        ```
    + QfAside.vue
        ```html
        <div class="qf-logo">
            <img :src='$img.logo' alt='logo'>
        </div>
        ```
 
## 六.商品列表页面
 + 1.pages中新增good文件夹-->goodList.vue、goodAdd.vue
 + 2.pages/index.js中添加信息，定义路由匹配规则
   + 导入
    ```js
      const GoodList = () =>import ('./good/goodList.vue')
      const GoodAdd = () => import ('./good/goodAdd.vue')
    ```
   + 根据之前写的规则按格式在后面添加
     +  icon:"el-icon-message-solid"  
        + > 小图标，在element组件中找到Icon图标，直接复制类名即可
 + 3.goodList中添加表格
   + > 在element组件中找到Table表格，复制代码粘贴到该页面、理解每一行代码、根据需求更改。(注意：复制过来的代码用div包裹，方便后期更改样式)
   + el-table:表格、 el-table-column:列 
   + :data="tableData":其中tableData是声明式变量，需要在data中加入
   + lable: 列的头。 
   + prop:代表每一行取哪个字段来渲染
   + 可以在表格中添加自己的列(按照格式复制粘贴改造即可)
+ 4.添加“新增”按钮
   + 在表格上面新增一个新增按钮，用于进入商品新增页面
   + > 栅格系统：element组件中找到Layout布局，复制代码粘贴在表格上方
     + 栅格系统中，通过 row 和 col 组件，并通过 col 组件的 span 属性就可以自由地组合布局。
     + 一共24等份 :span=24 可以合理分配，一列占多少份。
     + :ofset="4" :向右偏移多少份
     + 调布局不能用浮动，用栅格系统
   + >按钮：element组件中找到Button 按钮，找到合适的按钮复制粘贴代码，放在栅格系统中
   + 点击按钮跳转
      + 在按钮标签内加click事件： @click="skipToAdd" 
      + 在mothods中添加skipToAdd方法
      ```js
        skipToAdd(){
        this.$router.push('/good/add')
      }
      ```
