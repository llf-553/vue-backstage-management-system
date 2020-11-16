<template>
<div>
    <h1>发现</h1>
     <hr/>
     <div class='tab'>
         <!-- <span @click='TabChange(1)' :class='{"on": tabIdx==1}'>今日数据</span>
          <span  @click='TabChange(2)' :class='{"on": tabIdx==2}'>昨日数据</span> -->
          <router-link tag="span" exact-active-class="on" to="/find/">今日数据</router-link>
          <router-link tag="span" exact-active-class="on" to="/find/t2">昨日数据</router-link>
     </div>
     <div class='content2'>
         <router-view></router-view>
     </div>
</div>
</template>

<script>
export default {
    data:function(){
        return{
            tabIdx:1
        }
    },
    methods: {
      TabChange(index){
          this.tabIdx=index
this.$router.history.push('/find/t'+index)
      }
    },
}
</script>
<style scoped>
/* scoped：局部作用域，只在当前页面有效 */
.tab{
    line-height: 35px;
    display: flex;
}
.tab span{
    flex:1;
    border:solid 1px black;
    text-align: center;
    background-color:#fff
}
.tab span.on{
color:chartreuse;
/* background-color:red; */
}
.content2{
    text-align: center;
}
</style>