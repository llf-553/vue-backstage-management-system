<template>
  <div class="qf-layout">
        <el-container>
            <el-aside width="150px">
                <QfAside></QfAside>
            </el-aside>
            <el-container>
                <el-header>
                  <QfHeader></QfHeader>
                </el-header>
                <el-main>
                      <Qfmain></Qfmain>
                    <!-- <QfMain></QfMain> -->
                </el-main>
            
            </el-container>
        </el-container>

</div>
</template>

<script>
export default {
  components:{
      QfAside:()=>import('./QfAside'),  //引入主键
      QfHeader:()=>import('./QfHeader'),
      Qfmain:()=>import('./QfMain')

  }
}
</script>


<style lang='scss' scoped>  //局部,当前页面使用，sass
//   @import '@/assets/css/commont.scss' ;//导入外部的scss样式

 .qf-layout {
        // background-color: $color;
        height:100%;
       .el-container{
            height:100%;
              background-color:rgba(247,248,250,1);
        }
        .el-aside{
            position: relative;
        }
        .qf-aside{
            background-color: #545c64 ;
            height:100%;
            color:white;
             top: 0;
           right:0;
           left:0;
           bottom:0;
           overflow: auto;
           min-width: 150px;
        }
        .el-main{
            position: relative;
        }
        .qf-main{
            background-color:white;
            //   height: 100%;
            
             padding: 20px;
           box-sizing: border-box;
           position:absolute;
           top: 20px;
           right:15px;
           left:20px;
           bottom:0;
           overflow: auto;
           min-width:950px;

        }
        .qf-header{
             background-color:white;
             height: 100%;
             width:100%;
             padding: 0 20px;
        }
        .el-header{
            padding: 0;
            line-height: 60px;
        }
    }

</style>