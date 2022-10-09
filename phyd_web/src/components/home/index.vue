<template>
 <div>
   <br>
   <hr>
   <br>
   <el-descriptions class="margin-top" title="用户信息" :column="2" border style="width:80%;margin: 0 auto;">
      <template slot="extra">
         <el-button type="primary" size="small" @click="handleEdit">编辑用户信息</el-button>
      </template>
      <el-descriptions-item>
         <template slot="label">
            <i class="el-icon-user"></i>
            用户名
         </template>
         {{user.username?user.username:'无数据'}}
      </el-descriptions-item>
      <el-descriptions-item>
         <template slot="label">
            <i class="el-icon-user"></i>
            昵称
         </template>
         {{user.name?user.name:'无数据'}}
      </el-descriptions-item>
      <el-descriptions-item>
         <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
         </template>
         {{user.phone?user.phone:'无数据'}}
      </el-descriptions-item>
      <el-descriptions-item>
         <template slot="label">
            <i class="el-icon-location-outline"></i>
            年龄
         </template>
         {{user.age?user.age:'无数据'}}
      </el-descriptions-item>
      <el-descriptions-item>
         <template slot="label">
            <i class="el-icon-tickets"></i>
            性别
         </template>
         {{user.age?user.age:'无数据'}}
      </el-descriptions-item>
      <el-descriptions-item>
         <template slot="label">
            <i class="el-icon-office-building"></i>
            创建时间
         </template>
         {{user.create_time?user.create_time:'无数据'}}
      </el-descriptions-item>
      <el-descriptions-item>
         <template slot="label">
            <i class="el-icon-office-building"></i>
            关注
         </template>
         {{user.guanzhu?user.guanzhu:'无数据'}}
      </el-descriptions-item>
      <el-descriptions-item>
         <template slot="label">
            <i class="el-icon-office-building"></i>
            粉丝
         </template>
         {{user.fensi?user.fensi:'无数据'}}
      </el-descriptions-item>
   </el-descriptions>

   <el-dialog title="编辑用户" :visible.sync="dialogFormVisible" width="30%" >
      <el-form :model="form" ref="userForm">
         <el-form-item label="昵称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
         </el-form-item>
         <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
         </el-form-item>
         <el-form-item label="性别" :label-width="formLabelWidth">
            <el-input v-model="form.sex" autocomplete="off"></el-input>
         </el-form-item>
         <el-form-item label="手机号" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
         </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
         <el-button @click="dialogFormVisible = false">取 消</el-button>
         <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
   </el-dialog>
 </div>
</template>

<script>
import memoryUtils from "@/utils/memoryUtils";
import storageUtils from "@/utils/storageUtils";
export default {
 data () {
 return {
    user: memoryUtils.user,
    dialogFormVisible:false,
    form: {
       name: '',
       age:'',
       sex:'',
       phone:''
    },
    formLabelWidth: '80px'
 }
 },

 components: {},

 methods: {
   handleadd(){
       this.from = {
          name: '',
          age: '',
          sex: '',
          phone: ''
       };
       this.dialogFormVisible = true;
       // this.$nextTick这个方法作用是，当数据被修改后使用这个方法，会回调获取更新后的dom再渲染出来
       this.$nextTick(() => {
          this.$refs["userForm"].resetFields();
       });
   },
   handleEdit() {
      this.handleadd()
   },
 }
}
</script>

<style scoped>
*{
   padding: 0;
   margin: 0;
}
</style>