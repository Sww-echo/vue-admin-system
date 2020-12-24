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
        <el-card class="box-card card_buttom"></el-card>
      </el-col>
      <el-col :span="16" class="system system_right"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "systemHome",
  data() {
    return {
      circleUrl:
        "http://babyimage.cdn.bcebos.com/common/f95dd357b99daa9ad5ff0eed5a008dc1000510000510.jpg"
    };
  }
};
</script>

<style lang="scss" scoped>
.systemHome {
  .system_row {
    height: 100%;
    .system_left {
      background: skyblue;
      height: 100%;
      padding: 10px;
      .card_top {
        padding: 20px;
        margin-bottom: 20px;
        &:hover {
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
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
            margin-bottom: 10px;
          }
          span {
            margin-left: 70px;
          }
        }
      }
      .card_buttom {
        padding: 20px;
      }
    }
    .system_right {
      background: pink;
      height: 100%;
    }
  }
}
</style>
