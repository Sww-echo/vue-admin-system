<template>
  <div class="schart page">
    <h1 class="el-icon-setting">schart图表</h1>
    <div class="show">
      <div class="explain">
        vue-schart：vue.js封装sChart.js的图表组件。 访问地址:<a
          href="https://github.com/lin-xin/vue-schart"
          >vue-schart</a
        >
      </div>
      <div class="map">
        <h2>图例</h2>
        <histogram></histogram>
        <h2>饼状图</h2>
        <pie-chart></pie-chart>
      </div>
    </div>
  </div>
</template>

<script>
import histogram from "./schart/histogram";
import pieChart from "./schart/pieChart";
export default {
  name: "schart",
  components: {
    [histogram.name]: histogram,
    [pieChart.name]: pieChart
  }
};
</script>

<style lang="scss">
.page {
  padding: 10px;
  box-sizing: border-box;
  h1 {
    font-size: 16px;
    line-height: 34px;
  }
  .show {
    width: 95%;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 25px;
  }
  .explain {
    width: 99%;
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    padding-left: 8px;
    a {
      margin-left: 10px;
      color: blue;
      opacity: 0.5;
    }
  }
  .map {
    padding: 20px;
    h2 {
      font-size: 24px;
      font-weight: 400;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    #sellChart {
      width: 600px;
      height: 400px;
    }
    #pieChart {
      width: 600px;
      height: 400px;
    }
  }
}
</style>
