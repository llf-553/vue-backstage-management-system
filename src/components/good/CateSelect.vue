<template>
  <div class="qf-cate-select">
       <el-select
        v-model="cate" 
        placeholder="请选择品类" 
        @change='change'
        :clearable="clearable"
        :size="size"
        >
            <el-option
                v-for="item in cateArr"
                :key="item.id"
                :label="item.cate_zh"
                :value="item.cate">
            </el-option>
        </el-select>
  </div>
</template>

<script>
export default {
    props :{
    value:{
      type:String,
      required:false,
      default:''
    },
    size:{
      type:String,
      required:false,
      default:'medium'
    },
    clearable:{
         type:Boolean,
          required:false,
          default:false
    }
  },  
data() {
    return {
      cate:'',
         cateArr:[]
    }
},
mounted() {
  this.$http.fetchAllcate().then(res=>{
    console.log("品类列表",res)
    this.cateArr=res.list
  })
},
methods: {
  change(){
    this.$emit('input',this.cate)
     this.$emit('change')
  }
    
  
},
}
</script>

<style>

</style>