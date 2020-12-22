<template>
  <div class="tabOption page">
    <el-breadcrumb class="breadcrumb">
      <el-breadcrumb-item
        ><i class="el-icon-message message"></i>tap选项卡</el-breadcrumb-item
      >
    </el-breadcrumb>
    <div class="tapOption-wrap">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- 未读消息 -->
        <el-tab-pane :label="`未读消息(${alldata.unread.length})`" name="first">
          <el-table :data="alldata.unread" type="flex" :show-header="false">
            <el-table-column>
              <template slot-scope="scope">
                <div class="column1">
                  <span class="message_tit">{{ scope.row.message }}</span>
                </div>
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
        <el-tab-pane
          :label="`已读消息(${alldata.readed.length})`"
          name="second"
        >
          <el-table :data="alldata.readed" type="flex" :show-header="false">
            <el-table-column>
              <template slot-scope="scope">
                <div class="column1">
                  <span class="message_tit">{{ scope.row.message }}</span>
                </div>
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
        <el-tab-pane :label="`回收站(${alldata.recycle.length})`" name="third">
          <el-table :data="alldata.recycle" type="flex" :show-header="false">
            <el-table-column>
              <template slot-scope="scope">
                <div class="column1">
                  <span class="message_tit">{{ scope.row.message }}</span>
                </div>
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
      activeName: "first",
      alldata: {
        unread: [
          {
            message: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
            time: "2020-12-21 12:00:00"
          },
          {
            message: "今晚12点整发大红包，先到先得",
            time: "2020-12-21 12:00:00"
          }
        ],
        readed: [
          {
            message: "【系统通知】你的红包已过期",
            time: "2020-12-21 12:00:00"
          }
        ],
        recycle: [
          {
            message: "【系统通知】今晚抽大奖，赶紧预约吧",
            time: "2020-12-21 12:00:00"
          }
        ]
      }
    };
  },
  methods: {
    handleClick: function(tab, event) {
      console.log(tab, event);
    },
    // 标记为已读
    markReaded: function(scope) {
      this.alldata.readed.push(this.alldata.unread[scope.$index]);
      this.alldata.unread.splice([scope.$index], 1);
    },
    // 标记全部
    allMarkReaded: function() {
      this.alldata.readed = this.alldata.readed.concat(this.alldata.unread);
      this.alldata.unread = [];
    },
    deleteHandle: function(scope) {
      this.alldata.recycle.push(this.alldata.readed[scope.$index]);
      this.alldata.readed.splice(scope.$index, 1);
    },
    allDeleteHandle: function() {
      this.alldata.recycle.concat(this.alldata.readed);
      this.alldata.readed = [];
    },
    emptyAll: function() {
      this.alldata.recycle = [];
    },
    restore: function(scope) {
      this.alldata.readed = this.alldata.readed.concat(
        this.alldata.recycle[scope.$index]
      );
      this.alldata.recycle.splice(scope.$index, 1);
    }
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
