/* eslint-disable */ 
<template>
    <div class="login">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">
                    Backend Management System
                </span>

                <el-form :model="loginUser" :rules="rules" ref="loginForm" label-width="60px" class="loginForm">
                    <el-form-item label="Email" prop="email">
                        <el-input type="text" v-model="loginUser.email" placeholder="Please enter your email"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                        <el-input type="password" v-model="loginUser.password" placeholder="Please enter your password"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">Login</el-button>
                    </el-form-item>
                    <div class="tiparea">
                        <p style="color:white;">Create a new account ?
                            <router-link to='/register'>Register</router-link>
                        </p>
                    </div>
                </el-form>
                    
            </div>
        </section>
    </div>
</template>
<script>
/* eslint-disable */
    export default {
        name: "login",
        components:{},
        data() {
            return {
                    loginUser:{
                        email:"",
                        password:"",
                    },
                    rules: {
                            email: [
                                {
                                    type:"email",
                                    required:true,
                                    message:"Invalid format",
                                    trigger:'blur'
                                }
                            ],
                            password: [
                                {
                                    required:true,
                                    message:'Missing password',
                                    trigger:'blur'
                                },
                                {
                                    min:6,
                                    max:30,
                                    message:"Use 6 or more characters for your password ",
                                    trigger:'blur'
                                }
                            ],
                    }
                };
        },
        methods: {
            /* eslint-disable */ 
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        // make cross-origin request 
                        this.$axios.post("api/users/login",this.loginUser)
                        .then(res => {
                            console.log(res);
                            console.log("xxxxxxxxxxx");
                            // destructing the token from the response , then asyncly connect it to my backend code
                            // const {token} = res.data;
                            // store it in the local storage
                            // localStorage.setItem('eleToken',token);
                            // if everything is working as expected, then go to my MAIN UI
                         
                        });
                           this.$router.push("/index");
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login{
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
    .loginForm{
        margin-top:20px;
        background-color:rgb(2, 2, 2);
        padding: 20px 40px 20px 20px;
        border-radius:5px;
        box-shadow:0px 5px 10px #ccc;
        opacity:0.7;
    }
    .submit_btn{
        width:100px;
    }
    .tiparea{
        text-align: right;
        font-size: 12px;
        color:#333;
    }
    .tiparea p a{
        color: #409eff;
    }
</style>