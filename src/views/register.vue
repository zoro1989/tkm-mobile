<template>
    <div id="login">
        <h1>登录45678764567</h1>
        <div>
            <text class="label">用户名</text>
            <input class="input" type="text" value="" v-model="form.email" placeholder="请输入账号"/>
        </div>
        <div>
            <text class="label">密码</text>
            <input class="input" type="password" value="" v-model="form.pswd" placeholder="请输入密码"/>
        </div>

        <div class="rememberMe">
            <text class="label">记住我</text>
            <switch checked="true" v-model="isRememberMe" ></switch>
        </div>
        <div>
            <button @click="onSubmit">登录</button>
            <button @click="onRegister">注册</button>
        </div>
    </div>
</template>
<script>
    import login from '../service/login'
    export default {
        data () {
            return {
                form: {
                    email: '',
                    pswd: '',
                    rememberMe: ''
                },
                isRememberMe: []
            }
        },
        methods: {
            onSubmit () {
                if (this.isRememberMe.length > 0) {
                    this.form.rememberMe = true
                } else {
                    this.form.rememberMe = false
                }
                login.submitLogin.bind(this)({form: this.form}, (data) => {
                    this.message = data.resultData.resultMsg
                    console.log(this,message)
                    this.$router.replace('member-list')
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
    #login{
        width: 300px;
        margin: 0 auto;
    }
    #login .rememberMe{
        text-align: left;
    }
    #login .rememberMe .mu-checkbox{
        margin-left: 20px;
    }
</style>
