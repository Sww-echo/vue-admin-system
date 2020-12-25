<template>
  <div class="header">
    <div class="header-left-btn">
      <i class="el-icon-s-unfold" @click="handleLeftClick"></i>
      <span>后台管理系统</span>
    </div>
    <el-dropdown size="medium">
      <div class="block">
        <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="handleClickGr"
          >个人中心</el-dropdown-item
        >
        <el-dropdown-item @click.native="handleClick"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
    <!-- <el-button @click="handleClick">按钮</el-button> -->
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      squareUrl:
        "http://babyimage.cdn.bcebos.com/common/f95dd357b99daa9ad5ff0eed5a008dc1000510000510.jpg"
    };
  },
  methods: {
    handleLeftClick() {
      this.$emit("myCollapse");
    },
    // 点击退出登录 清除本地localStorage
    handleClick() {
      // localStorage.setItem("is_login", false);
      localStorage.removeItem("is_login");
      window.location.reload();
    },
    handleClickGr() {
      this.$message({
        type: "warning",
        message: "没有个人中心/(ㄒoㄒ)/~~"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 70px;
  background: #242f42;
  display: flex;
  justify-content: space-between;
  .header-left-btn {
    color: white;
    font-size: 22px;
    line-height: 70px;
    .el-icon-s-unfold {
      display: inline-block;
      margin: 0 20px;
    }
  }
  .block {
    margin-top: 15px;
    margin-right: 20px;
  }
}
</style>
