<template>
<div>
  <h1>音乐列表</h1>
  <div>
    <input type="text" v-model="star" @keyup.enter="seach">
  </div>
  <div v-for='item in musicList' :key='item.id' @click="skipToDetail(item)">
      <span v-text='item.id'></span>
      <span>----</span>
      <span v-text='item.name'></span>
  </div>
</div>
</template>

<script>

import{ mapState,mapActions } from 'vuex'   //从vuex中引入mapState

export default {
 data: function() {
    return {
      star:"",
      // list: [ ]
    }
  },
  computed:{
    //通过mapstate方法，将music这个分行以及分行中的musicList数据映射进来。
    //在当前页面中就可以通过this.musicList访问
    ...mapState('music',['musicList'])  //music命名空间,第二个参数是要用的变量
  },
  mounted() {
   
  },
  methods: {
    ...mapActions('music',["getMusic"]), //将getMusic这个方式从music这个分行映射进来
      skipToDetail(item){
          //编程式路由导航
          //可以在这里写其它业务逻辑
         //this.$router.history.push('/music/detail/'+item.id)
          this.$router.push('/music/detail/'+item.id)
           // push()   ：进入下一个路径
         // replace() : 替换当前路径
         // back() :返回上个页面
      },
      seach(){
 let str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace =txt.yqq.center&searchid=48297577300829329&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%BC%A0%E6%9D%B0&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
   let params ={}
   str.split("&").map(ele=>{
     let arr =ele.split("=")
     params[arr[0]]=arr[1]
   })
   //params.w=decodeURI(params.w)  //将URL编码转为中文
   params.w=this.star
   params.n=20
  //  this.$store.dispatch('getMusic',params) //state-->actions 传参
  this.getMusic(params)
   //调接口
 
      }
  }
}
</script>

<style>

</style>