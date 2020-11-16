<template>
  <div class="qf-app">
      <!-- 登录页和layout(系统内有)是有你无我的。
    但是login页面也需要通过/#/login路由的方式进行访问，需要把login加入到路由系统中
    为了避免login和其它所谓的pages页面抢default那把椅子（router-view）
    所以，我们把Login加入路由系统中时，给它一个专座（名字叫login的router-view)来展示，
  它们两的胜负关系，由'$route.path=="/login"'来决定胜负 -->
    <router-view v-if='$route.path=="/login"' name="login"></router-view>
    <QfLayout v-else></QfLayout>
     
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld :xxx="foo" msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import routes from './pages/'
import {QfLayout} from './components/'

export default {
 //name: 'App',
  components: {
    // HelloWorld
    QfLayout,  //引入的组件一定要变成局部组件
    
  }, 
  data:function(){
   return {
     foo:"Hello foo",
    // routes
   }
  },
   // 监听路由的变化
   watch: {
//      $route:function(to,from){
// console.log("url发生了变化",to,from)
    //  }
   },
 
}
</script>

<style>
html,body{
  margin:0;
  padding:0;
  width:100%;
  height:100%;
  overflow: hidden;
}
.qf-app{
  width:100%;
  height:100%;

}
/*所有搜索和品类向右对齐*/ 
.qf-filter-labe{
  text-align: right;
  padding-right: 10px;
}

</style>
