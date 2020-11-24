<template>
    <div>
    <div class="login" >
        <div class="infobtn" @click="backToIndex"> 返回首页</div>
        <div class="welcome">
            <img src="../../assets/img/bg/welcome.png">
            <h1 class="logintitle">登录</h1>
        </div>
        <div class="login-form">
            <div class="login-inp"><label>名称</label><input type="text" v-model="name"></div>
            <div class="login-inp"><label>密码</label><input type="password" v-model="password"></div>
            <div class="login-inp" @click="login"><a href="#">立即登录</a></div>
        </div>
        <div class="login-txt" ><a @click="ToRegister">没有账号？去注册</a></div>
        
    </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
    export default {
        data(){
            return{
                name:"",
                password:"",
                code:0
            }
        },
        methods:{
            ToRegister(){
                console.log('去注册')
                this.$router.push({
                    path:"/register"
                })
            },
            backToIndex(){
                this.$router.push({
                    path:"/index"
                })
            },
            login(){
                this.$store.commit('people/login',{
                    name:this.name,
                    password:this.password
                });  
                this.code = this.$store.state.people.code;  
                
                if(this.code ==1){
                    Toast('登陆成功');
                    console.log(this.name)
                    
                    this.$router.push({
                        path:'/index'
                    })
                }else{
                    Toast('用户名或密码错误')
                }
            }
        },
        created(){
            
        }
    }
</script>

<style lang="scss" scoped>
@charset "utf-8";
html,body,div,p,form,label,ul,li,dl,dt,dd,ol,img,button,b,em,strong,small,h1,h2,h3,h4,h5,h6{margin:0;padding:0;border:0;list-style:none;font-style:normal;}
body{font-family:SimHei,'Helvetica Neue',Arial,'Droid Sans',sans-serif;font-size:14px;color:#333;background:#f2f2f2;}
a, a.link{color:#666;text-decoration:none;font-weight:500;}
a, a.link:hover{color:#666;}
h1,h2,h3,h4,h5,h6{font-weight: normal;}

.login{width:100%;height:100%;background:url('../../assets/img/bg/20190409.jpg') no-repeat;background-size:cover;position:fixed;z-index:1;}
.welcome{width:100%;margin:25% 0;}
.welcome img{width:100%;}
.login-inp{margin:0 30px 15px 30px;border:1px solid #fff;border-radius:25px;}
.login-inp label{width:4em;text-align:center;display:inline-block;color:#fff;}
.login-inp input{line-height:40px;color:#fff;background-color:transparent;border:none;outline: none;}
.login-inp a{display:block;width:100%;text-align:center;line-height:40px;color:#fff;font-size:16px;letter-spacing:5px;}
.login-txt{text-align:center;color:#fff;}
.login-txt a{color:#fff;padding:0 5px;}
.logintitle{margin-top:40px;text-align: center;color:#fff;font-size: 30px;}
.infobtn{width:60px;height:30px;color:#fff;font-size: 13px;margin:10px 10px;}
</style>