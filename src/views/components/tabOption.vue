<template>
  <div class="tabOption page">
    <el-breadcrumb class="breadcrumb">
      <el-breadcrumb-item
        ><i class="el-icon-message message"></i>tap选项卡</el-breadcrumb-item
      >
    </el-breadcrumb>
    <div class="tapOption-wrap"  >
      <el-tabs v-model="activeName">
        <!-- 未读消息 -->
        <el-tab-pane :label="`未读消息(${this.$store.state.unread.length})`" name="first">
          <el-table :data="this.$store.state.unread" type="flex" :show-header="false" >
            <el-table-column >
              <template  slot-scope="scope">
                <div class="column1"><span class="message_tit">{{scope.row.message || ''}}</span></div>
              </template>
            </el-table-column>
            <el-table-column prop="time" width="180px"></el-table-column>
            <el-table-column width="160px">
              <template slot-scope="scope">
                <el-button type="plain" @click="markReaded(scope)"
                  >标位已读</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-button type="primary" class="allSelects" @click="allMarkReaded"
            >全部标记为已读</el-button
          >
        </el-tab-pane>
        <!-- 已读消息 -->
        <el-tab-pane :label="`已读消息(${this.$store.state.readed.length})`" name="second">
          <el-table :data="this.$store.state.readed" type="flex" :show-header="false" >
            <el-table-column >
              <template  slot-scope="scope">
                <div class="column1"><span class="message_tit">{{scope.row.message}}</span></div>
              </template>
            </el-table-column>
            <el-table-column prop="time" width="180px"></el-table-column>
            <el-table-column width="160px">
              <template slot-scope="scope">
                <el-button type="danger" @click="deleteHandle(scope)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-button type="primary" class="allSelects" @click="allDeleteHandle"
            >删除全部</el-button
          >
        </el-tab-pane>
        <!-- 回收站 -->
        <el-tab-pane :label="`回收站(${this.$store.state.recycle.length})`" name="third">
          <el-table :data="this.$store.state.recycle" type="flex" :show-header="false" >
            <el-table-column >
              <template  slot-scope="scope">
                <div class="column1"><span class="message_tit">{{scope.row.message}}</span></div>
              </template>
            </el-table-column>
            <el-table-column prop="time" width="180px"></el-table-column>
            <el-table-column width="160px">
              <template slot-scope="scope">
                <el-button type="plain" @click="restore(scope)">还原</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button type="danger" class="allSelects" @click="emptyAll"
            >清空回收站</el-button
          >
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabOption",
  data() {
    return {
      activeName: "first"
    }
  },
  methods: {
    // 标记为已读
    markReaded: function (scope){
      this.$store.dispatch('markReadedA',scope)
    },
    // 标记全部
    allMarkReaded: function (){
      this.$store.dispatch('allMarkReadedA')
    },
    deleteHandle: function(scope){
      this.$store.dispatch('deleteHandleA',scope)
    },
    allDeleteHandle: function(){
      this.$store.dispatch('allDeleteHandleA')
    },
    emptyAll: function(){
      this.$store.dispatch('emptyAllA')
    },
    restore: function(scope){
      this.$store.dispatch('restoreA',scope)
    }
  },
  created(){
    console.log(this.$store)
  }
};
</script>

<style lang="scss" scoped>
.tabOption {
  padding: 10px;
  .message {
    padding-right: 5px;
  }
  .breadcrumb {
    margin: 10px 0;
  }
}
.tapOption-wrap {
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  .allSelects {
    margin-top: 30px;
  }
  .message_tit {
    color: #409eff;
  }
}
</style>
