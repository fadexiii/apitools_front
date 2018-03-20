<template>
  <div id="container">
    <div id="login">
      <h3>
        系统登录
      </h3>
      <div>
        <span>
           <img src="@/assets/login/account.png">
        </span>
        <input type="text" :placeholder="placeholder.username" :value="username" @focus="onfocus('username')"
               @blur="onblur('username')"/>
      </div>
      <div>
         <span>
           <img src="@/assets/login/password.png">
        </span>
        <input :type="type" :placeholder="placeholder.password" :value="password" @focus="onfocus('password')"  @blur="onblur('password')"/>
        <span>
           <img :src="img" @click="togglePassword" class="img">
        </span>
      </div>
      <div>
         <span>
           <img src="@/assets/login/code.png">
        </span>
        <input type="text" :placeholder="placeholder.code" :value="code" @focus="onfocus('code')"  @blur="onblur('code')"/>
      </div>
      <div class="button">
        <button class="btn-login" @click="login">登&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp录</button>
      </div>
      <div class="button">
        <button>注册</button>
        <button class="btn-forget">忘记密码</button>
      </div>
    </div>
  </div>
</template>
<script>
  import fetch from '@/common/fetch'

  export default {
    components: {},
    data() {
      return {
        'img': require('@/assets/login/hiddenpassword.png'),
        'type': 'password',
        'username': '',
        'password': '',
        'code': '',
        'placeholder': {
          'username': '用户名',
          'password': '密码',
          'code': '验证码',
          'default': {
            'username': '用户名',
            'password': '密码',
            'code': '验证码',
          }
        }
      }
    },
    methods: {
      togglePassword() {
        if (this.type === 'password') {
          this.type = 'text';
          this.img = require('@/assets/login/showpassword.png');
        } else {
          this.type = 'password';
          this.img = require('@/assets/login/hiddenpassword.png');
        }
      },

      login() {
        fetch({
          url: 'login',
          data: {username: this.username, password: this.password, code: this.code},
          method: 'post'
        }).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      },

      onfocus(name) {
        this.placeholder[name] = '';
      },

      onblur(name) {
        this.placeholder[name] = this.placeholder.default[name];
      }

    }
  }
</script>
<style lang="scss">
  #container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2d3a4b;
    height: 100%;
    #login {
      width: 400px;
      height: 520px;
      div {
        display: flex;
        height: 36px;
        width: 100%;
        border: solid 1px rgba(255, 255, 255, 0.1);
        margin-top: 5%;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 4%;
        }
        .img {
          cursor: pointer;
        }
        input {
          height: 100%;
          width: 80%;
          border: none;
          padding: 0;
          background-color: transparent;
          outline: none;
          caret-color: white;
          margin-left: 2%;
          color: white;
          &::placeholder {
            color: #bfcbd9;
          }
        }
      }
      h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #eee;
        font-size: 26px;
        height: 35px;
      }
      .button {
        background-color: transparent;
        border: none;
        border-radius: 5px;
        button {
          width: 48%;
          background-color: #20a0ff;
          border: none;
          border-radius: 5px;
          color: #eee;
          cursor: pointer;
          &:hover {
            background-color: #2fc5ff;
          }
        }
        .btn-forget {
          margin-left: 4%;
        }

        .btn-login {
          width: 100%;
          background-color: #20a0ff;
          border: none;
        }
      }
    }
  }
</style>
