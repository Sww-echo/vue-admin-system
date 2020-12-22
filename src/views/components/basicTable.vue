<template>
  <div class="basicTable page">
    <div class="tableTitle">
      <i class="el-icon-tickets"></i>
      <span>基础表格</span>
    </div>
    <div class="content">
      <div class="handleBox">
        <el-button
          type="primary"
          icon="el-icon-delete"
          size="small"
          class="tableBtn"
          >批量删除</el-button
        >
        <el-select
          v-model="value"
          placeholder="地址"
          size="small"
          class="tableSelect"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input
          v-model="input"
          placeholder="请输入内容"
          size="small"
          class="tableInput"
        ></el-input>
        <el-button type="primary" icon="el-icon-search" size="small"
          >搜索</el-button
        >
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        class="tableHead"
        border
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="ID" label="ID" width="120"></el-table-column>
        <el-table-column prop="username" label="用户名" width="120">
        </el-table-column>
        <el-table-column prop="balance" label="账户余额" width="120">
        </el-table-column
        ><el-table-column prop="userIcon" label="头像(查看大图)" width="120">
          <div class="demo-image__preview">
            <el-image
              style="width: 40px; height: 40px"
              :src="url"
              :preview-src-list="srcList"
            >
            </el-image>
          </div> </el-table-column
        ><el-table-column prop="address" label="地址" width="120">
        </el-table-column
        ><el-table-column prop="state" label="状态" width="120">
          <el-tag type="success">成功</el-tag>
        </el-table-column>
        <el-table-column prop="regTime" label="注册时间" width="120">
        </el-table-column>
        <el-table-column prop="handle" label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="tableFooter">
        <el-pagination
          :page-size="100"
          background
          layout="prev, pager, next"
          :total="500"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  username: "basicTable",
  data() {
    return {
      input: "",
      options: [
        {
          value: "选项1",
          label: "广东省"
        },
        {
          value: "选项2",
          label: "北京市"
        },
        {
          value: "选项3",
          label: "天津市"
        }
      ],
      value: "",
      tableData: [
        {
          ID: 1,
          username: "王小虎",
          balance: 100,
          userIcon: "img",
          address: "上海市普陀区",
          state: "成功",
          regTime: "2020-10-10",
          handle: "修改"
        },
        {
          ID: 2,
          username: "王小虎",
          balance: 200,
          userIcon: "img",
          address: "上海市普陀区",
          state: "成功",
          regTime: "2020-10-10",
          handle: "修改"
        }
      ],
      multipleSelection: [],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
      ]
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit() {}
  }
};
</script>

<style>
.basicTable {
  font-size: 14px;
  padding: 10px;
  background: #fff;
}
.tableTitle {
  margin-bottom: 10px;
  color: #606266;
  font-size: 14px;
  display: inline-block;
  font-family: Helvetica, "PingFang SC";
  margin-left: 10px;
}
.content {
  padding: 30px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  border: 1px solid #eee;
}
.handleBox {
  height: 32px;
  margin-bottom: 20px;
}
.tableBtn {
  margin-right: 10px;
}
.tableSelect {
  width: 120px;
}
.el-icon-tickets {
  margin-right: 10px;
}
.tableInput {
  width: 300px;
  padding: 0 10px;
}
.el-table td,
.el-table th {
  text-align: center;
}
.tableFooter {
  padding: 2px 5px;
  margin: 20px;
  text-align: right;
}
</style>
