<template>
 <div>
    <el-form :model="form" :rules="rules" ref="form" label-width="80px" class="login-form">
        <el-form-item label="账号" prop="username">
            <el-input type="text" v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请入输密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">登录</el-button>
            <el-button type="primary" @click="dialogFormVisible = true">注册</el-button>
        </el-form-item>
    </el-form>

    <el-dialog title="用户注册" :visible.sync="dialogFormVisible" width="35%">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
 </div>
</template>

<script>
import { login } from "@/api/login.js";
import userApi from "@/api/user.js";
import memoryUtils from "@/utils/memoryUtils";
import storageUtils from "@/utils/storageUtils";
export default {
 data () {
    // 校验规则
    var validatePass = (rule, value, callback) => {
        value = value.trim();
        const length = value && value.length;
        const pwdReg = /^[a-zA-Z0-9_]+$/;
        if (value === "") {
            callback(new Error("请输入账号"));
        } else if (length < 4 || length > 12) {
            callback(new Error("账号长度在4-12位之间"));
        } else if (!pwdReg.test(value)) {
            callback(new Error("账号必须由字母数字下划线构成"));
        } else {
            callback();
        }
    };
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入密码'));
        } else {
            if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
        }
    };
    var validatePass3 = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
        } else {
            callback();
        }
    };

 return {
     dialogFormVisible:false,
     formLabelWidth: '120px',
     ruleForm: {
         pass: '',
         checkPass: '',
         name: ''
     },
     form: {
         username: "",
         password: "",
     },
     rules: {
         username: [
             {
                 required: true,
                 trigger: ["blur", "change"],
             },
         ],
         password: [
             {
                 required: true,
                 message: "请输入密码",
                 trigger: ["blur", "change"],
             },
         ],
         pass: [
             { required: true, validator: validatePass2, trigger: 'blur' }
         ],
         checkPass: [
             { required: true, validator: validatePass3, trigger: 'blur' }
         ],
         name: [
             { required: true, trigger: 'blur', validator: validatePass}
         ]
     },
 }
 },

 components: {},

 methods: {
     onSubmit(formName) {
         this.$refs[formName].validate(async (valid) => {
             if (valid) {
                 let result = await login(this.form.username, this.form.password);
                 result = result.data;
                 if (result.status === 0) {
                     this.$message({
                         message: "登录成功",
                         type: "success",
                     });
                     const user = result.data;
                     storageUtils.saveUser(user);
                     memoryUtils.user = user;
                     this.$router.replace("/");
                 }
                 console.log(this.form.username, this.form.password);
             } else {
                 console.log("error submit!!");
                 return false;
             }
         });
     },
     submitForm(formName) {
         this.$refs[formName].validate(async(valid) => {
             if (valid) {
                 let result = await userApi.add(this.ruleForm)
                 this.dialogFormVisible = false
             } else {
                 console.log('error submit!!');
                 return false;
             }
         });
     },
     resetForm(formName) {
         this.$refs[formName].resetFields();
     }
 }
}
</script>

<style scoped>
.login-countainer {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background: url("../../assets/11.jpg") no-repeat; */
    /* background-size: cover; */
    overflow: hidden;
    border-radius: 20px;
}

.login-form {
    width: 350px;
    margin: 160px auto;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 30px;
    border: 20px;
    border-radius: 20px;
}

.login-title {
    text-align: center;
}
</style>