<template>
    <div class="register">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">
                    Backend Management System
                </span>
                <!-- rules: validator  ref: take form info -->
                <el-form :model="registerUser" :rules="rules" ref="registerForm" label-width="80px" class="registerForm">
                    <el-form-item label="Username" prop="name">
                        <el-input type="text" v-model="registerUser.name" placeholder="Please enter your username"></el-input>
                    </el-form-item>
                    <el-form-item label="Email" prop="email">
                        <el-input type="text" v-model="registerUser.email" placeholder="Please enter your email"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                        <el-input type="password" v-model="registerUser.password" placeholder="Please enter your password"></el-input>
                    </el-form-item>
                    <el-form-item label="ConfirmedPassword" prop="password2">
                        <el-input type="password" v-model="registerUser.password2" placeholder="Please re-enter your password"></el-input>
                    </el-form-item>
                    <el-form-item label="ConfirmedPassword" prop="password2">
                        <el-select v-model="registerUser.identity" placeholder="Select indentity">
                            <el-option label="admin" value="manager"></el-option>
                            <el-option label="employee" value="employee"></el-option>
                        </el-select>
                    </el-form-item>



                    <el-form-item>
                        <el-button type="primary" class="submit_btn" @click="resetForm('ruleForm2')">Register</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name: "register",
        components:{},
        data(){
            return{
                registerUser:{
                    name:"",
                    email:"",
                    password:"",
                    passwords:"",
                    identity:""
                }
            }
        }
    };
</script>

<style scoped>
    .register{
        position: relative;
        width:100%;
        height:100%;
        background:url('../assets/bg.jpg') no-repeat center center;
        background-size:100% 100%;
    }
    .form_container{
        width:370px;
        height: 210px;
        position:absolute;
        top:10%;
        left:34%;
        padding:25px;
        border-radius:5px;
        text-align:center;


    }


    .form_container .manage_tip .title{
        font-family :"Microsoft YaHei";
        font-weight: bold;
        font-size:26px;
        color:#fff;
    }
    .registerForm{
        margin-top:20px;
        background-color:#fff;
        padding: 20px 40px 20px 20px;
        border-radius: 5%;
        box-shadow: 0px 5px 10px #cccc;
    }
    .submit_btn{
        width:100%;
    }
</style>
