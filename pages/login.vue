<template>
  <div class="register">
    <div class="signUp">
      <h3>Sign In</h3>
      <div class="input-group">
        <span class="input-group-addon user-icon" id="basic-addon1"></span>
        <input type="text" class="form-control" v-model="username" placeholder="username" autocomplete="off">
        <p v-show="!!errorPromptArr[0].isShow" class="errorPrompt">{{ errorPromptArr[0].userPrompt }}</p>
      </div>
      <div class="input-group">
        <span class="input-group-addon password-icon" id="basic-addon2"></span>
        <input type="password" class="form-control" v-model="password" placeholder="password" autocomplete="new-password">
        <p v-show="!!errorPromptArr[1].isShow" class="errorPrompt">{{ errorPromptArr[1].passwordPrompt }}</p>
        <p v-show="!!isRegisterSuccess.isShow" class="errorPrompt">{{ isRegisterSuccess.prompt }}</p>
      </div>
      <!--<div class="input-group">
        <span class="input-group-addon email-icon" id="basic-addon3"></span>
        <input type="text" class="form-control" v-model="email" placeholder="email">
      </div>-->
      <!-- TODO -->
      <!--<div class="input-group">
        <input type="text" class="form-control" placeholder="输入验证码">
        <span class="input-group-addon" id="basic-addon4" @click="getverify()">获取验证码</span>
      </div>-->
      <div class="input-group" style="border-radius: 25px;">
        <button class="form-control"style="border-radius: 25px;" @click="login()">登录</button>
        <p class="goLogin">没有账号？<a href="http://localhost:3000/register">去注册</a></p>
      </div>
    </div>
  </div>
</template>
<style>
  .register {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(~/assets/images/login-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
  .signUp {
    width: 280px;
    margin: 80px auto 0;
    border-radius: 5px;
    background: rgba(255,255,255,.2);
    padding: 20px 10px;
  }
  .signUp h3 {
    margin-bottom: 30px;
    color: #fff;
  }
  .signUp .input-group-addon {
    background: transparent;
    border: none;
    padding: 6px 15px;
    color: #fff;
  }
  #basic-addon4 {
    background: #09a9c0;
    cursor: pointer;
    border-radius: 5px;
  }
  .signUp .input-group-addon.user-icon {
    background: url(~/assets/images/user-icon.png)no-repeat center
  }
  .signUp .input-group-addon.password-icon {
    background: url(~/assets/images/pwd-icon.png)no-repeat center
  }
  .signUp .input-group-addon.email-icon {
    background: url(~/assets/images/email-icon.png)no-repeat center
  }
  .signUp .form-control {
    box-shadow: inset 0 0 0 rgba(0,0,0,0);
    -webkit-box-shadow: inset 0 0 0 rgba(0,0,0,0);
    background: transparent;
  }
  .input-group {
    margin: 30px auto;
    border-bottom: 1px solid rgba(255,255,255,.7);
    position: relative;
  }
  .input-group p.errorPrompt {
    position: absolute;
    left: 0px;
    bottom: -32px;
    height: 20px;
    line-height: 20px;
    color: red;
  }
  .input-group input {
    border: none;
    color: #fff;
  }
  .input-group button {
    color: #fff;
    outline: none;
    border-bottom: none;
    padding: 6px 50px;
    border-radius: 15px;
  }
  .input-group .goLogin {
    position: absolute;
    right: -65px;
    top: -30px;
  }
  .input-group .goLogin a {
    color: #fff;
  }
  .form-control::-webkit-input-placeholder {
    color: #fff;
  }
  .form-control:-moz-input-placeholder {
    color: #fff;
  }
  .form-control::-moz-input-placeholder {
    color: #fff;
  }
  .form-control:-ms-input-placeholder {
    color: #fff;
  }
</style>

<script>
  import axios from '~/plugins/axios'
  export default {
    layout: 'login',
    data () {
      return {
        username: '',
        password: '',
        errorPromptArr: [
          {userPrompt: '用户名不能为空', isShow: 0},
          {passwordPrompt: '密码不能为空', isShow: 0}
        ],
        isRegisterSuccess: {
          prompt: '',
          isShow: 0
        }
      }
    },
    methods: {
      login () {
        if (this.username === '' || this.password === '') {
          this.errorPromptArr[0].isShow = this.username === '' ? 1 : 0
          this.errorPromptArr[1].isShow = this.password === '' ? 1 : 0
          return
        } else {
          this.errorPromptArr[0].isShow = 0
          this.errorPromptArr[1].isShow = 0
        }
        // let emailReg = /^[0-9a-zA-Z_.]+@[1-9a-zA-Z]+(\.[a-zA-Z]+){1,3}$/
        axios.post('/api/login', {
          username: this.username,
          password: this.password
        }).then((response) => {
          this.isRegisterSuccess.prompt = ['此账号不存在', '登录成功', '密码错误', '登录失败'][response.data.code]
          this.isRegisterSuccess.isShow = 1
          if (response.data.code === 1) { // 登录成功
            let loginInfo = response.data.loginInfo
            localStorage.setItem('loginInfo', JSON.stringify(loginInfo))
            // console.log(localStorage.getItem('loginInfo'))
            this.$router.replace('/')
          }
        })
      }
    }
  }
</script>

