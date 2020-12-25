<template>
  <div class="systemHome page">
    <el-row class="system_row">
      <el-col :span="8" class="system system_left">
        <el-card class="box-card card_top">
          <div class="top_box">
            <el-avatar :size="120" :src="circleUrl"></el-avatar>
            <div class="top_boxri">
              <h2>admin</h2>
              <p>超级管理员</p>
            </div>
          </div>
          <div class="bot_box">
            <div class="bot_box1">上次登录时间：<span>2020/12/23</span></div>
            <div>上次登录地址：<span>深圳</span></div>
          </div>
        </el-card>
        <el-card class="box-card card_buttom">
          <h2>语言详情</h2>
          <div class="lang" v-for="item in lang" :key="item.color">
            <div>
              {{ item.lang }}
              <el-progress
                :percentage="Number(item.num)"
                :color="item.color"
                :format="format"
              ></el-progress>
            </div>
            <!-- <div>
              Vue
              <el-progress
                :percentage="62.4"
                color="#F1E05A"
                :format="format"
              ></el-progress>
            </div>
            <div>
              react
              <el-progress :percentage="43.8" :format="format"></el-progress>
            </div>
            <div>
              html
              <el-progress
                :percentage="6.6"
                color="#F56C6C"
                :format="format"
              ></el-progress>
            </div> -->
          </div>
        </el-card>
      </el-col>
      <el-col :span="16" class="system system_right">
        <el-row class="mess_top">
          <el-col :span="8" class="mess_item">
            <div>
              <i class="icon1 el-icon-user"></i>
              <section>
                <h3>{{ userVisit }}</h3>
                <span>用户访问量</span>
              </section>
            </div>
          </el-col>
          <el-col :span="8" class="mess_item">
            <div>
              <i class="icon2 el-icon-bell"></i>
              <section>
                <h3>{{ systemNum }}</h3>
                <span>系统消息</span>
              </section>
            </div>
          </el-col>
          <el-col :span="8" class="mess_item">
            <div>
              <i class="icon3 el-icon-shopping-bag-2"></i>
              <section>
                <h3 class="sect3">{{ num }}</h3>
                <span>数量</span>
              </section>
            </div>
          </el-col>
        </el-row>
        <el-card class="todolist">
          <div class="todolist_top">
            <span>代办事务列表</span
            ><el-button class="btnAdd" type="text" @click="open"
              >添加</el-button
            >
          </div>
          <div class="todolist_tab">
            <el-table
              :data="tableData"
              style="width: 100%"
              @select="select"
              :show-header="hiddenTableHeader"
            >
              <el-table-column type="selection" width="55"> </el-table-column>
              <el-table-column
                prop="msg"
                align="left"
                ref="ms"
              ></el-table-column>
              <el-table-column width="100">
                <el-button type="text" size="small" @click="changemsg">
                  修改 </el-button
                ><el-button type="text" size="small" @click="deletemsg">
                  删除
                </el-button>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import happlyaxios from "../../myaxios/happlyaxios";
export default {
  name: "systemHome",

  data() {
    return {
      hiddenTableHeader: false,
      circleUrl:
        "http://babyimage.cdn.bcebos.com/common/f95dd357b99daa9ad5ff0eed5a008dc1000510000510.jpg",
      tableData: [
        {
          id: "1",
          flag: true,
          msg: "今天要写100个bug"
        },
        {
          id: "2",
          flag: true,
          msg: "今天要写100个bug"
        },
        {
          id: "3",
          flag: true,

          msg: "今天要写100个bug"
        },
        {
          id: "4",
          msg: "今天要写100个bug"
        },
        {
          id: "5",
          msg: "今天要写100个bug"
        },
        {
          id: "6",
          msg: "今天要写100个bug"
        }
      ]
    };
  },
  created() {
    this.getAxiosUser();
    this.getAxiosSystemNum();
    this.getNum();
    this.getLang();
  },
  mounted() {
    // console.log(this.lang);
  },
  computed: {
    ...mapState({
      userVisit: state => state.home.userVisit,
      systemNum: state => state.home.systemNum,
      num: state => state.home.num,
      lang: state => state.home.lang
    })
  },
  methods: {
    ...mapActions({
      getAxiosUser: "home/getUser",
      getAxiosSystemNum: "home/getSystemNum",
      getNum: "home/getNum",
      getLang: "home/getLang"
    }),
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    select(a, b) {
      console.log(a, b);
    },
    // 点击添加
    open() {
      this.$prompt("请输入邮箱", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "邮箱格式不正确"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    changemsg() {
      this.$prompt("请输入代办事项", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /[\u4e00-\u9fa5]/,
        inputErrorMessage: "输入必须为中文"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "您的代办事项是: " + value
          });
          console.log(this.tableData);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    deletemsg() {}
  }
};
</script>

<style lang="scss" scoped>
.systemHome {
  .system_row {
    height: 100%;
    .system_left {
      // background: skyblue;
      height: 100%;
      padding: 10px;
      .card_top {
        padding: 20px;
        margin-bottom: 20px;
        background-color: #f9f9f9;
        &:hover {
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
        }
        .top_box {
          display: flex;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 2px solid #ccc;
          margin-bottom: 26px;
          .top_boxri {
            padding-left: 50px;
            h2 {
              font-size: 30px;
              color: #222;
              font-weight: normal;
            }
            p {
              font-size: 16px;
              color: #999;
            }
          }
        }
        .bot_box {
          color: #999;
          .bot_box1 {
            margin-bottom: 14px;
          }
          span {
            margin-left: 70px;
          }
        }
      }
      .card_buttom {
        // padding: 20px;
        &:hover {
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
        }
        h2 {
          padding: 18px 20px 18px 0;
          color: #303133;
          font-size: 16px;
          border-bottom: 2px solid #ebeef5;
          box-sizing: border-box;
          font-weight: normal;
        }
        .lang {
          padding: 20px 0;
          line-height: 20px;
        }
      }
    }
    .system_right {
      // background: pink;
      height: 100%;
      padding: 10px;
      .mess_top {
        .mess_item {
          padding: 0 10px;
          div {
            background: #fff;
            display: flex;
            border-radius: 4px;
            &:hover {
              box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
            }

            i {
              display: block;
              box-sizing: border-box;
              font-size: 50px;
              width: 100px;
              height: 100px;
              text-align: center;
              line-height: 100px;
              color: #fff;
              border-radius: 4px 0 0 4px;
            }
            .icon1 {
              background: #2d8cf0;
            }
            .icon2 {
              background: #64d572;
            }
            .icon3 {
              background: #f25e43;
            }
            section {
              display: flex;
              flex: 1;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              h3 {
                color: #2d8cf0;
                font-size: 30px;
                font-weight: 400;
              }
              .sect3 {
                color: #f25e43;
              }
              span {
                font-size: 14px;
                color: #999;
              }
            }
          }
        }
      }
      .todolist {
        &:hover {
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
        }
        margin: 20px 10px;
        .todolist_top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
}
</style>
