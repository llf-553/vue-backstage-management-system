<template>
  <div class=qf-goodadd>
       <h1>商品新增</h1>
      <div class="qf-form">

        <el-form
         :model="info" 
         :rules="rules"
          ref="ruleForm" 
          label-width="100px"
        >
            <el-form-item label="商品名称" prop="name">
              <el-input v-model="info.name"></el-input>
            </el-form-item>

            <el-form-item label="商品描述" prop="desc">
              <el-input type="textarea" v-model="info.desc"></el-input>
            </el-form-item>
            
            <el-form-item label="选择品类" prop="cate">
             <CateSelect v-model="info.cate"></CateSelect>
            </el-form-item>

            <el-form-item label="商品价格" prop="price">
              <el-input-number
                v-model="info.price"  :min="0" label="商品价格">
               </el-input-number>
            </el-form-item>
          
            <el-form-item label="商品图片" prop="img">
              <!--action时用于上传文件（图片）的url-->
              <!-- :on-sucess是图片上传成功时的回调函数-->
               <el-upload
                  :action="$img.imgUpUrl"  
                  list-type="picture-card"
                  :limit='1'
                  :on-success="imgSuccess"
               >
                  <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="info.img" alt="img">
              </el-dialog>
            </el-form-item>

            <el-form-item label="是否热销" prop="hot">
              <el-switch v-model=" info.hot"></el-switch>
            </el-form-item>

             <el-form-item>
              <el-button type="primary" @click="submitForm">添加商品</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
// console.log($tips)
import { CateSelect}from '@/components/'
export default {
  name:"GoodAdd",
  components:{
      CateSelect
  },
  data() {
    return {
      info:{
        name:'',
        desc:'',
        hot:false,
        cate:'',
        price:0,
        img:''

      },
        rules: {
          name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
            { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请填写商品描述', trigger: 'blur' },
            { min: 10, max: 20, message: '长度在 10 到 20 个字符', trigger: 'blur' }
          ],
           cate: [
            { required: true, message: '请选择商品品类', trigger: 'change' },
         
          ]
        },
      
        dialogVisible:false
    }
  },
  methods: {  
    
     imgSuccess(res){
       console.log("图片上传成功",res)
       //当图片上传成功时，把后端返回的url信息赋值给当前表单对象
       this.info.img=res.data.url
    },
    submitForm(){
         console.log('商品信息',this.info)
         this.$http.fetchGoodAddOrEdit(this.info).then(()=>{
           //当商品添加成功时返回到列表页
           this.$router.replace('/good/list')
         })
    }
  },

}
</script>

<style lang="scss" scoped>
.qf-form{
  width:60%;
  margin-top:20px;
}
</style>