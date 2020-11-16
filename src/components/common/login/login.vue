<template>
    <div class="qf-login">
      <div class="qf-login-wrap">
         <el-form :model="user" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" >
                <el-input v-model="user.password" show-password></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="logiSubmit">登录</el-button>
            </el-form-item>
         </el-form>
       </div>
    </div>
</template>

<script>


export default {
data() {
    return {
        user:{
          username:"",
          password:""
        },
        
         rules: {
          username: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { pattern:/^[a-zA-Z][a-zA-Z0-9]{1,9}$/ , message: "用户密码格式不对" , trigger: 'blur' }
          ],
           password: [
            { required: true, message: '请输入用户密码', trigger: 'blur' },
            { pattern:/^[a-zA-Z][a-zA-Z0-9\u0020-\u002F]{5,17}$/ ,message: '用户密码格式不对', trigger: 'blur' }
          ]
        },
      
    }
},
methods: {
    logiSubmit(){
        console.log("user",this.user)
        
        console.log('this.$http',this.$http)
      
          this.$http.fetchLogin(this.user).then(res=>{
            console.log(" this.$http.fetchLogin",res)
            //  this.$router.push('/')
            // console.log(this.$tips)
            //第一步：登录成功后把token存储在localStorage中
            localStorage.setItem('token',res.token)
            //第二步，跳转到系统内部首页
            this.$router.history.replace('/')

            //token是后端根据用户登录信息生成的加密字符串。用于鉴权(识别用户信息)
            //它之所以流行，因为安全。它是固定长度，由三个部分组成，分别是加密算法，用户信息，密钥
            //在管理系统中，一般情况下，除登录接口外，其它接口都需要token验证
            //当后端验证token成功，才会查询数据给你。
            //前端如何传token给后端？
            // 在请求拦截器中加： config.headers.Authorization = localStorage.getItem('token')
            //当token失败(后端验证它失败时)，后端一般回提示前端token失败。此时，前端要在响应拦截器中重定向到登录页
        })
    
    }
},
}
</script>

<style  lang="scss" scoped>
.qf-login{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color: rgba(84,92,100,1);
    .qf-login-wrap{
        position:absolute;
        top:50%;
        left:50%;
        width:500px;
        background-color: white;
        padding: 25px;
        margin-left:-270px;
        box-sizing:border-box;
        border-radius: 10px;
        height:214px;
        margin-top:-100px;
    }
}
</style>