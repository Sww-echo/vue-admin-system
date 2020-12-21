<template>
  <div class="home">
    <Header @myCollapse="handleCollapse"></Header>
    <div class="flexBox">
      <div class="menu" ref="menu">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="rgb(50, 65, 87)"
          text-color="rgb(191, 203, 217)"
          active-text-color="rgb(32, 160, 255)"
          :unique-opened="true"
          router
        >
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">系统首页</span>
          </el-menu-item>
          <el-menu-item index="/basictable">
            <i class="el-icon-document"></i>
            <span slot="title">基础表格</span>
          </el-menu-item>
          <el-menu-item index="/taboption">
            <i class="el-icon-setting"></i>
            <span slot="title">tab选项</span>
          </el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">表单相关</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/basicform">基本表单</el-menu-item>
              <el-submenu index="2">
                <span slot="title">三级菜单</span>
                <el-menu-item index="/richtext">富文本编辑器</el-menu-item>
                <el-menu-item index="/markdown">markdown编辑器</el-menu-item>
              </el-submenu>
              <el-menu-item index="/fileupload">文件上传</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/customicon">
            <i class="el-icon-setting"></i>
            <span slot="title">自定义图标</span>
          </el-menu-item>
          <el-menu-item index="/schart">
            <i class="el-icon-setting"></i>
            <span slot="title">schart图表</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">拖拽组件</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/droplist">拖拽列表</el-menu-item>
              <el-menu-item index="/popup">拖拽弹框</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/internationalization">
            <i class="el-icon-setting"></i>
            <span slot="title">国际化功能</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <nav-top></nav-top>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "element-ui";
import Header from "./Header";
import NavTop from "./NavTop";

Vue.use(Button);
export default {
  name: "home",
  components: {
    [Header.name]: Header,
    [NavTop.name]: NavTop
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: calc(100vh - 70px);
}
.el-menu-vertical-demo {
  height: calc(100vh - 70px);
}
.flexBox {
  display: flex;
}
.menu {
  float: left;
}
.right {
  float: left;
  width: 100%;
  position: relative;
  .page {
    position: absolute;
    width: 100%;
    height: calc(100% - 30px);
    top: 30px;
    left: 0;
    bottom: 0;
    background: #f8f8f8;
    overflow-y: auto;
  }
}
</style>
