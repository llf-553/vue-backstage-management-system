<template>
  <div class="qf-aside">
     <!-- <div v-for='nav in routes'  :key='nav.id'>
        <router-link 
            :to='nav.path'
            tag="div" 
            :exact='nav.exact'
            active-class="on"
            v-text='nav.text'
            v-if='!nav.isNotNav'
        >
        </router-link>
    </div>  -->
 <div class="qf-logo">
   <img :src='$img.logo' alt='logo'>
 </div>
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

     
    
  </el-menu>

  </div>
</template>

<script>
import routes from '@/pages/'
// import img from '@/utils/img.js'
export default {
data() {
    return {
        routes,
       
    }
},
}
</script>

<style lang='scss' scoped>
.qf-aside{
  position:absolute;
  top:0;
  left:0;
  bottom: 0;
  width:135px;
  /* background-color:black; */
  color: white;

&>.content{
  position: absolute;
  top:0;
  bottom: 0;
  left:135px;
  right:0;
  background-color: #eee;
}
& div.on {
  color: red;
}
.qf-logo{
  width:80px;
  height:80px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px auto;
  overflow: hidden;
  &>img{
    width:100%;
    display:block;
    height:100%;
  }
}

}



</style>