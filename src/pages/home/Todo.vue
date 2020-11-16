<template>
  <div>
      <h1>TodoList</h1>
      <h1 v-text='$store.state.msg'></h1>
      <hr/>
      <div>
          <input type="text" @keyup.enter="confirm" v-model="task"><br/>
            <div>总共有 <span v-text='total'></span> 条任务</div>
            <div v-for='item in list' :key='item.id'>
                <span v-text='item.id'></span>
                <span>-----</span>
                <span v-text='item.task'></span>
                <span>-----</span>
                <span @click='remove(item)'>删除</span>
    </div>
      </div>
  </div>
</template>


<script>

import { mapGetters, mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            task:''
        }
    },
    computed: {
      ...mapState('todo',['list']),
     ...mapGetters('todo',['total'])
    },
  mounted() {
      console.log("store",this.$store)
  },
  methods: {
    ...mapMutations('todo',['addTask','delTask']),
      // 如果一定要修改映射进来的变量的名字，写法参考如下：
    // ...mapMutations('todo', {
    //   addTask2: (commit, payload)=>{
    //     commit('addTask', payload)
    //   },
    //   delTask2: (commit, payload) => {
    //     commit('delTask', payload)
    //   }
    // }),
       // 向状态管理中添加一条任务
      confirm(){
            // 向Vuex提交添加任务的申请
          // this.$store.commit('addTask',this.task)
          this.addTask(this.task)
        this.task=""
      },
       // 删除一条任务
       remove(item){
            // 向Vuex提交删除任务的申请
      // this.$store.commit('delTask', item.id)
      this.delTask(item.id)
       }
  },
}
</script>

<style>

</style>