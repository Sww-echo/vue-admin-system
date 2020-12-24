<template>
  <div class="navtop">
    <div>
      <el-tag
        v-for="tag in tags"
        :key="tag.label"
        closable
        :effect="$route.path === tag.path ? 'dark' : 'plain'"
        :hit="true"
        size="small"
        :disable-transitions="false"
        @close="handleClose(tag)"
        @click="handleClick(tag)"
      >
        {{ tag.label }}
      </el-tag>
    </div>
    <el-dropdown class="drop_right">
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
      // console.log(tag);
      this.$router.push(tag.path);
      // console.log(this.$route);
    },
    // 关闭其他
    remElse() {
      // console.log(this.nowShow);
      this.remoElseTag();
    },
    // 关闭所有
    remAll() {
      this.removeTag();
      // console.log(this);
      this.$router.push("/");
    },
    ...mapMutations({
      removeTag: "home/remNavTop",
      remoElseTag: "home/remoElseNav"
    })
  },
  computed: {
    ...mapState({
      tags: state => state.home.navTopList,
      nowShow: state => state.home.nowShow
    })
  }
};
</script>

<style lang="scss" scoped>
.navtop {
  display: flex;
  justify-content: space-between;
  .el-tag {
    margin: 15px 6px 0 0;
    cursor: pointer;
  }
  .drop_right {
    margin-right: 10px;
    margin-top: 10px;
  }
}
</style>
