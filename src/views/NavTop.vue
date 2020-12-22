<template>
  <div class="navtop">
    <div>
      <el-tag
        v-for="tag in tags"
        :key="tag.label"
        closable
        type=""
        :hit="true"
        effect="dark"
        size="small"
        :disable-transitions="false"
        @close="handleClose(tag)"
        @click="handleClick(tag)"
      >
        {{ tag.label }}
      </el-tag>
    </div>
    <el-dropdown>
      <el-button type="primary" size="mini">
        更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="remElse()">关闭其他</el-dropdown-item>
        <el-dropdown-item @click.native="remAll()">关闭所有</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "NavTop",
  data() {
    return {};
  },
  methods: {
    // 点击关闭tag标签
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    // 点击tag标签
    handleClick(tag) {
      console.log(tag);
      this.$router.push(tag.path);
    },
    // 关闭其他
    remElse() {
      console.log(this.nowShow);
      this.remoElseTag();
    },
    // 关闭所有
    remAll() {
      this.removeTag();
    },
    ...mapMutations({
      removeTag: "remNavTop",
      remoElseTag: "remoElseNav"
    })
  },
  computed: {
    ...mapState({
      tags: state => state.navTopList,
      nowShow: state => state.nowShow
    })
  }
};
</script>

<style lang="scss" scoped>
.navtop {
  display: flex;
  justify-content: space-between;
  .el-tag {
    margin: 4px 10px 0 0;
    cursor: pointer;
  }
}
</style>
