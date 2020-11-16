<template>
  <div>
  <h1>音乐详情页</h1>
</div>
</template>

<script>
export default {
   // 使用props来接收路由中的动态参数
//   props:{
//   id:{
//   type:String,
//   required:true
// }
//   },
mounted() {
  //接收id,内置对象$route中的键params中的id(这只是个名字，根据router.js中传的名字)
   let id=this.$route.params.id
    // 根据id来调接口，获取音乐详情
    // let id =this.id
  console.log('音乐id', id)
},
}
</script>

<style>

</style>