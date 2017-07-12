<template>
    <div class="login">
        <text class="title">登录</text>
        <div class="content">
            <input class="input" type="text" value="" v-model="form.mobile" placeholder="请输入手机号码"/>
            <input class="input" type="password" value="" v-model="form.pswd" placeholder="请输入密码"/>
        </div>
        <div class="button-group">
            <text class="button-item" @click="onSubmit">登录</text>
            <text class="button-item" @click="onRegister">注册</text>
        </div>
    </div>
</template>
<script>
    import login from '../service/login'
    export default {
        data () {
            return {
                form: {
                    mobile: '',
                    pswd: '',
                    rememberMe: false
                }
            }
        },
        methods: {
            onSubmit () {
                login.submitLogin.bind(this)({form: this.form}, (data) => {
                    this.message = data.resultData.resultMsg
                    console.log(this.message)
                    this.$router.replace('register')
                }, (err) => {
                    this.message = err
                    console.log(err)
                })
            },
            onRegister () {
                this.$router.replace('register')
            }
        }
    }
</script>
<style scoped>
    .login{
        margin: 0 auto;
        justify-content:center;
        align-items:center;
    }
    .title{
        font-size: 50px;
    }
    .content{
        margin: 50px;
    }
    .input{
        width: 700px;
        height: 80px;
        margin: 10px;
        padding: 10px;
    }
    .button-item{
        padding: 10px 20px;
        margin: 10px;
        font-size: 40px;
        width: 200px;
        height: 100px;
        background-color: #ffebcd;
        text-align: center;
        line-height: 80px;
    }
    .button-group{
        flex-direction:row;
        justify-content:space-around;
    }
</style>
