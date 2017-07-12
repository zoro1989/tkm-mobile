<template>
    <div id="login">
        <text class="fs50">登录</text>
        <div class="m50">
            <input class="m10 p10" type="text" value="" v-model="form.email" placeholder="请输入账号"/>
            <input class="m10 p10" type="password" value="" v-model="form.pswd" placeholder="请输入密码"/>
        </div>
        <div class="button-group">
            <button class="pt10 pb10 pl20 pr20 m10 fs40" @click="onSubmit">登录</button>
            <button class="pt10 pb10 pl20 pr20 m10 fs40" @click="onRegister">注册</button>
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
                    pswd: ''
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
    #login{
        margin: 0 auto;
        justify-content:center;
        align-items:center;
    }
    #login .button-group{
        flex-direction:row;
        justify-content:space-around;
    }
</style>
