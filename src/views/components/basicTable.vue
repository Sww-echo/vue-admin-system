<template>
  <div class="basicTable page">
    <div class="tableTitle">
      <i class="el-icon-tickets"></i>
      <span>基础表格</span>
    </div>
    <div class="content">
      <div class="handleBox">
        <!-- 批量删除按钮 -->
        <el-button
          type="primary"
          icon="el-icon-delete"
          size="small"
          class="tableBtn"
          @click="tabledelAll"
          >批量删除</el-button
        >
        <!-- 选择地址 -->
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
        <!-- 搜索框 -->
        <el-input
          v-model="input"
          placeholder="请输入内容"
          size="small"
          class="tableInput"
        ></el-input>
        <!-- 搜索按钮 -->
        <el-button type="primary" icon="el-icon-search" size="small"
          >搜索</el-button
        >
      </div>
      <!-- 表格 -->
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
        <el-table-column prop="id" label="ID" width="120"></el-table-column>
        <el-table-column prop="name" label="用户名" width="120">
        </el-table-column>
        <el-table-column prop="balance" label="账户余额" width="120">
        </el-table-column
        ><el-table-column prop="usericon" label="头像(查看大图)" width="120">
          <!-- 头像图片 -->
          <div class="demo-image__preview">
            <el-image
              style="width: 40px; height: 40px"
              :src="url"
              :preview-src-list="srcList"
            >
            </el-image>
          </div> </el-table-column
        ><el-table-column prop="address" label="地址" width="120">
        </el-table-column>

        <el-table-column
          prop="tag"
          label="状态"
          width="100"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '成功' ? 'success' : 'danger'"
              disable-transitions
              >{{ scope.row.tag }}</el-tag
            >
          </template>
        </el-table-column>

        <el-table-column prop="retime" label="注册时间" width="120">
        </el-table-column>
        <el-table-column prop="handle" label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button size="mini" @click="dialogVisible = true"
              >编辑</el-button
            >
            <!-- 编辑弹框 -->
            <el-dialog title="编辑" :visible.sync="dialogVisible" width="30%">
              <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                  <el-input
                    v-model="form.username"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                  <el-input
                    v-model="form.address"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              class="tableDel"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="tableFooter">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          page-size="10"
          layout="total, prev, pager, next"
          :total="500"
          :page-sizes="[10, 20, 30, 40]"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
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
      multipleSelection: [],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
      ],
      dialogVisible: false,
      form: {
        name: "",
        address: "",
        delivery: false
      },
<<<<<<< HEAD
      formLabelWidth: "90px"
    };
=======
      formLabelWidth: "90px",
      currentPage1: 5
    }
>>>>>>> 1533c47012b2beb7f1519d25c6ec03e25eabbb89
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    tabledelAll() {
      //判断是否批量删除
      //1.全选，删除所有
      //2.非全选，则删除已经选中的数据
      // console.log(this.basicList)

      this.tableData = [];
    },
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
    handleDelete() {
      this.$confirm("确定要删除吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    filterTag(value, row) {
      return row.tag === value;
    }
  },
  computed: {
    ...mapState({
      tableData: state => state.basicList
    })
  },
  created() {
    // console.log(this.basicList[0].data)
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
.tableDel {
  margin: 0 10px;
}
.tableFooter {
  padding: 2px 5px;
  margin: 20px;
  text-align: right;
}
</style>
