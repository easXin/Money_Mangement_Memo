/* eslint-disable */ 
<template>
    <div class="register">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">
                    Backend Management System
                </span>
                <!--
                    rules: validator  ref: take form info
                    :model -> formName
                    v-model : data binding

                -->
                <el-form :model="registerUser" :rules="rules" ref="registerForm" label-width="90px" class="registerForm">
                    <el-form-item label="Username" prop="name">
                        <el-input type="text" v-model="registerUser.name" placeholder="Please enter your username"></el-input>
                    </el-form-item>
                    <el-form-item label="Email" prop="email">
                        <el-input type="text" v-model="registerUser.email" placeholder="Please enter your email"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                        <el-input type="password" v-model="registerUser.password" placeholder="Please enter your password"></el-input>
                    </el-form-item>
                    <el-form-item label="Confirm" prop="password2">
                        <el-input type="password" v-model="registerUser.password2" placeholder="Please re-enter your password"></el-input>
                    </el-form-item>
                    <el-form-item label="Login as ">
                        <el-select v-model="registerUser.identity" placeholder="Select indentity">
                            <el-option label="admin" value="manager"></el-option>
                            <el-option label="employee" value="employee"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" class="submit_btn" @click="submitForm('registerForm')">Register</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </section>
    </div>
</template>
<script>
/* eslint-disable */ 
    export default {
        name: "register",
        components:{},
        data() {
               // custom validator
            var pwValidator = (rule, val, callback) => {
                if (val !== this.registerUser.password) {
                    callback(new Error('Two passwords don\'t match!'));
                } else {
                    callback();
                }
            };

        return {
                registerUser:{
                    name:"",
                    email:"",
                    password:"",
                    password2:"",
                    identity:""
                },
                rules: {
                        name: [
                            {
                                required:true,
                                message:"Please fill out the username",
                                trigger:'blur'
                            },
                            {
                                min:2,
                                max:30,
                                message:"Use 2 characters or more for your username",
                                trigger:'blur'
                            }
                        ],
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
                        password2: [
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
                            },
                            {
                                validator : pwValidator,
                                trigger:"blur"
                            }
                        ],
                        identity:[
                            {
                                required:true,
                                message:"Select your identity",
                                trigger:'blur'
                            }
                        ]
                }
            };
        },
        methods: {
            /* eslint-disable */ 
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        // make cross-origin request 
                        this.$axios.post("/api/users/register",this.registerUser)
                        .then(res => {
                            this.$message({
                                message:'Account has been created successfully',
                                type:'success'
                            });
                        })
                        this.$router.push("/login");
                    }
                });
            }
        }
    }
</script>

<style scoped>
    *{
        font-family:courier,arial,helvetica;
    }
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
    .form_container .manage_tip{
        font-family :"Microsoft YaHei";
        font-weight: bold;
        font-size:26px;
        color:#fff;
    }
    .registerForm{
        margin-top:20px;
        color:#fff;
        background-color:rgb(2, 2, 2);
        padding: 20px 40px 20px 20px;
        border-radius: 5%;
        box-shadow: 0px 5px 10px #cccc;
        opacity: 0.7;
    }
    .submit_btn{
        width:100%;
    }
</style>