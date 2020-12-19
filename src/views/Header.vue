<template>
  <div class="header">
    <div class="header-left-btn">
      <i class="el-icon-location" @click="handleLeftClick"></i>
      <span>后台管理系统</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    handleLeftClick() {
      this.$emit("myCollapse");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 70px;
  background: #242f42;
  .header-left-btn {
    color: white;
    font-size: 22px;
    line-height: 70px;
    .el-icon-location {
      display: inline-block;
      margin: 0 20px;
    }
  }
}
</style>
