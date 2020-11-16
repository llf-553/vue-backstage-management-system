//路由懒加载：使用webpack代码分割功能和异步组件的特点来实现，目的性能优化
const Home = () =>
    import ('./home/Home.vue')
const User = () =>
    import ('./user/User.vue')
const Find = () =>
    import ('./find/Find.vue')
const MusicList = () =>
    import ('./music/MusicList.vue')
const MusicDetail = () =>
    import ('./music/MusicDetail.vue')
const Todo = () =>
    import ('./home/Todo.vue')
const GoodList = () =>
    import ('./good/goodList.vue')
const GoodAdd = () =>
    import ('./good/goodAdd.vue')

// import Home from './home/Home.vue'
// import User from './user/User.vue'
// import Find from './find/Find.vue'
// import MusicList from './music/MusicList.vue'
// import MusicDetail from './music/MusicDetail.vue'

import { homeA, homeB } from '../components/'

//交警
// 路由匹配规则定义
let routes = [{
        id: 10,
        text: '首页概况',
        icon: 'el-icon-s-home',
        arr: [{
                id: 1001,
                path: '/',
                component: Home,
                //【视图命名：当访问首页时，使用一个叫abc的视图容器来承载Home组件】
                // components: {
                //     abc: Home,
                //     aa: Find

                // },
                text: '首页概况',
                exact: true
            },
            {
                id: 1002,
                path: '/find',
                component: Find,
                // components: {
                //     aa: Find
                // },
                exact: true,
                text: '公司新闻',
                //嵌套视图
                children: [
                    { path: '', component: homeA }, //不能加/
                    { path: 't2', component: homeB }
                ]
            },
            {
                id: 1003,
                path: '/todo',
                component: Todo,
                text: 'TodoList'
            }
        ]
    },
    {
        id: 11,
        text: '系统管理',
        icon: 'el-icon-takeaway-box',
        arr: [{
            id: 1101,
            // path: '/user',
            path: '/userasdfghjklpoiuytr',
            // 路由别名：你可以理解成是当前路由path的另一个容易记忆的小名
            alias: '/u',
            // 路由命名：给当前路由规则起一个名字
            name: 'me',
            component: User,
            text: '个人中心',
            exact: true
        }]

    },
    {
        id: 12,
        text: "音乐管理",
        icon: "el-icon-message-solid",
        arr: [{
                id: 1201,
                path: '/music',
                // component: () =>
                //     import ('./music/MusicList.vue'),
                component: MusicList,
                text: '音乐列表',
                exact: false
            },
            {
                id: 1202,
                path: '/music/detail/:id',
                component: MusicDetail,
                text: '音乐详情',
                isNotNav: true

            },
        ]
    },
    {
        id: 13,
        text: '商品管理',
        icon: 'el-icon-goods',
        arr: [{
            id: 1301,
            path: '/good/goodlist',
            component: GoodList,
            text: '商品列表',


        }, {
            id: 1302,
            text: '商品新增',
            path: '/good/add',
            component: GoodAdd,
            isNotNav: true

        }]

    }

]


// const routes = [

// ]

export default routes