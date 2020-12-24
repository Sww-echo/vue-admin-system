<template>
  <div ref="histogram" id="sellChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "histogram",
  mounted() {
    //挂载完成
    //初始化echarts实例
    var myChart = echarts.init(this.$refs.histogram);
    // var mypieChart = echarts.init(document.getElementById("pieChart"));
    //指定图表的配置项和数据
    var option = {
      title: {
        text: "最近一周各品类销售图",
        left: "center"
      },
      legend: {
        data: ["家电", "百货", "食品"],
        left: "center",
        type: "plain",
        top: "8%"
      },
      toolbox: {
        //工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
        show: true,
        feature: {
          dataView: { title: "数据视图" },
          magicType: {
            type: ["line", "bar", "stack", "tiled"]
          },
          restore: { title: "还原" },
          saveAsImage: {}
        }
      },
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五"],
        type: "category",
        show: true
      },
      yAxis: { type: "value" },
      series: [
        {
          name: "家电",
          type: "bar",
          data: [234, 278, 270, 190, 230]
        },
        {
          name: "百货",
          type: "bar",
          data: [164, 178, 190, 135, 160]
        },
        {
          name: "食品",
          type: "bar",
          data: [144, 198, 150, 235, 120]
        }
      ]
    };
    myChart.setOption(option);
  }
};
</script>

<style></style>
