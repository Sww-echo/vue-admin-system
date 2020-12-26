<!-- 登录页面 -->
<template>
  <div class="myadmin-login">
    <h1>后台管理系统</h1>
    <div class="myadmin-login-form">
      <el-form :model="form" ref="loginForm" :rules="rules">
        <el-form-item label="" prop="username">
          <el-input v-model="form.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            v-model="form.password"
            placeholder="密码"
            show-password
            @keydown.enter.native="handleLogin('loginForm')"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login-button"
            @click="handleLogin('loginForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="login-p">
        <p>温馨提示</p>
        <p>未登录过的新用户，自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { login } from "@/api/api";
export default {
  name: "login",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      form: {
        username: "admin",
        password: "admin"
      },
      rules: {
        username: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 点击登录
    handleLogin: function(loginForm) {
      // console.log("提交信息");
      this.$refs[loginForm].validate(async valid => {
        if (valid) {
          // 发请求 拿数据
          let result = await login({
            user_name: this.form.username,
            password: this.form.password
          });
          //   console.log(result);
          // result.status === 1 登录成功
          // result.status === 0 登录没有成功
          if (result.status === 1) {
            this.$message("登录成功了");
            localStorage.setItem("is_login", true);
            this.$router.push("/");
            window.location.reload();
          } else {
            this.$message({
              message: "登录没有成功",
              type: "warning"
            });
          }
        } else {
          this.$message({
            type: "warning",
            message: "校验没有成功"
          });
        }
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  // created() {
  //   // let flag = localStorage.getItem("is_login");
  // },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
.myadmin-login {
  height: 100vh;
  background-image: url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -200px;
  padding-top: 30px;

  h1 {
    color: white;
    font-weight: 200;
    font-size: 26px;
    text-align: center;
  }

  .myadmin-login-form {
    border-radius: 10px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    width: 300px;
    height: 300px;
    opacity: 0.3;
    &:hover {
      opacity: 1;
    }
    .login-button {
      width: 100%;
    }
    .login-p {
      text-align: center;
      color: red;
    }
  }
}
</style>
