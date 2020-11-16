<template>
<div>
    <h1>公司首页</h1>
    <button @click="skipTouser">编程式跳转：跳转到个人中心</button>
    <br/>

     <!-- 【声明式路由跳转的三种写法】 -->
     <!-- <router-link to="/userasdfghjklpoiuytr">声明式：跳转到个人中心</router-link> -->
     <!-- <router-link to="/u">声明式：跳转到个人中心</router-link> -->
     <router-link :to="{name:'me'}">声明式：跳转到个人中心</router-link>

<hr/>
     <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row> 
   
</div>
</template>

<script>
export default {
    methods: {
        skipTouser(){
            //1.使用path来跳转
            // this.$router.push('/userasdfghjklpoiuytr')
            //2.使用路由别名
            // this.$router.push('/u')
            //3.使用路由命名
            this.$router.push({name:'me'})
        }
    },
    // mounted() {
    //     console.log('$route',this.$route)
    //     console.log('$router',this.$router)
    // },
}
</script>
<style scoped>

</style>