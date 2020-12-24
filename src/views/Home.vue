<template>
  <div class="home">
    <Header @myCollapse="handleCollapse"></Header>
    <div class="flexBox">
      <div class="menu" ref="menu">
        <el-menu
          class="el-menu-vertical-demo"
          @select="handleSelect"
          :collapse="isCollapse"
          background-color="rgb(50,65,87)"
          text-color="rgb(173,188,205)"
          active-text-color="rgb(32, 160, 255)"
          :unique-opened="true"
          :default-active="nowShow"
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
import { mapMutations, mapState } from "vuex";

Vue.use(Button);
export default {
  name: "home",
  components: {
    [Header.name]: Header,
    [NavTop.name]: NavTop
  },
  props: {},
  data() {
    return {
      isCollapse: false
    };
  },
  watch: {
    $route(to) {
      this.changeNowShow(to.path);
      this.addNavList(to.path);
    }
  },
  methods: {
    // 点击菜单列
    handleSelect(path) {
      // console.log(this.nowShow);
      // console.log(path);
      this.addNavList(path);
      // 传递当前显示页
      this.changeNowShow(path);
    },
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    ...mapMutations({
      addNavList: "home/addNav",
      changeNowShow: "home/changeShow"
    })
  },
  computed: {
    ...mapState({
      nowShow: state => state.home.nowShow
    })
  },
  mounted() {
    // console.log(window.location);
    if (window.location.hash === "#/") {
      this.addNavList("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: calc(100vh - 70px);
}
.el-menu-vertical-demo {
  height: calc(100vh - 70px);
}
.el-menu-item:hover {
  background-color: #283446 !important;
}
.el-submenu__title:hover {
  background-color: #283446 !important;
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
    background-color: #f0f0f0;
    position: absolute;
    width: 100%;
    height: calc(100% - 30px);
    top: 50px;
    left: 0;
    bottom: 0;
    overflow-y: auto;
  }
}
</style>
