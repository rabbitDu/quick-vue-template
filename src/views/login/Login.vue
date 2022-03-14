<template>
  <div class="login">
    <el-image :src="logoUrl" class="logo"></el-image>
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <h3 class="title">系统名称</h3>
      <el-form-item prop="username" >
        <span class="form-label">用户名：</span>
        <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="请输入工号">
        </el-input>
      </el-form-item>
      <el-form-item prop="password" >
        <span class="form-label">密码：</span>
        <el-input
            v-model="loginForm.password"
            type="password"
            auto-complete="off"
            placeholder="请输入密码"
            @keyup.enter.native="handleLogin"
        >
        </el-input>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;color: #ffffff">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button
            :loading="loading"
            type="primary"
            style="width:100%;"
            @click.native.prevent="handleLogin"
        >
          <span class="login-text" v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import {login} from "../../api/login"
import logo from "@/assets/images/logo.png"


export default {
  name: "Login",
  data() {
    return {
      codeUrl: "",
      cookiePassword: "",
      logoUrl: logo,
      loginForm: {
        username: "",
        password: "",
        rememberMe: false,
        uuid: ""
      },
      loginRules: {
        username: [
          {required: true, trigger: "blur", message: "用户名不能为空"}
        ],
        password: [
          {required: true, trigger: "blur", message: "密码不能为空"}
        ],
      },
      loading: false,
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  created() {
    this.getCookie();
  },
  methods: {
    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get('rememberMe')
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password === undefined ? this.loginForm.password : password,
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      };
    },
    handleLogin() {
      let me = this;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          me.loading = true;
          if (me.loginForm.rememberMe) {
            Cookies.set("username", me.loginForm.username, {expires: 30});
            Cookies.set("password", me.loginForm.password), {expires: 30};
            Cookies.set('rememberMe', me.loginForm.rememberMe, {expires: 30});
          } else {
            Cookies.remove("username");
            Cookies.remove("password");
            Cookies.remove('rememberMe');
          }
          me.$store.dispatch("Login", me.loginForm).then(() => {
            me.$router.push({path: me.redirect || "/"}).catch((error) => {
            });
          }).catch(() => {
            me.loading = false;
          });
        }
      });
    }
  }
};
</script>

<style >
.login {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("~@/assets/images/login-background.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}

.title {
  font-size: 28px;
  color: #fff;
  font-weight: 600;
  text-align: center;
}
.logo{
  position: absolute !important;
  left: 20px;
  top: 20px;
  width: 240px;
}

.login-form {
  border-radius: 6px;
  background: #537dff8a;
  width: 400px;
  padding: 25px;


}
.el-input {
  height: 38px;
}

.el-input  input {
  height: 38px;
}

.input-icon {
  height: 39px;
  width: 14px;
  margin-left: 2px;
}

.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}

.login-code {
  width: 33%;
  height: 38px;
  float: right;

}

.login-code img {
  cursor: pointer;
  vertical-align: middle;
}

.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}

.login-code-img {
  height: 38px;
}
.form-label{
  color: #ffffff;
}
.login-text{
  font-size: 18px;
  font-weight: 600;
}
</style>
